import React from 'react'
import { Box, Button, Container, Link, Typography } from '@mui/material'

const ClientsBanner = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #1976d2, rgba(149, 10, 138, 0.56))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: { xs: 8, md: 1 },
        width: '100%',
        px: 2,
        mt: 10,
        minHeight: '55vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            mx: 'auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Tiêu đề */}
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: {
                xs: '1.8rem',
                sm: '2rem',
                md: '2rem',
              },
              mb: 2,
            }}
          >
            Expert-Built. Market-Ready. Accelerating Impact.
          </Typography>

          {/* Nội dung mô tả */}
          <Typography
            variant="body1"
            sx={{
              color: 'white',
              fontSize: {
                xs: '0.95rem',
                sm: '1rem',
                md: '1.15rem',
              },
              maxWidth: 800,
              mb: 4,
              lineHeight: 1.7,
            }}
          >
            We don&apos;t just build software—we launch game-changers. Our teams have built and scaled
            software solutions countless times, turning bold ideas into market-leading products with AI,
            automation, and cutting-edge technology. We helps you launch faster, drive more revenue,
            and deliver exceptional customer experiences.
          </Typography>

          {/* Nút gọi hành động */}
          <Link href="/contact">
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'white',
                color: '#012147',
                fontWeight: 'bold',
                px: 4,
                py: 1.3,
                fontSize: '1rem',
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              Get In Touch →
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>



  )
}

export default ClientsBanner