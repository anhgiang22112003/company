import React from 'react'
import { Box, Typography, Grid, Paper, useTheme, Container, Stack, Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import Footer from '../layouts/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import Header from '../layouts/Header'
import FadeSection from '../components/FadeSection'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import SlideInOnScroll from '../components/SlideInOnScroll'
const skillsData = [
    {
        title: 'Network & Endpoint Security',
        items: [
            'Firewalls, IDS/IPS',
            'Antivirus, Device Encryption',
            'Wireshark, NMAP, Metasploit, OpenVas',
        ],
    },
    {
        title: 'Cloud Security & Data Protection',
        items: [
            'AWS, GCP, Azure, Hybrid',
            'Data Encryption, Cloud Monitoring',
            'DevSecOps Integration',
        ],
    },
    {
        title: 'Security Awareness & Compliance',
        items: [
            'Employee Training, Phishing Simulations',
            'Compliance: NIST, PCI DSS, ISO 27034',
        ],
    },
    {
        title: 'Threat Detection & Incident Response',
        items: [
            'SIEM (Real-time Monitoring)',
            'Threat Intelligence & Analysis',
            'Vulnerability Scanning: Nessus, BurpSuite',
        ],
    },
    {
        title: 'Identity & Access Management',
        items: [
            'MFA, RBAC',
            'Okta, Duo, Microsoft IAM',
        ],
    },
]

const techData = [
    {
        title: 'Languages & Scripting',
        items: ['Python', 'JavaScript', 'SQL'],
    },
    {
        title: 'Security Standards',
        items: ['OWASP ASVS', 'NIST 800–218', 'PCI DSS', 'ISO 27034'],
    },
    {
        title: 'Security Tools',
        items: ['BurpSuite', 'Nessus', 'OWASP ZAP', 'Wireshark', 'Kali Linux'],
    },
    {
        title: 'Cloud Platforms',
        items: ['AWS', 'Azure', 'GCP', 'Hybrid Cloud'],
    },
    {
        title: 'Vulnerability Databases',
        items: ['OWASP Top 10', 'CVE', 'NIST'],
    },
]

const TechBox = ({ title, items }: any) => (
    <Paper
        elevation={0}
        sx={{
            border: '1px solid #00AEEF',
            borderRadius: 2,
            p: 2,
            height: '100%',
        }}
    >
        <Typography
            variant="subtitle1"
            sx={{ fontWeight: 'bold', color: '#1a237e', mb: 1 }}
        >
            {title}
        </Typography>
        <List dense sx={{ paddingTop: 0 }}>
            {items?.map((item: any, index: any) => (
                <ListItem key={index} disableGutters sx={{ alignItems: 'center', }}>
                    <ListItemIcon sx={{ minWidth: 20, mt: 0.5 }}>
                        <FiberManualRecordIcon sx={{ fontSize: 6, color: '#00AEEF' }} />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                </ListItem>
            ))}
        </List>
    </Paper>
)
const SecurityApplicationDevelopment = () => {
    const theme = useTheme()

    return (
        <>
            <Header />
            <FadeSection>
                <Box sx={{
                    background: 'linear-gradient(to bottom, #1976d2, rgba(10, 75, 149, 0.56))'
                    , p: 4, color: 'white', mt: 18
                }}>
                    <Container>
                        <Grid container spacing={4} alignItems="flex-start">
                            {/* Left Content */}
                            <Grid item xs={12} md={5}>
                                <SlideInOnScroll>
                                    <Box>
                                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                                            Security Application<br />Development
                                        </Typography>
                                        <Typography variant="body1" sx={{ mb: 4 }}>
                                            offers specialized security application development services designed to build robust,<br />
                                            secure, and resilient software solutions.
                                        </Typography>

                                        {/* Info Boxes */}
                                        <Grid container spacing={2} alignItems="stretch">
                                            {/* Box 1 */}
                                            <Grid item xs={6} sx={{ height: '100%' }}>
                                                <Paper
                                                    sx={{
                                                        height: '100%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 2,
                                                        p: 1.5,
                                                        borderRadius: 2,
                                                        backgroundColor: 'white',
                                                        color: 'black',
                                                    }}
                                                    elevation={3}
                                                >
                                                    <Box
                                                        component="img"
                                                        src="https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20250331081457.355.webp"
                                                        alt="Experience"
                                                        sx={{ width: 30, height: 30 }}
                                                    />
                                                    <Box>
                                                        <Typography fontWeight="bold">10+ Years</Typography>
                                                        <Typography variant="body2">of experience</Typography>
                                                    </Box>
                                                </Paper>
                                            </Grid>

                                            {/* Box 2 */}
                                            <Grid item xs={6} sx={{ height: '100%' }}>
                                                <Paper
                                                    sx={{
                                                        height: { xs: '87px', md: '100%' },
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 2,
                                                        p: 1.5,
                                                        borderRadius: 2,
                                                        backgroundColor: 'white',
                                                        color: 'black',
                                                    }}
                                                    elevation={3}
                                                >
                                                    <Box
                                                        component="img"
                                                        src="https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20250331081546.898.webp"
                                                        alt="Engineers"
                                                        sx={{ width: 30, height: 30 }}
                                                    />
                                                    <Box>
                                                        <Typography fontWeight="bold">150</Typography>
                                                        <Typography variant="body2">Engineers</Typography>
                                                    </Box>
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </Box></SlideInOnScroll>

                            </Grid>

                            {/* Right Image */}

                            <Grid item xs={12} md={7}>
                                <SlideInOnScroll direction='right'>
                                    <Box
                                        component="img"
                                        src="https://tmastorage.azureedge.net/uploadfiles/Banner/banner_20250331080507.160.webp"
                                        alt="Security Services"
                                        sx={{
                                            width: '100%',
                                            borderRadius: 2,
                                        }}
                                    />
                                </SlideInOnScroll>
                            </Grid>

                        </Grid>
                    </Container>
                </Box>
            </FadeSection>
            <FadeSection >
                <Container>

                    <Box sx={{ px: 4, p: 2 }}>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Link underline="hover" color="#00A1F1" href="/">
                                <Typography fontWeight={700}>Home</Typography>
                            </Link>

                            <Typography color="#00A1F1">›</Typography>

                            <Link href="sevices" underline="hover"><Typography color="#00A1F1">Services</Typography></Link>

                            <Typography color="#00A1F1">{'>'}</Typography>

                            <Typography color="text.primary">Security Application Development</Typography>
                        </Stack>

                    </Box>
                </Container>
            </FadeSection>
            <FadeSection>
                <Container>

                    <Box sx={{ backgroundColor: '#f0f7ff', py: 6, px: 2 }}>
                        <Box textAlign={"center"}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                        </Box>
                        <Typography
                            variant="h4"
                            align="center"
                            fontWeight="bold"
                            sx={{ mb: 4, color: '#000' }}
                        >
                            Technologies
                        </Typography>
                        <Grid container spacing={3}>
                            {/* Left Column */}
                            <Grid item xs={12} md={6}>
                                <Grid container spacing={3} direction="column">
                                    <Grid item><TechBox {...techData[0]} /></Grid>
                                    <Grid item><TechBox {...techData[1]} /></Grid>
                                    <Grid item><TechBox {...techData[2]} /></Grid>
                                </Grid>
                            </Grid>

                            {/* Right Column */}
                            <Grid item xs={12} md={6}>
                                <Grid container spacing={3} direction="column">
                                    <Grid item><TechBox {...techData[3]} /></Grid>
                                    <Grid item><TechBox {...techData[4]} /></Grid>


                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </FadeSection>
            <FadeSection>
                <Container>

                    <Box sx={{ backgroundColor: '#f0f7ff', py: 6, px: 2 }}>
                        <Box textAlign={"center"}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                        </Box>
                        <Typography
                            variant="h4"
                            align="center"
                            fontWeight="bold"
                            sx={{ mb: 4, color: '#000' }}
                        >
                            Skill Set
                        </Typography>
                        <Grid container spacing={3}>
                            {/* Left Column */}
                            <Grid item xs={12} md={6}>
                                <Grid container spacing={3} direction="column">
                                    <Grid item><TechBox {...skillsData[0]} /></Grid>
                                    <Grid item><TechBox {...skillsData[1]} /></Grid>
                                    <Grid item><TechBox {...skillsData[2]} /></Grid>
                                </Grid>
                            </Grid>

                            {/* Right Column */}
                            <Grid item xs={12} md={6}>
                                <Grid container spacing={3} direction="column">
                                    <Grid item><TechBox {...skillsData[3]} /></Grid>
                                    <Grid item><TechBox {...skillsData[4]} /></Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </FadeSection>
            <ScrollToTopButton />
            <Footer />
        </>
    )
}

export default SecurityApplicationDevelopment
