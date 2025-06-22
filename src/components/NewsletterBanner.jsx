import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'

const NewsletterBanner = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #1976d2, rgba(149, 10, 138, 0.56))',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        padding: { xs: '30px 16px',}, // padding nhỏ hơn cho mobile
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        mt: { xs: 6, md: 10 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '85vh', 
      }}
    >
      <Container>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              mb: { xs: 3, md: 4 },
              border: '2px solid white',
              padding: { xs: '10px', md: '15px' },
              borderRadius: '5px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              fontSize: { xs: '1.5rem', md: '2.25rem' }, // responsive font size
            }}
          >
            AI Newsletter Quarter I of 2025
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: 'white',
              mb: { xs: 3, md: 4 },
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
          >
            Welcome to AI Quarterly Newsletter. Please contact:
            <a
              href="mailto:biz@.com.vn"
              style={{ color: 'white', textDecoration: 'underline' }}
            >
              biz@tma.com.vn
            </a>{' '}
            for detailed information.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' }, // column on mobile
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              mb: 4,
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'white',
                color: '#00A1F1',
                fontSize: { xs: '1rem', md: '1.2rem' },
                width: { xs: '100%', sm: 'auto' },
              }}
            >
              All Training & Development
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'white',
                color: '#00A1F1',
                fontSize: { xs: '1rem', md: '1.2rem' },
                width: { xs: '100%', sm: 'auto' },
              }}
            >
              New Solutions
            </Button>
          </Box>

          <Button
            variant="outlined"
            sx={{
              color: 'white',
              borderColor: 'white',
              fontSize: { xs: '1rem', md: '1.2rem' },
            }}
          >
            Explore More
          </Button>
        </Box>
      </Container>
    </Box>

  )
}

export default NewsletterBanner