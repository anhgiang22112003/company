import React, { useState } from 'react'
import { Box, Grid, Typography, Avatar, Container, CssBaseline, Stack, Link, Paper, List, ListItemButton, ListItemIcon, ListItemText, Divider, ListItem } from '@mui/material'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord' // hình tròn nhỏ
import AppShortcutIcon from '@mui/icons-material/AppShortcut'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import ReportProblemIcon from '@mui/icons-material/ReportProblem'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import FileDownloadIcon from '@mui/icons-material/FileDownload'


const services = [
    {
        name: 'Develop Insurance Customer Application',
        description: 'Develop application that helps customers to get the quotation for insurance services, claiming, etc​​',
        icon: <AppShortcutIcon sx={{ fontSize: 50, mb: 2, color: 'white' }} />,
    },
    {
        name: 'Build Learning Tool for Insurance Agent',
        description: 'Build a Learning tool which helps every insurance employee to define & upgrade their career path​​',
        icon: <MenuBookIcon sx={{ fontSize: 50, mb: 2, color: 'white' }} />,
    },
    {
        name: 'Increase Operation Productivity',
        description: 'Apply the latest technology to improve the productivity for the sales team, customer service, claim handling, internal operation, recruitment, etc​',
        icon: <QueryStatsIcon sx={{ fontSize: 50, mb: 2, color: 'white' }} />,
    },
    {
        name: 'Modernize Legacy System',
        description: 'Move to cloud, apply automation, mobile enabled technologies, AI while retaining features tailored to its specific business needs',
        icon: <RocketLaunchIcon sx={{ fontSize: 50, mb: 2, color: 'white' }} />,
    },
    {
        name: 'Risk Discovery',
        description: 'We find staff that have elevated risk from excessive access, and give management the tools they need to make well-informed decisions tracking success through intuitive reports and dashboards',
        icon: <ReportProblemIcon sx={{ fontSize: 50, mb: 2, color: 'white' }} />,
    },
    {
        name: 'Innovation as a Service',
        description: 'Apply the latest technologies (Big Data & Analytics, AI & Machine Learning, Blockchain, and IoT) and innovative solutions (RPA Automation, Analytics, Machine optimization, etc.) to transform and optimize insurance company operations​​',
        icon: <LightbulbIcon sx={{ fontSize: 50, mb: 2, color: 'white' }} />,
    },
]



const technologies = [
    { name: 'AWS', image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240625084446.518.webp' },
    { name: 'Docker', image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240625084500.218.webp' },
    { name: 'Google Cloud', image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240625084509.455.webp' },
    { name: 'SQL Server', image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240625084518.182.webp' },
    { name: 'Java', image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240625084544.852.webp' },
    { name: 'Spring', image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240625084552.761.webp' },
    { name: 'Ionic', image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240625084600.750.webp' },
    { name: 'PostgreSQL', image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240625084608.799.webp' },
]

const platforms = [
    { name: 'Docker', image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240625084618.497.webp' },
    { name: 'Kubernetes', image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240625084637.140.webp' },
    { name: 'Helm', image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240625084701.613.webp' },
    { name: 'Ubuntu', image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240625084709.769.webp' },
    { name: 'AWS', image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240625084718.392.webp' },
    { name: 'OpenStack', image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240625084725.173.webp' },
]

const Insurance = () => {

    return (
        <>
            <CssBaseline />
            <Header />
            <FadeSection>
                <Box

                    sx={{
                        background: 'linear-gradient(to bottom, #1976d2, rgba(10, 75, 149, 0.56))',

                        color: 'white',
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
                    <Container sx={{ position: 'relative', textAlign: 'center', p: 0 }}>
                        <Box
                            component="img"
                            src="https://tmastorage.azureedge.net/uploadfiles/Banner/banner_20240624164520.514.webp"
                            alt="banner"
                            sx={{
                                width: '100%',
                                height: {
                                    xs: '210px',     // chiều cao lớn hơn ở mobile
                                    md: 'auto',      // trở về mặc định ở desktop
                                },
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />
                        <Typography
                            variant="h5"
                            sx={{
                                position: 'absolute',
                                top: '55%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: 'white',
                                fontWeight: 'bold',
                                textShadow: '2px 2px 6px rgba(0,0,0,0.5)',
                                fontSize: {
                                    xs: '18px',      // nhỏ hơn ở mobile
                                    md: '28px',      // mặc định to ở desktop
                                },
                            }}
                        >
                            InsurTech Center
                        </Typography>
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

                            <Typography color="text.primary">Insurance</Typography>
                        </Stack>

                    </Box>
                </Container>
            </FadeSection>
            <FadeSection id='about' >
                <Box p={3} sx={{
                   
                }}
                >
                    <Box >
                        <Container sx={{ textAlign: "center" }}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                How can we help insurance companies?
                            </Typography>
                        </Container>
                    </Box>
                    <Container >
                        <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                            {services.map((service, index) => (
                                <Grid item key={index} xs={12} sm={6} md={4}>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            p: 2,
                                            borderRadius: 3,
                                            boxShadow: 3,
                                            height: '100%',
                                            overflow: 'hidden',
                                            backgroundColor: '#f5f5f5',
                                            '&:hover .overlay': {
                                                transform: 'translateY(100%)',
                                            },
                                            '&:hover .content': {
                                                opacity: 2,
                                            },
                                        }}
                                    >
                                        {/* Overlay nền xanh */}

                                        <Box
                                            className="overlay"
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                bgcolor: 'primary.main',
                                                color: 'white',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                transition: 'transform 0.5s ease',
                                                zIndex: 2,
                                            }}
                                        >
                                            {service.icon}
                                            <Typography textAlign={"center"} variant="h6" fontWeight="bold">
                                                {service.name}
                                            </Typography>
                                        </Box>

                                        {/* Nội dung thực */}
                                        <Box display="flex"flexDirection="column" gap={1}>
                                            <Box key={index} display="flex" alignItems="flex-start" gap={1}>
                                                <FiberManualRecordIcon sx={{ fontSize: 10, color: "#1E40AF", mt: "6px" }} />
                                                <Typography sx={{ fontSize: 16, color: "#333", lineHeight: 1.6 }}>
                                                    {service.description}
                                                </Typography>
                                            </Box>

                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            </FadeSection>
            <FadeSection id='about' >
                <Box p={5} sx={{
                    mt: 4,
                    background: 'linear-gradient(to bottom, #1976d2, rgba(10, 75, 149, 0.56))',
                }}
                >
                    <Box >
                        <Container sx={{ textAlign: "center" }}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                Technologies
                            </Typography>

                        </Container>
                    </Box>
                    <Container sx={{ mt: 4 }}>
                        <Box sx={{ backgroundColor: '#f5faff', p: 4, textAlign: 'center' }}>
                            <Typography variant="h6" fontWeight="bold" mb={4}>
                                Technologies
                            </Typography>

                            <Grid container spacing={4} justifyContent="center">
                                {technologies.map((tech, idx) => (
                                    <Grid item key={idx}>
                                        <Box>
                                            <img src={tech.image} alt={tech.name} style={{ height: 70, marginBottom: 8 }} />
                                            <Typography variant="body2">{tech.name}</Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>

                            <Box mt={6}>
                                <Typography variant="h6" fontWeight="bold" mb={3}>
                                    Platforms
                                </Typography>
                                <Grid container spacing={4} justifyContent="center">
                                    {platforms.map((plat, idx) => (
                                        <Grid item key={idx}>
                                            <Box>
                                                <img src={plat.image} alt={plat.name} style={{ height: 70, marginBottom: 8 }} />
                                                <Typography variant="body2">{plat.name}</Typography>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </FadeSection>
            <FadeSection>
                <Box mt={4}>
                    <Container>
                        <Typography variant='h4' fontWeight={"bold"} textAlign={"center"} >Backend High-Level Architecture</Typography>
                        <Typography>
                            We have built a framework that can cover the key modules in an insurance company such as customer relationship management, document management, claim management, learning services, etc.
                        </Typography>
                        <Box
                            component="img"
                            src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240625084733.760.webp"
                            alt=""
                            sx={{
                                width: '100%',
                                height: {
                                    xs: '150px',     // chiều cao lớn hơn ở mobile
                                    md: 'auto',      // trở về mặc định ở desktop
                                },

                            }}
                        />

                    </Container>
                </Box>
            </FadeSection>
            <FadeSection>
                <Box mt={4}>
                    <Container>
                        <Typography variant='h4' fontWeight={"bold"} textAlign={"center"} >Mobile High-Level Architecture</Typography>
                        <Typography>
                            We develop mobile architecture that optimizes the interaction with customer and enhance employee productivity
                        </Typography>
                        <Box
                            component="img"
                            src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240625084744.650.webp"
                            alt=""
                            sx={{
                                width: '100%',
                                height: {
                                    xs: '150px',     // chiều cao lớn hơn ở mobile
                                    md: 'auto',      // trở về mặc định ở desktop
                                },

                            }}
                        />
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
                                    Insurance IT Outsourcing
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

export default Insurance
