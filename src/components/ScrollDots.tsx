import React, { useEffect, useState } from 'react';
import { Box, IconButton, Tooltip, useTheme } from '@mui/material';

interface ScrollDotsProps {
    sections: { id: string; label: string }[];
}

const ScrollDots: React.FC<ScrollDotsProps> = ({ sections }) => {
    const [activeSection, setActiveSection] = useState('');
    const theme = useTheme();

    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            let current = '';
            sections.forEach(({ id }) => {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    const middleOfScreen = window.innerHeight / 2;
                    const threshold = 150;

                    if (
                        rect.top <= middleOfScreen + threshold &&
                        rect.bottom >= middleOfScreen - threshold
                    ) {
                        current = id;
                    }
                }
            });
            if (current && current !== activeSection) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections, activeSection]);

    return (
        <Box
            sx={{
                position: 'fixed',
                right: { xs: 10, md: 20 },
                top: { xs: "60%",sm:"45%", md: '50%' } ,
                bottom: { xs: 20, md: 'auto' },
                transform: { xs: 'none', md: 'translateY(-50%)' },
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                zIndex: 1300,
                alignItems: 'center',
            }}
        >
            {sections.map((section) => (
                <Tooltip key={section.id} title={section.label} placement="left">
                    <IconButton
                        size="small"
                        onClick={() => handleClick(section.id)}
                        sx={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            backgroundColor: activeSection === section.id ? "green" : '#ccc',
                            transform: activeSection === section.id ? 'scale(1.3)' : 'scale(1)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: theme.palette.primary.dark,
                            },
                        }}
                    />
                </Tooltip>
            ))}
        </Box>
    );
};

export default ScrollDots;
