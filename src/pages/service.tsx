import React, { useEffect, useRef, useState } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { Box, Breadcrumbs, Button, Collapse, Container, Divider, Grid, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, Paper, TextField, Typography } from '@mui/material'
import FadeSection from '../components/FadeSection'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ScrollToTopButton from '../components/ScrollToTopButton'
import ScrollDots from '../components/ScrollDots'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import SlideInOnScroll from '../components/SlideInOnScroll'
import { click } from '@testing-library/user-event/dist/click'
const servicesData = [
    {
        title: 'Software Development',
        href: "/services/software-development",
        description: [
            'Develop new products',
            'Enhance existing products',
            'Maintenance & Supporting',
            'Porting & Migration',

        ],
        icon: <img width={"20%"} src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702103842.723.webp" alt="Software Development" />,
    },
    {
        title: 'Software Testing',
        href: "/services/testing",
        description: [
            'Functional testing',
            'System and integration testing',
            'Performance testing',
            'Security testing',
        ],
        icon: <img width={"20%"} src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702103852.647.webp" alt="Software Testing" />,
    },
    {
        title: 'Innovation as a Service',
        href: "/services/innovation-as-a-service",
        description: [
            'R&D',
            'PoC and Prototype development',
            'Technology roadmap',
            'Find technical solutions',
        ],
        icon: <img width={"20%"} src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702103902.235.webp" alt="Innovation as a Service" />,
    },
    {
        title: 'Digital Transformation',
        href: "/services/digital-transformation",
        description: [
            'Go Online',
            'Go Mobile',
            'Go Cloud',
            'Go Automation'
        ],
        icon: <img width={"20%"} src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702103910.701.webp" alt="Digital Transformation" />,
    },
]
const sections = [
    { id: "banner", label: "Banner" },
    { id: "OurSoftwareServices", label: "Our Software Services" },
    { id: "SamplePartners", label: "Sample Partners" },
    { id: "CaseStudies", label: "Case Studies" },
]

const categories = [
    {
        img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240711154741.713.webp",
        title: 'Telecom',
        items: [
            '5G Applications',
            '4G MVNO LTE EPC & MANO',
            'Network Transformation Solutions',
            'Enterprise Communication Solution',
        ],
    },
    {
        img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240711154756.705.webp",
        title: 'Logistics & Transportation',
        items: [
            'Vehicle Traffic Management',
            'Navigation Solution',
            'Route Information Lookup',
            'Lane and Vehicle Detection',
        ],
    },
    {
        img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240711154806.114.webp",
        title: 'E-Commerce, Retail & Distribution',
        items: [
            'Deal Management',
            'Mobile Ecommerce',
            'Cosmetic Ecommerce Platform',
            'School Furniture Sales and Distribution Management System',
        ],
    },
    {
        img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240711154817.034.webp",
        title: 'Healthcare',
        items: [
            " Remote Health Monitoring Platform",
            "Health Information Systems Programme (HISP)",
            "World Mosquito Program (WMP)",
            "Clinical Research Tools",

        ],
    },
    {
        img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240711154834.691.webp",
        title: 'Finance',
        items: [
            "  Cash Flow Management Application​",
            "Digital Product Trading",
            "NFT Trading Platform​",
            "Stable Coin​",
        ],
    },
    {
        img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240711154849.798.webp",
        title: 'Automotive',
        items: [
            'Infotainment HMI',
            'ECU MCU Modeling',
            'AR Navigation',
            'Traffic Management,'
        ],
    },
]

const ServicePage = () => {
    const [hovered, setHovered] = useState<any>(null)
    const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({})

    const toggleExpand = (index: number) => {
        setExpandedItems((prev) => ({
            ...prev,
            [index]: !prev[index],
        }))
    }
    return (
        <>
            <Header />
            <ScrollDots sections={sections} />
            <Box>
                <FadeSection id='banner'>
                    <Box mt={17} p={4} sx={{
                        background: 'linear-gradient(to bottom, #1976d2, rgba(10, 75, 149, 0.56))',
                    }} >
                        <Typography textAlign={"center"} variant='h4' color={"white"}>
                            Software Outsourcing Services
                        </Typography>
                        <img style={{ position: "absolute" }} width={"10%"} src="https://www.tmasolutions.com/media/services/decorLeft.webp" alt="" />
                        <Container>
                            <Typography textAlign={"center"} color={"white"} >
                                Solutions, the leading software outsourcing company in Vietnam, possesses several years of expertise in the software development life cycle (SDLC) process and agile approach. We can guarantee exceptional solutions, and craft tailored solutions for your needs.
                            </Typography>
                        </Container>
                        <SlideInOnScroll>
                            <Container sx={{ mt: 2 }}>
                                <img width={"98%"} src="https://tmastorage.azureedge.net/uploadfiles/Home/Services/page_home_section_service_desktop.webp" alt="" />
                                <img style={{ marginTop: "10px" }} width={"98%"} src="https://tmastorage.azureedge.net/uploadfiles/Service/service-2_20230626152321.745.webp" alt="" />
                            </Container>
                        </SlideInOnScroll>

                    </Box>
                </FadeSection>
                <FadeSection >
                    <Container>
                        <Box sx={{ mt: 4, px: 4, p: 2 }}>
                            <Breadcrumbs separator="›" aria-label="breadcrumb">
                                <Link underline="hover" color="#00A1F1" href="/">
                                    <Typography fontWeight={700}>Home</Typography>
                                </Link>
                                <Typography color="text.primary">Service</Typography>
                            </Breadcrumbs>
                        </Box>
                    </Container>
                </FadeSection>
                <FadeSection id='OurSoftwareServices'>
                    <Box textAlign={"center"}>
                        <img src="https://tmastorage.azureedge.net/cdn/en/_next/static/media/iconSection.9d0bc79c.webp" alt="" />
                    </Box>
                    <Typography textAlign={"center"} variant='h4' >
                        Software Outsourcing Services
                    </Typography>

                    <Container sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={2}>
                            {servicesData.map((service, index) => (
                                <Grid item xs={12} sm={6} md={3} key={index} sx={{ height: '100%' }}>
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            padding: 2,
                                            bgcolor: '#E3F2FD',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between', // Giữ Explore More ở đáy
                                        }}
                                    >
                                        {/* Icon */}
                                        <Box>{service.icon}</Box>

                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                                {service.title}
                                            </Typography>
                                            <Divider sx={{ mb: 2 }} />

                                            <Box>
                                                {service.description.map((item, idx) => (
                                                    <Box
                                                        component="li"
                                                        key={idx}
                                                        sx={{ display: 'flex', mb: 0.5 }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                width: 8,
                                                                height: 8,
                                                                borderRadius: '50%',
                                                                bgcolor: '#1976d2',
                                                                mt: '6px',
                                                                mr: 1,
                                                            }}
                                                        />
                                                        <Typography variant="body2">{item}</Typography>
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Box>

                                        {/* Explore more */}
                                        <Box mt={2}>
                                            <Link href={service.href}>
                                                <Typography
                                                    component="a"
                                                    variant="body2"
                                                    sx={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        position: 'relative',
                                                        cursor: 'pointer',
                                                        color: 'inherit',
                                                        transition: 'color 0.3s ease',
                                                        textDecoration: 'none',
                                                        '&::after': {
                                                            content: '""',
                                                            position: 'absolute',
                                                            left: 0,
                                                            bottom: -2,
                                                            height: '2px',
                                                            backgroundColor: 'blue',
                                                            width: 0,
                                                            transition: 'width 0.5s ease',
                                                        },
                                                        '&:hover': {
                                                            color: 'blue',
                                                            '&::after': {
                                                                width: '100%',
                                                            },
                                                            '& svg': {
                                                                color: 'blue',
                                                                transition: 'color 0.3s ease',
                                                            },
                                                        },
                                                        '& svg': {
                                                            ml: 1,
                                                            transition: 'color 0.3s ease',
                                                        },
                                                    }}
                                                >
                                                    Explore More
                                                    <ArrowForwardIcon />
                                                </Typography>
                                            </Link>
                                        </Box>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>

                </FadeSection>
                <FadeSection id='SamplePartners'>
                    <Box>
                        <Box mt={15} textAlign={"center"}>
                            <img src="https://tmastorage.azureedge.net/cdn/en/_next/static/media/iconSection.9d0bc79c.webp" alt="" />
                        </Box>
                        <Typography textAlign={"center"} variant='h4' >
                            Sample Partners
                        </Typography>
                        <Container sx={{ mt: 2 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexWrap: 'wrap',
                                    gap: 2,
                                }}
                            >
                                <img
                                    src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240701095819.642.webp"
                                    alt=""
                                    style={{ width: '22%', height: '100%' }}
                                />
                                <img
                                    src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240701095831.690.webp"
                                    alt=""
                                    style={{ width: '22%', height: '100%' }}
                                />
                                <img
                                    src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240701095840.768.webp"
                                    alt=""
                                    style={{ width: '18%', height: '100%' }}
                                />
                                <img
                                    src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240701095851.914.webp"
                                    alt=""
                                    style={{ width: '18%', height: '100%' }}
                                />
                            </Box>
                        </Container>
                    </Box>
                </FadeSection>
                <FadeSection id='CaseStudies'>
                    <Box sx={{
                        background: 'linear-gradient(to bottom, #1976d2, rgba(149, 10, 138, 0.56))',
                        backdropFilter: 'blur(6px)',
                        WebkitBackdropFilter: 'blur(6px)',
                    }} p={3} mt={10}>

                        <Box textAlign={"center"}>
                            <img src="https://tmastorage.azureedge.net/cdn/en/_next/static/media/iconSection.9d0bc79c.webp" alt="" />
                        </Box>
                        <Typography textAlign={"center"} variant='h4' >
                            Case Studies
                        </Typography>
                        <Container>
                            <Typography textAlign={"center"}  >
                                Discover Solutions' sample projects, featuring success stories achieved by our software engineers.
                                Witness the impact of our software outsourcing services on businesses and operations.
                            </Typography>
                        </Container>
                        <Container>
                            <Box sx={{ position: 'relative', py: 6 }}>
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    navigation={{
                                        prevEl: '.custom-swiper-prev',
                                        nextEl: '.custom-swiper-next',
                                    }}
                                    pagination={{ clickable: true }} // 👈 bật pagination
                                    autoplay={{ delay: 2000 }}
                                    spaceBetween={24}
                                    breakpoints={{
                                        0: { slidesPerView: 1 },
                                        600: { slidesPerView: 2 },
                                        960: { slidesPerView: 3 },
                                    }}
                                    style={{ paddingBottom: '30px' }}
                                >
                                    {categories.map((cat, index) => (
                                        <SwiperSlide key={index}>
                                            <Box
                                                sx={{
                                                    backgroundColor: '#f5f9ff',
                                                    borderRadius: 2,
                                                    p: 2,
                                                    height: '100%',
                                                    border: '2px solid transparent',
                                                    transition: '0.4s',
                                                    '&:hover': {
                                                        borderColor: '#1976d2',
                                                    },
                                                }}
                                            >
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <img src={cat.img} width="10%" alt="" />
                                                    <Typography fontSize={"15px"} fontWeight="bold">
                                                        {cat.title}
                                                    </Typography>
                                                </Box>

                                                <Divider sx={{ my: 1 }} />

                                                <List dense>
                                                    {cat.items.map((item, i) => (
                                                        <ListItem key={i} disableGutters>
                                                            <ListItemIcon sx={{ minWidth: 24 }}>
                                                                <FiberManualRecordIcon fontSize="small" sx={{ color: '#c1c1c1' }} />
                                                            </ListItemIcon>
                                                            <ListItemText primary={item} primaryTypographyProps={{ fontSize: 14 }} />
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </Box>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* Prev Button */}
                                <IconButton
                                    className="custom-swiper-prev"
                                    sx={{
                                        position: 'absolute',
                                        display: { xs: 'none', md: 'flex' },
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
                                        display: { xs: 'none', md: 'flex' },
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

                        </Container>

                    </Box>

                </FadeSection>
                <FadeSection>
                      <Box sx={{ background: '#1976d2', py: { xs: 4, md: 6 } }}>
                                        <Container>
                                            <Grid container spacing={1} alignItems="center">
                                                {/* LEFT: Text Section */}
                                                <Grid item xs={12} md={6}>
                                                    <Box sx={{ color: 'white' }}>
                                                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                                                            Technology Insights Right to <br /> Your Inbox
                                                        </Typography>
                                                        <Typography variant="body1">
                                                            Subscribe to our resource to stay in the loop with news, trends, <br />
                                                            and key highlights in today’s software industry.
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                    
                                                {/* RIGHT: Subscribe Form */}
                                                <Grid item xs={12} md={6}>
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: 1,
                                                            maxWidth: 400,
                                                            width: '100%',
                                                            color: 'white',
                                                            ml: 'auto',
                                                        }}
                                                    >
                                                        <Typography variant="body2" fontWeight={500}>
                                                            Email address <span style={{ color: 'red' }}>*</span>
                                                        </Typography>
                                                        <TextField
                                                            placeholder="Your Email Address"
                                                            variant="outlined"
                                                            fullWidth
                                                            InputProps={{
                                                                sx: {
                                                                    bgcolor: '#102a43',
                                                                    borderRadius: 0,
                                                                    color: 'white',
                                                                },
                                                            }}
                                                            InputLabelProps={{
                                                                sx: { color: 'white' },
                                                            }}
                                                        />
                                                        <Button
                                                            variant="contained"
                                                            sx={{
                                                                bgcolor: '#29b6f6',
                                                                textTransform: 'none',
                                                                fontWeight: 600,
                                                                width: 'fit-content',
                                                                px: 3,
                                                                '&:hover': {
                                                                    bgcolor: '#0288d1',
                                                                },
                                                            }}
                                                        >
                                                            Subscribe
                                                        </Button>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Container>
                                    </Box>
                </FadeSection>
            </Box>
            <ScrollToTopButton />
            <Footer />
        </>)
}

export default ServicePage