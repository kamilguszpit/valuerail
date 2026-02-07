import React from 'react';
import { Box, Text, useInput } from 'ink';

interface LicenseProps {
    onBack: () => void;
    isFocused: boolean;
}

export default function License({ onBack, isFocused }: LicenseProps) {
    useInput((input, key) => {
        if (input === 'b' || key.escape || key.return) {
            onBack();
        }
    }, { isActive: isFocused });

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
                <Text bold color="#CD6052">License Information</Text>

                <Box marginTop={1} flexDirection="column">
                    <Text bold>Business Source License (BSL) 1.1</Text>
                    <Text dimColor>Licensor: Kamil Guszpit</Text>
                    <Text dimColor>Change Date: 4 years after release</Text>
                </Box>

                <Box marginTop={1} borderStyle="round" borderColor="gray" padding={1} flexDirection="column">
                    <Text>
                        You may use this software for <Text bold color="green">Non-Commercial</Text>, <Text bold color="green">Personal</Text>, or <Text bold color="green">Development</Text> purposes.
                    </Text>
                    <Text>
                        Production use requires a Commercial License.
                    </Text>
                    <Text dimColor>
                        Files automatically convert to Apache 2.0 (Open Source) after 4 years.
                    </Text>
                </Box>

                <Box marginTop={1}>
                    <Text dimColor>Press 'b', ESC, or Enter to go back</Text>
                </Box>
            </Box>
        </Box>
    );
}
