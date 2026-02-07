#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import fs from 'fs';
import path from 'path';
import App from './ui/App.js';
import GoodbyeScreen from './ui/components/GoodbyeScreen.js';

const hasVrailConfig = () => {
    try {
        return fs.existsSync(path.join(process.cwd(), 'vrail.config.ts'));
    } catch {
        return false;
    }
};

const showGoodbye = () => {
    const version = process.env.CLI_VERSION || 'v0.0.1';
    const cwd = process.cwd();
    const isVrailProject = hasVrailConfig();

    render(<GoodbyeScreen version={version} cwd={cwd} isVrailProject={isVrailProject} />);

    setTimeout(() => {
        process.exit(0);
    }, 1500);
};

process.on('SIGINT', () => {
    showGoodbye();
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});

const { waitUntilExit } = render(<App />);
await waitUntilExit();
showGoodbye();
