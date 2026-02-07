import React, { useEffect } from 'react';
import { Box, Text, useApp } from 'ink';

interface GoodbyeViewProps {
    version: string;
    cwd: string;
    isVrailProject: boolean;
}

export default function GoodbyeView({ version, cwd, isVrailProject }: GoodbyeViewProps) {
    const { exit } = useApp();

    useEffect(() => {
        const timer = setTimeout(() => {
            exit();
        }, 2000);

        return () => clearTimeout(timer);
    }, [exit]);

    return (
        <Box flexDirection="column" padding={1}>
            <Box marginTop={0} marginLeft={1}>
                <Text color="#CD6052" bold>
                    👋 Thanks for using ValueRail! See you soon.
                </Text>
            </Box>
        </Box>
    );
}
