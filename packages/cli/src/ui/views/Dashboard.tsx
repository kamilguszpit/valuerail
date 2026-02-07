import React from 'react';
import { Box, Text } from 'ink';
import SelectInput from 'ink-select-input';

interface DashboardProps {
    isFocused: boolean;
    onAction: (action: string) => void;
}

const MENU_ITEMS = [
    { label: '🚀 Initialize New Project', value: 'init' },
    { label: '🧩 Add Module', value: 'add-module' },
    { label: '🏷️  Generate Resource', value: 'generate' },
    { label: '🩺 System Doctor', value: 'doctor' },
    { label: '🔐 Manage Secrets', value: 'secrets' },
    { label: '🚪 Exit', value: 'exit' },
];

export default function Dashboard({ isFocused, onAction }: DashboardProps) {
    const borderColor = isFocused ? "#CD6052" : "gray";

    return (
        <Box
            flexDirection="column"
            paddingLeft={1}
            borderStyle="single"
            borderLeft={true}
            borderRight={false}
            borderTop={false}
            borderBottom={false}
            borderColor={borderColor}
        >
            <Box flexDirection="column">
                <Text bold underline color={borderColor}>
                    Dashboard Actions{isFocused ? <Text dimColor> (Press ESC to Focus Header)</Text> : ''}
                </Text>

                <Box height={1} />

                <SelectInput
                    items={MENU_ITEMS}
                    isFocused={isFocused}
                    onSelect={(item) => onAction(item.value)}
                    indicatorComponent={({ isSelected }) => (
                        <Text color="#CD6052">{isSelected ? '> ' : '  '}</Text>
                    )}
                    itemComponent={({ isSelected, label }) => (
                        <Text color={isSelected ? '#CD6052' : (isFocused ? 'white' : 'gray')}>{label}</Text>
                    )}
                />
            </Box>
        </Box>
    );
}
