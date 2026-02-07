import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';
import open from 'open';

interface AuthorProps {
    onViewChange: (view: any) => void;
    isFocused: boolean;
}

const AVATAR_ASCII = `   .---.
  /     \\
  | o o |
   \\ ◡ /
    '-'
   / | \\
  /  |  \\`;

const LINKS_DATA = [
    { label: '🔗 LinkedIn', detail: ' (kamil-guszpit)', value: 'https://www.linkedin.com/in/kamil-guszpit/' },
    { label: '🐙 GitHub', detail: ' (@kamilguszpit)', value: 'https://github.com/kamilguszpit' },
    { label: '🌍 Portfolio', detail: ' (kamilguszpit.pl)', value: 'https://kamilguszpit.pl/' },
    { label: '🔙 Back', detail: ' to Dashboard', value: 'back' }
];

export default function Author({ onViewChange, isFocused }: AuthorProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    useInput((input, key) => {
        if (input === 'b' || key.escape) {
            onViewChange('dashboard');
            return;
        }

        if (key.leftArrow) {
            setSelectedIndex(prev => (prev > 0 ? prev - 1 : LINKS_DATA.length - 1));
        }
        if (key.rightArrow) {
            setSelectedIndex(prev => (prev < LINKS_DATA.length - 1 ? prev + 1 : 0));
        }

        if (key.return) {
            const item = LINKS_DATA[selectedIndex];
            if (item.value === 'back') {
                onViewChange('dashboard');
            } else {
                open(item.value);
            }
        }
    }, { isActive: isFocused });

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
                <Box flexDirection="row" gap={2}>
                    <Box flexDirection="column" marginRight={2}>
                        <Text color="#CD6052">{AVATAR_ASCII}</Text>
                    </Box>

                    <Box flexDirection="column">
                        <Box flexDirection="column">
                            <Text color="#CD6052" bold>Kamil Guszpit</Text>
                            <Text>Full-Stack Developer & CTO</Text>
                            <Text dimColor>Wrocław, Poland</Text>
                        </Box>

                        <Box marginTop={1}>
                            <Text>
                                Building scalable web applications, system architecture, and cloud-based solutions.
                                Focused on deep technical refinement.
                            </Text>
                        </Box>

                        <Box marginTop={1} flexDirection="row" alignItems="center">
                            <Box flexDirection="row">
                                {LINKS_DATA.map((item, index) => {
                                    const isSelected = index === selectedIndex;
                                    const showSelection = isSelected && isFocused;

                                    return (
                                        <Box key={item.value} marginRight={2}>
                                            <Text
                                                color={showSelection ? '#CD6052' : 'gray'}
                                                underline={showSelection}
                                            >
                                                {item.label}
                                                {showSelection ? <Text dimColor>{item.detail}</Text> : ''}
                                            </Text>
                                        </Box>
                                    );
                                })}
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box marginTop={1}>
                    <Text dimColor>{isFocused ? "Press 'b' or ESC to return, Left/Right to navigate links" : "(Press TAB or focus content to navigate)"}</Text>
                </Box>
            </Box>
        </Box>
    );
}
