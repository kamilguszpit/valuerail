import React, { useState } from 'react';
import { Box, Text } from 'ink';
import TextInput from 'ink-text-input';
import SelectInput from 'ink-select-input';
import Spinner from 'ink-spinner';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

interface InitProjectProps {
    onComplete: (success: boolean, projectPath?: string) => void;
    onBack: () => void;
}

type InitStep = 'name' | 'creating' | 'selection' | 'executing' | 'done' | 'error';

export default function InitProject({ onComplete, onBack }: InitProjectProps) {
    const [step, setStep] = useState<InitStep>('name');
    const [projectName, setProjectName] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [targetDir, setTargetDir] = useState<string | null>(null);
    const [actualProjectName, setActualProjectName] = useState('');
    const [commandOutput, setCommandOutput] = useState<string[]>([]);

    const handleSubmit = async () => {
        let name = projectName.trim();
        if (!name) name = 'my-app';

        try {
            const result = resolveTargetPath(name);
            setActualProjectName(result.resolvedProjectName);
            setTargetDir(result.targetPath);

            if (name !== '.' && fs.existsSync(result.targetPath)) {
                setError(`Directory "${result.resolvedProjectName}" already exists`);
                return;
            }

            setStep('creating');

            const __filename = fileURLToPath(import.meta.url);
            const __dirname = path.dirname(__filename);
            const templatePath = path.join(__dirname, '..', 'templates', 'nextjs');

            await copyTemplate(templatePath, result.targetPath, result.resolvedProjectName);
            createVrailJson(result.targetPath);

            setStep('selection');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
            setStep('error');
        }
    };

    const handleSelection = async (item: { value: string }) => {
        if (item.value === 'manual') {
            setStep('done');
        } else {
            setStep('executing');
            try {
                await runCommand('bun', ['install'], targetDir!);
                setStep('done');
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Command failed');
                setStep('error');
            }
        }
    };

    const runCommand = (command: string, args: string[], cwd: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            const child = spawn(command, args, { cwd, shell: true });

            child.stdout.on('data', (data) => {
                const line = data.toString().trim();
                if (line) {
                    setCommandOutput(prev => [...prev.slice(-5), line]);
                }
            });

            child.stderr.on('data', (data) => {
                const line = data.toString().trim();
                if (line) {
                    setCommandOutput(prev => [...prev.slice(-5), `[stderr] ${line}`]);
                }
            });

            child.on('close', (code) => {
                if (code === 0) resolve();
                else reject(new Error(`${command} exited with code ${code}`));
            });
        });
    };

    if (step === 'name') {
        return (
            <Box flexDirection="column" padding={1}>
                <Text bold color="#CD6052">🚀 Initialize New Project</Text>
                <Box height={1} />

                {error && (
                    <>
                        <Text color="red">⚠ {error}</Text>
                        <Box height={1} />
                    </>
                )}

                <Box>
                    <Text>Project name (default: </Text>
                    <Text color="#CD6052">my-app</Text>
                    <Text>): </Text>
                </Box>
                <Box>
                    <Text color="#CD6052">&gt; </Text>
                    <TextInput
                        value={projectName}
                        onChange={setProjectName}
                        onSubmit={handleSubmit}
                        placeholder="my-app"
                    />
                </Box>
                <Box height={1} />
                <Text dimColor>Tip: Use "." to create in current directory</Text>
                <Text dimColor>Press Enter to create, ESC to cancel</Text>
            </Box>
        );
    }

    if (step === 'creating') {
        return (
            <Box flexDirection="column" padding={1}>
                <Text bold color="#CD6052">🚀 Initialize New Project</Text>
                <Box height={1} />
                <Text>
                    <Text color="#CD6052"><Spinner type="dots" /></Text>
                    {' '}Creating project structure...
                </Text>
            </Box>
        );
    }

    if (step === 'selection') {
        return (
            <Box flexDirection="column" padding={1}>
                <Text bold color="#CD6052">🚀 Project Created!</Text>
                <Box height={1} />
                <Text>What would you like to do next?</Text>
                <Box height={1} />
                <SelectInput
                    items={[
                        { label: '🚀 Run setup (bun install)', value: 'auto' },
                        { label: '🛠️  I\'ll do it myself', value: 'manual' },
                    ]}
                    onSelect={handleSelection}
                    indicatorComponent={({ isSelected }) => (
                        <Text color="#CD6052">{isSelected ? '> ' : '  '}</Text>
                    )}
                    itemComponent={({ isSelected, label }) => (
                        <Text color={isSelected ? '#CD6052' : 'white'}>{label}</Text>
                    )}
                />
            </Box>
        );
    }

    if (step === 'executing') {
        return (
            <Box flexDirection="column" padding={1}>
                <Text bold color="#CD6052">⚙️ Running Setup Commands</Text>
                <Box height={1} />
                <Text>
                    <Text color="#CD6052"><Spinner type="dots" /></Text>
                    {' '}Executing bun install...
                </Text>
                <Box height={1} />
                <Box flexDirection="column" borderStyle="round" borderColor="gray" paddingX={1}>
                    {commandOutput.map((line, idx) => (
                        <Text key={idx} dimColor wrap="truncate-end">{line}</Text>
                    ))}
                </Box>
            </Box>
        );
    }

    if (step === 'done') {
        return (
            <Box flexDirection="column" padding={1}>
                <Text bold color="#CD6052">🚀 Project Ready!</Text>
                <Box height={1} />
                <Text color="green">✔ Project created successfully in {targetDir}</Text>
                <Box height={1} />
                <Text>Next steps:</Text>
                <Text dimColor>  cd {actualProjectName}</Text>
                <Text dimColor>  bun install</Text>
                <Text dimColor>  bun dev</Text>
                <Box height={1} />
                <Text dimColor>Press Enter to return to Dashboard</Text>
                <TextInput value="" onChange={() => { }} onSubmit={() => onComplete(true, targetDir!)} />
            </Box>
        );
    }

    if (step === 'error') {
        return (
            <Box flexDirection="column" padding={1}>
                <Text bold color="#CD6052">🚀 Project Error</Text>
                <Box height={1} />
                <Text color="red">✘ Error: {error}</Text>
                <Box height={1} />
                <Text dimColor>Press ESC to go back</Text>
            </Box>
        );
    }

    return null;
}


export function resolveTargetPath(name: string) {
    let targetPath: string;
    let resolvedProjectName: string;

    if (name === '.') {
        targetPath = process.cwd();
        resolvedProjectName = path.basename(targetPath);
    } else {
        const sanitizedName = name.toLowerCase().replace(/[^a-z0-9-_]/g, '-');
        targetPath = path.join(process.cwd(), sanitizedName);
        resolvedProjectName = sanitizedName;
    }

    return { targetPath, resolvedProjectName };
}

export function createVrailJson(targetPath: string) {
    const configPath = path.join(targetPath, 'vrail.json');
    if (!fs.existsSync(configPath)) {
        fs.writeFileSync(configPath, JSON.stringify({
            version: '1.0.0',
            modules: []
        }, null, 4));
    }
}

export async function copyTemplate(src: string, dest: string, projectName: string): Promise<void> {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === 'bun.lock') {
            continue;
        }

        if (entry.isDirectory()) {
            await copyTemplate(srcPath, destPath, projectName);
        } else {
            let content = fs.readFileSync(srcPath, 'utf-8');
            content = content.replace(/\{\{PROJECT_NAME\}\}/g, projectName);
            fs.writeFileSync(destPath, content);
        }
    }
}
