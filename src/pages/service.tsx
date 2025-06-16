import React, { useEffect, useRef, useState } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { Box, Breadcrumbs, Button, Collapse, Container, Divider, Grid, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import FadeSection from '../components/FadeSection'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import SchoolIcon from '@mui/icons-material/School'
import EngineeringIcon from '@mui/icons-material/Engineering'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ScrollToTopButton from '../components/ScrollToTopButton'
import ScrollDots from '../components/ScrollDots'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import StorageIcon from '@mui/icons-material/Storage'
import SecurityIcon from '@mui/icons-material/Security'
import CloudIcon from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
const servicesData = [
    {
        title: 'Software Development',
        href: "/services/software-development",
        description: [
            'Develop new products',
            'Enhance existing products',
            'Maintenance & Supporting',
            'Porting & Migration',
            'Application re-design',
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
    { id: "Whatourclientssay", label: "What our clients say" }
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
            "Fitness Solution"
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
                    <Box mt={17} p={4} sx={{ background: "#1976d2" }} >
                        <Typography textAlign={"center"} variant='h4' color={"white"}>
                            Software Outsourcing Services
                        </Typography>
                        <img style={{ position: "absolute" }} width={"10%"} src="https://www.tmasolutions.com/media/services/decorLeft.webp" alt="" />
                        <Container>
                            <Typography textAlign={"center"} color={"white"} >
                                Solutions, the leading software outsourcing company in Vietnam, possesses several years of expertise in the software development life cycle (SDLC) process and agile approach. We can guarantee exceptional solutions, and craft tailored solutions for your needs.
                            </Typography>
                        </Container>
                        <Container sx={{ mt: 2 }}>
                            <img width={"98%"} src="https://tmastorage.azureedge.net/uploadfiles/Home/Services/page_home_section_service_desktop.webp" alt="" />
                            <img style={{ marginTop: "10px" }} width={"98%"} src="https://tmastorage.azureedge.net/uploadfiles/Service/service-2_20230626152321.745.webp" alt="" />
                        </Container>

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
                    <Container>
                        <Typography textAlign={"center"}  >
                            Solutions, the leading software outsourcing company in Vietnam, possesses several years of expertise in the software development life cycle (SDLC) process and agile approach. We can guarantee exceptional solutions, and craft tailored solutions for your needs.
                        </Typography>
                    </Container>
                    <Container sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={4}>
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
                    <Box mt={10}>
                        <Container>
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

                            <Grid container sx={{ py: 8 }} spacing={2} alignItems="flex-start">
                                {categories.map((cat, index) => {
                                    const hasExtra = cat.items.length > 3
                                    const visibleItems = cat.items.slice(0, 3)
                                    const hiddenItems = cat.items.slice(3)

                                    return (
                                        <Grid item xs={12} md={4} key={index}>
                                            <Box
                                                sx={{
                                                    position: 'relative',
                                                    backgroundColor: '#f5f9ff',
                                                    borderRadius: 2,
                                                    p: 3,
                                                    height: '100%',
                                                    overflow: 'hidden',
                                                    '&::before': {
                                                        content: '""',
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        width: '99%',
                                                        height: '98%',
                                                        border: '2px solid #1976d2',
                                                        borderRadius: 2,
                                                        opacity: 0,
                                                        transform: 'scale(0.9)',
                                                        transition: 'opacity 0.4s ease, transform 0.4s ease',
                                                        pointerEvents: 'none',
                                                    },
                                                    '&:hover::before': {
                                                        opacity: 1,
                                                        transform: 'scale(1)',
                                                    },
                                                }}
                                            >
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <img src={cat.img} width={"10%"} alt="" />
                                                    <Typography variant="h6" fontWeight="bold">
                                                        {cat.title}
                                                    </Typography>
                                                </Box>

                                                <Divider sx={{ my: 1 }} />

                                                <List dense>
                                                    {visibleItems.map((item, i) => (
                                                        <ListItem key={i} disableGutters>
                                                            <ListItemIcon sx={{ minWidth: 24 }}>
                                                                <FiberManualRecordIcon fontSize="small" sx={{ color: '#c1c1c1' }} />
                                                            </ListItemIcon>
                                                            <ListItemText primary={item} primaryTypographyProps={{ fontSize: 14 }} />
                                                        </ListItem>
                                                    ))}

                                                    <Collapse in={!!expandedItems[index]} timeout="auto" unmountOnExit>
                                                        {hiddenItems.map((item, i) => (
                                                            <ListItem key={i} disableGutters>
                                                                <ListItemIcon sx={{ minWidth: 24 }}>
                                                                    <FiberManualRecordIcon fontSize="small" sx={{ color: '#c1c1c1' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary={item} primaryTypographyProps={{ fontSize: 14 }} />
                                                            </ListItem>
                                                        ))}
                                                    </Collapse>
                                                </List>

                                                {hasExtra && (
                                                    <Box sx={{ position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)' }}>
                                                        <IconButton size="small" onClick={() => toggleExpand(index)}>
                                                            {expandedItems[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                                        </IconButton>
                                                    </Box>
                                                )}
                                            </Box>
                                        </Grid>
                                    )
                                })}
                            </Grid></Container>

                    </Box>

                </FadeSection>
                <FadeSection id="Whatourclientssay">
                    <Container  >
                        <Box
                            sx={{
                                background: '#009BFF',
                                color: 'white',
                                clipPath: 'polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)',
                                py: 8,
                                px: 4,
                                position: 'relative',
                                zIndex: 1,
                                mb: -23

                            }}
                        >
                            <Container>
                                <Typography variant='h4' textAlign="center" fontWeight="bold">
                                    What our clients say?
                                </Typography>
                                <Typography textAlign="center" mt={2} maxWidth="md" mx="auto">
                                    We sincerely appreciate our customers for their valuable feedback and support.
                                    Our top priority is to fulfill your business needs with our appropriate technology solutions.
                                </Typography>

                                <Box mt={4} textAlign="center">
                                    <Typography sx={{ fontStyle: 'italic' }}>
                                        “The management team is attentive, responsive to feedback and demonstrates initiative
                                        in continually improving effectiveness.”
                                    </Typography>
                                    <Typography mt={2} fontWeight="bold">
                                        Lori Ciaralli, Engineering Director, Network Management & Security, Ribbon Communications
                                    </Typography>
                                    <Typography>USA</Typography>
                                </Box>
                            </Container>
                        </Box>
                    </Container>
                </FadeSection>
            </Box>
            <ScrollToTopButton />
            <Footer />
        </>)
}

export default ServicePage