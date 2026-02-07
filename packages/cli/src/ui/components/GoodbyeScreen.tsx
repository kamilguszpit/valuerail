import React from 'react';
import { Box, Text } from 'ink';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';

interface GoodbyeScreenProps {
    version: string;
    cwd: string;
    isVrailProject: boolean;
}

export default function GoodbyeScreen({ version, cwd, isVrailProject }: GoodbyeScreenProps) {
    return (
        <Box flexDirection="column" padding={1}>
            <Gradient name="morning">
                <BigText text="VALUERAIL" font="simple" />
            </Gradient>

            <Box flexDirection="column" marginLeft={1} marginTop={1}>
                <Box flexDirection="row" gap={2}>
                    <Text color="gray">Version: <Text color="#CD6052">{version}</Text></Text>
                    <Text color="gray">
                        Project Status: {isVrailProject ? <Text color="green">✔ Vrail Project Detected</Text> : <Text color="red">✘ Not a Vrail Project</Text>}
                    </Text>
                </Box>
                <Text color="gray" dimColor>{cwd}</Text>
            </Box>

            <Box marginTop={2} marginLeft={1}>
                <Text color="#CD6052" bold>
                    👋 Thanks for using ValueRail! See you soon.
                </Text>
            </Box>
        </Box>
    );
}
