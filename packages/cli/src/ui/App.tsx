import React, { useState, useEffect } from 'react';
import { Box, useInput, useApp } from 'ink';
import Header from './components/Header.js';
import Banner from './components/Banner.js';
import Author from './views/Author.js';
import ExternalLink from './views/ExternalLink.js';
import Dashboard from './views/Dashboard.js';
import ExitConfirmation from './views/ExitConfirmation.js';
import License from './views/License.js';

export type View = 'dashboard' | 'npm' | 'repo' | 'author' | 'license' | 'exit-confirm';

export default function App() {
    const [currentView, setCurrentView] = useState<View>('dashboard');
    const [focusArea, setFocusArea] = useState<'header' | 'content'>('content');

    useEffect(() => {
        console.clear();
    }, []);

    const goToHeader = () => setFocusArea('header');
    const goToDashboard = () => {
        setCurrentView('dashboard');
        setFocusArea('header');
    };

    useInput((input, key) => {
        if (currentView === 'exit-confirm') return;

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
            <Banner />

            <Header
                currentView={currentView === 'exit-confirm' ? 'dashboard' : currentView}
                onViewChange={(view) => {
                    setCurrentView(view);
                    setFocusArea('content');
                }}
                isFocused={focusArea === 'header'}
            />

            <Box marginTop={1} flexDirection="column">
                {currentView === 'dashboard' && (
                    <Dashboard
                        isFocused={focusArea === 'content'}
                        onAction={(action) => {
                            if (action === 'exit') {
                                setCurrentView('exit-confirm');
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
                        url="https://www.npmjs.com/package/valuerail"
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
                    />
                )}
            </Box>
        </Box>
    );
}
