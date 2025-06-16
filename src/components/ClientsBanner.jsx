import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const MapBanner = () => {
    return (
        <Box 
       
            sx={{ 
                bgcolor: '#1976d2', 
                padding: '50px 0', 
                textAlign: 'center', 
                width:"100%",
                height:"100%",
                mt:10
            }}
        >
            <Container>
                <Typography 
                    variant="h4" 
                    sx={{ 
                        color: 'white', 
                        fontWeight: 'bold', 
                        mb: 4 
                    }}
                >
                    Clients from 30 Countries
                </Typography>
                <Typography 
                    variant="body1" 
                    sx={{ 
                        color: 'white', 
                        mb: 4 
                    }}
                >
                    As a Vietnam IT outsourcing company, TMA provides quality technology solutions worldwide, gaining trust from clients worldwide.
                </Typography>
                <img 
                    src="https://tmastorage.azureedge.net/uploadfiles/Banner/banner_20240801083917.148.webp" 
                    alt="World Map" 
                    style={{ 
                        width: '100%', 
                        maxHeight: '400px', 
                        objectFit: 'cover', 
                        borderRadius: '8px' 
                    }} 
                />
                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        justifyContent: 'center', 
                        marginTop: '20px' 
                    }}
                >
                    {[
                        'Sweden', 'Finland', 'Poland', 'U.K.', 'Denmark', 
                        'Luxembourg', 'Germany', 'Austria', 'France', 
                        'Switzerland', 'Belgium', 'Malta', 'Israel', 
                        'India', 'Hong Kong', 'Taiwan', 'Thailand', 
                        'Vietnam', 'Singapore', 'Indonesia', 'Australia', 
                        'New Zealand',
                    ].map((country, index) => (
                        <Typography 
                            key={index} 
                            variant="body2" 
                            sx={{ 
                                color: 'white', 
                                margin: '5px 15px' 
                            }}
                        >
                            {country}
                        </Typography>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default MapBanner;