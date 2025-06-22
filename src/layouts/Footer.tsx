import { Box, Grid, Stack, Typography, Link, Button } from '@mui/material'

const Footer = ({ hasDownload = false }) => {
  return (
    <Box
      id="footer"
      sx={{
        background: 'linear-gradient(to bottom, #1976d2, rgba(10, 75, 149, 0.56))',
        color: 'white',
        px: 4,
        py: 6,
      }}
    >
      <Grid container spacing={4} mt={hasDownload ? 20 : 6}>
        {/* SERVICES */}
        <Grid item xs={6} md={3}>
          <Link href="/services" underline="none" color="#fff" fontWeight="bold" display="block" mb={1}>
            SERVICES
          </Link>
          <Stack spacing={1}>
            <Link href="/services/software-development" underline="hover" color="#fff">Software Development</Link>
            <Link href="/services/testing" underline="hover" color="#fff">Software Testing</Link>
            <Link href="/services/digital-transformation" underline="hover" color="#fff">Digital Transformation</Link>
            <Link href="/services/innovation-as-a-service" underline="hover" color="#fff">Innovation as a service</Link>
            <Link href="/services/security-application-development" underline="hover" color="#fff">Security Application Development</Link>
          </Stack>
        </Grid>

        {/* INDUSTRIES */}
        <Grid item xs={6} md={3}>
          <Link href="/industries" underline="none" color="#fff" fontWeight="bold" display="block" mb={1}>
            INDUSTRIES
          </Link>
          <Stack spacing={1}>
            <Link href="/industries/telecom" underline="hover" color="#fff">Telecom</Link>
            <Link href="/industries/finance" underline="hover" color="#fff">Finance</Link>
            <Link href="/industries/insurance" underline="hover" color="#fff">Insurance</Link>
            <Link href="/industries/e-commerce-retail" underline="hover" color="#fff">E-Commerce & Retail</Link>
            <Link href="/industries/healthcare" underline="hover" color="#fff">Healthcare</Link>
            <Link href="/industries/logistics" underline="hover" color="#fff">Logistics</Link>
            <Link href="/industries/automotive" underline="hover" color="#fff">Automotive</Link>
          </Stack>
        </Grid>

        {/* TECHNOLOGIES */}
        <Grid item xs={6} md={2}>
          <Link href="/technologies" underline="none" color="#fff" fontWeight="bold" display="block" mb={1}>
            TECHNOLOGIES
          </Link>
          <Stack spacing={1}>
            <Link href="/technologies/big-data-analytics" underline="hover" color="#fff">Big Data & Analytics</Link>
            <Link href="/technologies/ai-ml-data-sciences" underline="hover" color="#fff">AI/ML & Data Sciences</Link>
            <Link href="/technologies/rpa" underline="hover" color="#fff">RPA</Link>
            <Link href="/technologies/5g" underline="hover" color="#fff">5G</Link>
            <Link href="/technologies/iot" underline="hover" color="#fff">IoT</Link>
            <Link href="/technologies/cloud" underline="hover" color="#fff">Cloud</Link>
            <Link href="/technologies/devops" underline="hover" color="#fff">DevOps</Link>
            <Link href="/technologies/low-code" underline="hover" color="#fff">Low Code</Link>
            <Link href="/technologies/hardware-integration" underline="hover" color="#fff">Hardware Integration</Link>
          </Stack>
        </Grid>

        {/* CONTACT */}
        <Grid item xs={6} md={2}>
          <Typography fontWeight="bold">CONTACT</Typography>
          <Typography variant="body2" fontWeight="bold" mt={1}>Business enquiry:</Typography>
          <Link href="mailto:sales@tmasolutions.com" underline="hover" color="#4da6ff">
            sales@solutions.com
          </Link>

          <Typography variant="body2" fontWeight="bold" mt={2}>Tower address:</Typography>
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
                color: '#000',
              },
            }}
          >
            <Link underline="hover" href="/contact">Contact Us</Link>
          </Button>

          <Typography mt={3} fontWeight="bold">Connect with us</Typography>
          <Stack direction="row" spacing={2} mt={1}>
            <Typography variant="h6">🔗</Typography>
            <Typography variant="h6">✉️</Typography>
            <Typography variant="h6">📞</Typography>
          </Stack>
        </Grid>

        {/* CASE, NEWS */}
        <Grid item xs={6} md={2}>
          <Link href="/case-studies" underline="none" color="#fff" fontWeight="bold" display="block" mb={1}>CASE STUDIES</Link>
          <Link href="/new" underline="none" color="#fff" fontWeight="bold" display="block" mb={1}>NEWS</Link>
          <Link href="/about" underline="none" color="#fff" fontWeight="bold" display="block" mb={1}>ABOUT</Link>
        </Grid>
      </Grid>

      {/* Bottom footer */}
      <Box sx={{ borderTop: '1px solid #333', mt: 4, pt: 2, textAlign: 'center' }}>
        <Typography variant="body2" color="#bbb">
          Solutions CO., LTD. © 2025 All Rights Reserved &nbsp;|&nbsp;
          <Link href="#" color="#ccc" underline="hover">Site Map</Link> &nbsp;|&nbsp;
          <Link href="#" color="#ccc" underline="hover">Privacy Policy</Link> &nbsp;|&nbsp;
          <Link href="#" color="#ccc" underline="hover">Terms of Use</Link>
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
