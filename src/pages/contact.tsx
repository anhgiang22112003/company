import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    Checkbox,
    FormControlLabel,
    Paper,
    CssBaseline,
    Breadcrumbs,
    Link,
    Container
} from '@mui/material'
import React, { useState } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import EmailIcon from '@mui/icons-material/Email'
import PeopleIcon from '@mui/icons-material/People'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import MapIcon from '@mui/icons-material/Map'

const ContactPage = () => {
    const [countryCode, setCountryCode] = useState('+1')
    const [agreed, setAgreed] = useState(false)
    const locations = [
        {
            country: 'United States & Canada',
            phones: ['+1 844 224 4188', '+1 802 735 1392'],
            name: 'Mr. Minh Nguyen',
            flag: '🇺🇸🇨🇦',
            position: { top: '30%', left: '15%' },
        },
        {
            country: 'Europe',
            phones: ['+33 7 44 77 49 24'],
            name: 'Mr. Jordan Baumgartner',
            flag: '🇪🇺',
            position: { top: '25%', left: '45%' },
        },
        {
            country: 'Vietnam',
            phones: ['+84 28 3995 1060', '+84 28 3990 2680'],
            name: ['Ms. Phuong Tran', 'Mr. Andy Pham'],
            flag: '🇻🇳',
            position: { top: '55%', left: '70%' },
        },
        {
            country: 'Japan',
            phones: ['+81 50 5490 9867'],
            name: 'Mr. Yasuhisa Yoneda',
            flag: '🇯🇵',
            position: { top: '35%', left: '80%' },
        },
        {
            country: 'Singapore',
            phones: ['+84 946 177 624'],
            name: 'Mr. Cuong Bui',
            flag: '🇸🇬',
            position: { top: '60%', left: '68%' },
        },
        {
            country: 'Australia',
            phones: ['+61 411 276 342'],
            name: 'Mr. Huy Ly',
            flag: '🇦🇺',
            position: { top: '75%', left: '75%' },
        },
    ]
    return (
        <>
            {/* <CssBaseline /> */}
            <Header />
            {/* <Box sx={{position: 'relative', height: '90vh', mb: 5, overflow: 'hidden', mt: 18}}> */}
            <Box sx={{ minHeight: '80vh', bgcolor: '#00A1F1', p: 4, mt: 18 }}>
                <Grid container spacing={4}>
                    {/* Left Side - Contact Info */}
                    <Grid item xs={12} md={5} sx={{ color: 'white' }}>
                        <Typography variant="h4" fontWeight={700} mb={4}>Contact Us</Typography>

                        <Box mb={4}>
                            <Typography variant="h6" fontWeight={700} display="flex" alignItems="center" gap={1}>
                                <BusinessCenterIcon fontSize="small" />
                                Business Enquiry
                            </Typography>
                            <Typography>sales@solutions.com</Typography>
                            <Typography sx={{ textDecoration: 'underline', mt: 1 }}>
                                <MapIcon fontSize="small" sx={{ mr: 0.5 }} />
                                Our business contacts
                            </Typography>
                        </Box>

                        <Box mb={4}>
                            <Typography variant="h6" fontWeight={700} display="flex" alignItems="center" gap={1}>
                                <EmailIcon fontSize="small" />
                                General Enquiry
                            </Typography>
                            <Typography>info@solutions.com</Typography>
                            <Typography display="flex" alignItems="center" gap={1}>
                                <PeopleIcon fontSize="small" />
                                recruit@.com.vn (HR Department)
                            </Typography>
                        </Box>

                        <Box>
                            <Typography variant="h6" fontWeight={700} display="flex" alignItems="center" gap={1}>
                                <LocationOnIcon fontSize="small" />
                                 Tower address
                            </Typography>
                            <Typography>
                                Street #10, Quality Tech Solution Complex (QTSC), District 12, Ho Chi Minh City
                                <span style={{ textDecoration: 'underline', marginLeft: 4 }}>
                                    <MapIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 4 }} />
                                    Map
                                </span>
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Right Side - Form with Paper-Like Style */}
                    <Grid item xs={12} md={7}>
                        <Box
                            sx={{
                                p: 4,
                                bgcolor: 'white',
                                borderRadius: '16px',
                                boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                                position: 'relative',
                                overflow: 'hidden',
                                clipPath: 'polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0% 95%)',
                            }}
                        >
                            <Typography variant="h5" fontWeight={700} mb={3}>Business Enquiries</Typography>

                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth label="Name" placeholder="ex. John Doe" required />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth label="Company" placeholder="ex.Solutions" required />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth label="Email" placeholder="ex. example@mail.com" required />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Country</InputLabel>
                                        <Select MenuProps={{ disableScrollLock: true }} defaultValue="US" required>
                                            <MenuItem value="US">United States</MenuItem>
                                            <MenuItem value="VN">Vietnam</MenuItem>
                                            <MenuItem value="JP">Japan</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={4}>
                                    <FormControl fullWidth>
                                        <InputLabel>Code</InputLabel>
                                        <Select MenuProps={{ disableScrollLock: true }} value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
                                            <MenuItem value="+1">+1</MenuItem>
                                            <MenuItem value="+84">+84</MenuItem>
                                            <MenuItem value="+81">+81</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField fullWidth label="Phone" placeholder="0123456789" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Enquiry"
                                        placeholder="Enter your enquiry"
                                        multiline
                                        minRows={3}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={agreed}
                                                onChange={(e) => setAgreed(e.target.checked)}
                                            />
                                        }
                                        label="Your submission of personal information above serves as consent for Solutions to reach out to you."
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body2">
                                        Check out our <span style={{ color: '#00A1F1', textDecoration: 'underline' }}>Privacy Policy</span> to learn more about how we handle your personal data.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ textAlign: 'right', mt: 2 }}>
                                    <Button variant="contained" disabled={!agreed}>Submit</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Container>
            <Box sx={{ mt: 2, px: 4, p: 2 }}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    <Link underline="hover" color="#00A1F1" href="/">
                        <Typography fontWeight={700}>Home</Typography>
                    </Link>
                    <Typography color="text.primary">Contact Us</Typography>
                </Breadcrumbs>
            </Box>
            </Container>
            <Box mb={-20}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29797.83932147877!2d105.77032910000001!3d21.0034609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454ab43c0c4db%3A0xdb6effebd6991106!2sKeangnam%20Landmark%2072!5e0!3m2!1svi!2s!4v1748504708179!5m2!1svi!2s"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"

                />

            </Box>
            <ScrollToTopButton />
            {/* </Box> */}
            <Footer />
        </>
    )
}

export default ContactPage
