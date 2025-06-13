import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

const NewsletterBanner = () => {
    return (
        <Box 
            sx={{ 
                bgcolor: '#1976d2', 
                padding: '50px 0', 
                position: 'relative',
                overflow: 'hidden',
                width: "100%",
                height: "100%",
                mt: 24,
                display: 'flex', // Sử dụng Flexbox
                alignItems: 'center', // Căn giữa theo chiều dọc
                justifyContent: 'center', // Căn giữa theo chiều ngang
            }}
        >
            <Container>
                <Box sx={{ textAlign: 'center' }}> {/* Căn giữa nội dung */}
                    <Typography 
                        variant="h3" // Đổi từ h4 thành h3
                        sx={{ 
                            color: 'white', 
                            fontWeight: 'bold', 
                            textTransform: 'uppercase',
                            mb: 4,
                            border: '2px solid white',
                            padding: '15px', // Tăng padding
                            borderRadius: '5px',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        }}
                    >
                         AI Newsletter Quarter I of 2025
                    </Typography>
                    <Typography 
                        variant="h6" // Đổi từ body1 thành h6
                        sx={{ 
                            color: 'white', 
                            mb: 4 
                        }}
                    >
                        Welcome to AI Quarterly Newsletter. Please contact: 
                        <a href="mailto:biz@tma.com.vn" style={{ color: 'white', textDecoration: 'underline' }}>
                            biz@.com.vn
                        </a> for detailed information.
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                        <Button 
                            variant="contained" 
                            sx={{ 
                                margin: '0 10px', 
                                backgroundColor: 'white', 
                                color: '#00A1F1', 
                                fontSize: '1.2rem' // Tăng kích thước chữ
                            }}
                        >
                            All Training & Development
                        </Button>
                        <Button 
                            variant="contained" 
                            sx={{ 
                                margin: '0 10px', 
                                backgroundColor: 'white', 
                                color: '#00A1F1', 
                                fontSize: '1.2rem' // Tăng kích thước chữ
                            }}
                        >
                            New Solutions
                        </Button>
                    </Box>
                    <Typography 
                        variant="body1" // Đổi từ body2 thành body1
                        sx={{ 
                            color: 'white', 
                            textAlign: 'center' 
                        }}
                    >
                        <Button 
                            variant="outlined" 
                            sx={{ 
                                color: 'white', 
                                borderColor: 'white',
                                fontSize: '1.2rem' // Tăng kích thước chữ
                            }}
                        >
                            Explore More
                        </Button>
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default NewsletterBanner;