import React from 'react';
import { Box, Grid, Typography, TextField, Button, Checkbox, FormControlLabel, Paper, Container } from '@mui/material';
import SlideInOnScroll from './SlideInOnScroll'

const ContactSection = () => {
  return (
    <Box
      sx={{
        background: ' #1976d2',
        color: 'white',
        py:5,
        px: { xs: 2, md: 10 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mb:-5
      }}
    >
        <Container>
      <Grid container spacing={4} alignItems="center">
        {/* Left: Text + image */}
        <Grid item xs={12} md={6} >
            <SlideInOnScroll>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            We Meet You Where You Are—and Take You Further.
          </Typography>
          <Box mt={4}>
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.oLGEae-vfFJB21wxId1ZaAHaD4&pid=Api&P=0&h=220"
              alt="team"
              style={{ width: '100%', maxWidth: 500 }}
            />
          </Box></SlideInOnScroll>
        </Grid>

        {/* Right: Form */}
        <Grid item xs={12} md={6}>
            <SlideInOnScroll direction='right'>
          <Paper elevation={3} sx={{ p: 4 ,    clipPath: 'polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0% 95%)',
}}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Fill out the form to schedule a consultation
            </Typography>

            <Grid container spacing={2} mt={1}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="First name *" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Last name *" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Company" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Company email address *" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Phone number *" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Job title" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="How can we help you?"
                  multiline
                  rows={3}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="My company is a US-based business"
                />
              </Grid>
              <Grid item xs={12}>
                {/* Fake captcha placeholder */}
                {/* <Box sx={{ border: '1px solid #ccc', p: 1.5, mb: 2 }}>
                  <img
                    src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                    alt="captcha"
                    height="32"
                  />
                </Box> */}
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary">
                  Submit →
                </Button>
              </Grid>
            </Grid>
          </Paper></SlideInOnScroll>
        </Grid>
      </Grid></Container>
    </Box>
  );
};

export default ContactSection;
