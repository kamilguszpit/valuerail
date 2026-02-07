#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import App from './ui/App.js';

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
