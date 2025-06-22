import React, { useState } from 'react'
import { Box, Grid, Typography, Avatar, Container, CssBaseline, Stack, Link, Paper, List, ListItemButton, ListItemIcon, ListItemText, Divider, ListItem, Fade, Card, CardContent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Chip, CardMedia } from '@mui/material'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import SlideInOnScroll from '../components/SlideInOnScroll'

const caseStudies = [
    {
        image: 'https://tmastorage.azureedge.net/uploadfiles/CaseStudies/Thumbnails/casestudy_thumbnail_20240611041847.860.webp',
        title: 'Boost productivity with AI-powered Smart Call Center Assistant',
        tags: ['Telecom', 'E-Commerce & Retail'],
        description: 'An application running on agent’s PC to capture real-time audio and provide suggestions for customers’ queries using GenAI',
        link: 'https://example.com/case-study-6',

    },
    {
        image: 'https://tmastorage.azureedge.net/uploadfiles/CaseStudies/Thumbnails/casestudy_thumbnail_20240611042037.731.webp',
        title: 'Public safety monitoring with smart camera',
        tags: ['Data Science & AI/ML', 'Public Safety'],
        description: 'The solution integrates smart cameras equipped with edge AI to provide comprehensive real-time surveillance and alerts in public spaces.',
        link: 'https://example.com/case-study-6',

    },
    {
        image: 'https://tmastorage.azureedge.net/uploadfiles/CaseStudies/Thumbnails/casestudy_thumbnail_20240611042651.146.webp',
        title: 'Apply OCR in Healthcare solutions to automate data collection',
        tags: ['Healthcare', 'Data Science & AI/ML'],
        description: 'Extract health indexes such as blood pressure, blood glucose, body temperature from 30 medical devices, prescriptions, and in-body physical.',
        link: 'https://example.com/case-study-6',

    },
    // {
    //     image: 'https://tmastorage.azureedge.net/uploadfiles/CaseStudies/Thumbnails/casestudy_thumbnail_20240611044638.466.webp',
    //     title: 'AI sound-based fault detection system in manufacturing',
    //     tags: ['Manufacturing', 'Data Science & AI/ML', 'IoT'],
    //     description: 'Utilize AI-based sound analysis to enhance real-time fault detection during value manufacturing, improving product quality.',
    //     link: 'https://example.com/case-study-6',

    // },
    // {
    //     image: 'https://tmastorage.azureedge.net/uploadfiles/CaseStudies/Thumbnails/casestudy_thumbnail_20240611044337.448.webp',
    //     title: 'Enhance Credit Risk Analysis with AI/ML Technologies',
    //     tags: ['Finance', 'Data Science & AI/ML'],
    //     description: 'Provide credit scoring algorithm leveraging AI/ML models to enhance risk assessment from many data sources, reducing efforts.',
    //     link: 'https://example.com/case-study-6',

    // },
    // {
    //     image: 'https://tmastorage.azureedge.net/uploadfiles/CaseStudies/Thumbnails/casestudy_thumbnail_20240611045307.545.webp',
    //     title: 'Pest Detection Solution Crop Protection With AI Technology',
    //     tags: ['Agriculture', 'Data Science & AI/ML', 'IoT'],
    //     description: 'Leverage AI to detect and identify pests and diseases in the field, supporting managing and monitoring.',
    //     link: 'https://example.com/case-study-6',

    // },
]
const devOpsItems: string[] = [
    'DevOps Center: 12 years of experience',
    'More than 100 DevOps engineers',
    'Clients from 15 countries',
    'Provide Continuous Integration (CI)',
    'Continuous Deployment (CD)',
    'Public Cloud Managed Services',
    'IT Managed Services',
]
const centerImage = 'https://www.tmasolutions.com/media/technologies/devOps/imageBannerCenter.webp'
const outerImages = [
    'https://www.tmasolutions.com/media/technologies/devOps/imageBanner1.webp',
    'https://www.tmasolutions.com/media/technologies/devOps/imageBanner2.webp',
    'https://www.tmasolutions.com/media/technologies/devOps/imageBanner3.webp',
    'https://www.tmasolutions.com/media/technologies/devOps/imageBanner4.webp',
    'https://www.tmasolutions.com/media/technologies/devOps/imageBanner5.webp',
    'https://www.tmasolutions.com/media/technologies/devOps/imageBanner6.webp',
]
const positions = [
    { top: '0%', left: '50%', transform: 'translate(-50%, -50%)' },        // Top center
    { top: '25%', right: '0%', transform: 'translate(50%, -50%)' },        // Top right
    { bottom: '25%', right: '0%', transform: 'translate(50%, 50%)' },      // Bottom right
    { bottom: '0%', left: '50%', transform: 'translate(-50%, 50%)' },      // Bottom center
    { bottom: '25%', left: '0%', transform: 'translate(-50%, 50%)' },      // Bottom left
    { top: '25%', left: '0%', transform: 'translate(-50%, -50%)' },        // Top left
]
const services = [
    {
        title: 'CI/CD',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240521083418.424.webp',
        items: [
            'Implement and manage Continuous Integration and Deployment',
            'Infrastructure as Code and Configuration Management, etc',
        ],
    },
    {
        title: 'DevOps Consulting',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240521083429.885.webp',
        items: [
            'Provide continuous monitoring (24/7) of all cloud infrastructure',
            'Logging capabilities to proactively identify and address any issues',
        ],
    },
    {
        title: 'Migration',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240521083436.218.webp',
        items: ['Migrate system to Cloud (IaaS, PaaS, SaaS)'],
    },
    {
        title: 'Monitoring and Logging',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240521083441.817.webp',
        items: [
            'Cloud infrastructure design',
            'Deployment process',
            'Carrying out strategic planning',
            'Assisting in the DevOps solution setup',
        ],
    },
]
const techCategories = [
    {
        title: 'CI/CD',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240515090454.615.webp',
    },
    {
        title: 'LOG MANAGEMENT',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240515090503.326.webp',
    },
    {
        title: 'CLOUD INFRASTRUCTURE',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240515090511.257.webp',
    },
    {
        title: 'MONITORING',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240515090518.616.webp',
    },
    {
        title: 'CONTAINER MANAGEMENT',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240515090526.382.webp',
    },
    {
        title: 'INFRASTRUCTURE AS CODE',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240515090535.074.webp',
    },
    {
        title: 'NETWORKING',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240515090542.785.webp',
    },
    {
        title: 'OS',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240515090549.353.webp',
    },
    {
        title: 'PROGRAMMING',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240515090554.659.webp',
    },
]

const DevOpsPage = () => {


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
                    <Container>
                        <Grid container spacing={6} alignItems="center" justifyContent="center">
                            {/* Left: Text and Icons */}
                            <Grid item xs={12} md={6}>
                                <SlideInOnScroll>
                                    <Box sx={{ color: 'white', }}>
                                        <Typography variant="h5" fontWeight="bold" mb={1}>
                                            DevOps
                                        </Typography>
                                        <Typography variant="body1" >
                                            Our DevOps services help you deliver applications faster and make IT operations easier by automating end to end delivery pipeline and facilitating continuous integration and development across leading cloud platforms
                                        </Typography>

                                        <List>
                                            {devOpsItems.map((text, index) => (
                                                <ListItem key={index} disableGutters>
                                                    <ListItemIcon sx={{ minWidth: '28px' }}>
                                                        <RadioButtonUncheckedIcon sx={{ fontSize: 12, color: 'white' }} />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={text}
                                                        primaryTypographyProps={{ variant: 'body2', sx: { color: 'white' } }}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box></SlideInOnScroll>

                            </Grid>

                            {/* Right: Hex Grid */}
                            <Grid item xs={12} md={6}>
                                <SlideInOnScroll direction='right'>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            width: {
                                                xs: 200,  // Mobile nhỏ hơn
                                                sm: 250,  // Tablet
                                                md: 300,  // Desktop giữ nguyên
                                            },
                                            height: {
                                                xs: 200,
                                                sm: 270,
                                                md: 310,
                                            },
                                            margin: 'auto',
                                        }}
                                    >
                                        {/* Center Image */}
                                        <Box
                                            component="img"
                                            src={centerImage}
                                            alt="DevOps Center"
                                            sx={{
                                                width: {
                                                    xs: 100,
                                                    sm: 130,
                                                    md: 170,
                                                },
                                                height: {
                                                    xs: 100,
                                                    sm: 130,
                                                    md: 170,
                                                },
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                            }}
                                        />

                                        {/* Surrounding Hex Images */}
                                        {outerImages.map((src, index) => (
                                            <Box
                                                key={index}
                                                component="img"
                                                src={src}
                                                alt={`Hex ${index + 1}`}
                                                sx={{
                                                    width: {
                                                        xs: 90,
                                                        sm: 120,
                                                        md: 150,
                                                    },
                                                    height: {
                                                        xs: 90,
                                                        sm: 120,
                                                        md: 150,
                                                    },
                                                    position: 'absolute',
                                                    ...positions[index],
                                                }}
                                            />
                                        ))}
                                    </Box></SlideInOnScroll>
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

                            <Link href="technologies" underline="hover"><Typography color="#00A1F1">Technologies</Typography></Link>

                            <Typography color="#00A1F1">{'>'}</Typography>

                            <Typography color="text.primary">DevOps</Typography>
                        </Stack>

                    </Box>
                </Container>
            </FadeSection>
            <FadeSection id='about' >
                <Box p={3}
                >
                    <Box >
                        <Container sx={{ textAlign: "center" }}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                Services
                            </Typography>
                        </Container>
                    </Box>
                    <Container sx={{ mt: 2 }}>
                        <Grid container spacing={3}>
                            {services.map((service, index) => (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <Box
                                        sx={{
                                            border: '1px solid #bde0ff',
                                            p: 2,
                                            borderRadius: 1,
                                            height: '100%',
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={service.icon}
                                            alt={service.title}
                                            sx={{ height: 40, mb: 1 }}
                                        />
                                        <Typography variant="h6" fontWeight="bold">
                                            {service.title}
                                        </Typography>
                                        <Divider />
                                        <List dense>
                                            {service.items.map((text, i) => (
                                                <ListItem key={i} disablePadding>
                                                    <ListItemIcon sx={{ minWidth: '24px' }}>
                                                        <FiberManualRecordIcon sx={{ fontSize: 8, color: '#00aaff' }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary={text} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>

                    </Container>
                </Box>
            </FadeSection>
            <FadeSection>

                <Box sx={{
                    py: 8, px: 2, background: 'linear-gradient(to bottom, #1976d2, rgba(149, 10, 138, 0.56))',
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                }}>
                    <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
                        Solutions
                    </Typography>
                    <Box mb={3} textAlign={"center"} border={"1px solid rgba(103, 156, 183, 0.9)"}>
                        <Typography textAlign={"center"} fontWeight={"bold"} variant='h5' p={3}>
                            Provisioning Resources and CI Flow
                        </Typography>
                        <img width={"95%"} src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240515083027.855.webp " alt="" />
                    </Box>
                    <Box mb={3} textAlign={"center"} border={"1px solid rgba(103, 156, 183, 0.9)"}>
                        <Typography textAlign={"center"} fontWeight={"bold"} variant='h5' p={3}>
                            DevOps Project
                        </Typography>
                        <img width={"95%"} src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240515083036.210.webp" alt="" />
                    </Box>
                    <Box mb={3} textAlign={"center"} border={"1px solid rgba(103, 156, 183, 0.9)"}>
                        <Typography textAlign={"center"} fontWeight={"bold"} variant='h5' p={3}>
                            DevOps Flow
                        </Typography>
                        <img width={"95%"} src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240515083043.493.webp" alt="" />
                    </Box>


                </Box>

            </FadeSection>

            <FadeSection>

                <Box sx={{ py: 6, backgroundColor: '#f3f7fd', textAlign: 'center' }}>
                    <Typography variant="h4" fontWeight="bold" mb={4}>
                        Technologies
                    </Typography>

                    <Box sx={{ overflow: 'hidden', py: 4, backgroundColor: '#f5f5f5' }}>
                        <Box
                             sx={{
                                    display: 'flex',
                                    width: 'max-content',
                                    animation: 'scroll 20s linear infinite',
                                    '@keyframes scroll': {
                                        '0%': { transform: 'translateX(0)' },
                                        '100%': { transform: 'translateX(-50%)' },
                                    },
                                }}
                        >
                            {[...techCategories, ...techCategories].map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        width: 280,
                                        minWidth: 280,
                                        mx: 2,
                                        flexShrink: 0,
                                    }}
                                >
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            border: '1px solid #2196f3',
                                            borderRadius: '2px',
                                            height: '100%',
                                            p: 2,
                                            backgroundColor: '#fff',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                backgroundColor: '#2196f3',
                                                color: '#fff',
                                                p: 1,
                                                fontWeight: 'bold',
                                                fontSize: '0.9rem',
                                                textAlign: 'center',
                                            }}
                                        >
                                            {item.title}
                                        </Box>
                                        <Box
                                            component="img"
                                            src={item.image}
                                            alt={item.title}
                                            sx={{ width: '100%', height: 'auto', mt: 1 }}
                                        />
                                    </Paper>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>

            </FadeSection>
            <FadeSection>
                <Container>
                    <Box sx={{ px: 4, py: 6, backgroundColor: '#f7fafd' }}>
                        <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center">
                            Case Studies
                        </Typography>

                        <Grid container spacing={4}>
                            {caseStudies.map((item, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Link href={item.link} underline="none" target="_blank" rel="noopener noreferrer">
                                        <Card
                                            sx={{
                                                height: '100%',
                                                border: '1px solid #e0e0e0',
                                                boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
                                                transition: 'transform 0.2s, box-shadow 0.3s',
                                                '&:hover': {
                                                    boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
                                                    transform: 'translateY(-4px)',
                                                },
                                            }}
                                        >
                                            <Box sx={{ overflow: 'hidden' }}>
                                                <CardMedia
                                                    component="img"
                                                    height="160"
                                                    image={item.image}
                                                    alt={item.title}
                                                    sx={{
                                                        objectFit: 'cover',
                                                        transition: 'transform 0.4s ease',
                                                        '&:hover': {
                                                            transform: 'scale(1.05)',
                                                        },
                                                    }}
                                                />
                                            </Box>
                                            <CardContent>
                                                <Typography
                                                    variant="subtitle1"
                                                    fontWeight={600}
                                                    gutterBottom
                                                    sx={{
                                                        transition: 'color 0.3s',
                                                        '&:hover': { color: '#007bff' },
                                                    }}
                                                >
                                                    {item.title}
                                                </Typography>
                                                <Box mb={1} display="flex" flexWrap="wrap" gap={1}>
                                                    {item.tags.map((tag, i) => (
                                                        <Chip key={i} label={tag} size="small" sx={{ backgroundColor: '#f0f0f0' }} />
                                                    ))}
                                                </Box>
                                                <Typography variant="body2" color="text.secondary">
                                                    {item.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </FadeSection>
            <FadeSection id="download">
                <Container sx={{ mt: { xs: 12, sm: 10, } }}>
                    <Box
                        sx={{
                            background: '#009BFF',
                            color: 'white',
                            clipPath: {
                                xs: 'polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0 100%)',
                                md: 'polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)',
                            },
                            py: { xs: 5, sm: 6, },
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
                                    DevOps IT Outsourcing
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

export default DevOpsPage
