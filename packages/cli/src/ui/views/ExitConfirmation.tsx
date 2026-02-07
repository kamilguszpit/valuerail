import React from 'react';
import { Box, Text, useInput, useApp } from 'ink';

interface ExitConfirmationProps {
    onCancel: () => void;
}

export default function ExitConfirmation({ onCancel }: ExitConfirmationProps) {
    const { exit } = useApp();

    useInput((input, key) => {
        if (input === 'y') {
            exit();
            process.exit(0);
        }
        if (input === 'n' || key.escape) {
            onCancel();
        }
    });

    const borderColor = "#CD6052";

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
                <Text bold color={borderColor} underline>EXIT CONFIRMATION</Text>

                <Box height={1} />

                <Text>Are you sure you want to stop the CLI?</Text>

                <Box marginTop={1} gap={1} flexDirection="column">
                    <Text>
                        <Text bold color={borderColor}>[Y]</Text> Quit
                    </Text>
                    <Text>
                        <Text bold color="white">[N / ESC]</Text> Cancel
                    </Text>
                </Box>
            </Box>
        </Box>
    );
}
