import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import MemoryIcon from '@mui/icons-material/Memory';

const techIcons = [
  { icon: <CodeIcon sx={{ fontSize: 40, color: '#61DBFB' }} />, label: "React" },
  { icon: <DeveloperModeIcon sx={{ fontSize: 40, color: '#3C873A' }} />, label: "Node.js" },
  { icon: <StorageIcon sx={{ fontSize: 40, color: '#0db7ed' }} />, label: "Docker" },
  { icon: <MemoryIcon sx={{ fontSize: 40, color: '#FF6F00' }} />, label: "AI/ML" },
];

const InfoBanner = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                bgcolor: '#1976d2',
                padding: '50px 0',
                textAlign: 'center',
                width: "100%",
                height: "100%",
                mt: 10,
                color: '#fff',
                overflow: 'hidden',
                backgroundImage: `
                  radial-gradient(circle at center, rgba(193, 13, 13, 0.75) 1px, transparent 1px),
                  radial-gradient(circle at center, rgba(36, 131, 44, 0.76) 1px, transparent 1px)
                `,
                backgroundPosition: '0 0, 25px 25px',
                backgroundSize: '50px 50px',
            }}
        >
            <Container sx={{ position: 'relative', zIndex: 2 }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                        mb: 3,
                        color: '#fff'
                    }}
                >
                    TMA Solutions - Reliable Software Partner
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        mb: 4,
                        color: '#e0e0e0'
                    }}
                >
                    Established in 1997, TMA is one of the leading software outsourcing companies in Vietnam, well known for our exceptional technology solutions. With 28 years of experience, we take pride in delivering high-quality software development services worldwide.
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 4,
                        mb: 4
                    }}
                >
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                            28
                        </Typography>
                        <Typography variant="body2">Years</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                            30
                        </Typography>
                        <Typography variant="body2">Countries</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                            4,000
                        </Typography>
                        <Typography variant="body2">Engineers</Typography>
                    </Box>
                </Box>
            </Container>

            {/* Lớp bóng mờ mạng lưới */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px),
                                      radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                    backgroundPosition: '0 0, 25px 25px',
                    backgroundSize: '50px 50px',
                    zIndex: 1,
                }}
            />
        </Box>
    );
};

export default InfoBanner;