import React, { useState } from 'react';
import { Box, useInput, useApp } from 'ink';
import fs from 'fs';
import path from 'path';
import Header from './components/Header.js';
import Banner from './components/Banner.js';
import Author from './views/Author.js';
import ExternalLink from './views/ExternalLink.js';
import Dashboard from './views/Dashboard.js';
import ExitConfirmation from './views/ExitConfirmation.js';
import License from './views/License.js';
import GoodbyeView from './views/GoodbyeView.js';
import InitProject from './views/InitProject.js';

export type View = 'dashboard' | 'npm' | 'repo' | 'author' | 'license' | 'exit-confirm' | 'goodbye' | 'init';

const hasVrailConfig = () => {
    try {
        return fs.existsSync(path.join(process.cwd(), 'vrail.config.ts'));
    } catch {
        return false;
    }
};

export default function App() {
    const { exit } = useApp();
    const [currentView, setCurrentView] = useState<View>('dashboard');
    const [focusArea, setFocusArea] = useState<'header' | 'content'>('content');

    const goToHeader = () => setFocusArea('header');
    const goToDashboard = () => {
        setCurrentView('dashboard');
        setFocusArea('header');
    };

    const handleExit = () => {
        setCurrentView('goodbye');
    };

    useInput((input, key) => {
        if (currentView === 'goodbye') return;
        if (currentView === 'exit-confirm') return;
        if (currentView === 'init') return;

        if (key.escape) {
            if (focusArea === 'content') {
                setFocusArea('header');
            } else if (focusArea === 'header') {
                setCurrentView('exit-confirm');
                setFocusArea('content');
            }
        }

        if (key.tab) {
            setFocusArea(prev => prev === 'header' ? 'content' : 'header');
        }
    });

    return (
        <Box flexDirection="column" height="100%" padding={1}>
            <Banner hideStatus={currentView === 'goodbye'} />

            {currentView !== 'goodbye' && (
                <Header
                    currentView={currentView === 'exit-confirm' ? 'dashboard' : currentView}
                    onViewChange={(view) => {
                        setCurrentView(view);
                        setFocusArea('content');
                    }}
                    isFocused={focusArea === 'header'}
                />
            )}

            <Box marginTop={1} flexDirection="column">
                {currentView === 'dashboard' && (
                    <Dashboard
                        isFocused={focusArea === 'content'}
                        onAction={(action) => {
                            if (action === 'exit') {
                                setCurrentView('exit-confirm');
                            } else if (action === 'init') {
                                setCurrentView('init');
                                setFocusArea('content');
                            }
                        }}
                    />
                )}

                {currentView === 'author' && (
                    <Author
                        onViewChange={goToHeader}
                        isFocused={focusArea === 'content'}
                    />
                )}

                {currentView === 'npm' && (
                    <ExternalLink
                        label="NPM Registry"
                        url="https://www.npmjs.com/package/@valuerail/cli"
                        onBack={goToHeader}
                    />
                )}

                {currentView === 'repo' && (
                    <ExternalLink
                        label="GitHub Repository"
                        url="https://github.com/kamilguszpit/valuerail"
                        onBack={goToHeader}
                    />
                )}

                {currentView === 'license' && (
                    <License
                        onBack={goToHeader}
                        isFocused={focusArea === 'content'}
                    />
                )}

                {currentView === 'exit-confirm' && (
                    <ExitConfirmation
                        onCancel={goToDashboard}
                        onExit={handleExit}
                    />
                )}

                {currentView === 'init' && (
                    <InitProject
                        onComplete={(success) => {
                            goToDashboard();
                        }}
                        onBack={goToDashboard}
                    />
                )}

                {currentView === 'goodbye' && (
                    <GoodbyeView
                        version={process.env.CLI_VERSION || 'v0.0.1'}
                        cwd={process.cwd()}
                        isVrailProject={hasVrailConfig()}
                    />
                )}
            </Box>
        </Box>
    );
}
