import React from 'react';
import { Box, Grid, Typography, Link, Button, Stack } from '@mui/material';

const Footer = () => {
  return (
    <Box id="footer" sx={{ backgroundColor: '#000', color: '#fff', px: 4, py: 6 }}>
      <Grid container spacing={4} mt={20}>
        
        <Grid item xs={6} md={2}>
          <Link href="#" underline="none" color="#fff" fontWeight="bold" display="block" mb={1}>ABOUT</Link>
          <Stack spacing={1}>
            <Link href="#" underline="hover" color="#fff">Why</Link>
            <Link href="#" underline="hover" color="#fff">Leadership</Link>
            <Link href="#" underline="hover" color="#fff">CSR</Link>
            <Link href="#" underline="hover" color="#fff">Image Gallery</Link>
            <Link href="#" underline="hover" color="#fff">Company History</Link>
          </Stack>
        </Grid>

        <Grid item xs={6} md={2}>
          <Link href="#" underline="none" color="#fff" fontWeight="bold" display="block" mb={1}>SERVICES</Link>
          <Stack spacing={1}>
            <Link href="#" underline="hover" color="#fff">Software Development</Link>
            <Link href="#" underline="hover" color="#fff">Software Testing</Link>
            <Link href="#" underline="hover" color="#fff">Digital Transformation</Link>
            <Link href="#" underline="hover" color="#fff">Innovation as a service</Link>
            <Link href="#" underline="hover" color="#fff">Security Application Development</Link>
          </Stack>
        </Grid>

        <Grid item xs={6} md={2}>
          <Link href="#" underline="none" color="#fff" fontWeight="bold" display="block" mb={1}>INDUSTRIES</Link>
          <Stack spacing={1}>
            <Link href="#" underline="hover" color="#fff">Telecom</Link>
            <Link href="#" underline="hover" color="#fff">Finance</Link>
            <Link href="#" underline="hover" color="#fff">Insurance</Link>
            <Link href="#" underline="hover" color="#fff">E-Commerce & Retail</Link>
            <Link href="#" underline="hover" color="#fff">Healthcare</Link>
            <Link href="#" underline="hover" color="#fff">Logistics</Link>
            <Link href="#" underline="hover" color="#fff">Automotive</Link>
          </Stack>
        </Grid>

        <Grid item xs={6} md={2}>
          <Link href="#" underline="none" color="#fff" fontWeight="bold" display="block" mb={1}>TECHNOLOGIES</Link>
          <Stack spacing={1}>
            <Link href="#" underline="hover" color="#fff">Big Data & Analytics</Link>
            <Link href="#" underline="hover" color="#fff">AI/ML & Data Sciences</Link>
            <Link href="#" underline="hover" color="#fff">RPA</Link>
            <Link href="#" underline="hover" color="#fff">5G</Link>
            <Link href="#" underline="hover" color="#fff">IoT</Link>
            <Link href="#" underline="hover" color="#fff">Cloud</Link>
            <Link href="#" underline="hover" color="#fff">DevOps</Link>
            <Link href="#" underline="hover" color="#fff">Low Code</Link>
            <Link href="#" underline="hover" color="#fff">Hardware Integration</Link>
            <Link href="#" underline="hover" color="#fff">Wi-Fi HaLow</Link>
          </Stack>
        </Grid>

        <Grid item xs={6} md={2}>
          <Link href="#" underline="none" color="#fff" fontWeight="bold" display="block" mb={1}>CASE STUDIES</Link>
          <Link href="#" underline="none" color="#fff" fontWeight="bold" display="block" mb={1}>NEWS</Link>
          <Link href="#" underline="none" color="#fff" fontWeight="bold" display="block" mb={1}>INSIGHTS</Link>
        </Grid>

        <Grid item xs={12} md={2}>
          <Typography fontWeight="bold">CONTACT</Typography>
          <Typography variant="body2" fontWeight="bold" mt={1}>
            Business enquiry:
          </Typography>
          <Link href="mailto:sales@tmasolutions.com" underline="hover" color="#4da6ff">
            sales@solutions.com
          </Link>

          <Typography variant="body2" fontWeight="bold" mt={2}>
             Tower address:
          </Typography>
          <Typography variant="body2">
            Street #10, Quality Tech Solution Complex (QTSC),<br />
            District 12, Ho Chi Minh City
          </Typography>

          <Button
            variant="outlined"
            sx={{
              mt: 2,
              borderColor: '#4da6ff',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#4da6ff',
                color: '#000'
              }
            }}
          >
            Contact Us
          </Button>

          <Typography mt={3} fontWeight="bold">
            Connect with us
          </Typography>
          <Stack direction="row" spacing={2} mt={1}>
            <Typography variant="h6">🔗</Typography>
            <Typography variant="h6">✉️</Typography>
            <Typography variant="h6">📞</Typography>
          </Stack>
        </Grid>
      </Grid>

      <Box sx={{ borderTop: '1px solid #333', mt: 4, pt: 2, textAlign: 'center' }}>
        <Typography variant="body2" color="#bbb">
         Solutions CO., LTD. © 2025 All Rights Reserved &nbsp;|&nbsp;
          <Link href="#" color="#ccc" underline="hover">Site Map</Link> &nbsp;|&nbsp;
          <Link href="#" color="#ccc" underline="hover">Privacy Policy</Link> &nbsp;|&nbsp;
          <Link href="#" color="#ccc" underline="hover">Terms of Use</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
