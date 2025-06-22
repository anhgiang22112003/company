import React from 'react'
import { Box, Container, Typography } from '@mui/material'




const InfoBanner = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        background: 'linear-gradient(to bottom, #1976d2, rgba(149, 10, 138, 0.56))',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        width: '100%',
        height: '100%',
        mt: 10,
        color: '#fff',
        overflow: 'hidden',
        display: 'flex',                // Flexbox layout
        alignItems: 'center',           // Căn giữa theo chiều dọc
        justifyContent: 'center',       // Căn giữa theo chiều ngang
        textAlign: 'center',
        padding: { xs: '40px 16px' },
        minHeight: '85vh',              // Độ cao tối thiểu banner


      }}
    >
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 3,
            color: '#fff',
            fontSize: { xs: '1.8rem', md: '2.5rem' }
          }}
        >
          Solutions - Reliable Software Partner
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: '#e0e0e0',
            fontSize: { xs: '1rem', md: '1.125rem' },
            maxWidth: 700,
            mx: 'auto' // căn giữa giới hạn chiều ngang
          }}
        >
          Established in 1997, we are one of the leading software outsourcing companies in Vietnam, well known for our exceptional technology solutions. With 28 years of experience, we take pride in delivering high-quality software development services worldwide.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: { xs: 2, md: 4 },
            mb: 4,
            flexWrap: 'wrap'
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
          backgroundImage: `
        radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px),
        radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)
      `,
          backgroundPosition: '0 0, 25px 25px',
          backgroundSize: '50px 50px',
          zIndex: 1,
        }}
      />
    </Box>

  )
}

export default InfoBanner