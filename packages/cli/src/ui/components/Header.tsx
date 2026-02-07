import React, { useState } from 'react';
import { Box, Text, useInput, useApp } from 'ink';

type View = 'dashboard' | 'npm' | 'repo' | 'author' | 'license';

interface HeaderProps {
    currentView: View;
    isFocused: boolean;
    onViewChange: (view: View) => void;
}

const TABS: { id: View; label: string; url?: string }[] = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'npm', label: 'NPM', url: 'https://www.npmjs.com/package/@valuerail/cli' },
    { id: 'repo', label: 'Repo', url: 'https://github.com/kamilguszpit/valuerail' },
    { id: 'license', label: 'License' },
    { id: 'author', label: 'Author' },
];

export default function Header({ currentView, onViewChange, isFocused }: HeaderProps) {
    const [focusedTab, setFocusedTab] = React.useState(0);
    const { exit } = useApp();

    useInput((input, key) => {
        if (!isFocused) return;

        if (key.leftArrow) {
            setFocusedTab((prev) => (prev > 0 ? prev - 1 : TABS.length - 1));
        }
        if (key.rightArrow) {
            setFocusedTab((prev) => (prev < TABS.length - 1 ? prev + 1 : 0));
        }
        if (key.return) {
            onViewChange(TABS[focusedTab].id);
        }
    }, { isActive: isFocused });

    return (
        <Box flexDirection="row" justifyContent="flex-start">
            {TABS.map((tab, index) => {
                const isTabFocused = index === focusedTab && isFocused;
                const isActive = tab.id === currentView;

                let color = 'gray';
                if (isActive) color = '#CD6052';
                if (isTabFocused) color = 'white';
                if (!isFocused && isActive) color = '#CD6052';
                if (!isFocused && !isActive) color = '#333';

                return (
                    <Box key={tab.id} paddingRight={2}>
                        <Text
                            color={color}
                            bold={isActive || isTabFocused}
                            underline={isTabFocused || isActive}
                            dimColor={!isFocused}
                        >
                            {tab.label}
                        </Text>
                    </Box>
                );
            })}
        </Box>
    );
}
