import React, { useState } from 'react'
import { Box, Grid, Typography, Avatar, Container, CssBaseline, Stack, Link, Paper, List, ListItemButton, ListItemIcon, ListItemText, Divider, ListItem } from '@mui/material'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'
import DeviceHubIcon from '@mui/icons-material/DeviceHub'
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy'
import LiveHelpIcon from '@mui/icons-material/LiveHelp'
import HomeIcon from '@mui/icons-material/Home'
import KioskIcon from '@mui/icons-material/Storefront'
import SecurityIcon from '@mui/icons-material/Security'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import HeartBrokenIcon from '@mui/icons-material/HeartBroken'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import AssignmentIcon from '@mui/icons-material/Assignment'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

const expertiseData = [
    { title: 'Remote Health Monitoring', icon: <DeviceHubIcon /> },
    { title: 'Pharmacy Automation', icon: <LocalPharmacyIcon /> },
    { title: 'Telehealth', icon: <LiveHelpIcon /> },
    { title: 'Home Care', icon: <HomeIcon /> },
    { title: 'Healthcare Kiosk', icon: <KioskIcon /> },
    { title: 'Device Integration', icon: <DeviceHubIcon /> },
    { title: 'Senior Care Services', icon: <AccessibilityNewIcon /> },
    { title: 'Fitness Solution', icon: <FitnessCenterIcon /> },
    { title: 'Chronic Disease Monitoring', icon: <HeartBrokenIcon /> },
    { title: 'Nursing Home Management', icon: <LocalHospitalIcon /> },
    { title: 'Clinical Research Tools', icon: <AssignmentIcon /> },
    { title: 'Healthcare Self-Services', icon: <MedicalServicesIcon /> },
    { title: 'AI & Health Data Analytics', icon: <AnalyticsIcon /> },
    { title: 'Clinic Solutions', icon: <SecurityIcon /> },
    { title: 'Disability Care', icon: <AccessibilityNewIcon /> },
]
const DiamondHex = ({
    text,
    size = 'small',
}: {
    text: string
    size?: 'small' | 'large'
}) => {
    const width = size === 'large' ? 180 : 140
    const height = size === 'large' ? 160 : 120

    return (
        <Box
            sx={{
                width,
                height,
                backgroundColor: 'white',
                color: 'black',
                clipPath:
                    'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
                transform: 'rotate(90deg)', // quay lục giác thành viên kim cương
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                boxShadow: 3,
                borderRadius: '8px',
                p: 1,
            }}
        >
            {/* Xoay lại chữ cho đúng chiều */}
            <Box sx={{ transform: 'rotate(-90deg)', px: 1 }}>
                <Typography
                    variant="h6"
                    sx={{ fontSize: size === 'large' ? 16 : 14 }}
                >
                    {text}
                </Typography>
            </Box>
        </Box>
    )
}

const servicesData = [
    {
        title: 'Build innovative healthcare solutions based on latest technologies',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/medical-app.webp',
    },
    {
        title: 'Strategic software partner with leading healthcare providers',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/first-aid-kit.webp',
    },
    {
        title: 'R&D collaboration with universities on latest digital health trends',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/respect.webp',
    },
]
const insightsData = [
    {
        title: 'Top 4 Trusted Healthcare Application Development Companies in Vietnam',
        image: 'https://www.tmasolutions.com/uploadfiles/Insights/Picture2_2025-05-26-07-03-36-814.webp',
        date: '08/01/2024',
    },
    {
        title: 'Healthcare Technology: Benefits and 10 Future Trends to Watch',
        image: 'https://www.tmasolutions.com/uploadfiles/Insights/Picture1_2025-05-28-08-01-08-564.webp',
        date: '07/01/2024',
    },
    {
        title: 'Digital Health Innovation: Trends & Technologies in 2025',
        image: 'https://www.tmasolutions.com/uploadfiles/Insights/Picture2_2025-05-26-07-03-36-814.webp',
        date: '06/01/2024',
    },
    {
        title: 'AI in Medical Diagnosis',
        image: 'https://www.tmasolutions.com/uploadfiles/Insights/Picture4_2025-05-20-09-59-37-531.webp',
        date: '05/01/2024',
    },
]

const Healthcare = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <FadeSection>
                <Box

                    sx={{
                        background: 'linear-gradient(to bottom, #1976d2, rgba(10, 75, 149, 0.56))',
                        mt: 18,
                        py: 8,
                        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
                        WebkitClipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
                        overflow: 'hidden',
                    }}
                >
                    <Box sx={{ position: "absolute" }}>
                        <img width={"20%"} src="https://www.tmasolutions.com/media/industries/telecom/bg_right.webp" alt="" />
                    </Box>
                    <Container sx={{ textAlign: 'center', p: 0 }}>
                        <Box color="white">
                            <Typography
                                variant="h4"
                                fontWeight="bold"
                                align="center"
                                sx={{ mb: 2 }}
                            >
                                Healthcare
                            </Typography>
                            <Typography variant="body1" align="center" sx={{ mb: 4 }}>
                                With 700 engineers and 15+ years of experience, Solutions is a
                                leading provider of digital health and healthcare software development
                                services. We offer a wide range of software services on Remote Health
                                Monitoring, Medical Device Integration, Healthcare Data Analytics,
                                Pharmacy Automation, Senior Care Services, etc.
                            </Typography>
                        </Box>

                        {/* Lục giác xếp kiểu kim cương */}
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                {/* 2 hình nhỏ bên trên */}
                                <Box sx={{ display: 'flex', gap: '5px', mb: '-35px' }}>
                                    <DiamondHex text="15+ Years of experience" />
                                    <DiamondHex text="Clients from Australia, USA, Europe, Vietnam" />
                                </Box>

                                {/* Hình to ở dưới */}
                                <DiamondHex text="700 Engineers" size="large" />
                            </Box>
                        </Box>
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

                            <Link href="industries" underline="hover"><Typography color="#00A1F1">Industries</Typography></Link>

                            <Typography color="#00A1F1">{'>'}</Typography>

                            <Typography color="text.primary">Healthcare</Typography>
                        </Stack>

                    </Box>
                </Container>
            </FadeSection>
            <FadeSection id='about' >
                <Box p={2}
                >
                    <Box >
                        <Container sx={{ textAlign: "center" }}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                Services
                            </Typography>
                        </Container>
                    </Box>
                    <Container sx={{ mb: { xs: 2, md: 2 } }}>
                        <Box >
                                <Grid container spacing={1} justifyContent="center">
                                    {servicesData.map((service, index) => (
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            md={4}
                                            key={index}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Paper
                                                elevation={1}
                                                sx={{
                                                    width: '100%',
                                                   
                                                    padding: { xs: 2, md: 2 },
                                                    bgcolor: '#2196F3',
                                                    color: 'white',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    style={{
                                                        width: '40px',
                                                        height: '40px',
                                                        marginBottom: '12px',
                                                    }}
                                                />
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        fontSize: { xs: '16px', md: '20px' },
                                                    }}
                                                >
                                                    {service.title}
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>
                           
                        </Box>
                    </Container>

                </Box>
            </FadeSection>
            <FadeSection id='about' >
       
                    <Box p={2} sx={{
                        background: 'linear-gradient(to bottom,rgb(41, 89, 137), rgba(14, 41, 70, 0.56))',
                    }}
                    >
                        <Box >
                            <Container>
                                <Typography color={"white"} variant="h4" align="center" sx={{ mb: 4 }}>
                                    Areas of Expertise
                                </Typography>
                                <Grid container spacing={2} justifyContent="center">
                                    {expertiseData.map((area, index) => (
                                        <Grid item xs={12} sm={6} md={4} key={index}>
                                            <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
                                                <Box sx={{ mb: 2 }}>
                                                    {area.icon}
                                                </Box>
                                                <Typography fontSize={15}>
                                                    {area.title}
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Container>
                        </Box>
                    </Box>
               
            </FadeSection>
            <FadeSection>
                <Box sx={{ p: 4 }}>
                    <Container>
                        <Typography fontWeight={'bold'} variant="h4" align="center" sx={{ mb: 4 }}>
                            Insights
                        </Typography>
                        <Grid container spacing={4} justifyContent="center">
                            {insightsData.map((insight, index) => (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            borderRadius: 2,
                                            overflow: 'hidden',
                                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                boxShadow: 6,
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                overflow: 'hidden',
                                                height: 180,
                                                borderBottom: '1px solid #eee',
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={insight.image}
                                                alt={insight.title}
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.4s ease',
                                                    '&:hover': {
                                                        transform: 'scale(1.1)',
                                                    },
                                                }}
                                            />
                                        </Box>

                                        <Box sx={{ p: 2 }}>
                                            <Typography
                                                variant="subtitle1"
                                                sx={{ fontWeight: 'bold', mb: 1, fontSize: '0.95rem' }}
                                            >
                                                {insight.title}
                                            </Typography>

                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <CalendarMonthIcon sx={{ fontSize: 16, color: 'gray' }} />
                                                <Typography variant="caption" sx={{ color: 'gray' }}>
                                                    {insight.date}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            </FadeSection>
              <FadeSection id="download">
                <Container sx={{ mt: { xs: 12, sm: 10, md: 10 } }}>
                    <Box
                        sx={{
                            background: '#009BFF',
                            color: 'white',
                            clipPath: {
                                xs: 'polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0 100%)',
                                md: 'polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)',
                            },
                            py: { xs: 5, sm: 6, md: 8 },
                            px: { xs: 2, sm: 4 },
                            position: 'relative',
                            zIndex: 1,
                            mb: { xs: -8, sm: -10, md: -15 },
                        }}
                    >
                        <Container>
                            <Typography
                                variant="h4"
                                fontWeight="bold"
                                textAlign="center"
                                fontSize={{ xs: '1.5rem', sm: '1.8rem', md: '2rem' }}
                            >
                                Download
                            </Typography>

                            <Box mt={4} textAlign="center">
                                <Link
                                    href="/path-to-your-file/IT-Outsourcing.pdf"
                                    download
                                    underline="none"
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        px: 2,
                                        py: 1.5,
                                        borderRadius: 2,
                                        backgroundColor: 'white',
                                        color: '#1976d2',
                                        fontWeight: 'bold',
                                        fontSize: { xs: '1rem', sm: '1.1rem' },
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            backgroundColor: '#e3f2fd',
                                            textDecoration: 'none',
                                            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                                        },
                                    }}
                                >
                                    <FileDownloadIcon />
                                    Healthcare IT Outsourcing
                                </Link>
                            </Box>
                        </Container>
                    </Box>
                </Container>
            </FadeSection>
            <ScrollToTopButton />
            <Footer />
        </>
    )
}

export default Healthcare
