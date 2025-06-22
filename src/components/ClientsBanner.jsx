import React from 'react'
import { Box, Container, Typography } from '@mui/material'

const MapBanner = () => {
    return (
<Box
  sx={{
    background: 'linear-gradient(to bottom, #1976d2, rgba(149, 10, 138, 0.56))',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
    py: { xs: 6, md: 10 },
    width: '100%',
    mt: 10,
    minHeight: '80vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }}
>
  <Container maxWidth="lg">
    <Box
      sx={{
        maxWidth: 1000,
        mx: 'auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: 'white',
          fontWeight: 'bold',
          mb: 3,
          fontSize: {
            xs: '1.5rem',
            sm: '2rem',
            md: '2.5rem',
          },
        }}
      >
        Clients from 30 Countries
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: 'white',
          mb: 4,
          maxWidth: 800,
          fontSize: {
            xs: '0.9rem',
            sm: '1rem',
            md: '1.1rem',
          },
        }}
      >
        As a Vietnam IT outsourcing company, provides quality technology solutions worldwide, gaining trust from clients worldwide.
      </Typography>

      <Box
        component="img"
        src="https://tmastorage.azureedge.net/uploadfiles/Banner/banner_20240801083917.148.webp"
        alt="World Map"
        sx={{
          width: '100%',
          maxWidth: 800,
          maxHeight: 400,
          objectFit: 'cover',
          borderRadius: 2,
        }}
      />

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          rowGap: 1.5,
          columnGap: 3,
          mt: 3,
          maxWidth: 800,
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
              fontSize: {
                xs: '0.75rem',
                sm: '0.9rem',
              },
              px: 1,
              whiteSpace: 'nowrap',
            }}
          >
            {country}
          </Typography>
        ))}
      </Box>
    </Box>
  </Container>
</Box>


    )
}

export default MapBanner