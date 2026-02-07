import React from 'react';
import { Box, Text, useInput } from 'ink';
import open from 'open';

interface ExternalLinkProps {
    url: string;
    label: string;
    onBack: () => void;
}

export default function ExternalLink({ url, label, onBack }: ExternalLinkProps) {
    useInput((input, key) => {
        if (input === 'b' || key.escape || key.return) {
            onBack();
        }
        if (input === 'o') {
            open(url);
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
            <Box flexDirection="column" gap={1}>
                <Text bold color="#CD6052">External Link </Text>

                <Box marginTop={1}>
                    <Text color="white" bold>{label}</Text>
                    <Text dimColor>: {url}</Text>
                </Box>

                <Box marginTop={1} gap={2} flexDirection="column">
                    <Text>
                        Press <Text bold color="#CD6052">O</Text> to open in browser
                    </Text>
                    <Text dimColor>Press 'b', ESC, or Enter to go back</Text>
                </Box>
            </Box>
        </Box>
    );
}
