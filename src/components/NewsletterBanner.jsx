import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'

const NewsletterBanner = ({onScrollToContacts}) => {
  return (
<Box
  sx={{
        background: 'linear-gradient(to bottom, #1976d2, rgba(149, 10, 138, 0.56))',
    py: { xs: 10, md:1 },
    px: 2,
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    mt: 10 ,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '55vh',
  }}
>
  <Container>
    <Box sx={{ textAlign: 'center' }}>
      <Typography
        variant="h4"
        sx={{
          color: 'white',
          fontWeight: 'bold',
          mb: 3,
           fontSize: {
            xs: '1.8rem',
            sm: '2rem',
            md: '2rem',
          }, // lớn hơn cho desktop
        }}
      >
        Where World-Class Software Meets Business Impact.
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          color: 'white',
          mb: 4,
          fontSize: { xs: '1rem', md: '1.25rem' },
        }}
      >
        Let&apos;s build something extraordinary.
      </Typography>

      <Button
        variant="contained"
        onClick={onScrollToContacts}
        sx={{
          backgroundColor: 'white',
          color: '#012147',
          fontWeight: 'bold',
          
          fontSize: { xs: '1rem', md: '1.1rem' },
          px: 4,
          py: 1.5,
          '&:hover': {
            backgroundColor: '#f0f0f0',
          },
        }}
      >
        Accelerate With Us →
      </Button>
    </Box>
  </Container>
</Box>


  )
}

export default NewsletterBanner