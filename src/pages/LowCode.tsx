import React, { useState } from 'react'
import { Box, Grid, Typography, Avatar, Container, CssBaseline, Stack, Link, Paper, List, ListItemButton, ListItemIcon, ListItemText, Divider, ListItem, Fade, Card, CardContent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Chip, CardMedia, IconButton, Pagination } from '@mui/material'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import DiamondIcon from '@mui/icons-material/Diamond'
import SlideInOnScroll from '../components/SlideInOnScroll'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import SwiperCore from 'swiper'
import { Pagination as SwiperPagination, Navigation, Autoplay } from 'swiper/modules'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
const lowCodeImages = [
    'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240515142845.908.webp',
    'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240515142932.937.webp',
    'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240515142940.025.webp',
    'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240515142957.216.webp',
    'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240515143003.259.webp',
]


const technologies = [
    {
        title: 'OutSystems',
        items: [
            'OutSystems UI',
            'Service Studio',
            'Integration Studio',
            'Forge',
        ],
    },
    {
        title: 'Salesforce',
        items: [
            'Lightning',
            'Visualforce and Apex',
            'Sales Cloud',
            'Service Cloud',
        ],
    },
    {
        title: 'Microsoft Power',
        items: [
            'Power BI',
            'Power Automate',
        ],
    },
]

const individualItems = [
    { label: 'Delivery Methodology', icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240528084034.702.webp' },
    { label: 'UX/UI', icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240528084117.835.webp' },
    { label: 'Architecture', icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240528084140.121.webp' },
    { label: 'IT Development', icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240528084221.174.webp' },
    { label: 'Reusability', icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240528084244.280.webp' },
    { label: 'Quality Assurance', icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240528084307.406.webp' },
]

const services = [
    {
        title: 'Modernize legacy ecosystems',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240515152135.030.webp',
        items: [
            'Claim Service Center Portal',
            'Claim mobile application',
            'Garage Management portal',
        ],
    },
    {
        title: 'Digital transformation for business',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240515152236.350.webp',
        items: [
            'Import/Export data to core data platform ecosystems',
            'Bridging data between ecosystems',
        ],
    },
    {
        title: 'Automate processes',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240515152242.630.webp',
        items: [
            'Performance Management Portal',
            'Employee Benefits Portal',
            'Rostering/Workforce Management Portal',
        ],
    },
    {
        title: 'Innovate workplace',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240515152248.740.webp',
        items: [
            'Purchasing Orders and Invoice processing',
            'Expense Tracker and Report',
            'Automated Underwriting',
            'Automated Claims',
        ],
    },
    {
        title: 'Integrate the ecosystems',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240515152254.085.webp',
        items: [
            'Personal Financial Questionnaire Portal',
            'Wealth Management Considerations Portal',
            'Adviser Meeting Notes Builder portal',
        ],
    },
]
const topImages = [

    {
        src: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240515151823.221.webp',
        alt: 'Architecture Design',
        caption: 'Our application architecture design',
    },
    {
        src: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240515151831.913.webp',
        alt: 'Maintainability Process',
        caption: 'Process of code maintainability and architecture integration',
    },
]

const bottomImages = [
    {
        src: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240515151946.490.webp',
    },
    {
        src: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240515151955.377.webp',
    },
    {
        src: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240515152006.848.webp',
    },
    {
        src: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240515152014.537.webp',
    },
]

const LowCodePage = () => {


    return (
        <>
            <CssBaseline />
            <Header />
            <FadeSection>
                <Box
                    sx={{
                        background: 'linear-gradient(to bottom, #1976d2, rgba(10, 75, 149, 0.56))',
                        py: 6,
                        mt: 18,
                        px: 2,
                        textAlign: 'center',
                        color: 'white',
                        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
                        WebkitClipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
                        overflow: 'hidden',
                    }}
                >
                    <Typography variant="h4" fontWeight="bold" mb={2}>
                        Low-Code Solution Services
                    </Typography>
                    <Typography variant="body1" maxWidth="900px" mx="auto" mb={4}>
                        has 7 years of experience in providing professional low code, high performance and quality solution services to our valued customers of Finance, Insurance, Banking in USA and Australia.
                    </Typography>

                    <Grid container spacing={2} justifyContent="center">
                        {lowCodeImages.map((img, index) => (
                            <Grid item key={index}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 2,
                                        width: 180,
                                        height: 90,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 1,
                                        backgroundColor: 'white',
                                    }}
                                >
                                    <Box component="img" src={img} alt={`low-code-${index}`} sx={{ maxWidth: '100%', maxHeight: '100%' }} />
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
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

                            <Typography color="text.primary">Low-Code</Typography>
                        </Stack>

                    </Box>
                </Container>
            </FadeSection>
            <FadeSection id='about' >
                <Box >
                    <Container>
                        <Box sx={{ py: 6, px: 2, backgroundColor: 'white' }}>
                            <Grid container spacing={4} justifyContent="center">
                                {/* Left Column: Cross-Functional Teams */}
                                <Grid item xs={12} md={6}>
                                    <SlideInOnScroll>
                                        <Typography variant="h5" fontWeight="bold" mb={2}>
                                            Cross-Functional Teams
                                        </Typography>

                                        <Grid container spacing={2}>
                                            {/* Render individual items */}
                                            {individualItems.map((item, index) => (
                                                <Grid item xs={6} sm={4} key={index}>
                                                    <Paper
                                                        variant="outlined"
                                                        sx={{
                                                            p: 2,
                                                            textAlign: 'center',
                                                            height: '100%',
                                                            borderStyle: 'dashed',
                                                            borderColor: '#00AEEF',
                                                            borderRadius: 2,
                                                        }}
                                                    >
                                                        {item.icon && (
                                                            <Box
                                                                component="img"
                                                                src={item.icon}
                                                                alt={item.label}
                                                                sx={{ width: 30, height: 30, mb: 1 }}
                                                            />
                                                        )}
                                                        <Typography variant="body2" fontWeight="500">
                                                            {item.label}
                                                        </Typography>
                                                    </Paper>
                                                </Grid>
                                            ))}

                                            {/* DevOps Block */}
                                            <Grid item xs={12}>
                                                <Paper
                                                    variant="outlined"
                                                    sx={{
                                                        p: 2,
                                                        borderStyle: 'dashed',
                                                        borderColor: '#00AEEF',
                                                        borderRadius: 2,
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    {/* DevOps */}
                                                    <Box mb={2}>
                                                        <Box
                                                            component="img"
                                                            src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240528084332.791.webp"
                                                            alt="DevOps"
                                                            sx={{ width: 30, height: 30, mb: 1 }}
                                                        />
                                                        <Typography variant="body2" fontWeight="500">
                                                            DevOps
                                                        </Typography>
                                                    </Box>

                                                    {/* Release Management in nested dashed box */}
                                                    <Box
                                                        sx={{
                                                            border: '1px dashed #00AEEF',
                                                            borderRadius: 2,
                                                            py: 1.5,
                                                            px: 2,
                                                            mb: 2,
                                                            display: 'inline-block',
                                                        }}
                                                    >
                                                        <Box
                                                            component="img"
                                                            src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240528084530.145.webp"
                                                            alt="Release Management"
                                                            sx={{ width: 30, height: 30, mb: 1 }}
                                                        />
                                                        <Typography variant="body2" fontWeight="500">
                                                            Release Management
                                                        </Typography>
                                                    </Box>

                                                    {/* Test Automation & Monitoring side by side */}
                                                    <Grid container spacing={2} justifyContent="center">
                                                        {['Test Automation', 'Monitoring'].map((label, idx) => (
                                                            <Grid item xs={6} sm={4} key={idx}>
                                                                <Paper
                                                                    variant="outlined"
                                                                    sx={{
                                                                        p: 1.5,
                                                                        borderStyle: 'dashed',
                                                                        borderColor: '#00AEEF',
                                                                        borderRadius: 2,
                                                                        textAlign: 'center',
                                                                    }}
                                                                >
                                                                    <Typography variant="body2" fontWeight="500">
                                                                        {label}
                                                                    </Typography>
                                                                </Paper>
                                                            </Grid>
                                                        ))}
                                                    </Grid>
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </SlideInOnScroll>
                                </Grid>

                                {/* Right Column: Development Cycle */}
                                <Grid item xs={12} md={6} textAlign="center">
                                    <SlideInOnScroll direction='right'>
                                        <Typography variant="h5" fontWeight="bold" mb={2}>
                                            Development Cycle
                                        </Typography>
                                        <Box
                                            component="img"
                                            src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240515143721.146.webp"
                                            alt="Development Cycle"
                                            sx={{ maxWidth: '100%', height: 'auto' }}
                                        /></SlideInOnScroll>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </Box>
            </FadeSection>
            <FadeSection>
                <Box
                    sx={{
                        py: 8,
                        background: 'linear-gradient(to bottom, #007cf0, #00dfd8)',
                        textAlign: 'center',

                    }}
                >
                    <Container>
                        {/* Header */}
                        <Box mb={4}>
                            <Box
                                component="img"
                                src="https://www.tmasolutions.com/media/technologies/lowCode/icon_head_lowcode.webp"
                                alt="Services Icon"
                                sx={{ width: 30, mb: 1 }}
                            />
                            <Typography variant="h4" color="white" fontWeight="bold">
                                Services
                            </Typography>
                        </Box>

                        {/* Swiper navigation buttons */}
                        <Box sx={{ position: 'relative', width: '100%' }}>
                            <Swiper
                                modules={[Navigation, SwiperPagination, Autoplay]}
                                navigation={{
                                    prevEl: '.custom-swiper-prev',
                                    nextEl: '.custom-swiper-next',
                                }}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 2000 }}
                                spaceBetween={30}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                            >
                                {services.map((service, index) => (
                                    <SwiperSlide key={index}>
                                        <Paper
                                            elevation={3}
                                            sx={{
                                                p: 3,
                                                textAlign: 'left',
                                                minHeight: 240,
                                            }}
                                        >
                                            <Box display="flex" alignItems="center" mb={1}>
                                                <Box
                                                    component="img"
                                                    src={service.icon}
                                                    alt={service.title}
                                                    sx={{ width: 24, height: 24, mr: 1 }}
                                                />
                                                <Typography variant="subtitle1" fontWeight="bold">
                                                    {service.title}
                                                </Typography>
                                            </Box>
                                            <Box component="hr" sx={{ borderColor: '#ccc', my: 1 }} />
                                            <List dense>
                                                {service.items.map((item, i) => (
                                                    <ListItem key={i} disablePadding>
                                                        <ListItemIcon sx={{ minWidth: 24 }}>
                                                            <FiberManualRecordIcon sx={{ fontSize: 6, color: '#007cf0' }} />
                                                        </ListItemIcon>
                                                        <ListItemText primary={item} primaryTypographyProps={{ fontSize: 14 }} />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Paper>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Nút prev */}
                            <IconButton
                                className="custom-swiper-prev"
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: { xs: -20, sm: -40, md: -50 },
                                    transform: 'translateY(-50%)',
                                    zIndex: 10,
                                    backgroundColor: 'white',
                                    boxShadow: 1,
                                    '&:hover': { backgroundColor: '#e0f2ff' },
                                }}
                            >
                                <ArrowBackIosNewIcon />
                            </IconButton>

                            {/* Nút next */}
                            <IconButton
                                className="custom-swiper-next"
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: { xs: -20, sm: -40, md: -50 },
                                    transform: 'translateY(-50%)',
                                    zIndex: 10,
                                    backgroundColor: 'white',
                                    boxShadow: 1,
                                    '&:hover': { backgroundColor: '#e0f2ff' },
                                }}
                            >
                                <ArrowForwardIosIcon />
                            </IconButton>
                        </Box>




                        {/* Swiper pagination dots will render here */}

                    </Container>
                </Box>  <Box mt={3}>
                    <div className="swiper-pagination" />
                </Box>

            </FadeSection>
            <FadeSection>
                <Container>
                    <Box sx={{ py: 8, }}>
                        <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
                            {/* Section title */}
                            <Typography variant="h4" fontWeight={700} textAlign="center" mb={4}>
                                Solutions
                            </Typography>

                            {/* Feature text bullets */}
                            <Box mb={2}>
                                <Typography fontWeight={700}>With low-code platforms can develop/deliver solutions using:</Typography>
                                <Typography><CheckBoxOutlineBlankIcon sx={{ fontSize: 14, color: '#0094ff' }} /> Simple clicks and drag/drop actions</Typography>
                            </Box>

                            {/* Top Images with captions */}
                            <Grid container spacing={6} >
                                {topImages.map(({ src, alt, caption }, idx) => (
                                    <Grid item xs={12} key={idx}>
                                        <Box
                                            component="img"
                                            src={src}
                                            alt={alt}
                                            sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }}
                                        />
                                        <Typography variant="subtitle1" textAlign="center">
                                            {caption}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>

                            <Grid container spacing={3} justifyContent="center">
                                {bottomImages.map(({ src }, idx) => (
                                    <Grid item xs={12} sm={6} md={3} key={idx} textAlign="center">
                                        <Box
                                            component="img"
                                            src={src}
                                            alt={`benefit-${idx + 1}`}
                                            sx={{ width: '100%', borderRadius: 2, boxShadow: 2 }}
                                        />

                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </FadeSection>
            <FadeSection>
                <Box sx={{
                    background: 'linear-gradient(to bottom, #1976d2, rgba(149, 10, 138, 0.56))',
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)', py: 8
                }}>
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <DiamondIcon sx={{ color: '#38a4f8' }} />
                        <Typography variant="h4" fontWeight={700}>
                            Technologies
                        </Typography>
                    </Box>

                    <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
                        <Paper elevation={3}>
                            <Box sx={{ backgroundColor: '#2196f3', color: 'white', py: 2 }}>
                                <Typography textAlign={"center"} variant="h6">Platform</Typography>
                            </Box>

                            <Grid container>
                                {technologies.map((tech, index) => (
                                    <Grid
                                        item
                                        xs={12}
                                        md={4}
                                        key={index}
                                        sx={{
                                            borderRight: index < technologies.length - 1 ? '1px solid #e0e0e0' : 'none',
                                            backgroundColor: '#e3f2fd',
                                            px: 3,
                                            py: 2,
                                        }}
                                    >
                                        <Typography variant="h6" fontWeight="bold" mb={1}>
                                            {tech.title}
                                        </Typography>
                                        <List dense>
                                            {tech.items.map((item, idx) => (
                                                <ListItem key={idx} sx={{ py: 0.5 }}>
                                                    <ListItemIcon sx={{ minWidth: '30px', color: '#2196f3' }}>
                                                        <DiamondIcon sx={{ fontSize: 12 }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary={item} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Grid>
                                ))}
                            </Grid>
                        </Paper>
                    </Box>
                </Box>
            </FadeSection>
            {/* <FadeSection>
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
            </FadeSection> */}

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
                                    Low-code IT Outsourcing
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

export default LowCodePage
