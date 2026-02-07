import React, { useState, useEffect } from 'react';
import { Box, Text } from 'ink';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';
import fs from 'fs';
import path from 'path';

const hasVrailConfig = () => {
    try {
        return fs.existsSync(path.join(process.cwd(), 'vrail.config.ts'));
    } catch {
        return false;
    }
};

const getCliVersion = () => {
    try {
        const pkgPath = path.resolve(__dirname, '../../package.json');
        if (fs.existsSync(pkgPath)) {
            const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
            return pkg.version;
        }
        return 'v0.0.1';
    } catch (e) {
        return 'v0.0.1';
    }
};

export default function Banner() {
    const isVrailProject = hasVrailConfig();
    const [version, setVersion] = useState('...');

    useEffect(() => {
        setVersion(getCliVersion());
    }, []);

    return (
        <Box flexDirection="column" marginBottom={1}>
            <Gradient name="morning">
                <BigText text="VALUERAIL" font="simple" />
            </Gradient>

            <Box flexDirection="column" marginLeft={1}>
                <Box flexDirection="row" gap={2}>
                    <Text color="gray">Version: <Text color="#CD6052">{version}</Text></Text>
                    <Text color="gray">
                        Project Status: {isVrailProject ? <Text color="green">✔ Vrail Project Detected</Text> : <Text color="red">✘ Not a Vrail Project</Text>}
                    </Text>
                </Box>
                <Text color="gray" dimColor>{process.cwd()}</Text>
            </Box>
        </Box>
    );
}
