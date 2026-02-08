#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import App from './ui/App.js';
import { copyTemplate, resolveTargetPath, createVrailJson } from './ui/views/InitProject.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});

const args = process.argv.slice(2);
const command = args[0];

const showHelp = () => {
    console.log(`
  Usage: vrail [command] [options]

  Commands:
    init [path]    Initialize a new ValueRail project in the specified path
    help           Show this help message
    -v, --version  Show version

  If no command is provided, the interactive dashboard will start.
    `);
};

const showVersion = () => {
    // @ts-ignore
    console.log(process.env.CLI_VERSION || 'v0.0.1');
};

if (command === 'help' || command === '--help' || command === '-h') {
    showHelp();
    process.exit(0);
}

if (command === '-v' || command === '--version') {
    showVersion();
    process.exit(0);
}

if (command === 'init') {
    const target = args[1] || 'my-app';
    const { targetPath, resolvedProjectName } = resolveTargetPath(target);

    if (target !== '.' && fs.existsSync(targetPath)) {
        console.error(`✘ Error: Directory "${resolvedProjectName}" already exists`);
        process.exit(1);
    }

    console.log(`🚀 Initializing ValueRail project in ${targetPath}...`);

    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const templatePath = path.join(__dirname, '..', 'templates', 'nextjs');

        await copyTemplate(templatePath, targetPath, resolvedProjectName);
        createVrailJson(targetPath);

        console.log(`✔ Project initialized successfully!`);
        console.log(`\nNext steps:`);
        if (target !== '.') console.log(`  cd ${resolvedProjectName}`);
        console.log(`  bun install`);
        console.log(`  bun dev`);
        process.exit(0);
    } catch (err) {
        console.error(`✘ Error during initialization:`, err instanceof Error ? err.message : err);
        process.exit(1);
    }
}

const { waitUntilExit } = render(<App />);
await waitUntilExit();
