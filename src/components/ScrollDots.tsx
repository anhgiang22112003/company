import React, { useEffect, useState } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
interface ScrollDotsProps {
    sections: { id: string; label: string }[];
}
const ScrollDots: React.FC<ScrollDotsProps> = ({ sections }) => {
    const [activeSection, setActiveSection] = useState('');
    console.log(activeSection);
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
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box
            sx={{
                position: 'fixed',
                top: '50%',
                right: '20px',
                transform: 'translateY(-50%)',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Căn giữa các nút
                gap: 2,
            }}
        >
            {sections.map((section) => (
                <Tooltip key={section.id} title={section.label} placement="left">
                    <IconButton
                        size="small"
                        onClick={() => handleClick(section.id)}
                        sx={{
                            width: activeSection === section.id ? 16 : 12,
                            height: activeSection === section.id ? 16 : 12,
                            borderRadius: '50%',
                            backgroundColor: activeSection === section.id ? 'blue' : '#ccc',
                            transition: 'background-color 0.3s, width 0.3s, height 0.3s',
                            display: 'flex', // Đảm bảo nút căn giữa
                            justifyContent: 'center',
                            alignItems: 'center',
                            '&:hover': {
                                backgroundColor: '#007ACC',
                            },
                        }}
                    />
                </Tooltip>
            ))}
        </Box>
    );
};

export default ScrollDots;