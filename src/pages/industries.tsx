import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import FadeSection from '../components/FadeSection'
import { Avatar, Box, Breadcrumbs, Button, Container, Divider, Grid, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, Paper, TextField, Typography } from '@mui/material'
import './hexagon.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import WifiIcon from '@mui/icons-material/Wifi'
import StoreIcon from '@mui/icons-material/Store'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import { Stack, useMediaQuery, useTheme } from '@mui/system'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ScrollToTopButton from '../components/ScrollToTopButton'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const items = [
    { title: 'Healthcare', icon: '🏥' },
    { title: 'E-commerce & Retail', icon: '🛒' },
    { title: 'Logistics & Transportation', icon: '🚚' },
    { title: 'Finance & Insurance', icon: '💰' },
    { title: 'Education', icon: '🎓' },
    { title: 'Hospitality & Travel', icon: '🧳' },
    { title: 'Media & Publishing', icon: '📘' },
    { title: 'Distribution', icon: '🔁' },
    { title: 'Telecom', icon: '📡' },
    { title: 'Telecom', icon: '📡' },
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
const industries = [
    {
        icon: "https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/industries/Telecom.webp",
        title: 'Telecom',
        href: '/industries/telecom',
        description: 'Unified Communication, Network and Access Management, Carrier VoIP, SIP, Asterisk, Soft Switch, 4G LTE, 5G Open RAN, Wireless and Edge Router.',
    },
    {
        icon: "https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/industries/Insurance.webp",
        title: 'Insurance',
        href: '/industries/insurance',
        description: 'AutoCare Insurance, AutoCare Tracking, Quotation Tool, Sales Support Tool, Sales Agent Learning Tool.',
    },
    {
        icon: "https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/industries/E-Commerce-Retail.webp",
        title: 'E-Commerce & Retail',
        href: '/industries/e-commerce-retail',
        description: 'Mobile Ecommerce, Cosmetic Ecommerce Platform, School Furniture Sales and Distribution Management System.',
    },
    {
        icon: "https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/industries/Finance.webp",
        title: 'Finance',
        href: '/industries/finance',
        description: 'Web3, Asset Management, Embedded Finance, Institutional Capital Markets, Payment.',
    },
    {
        icon: "https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/industries/Logistics.webp",
        title: 'Logistics',
        href: '/industries/logistics',
        description: 'Supply chain and logistics automation, fleet and vehicle management, inventory & warehouse management.',
    },
    {
        icon: "https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/industries/Automotive.webp",
        title: 'Automotive',
        href: '/industries/automotive',
        description: 'AR Navigation, ECU MCU Modeling, ECU Monitoring System Development, Surround View Camera ECU Development.',
    },
    {
        icon: "https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/industries/Healthcare.webp",
        title: 'Healthcare',
        href: '/industries/healthcare',
        description: 'Remote health monitoring, Patient analytics, Pharmacy automation, Fitness solutions, GNOME sequencing.',
    },
]

const IndustriePage = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md')) // xs + sm + md
    const Hexagon = ({ title, icon, delay = 0 }: { title: string; icon: string, delay: number }) => (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
        >
            <Box
                sx={{
                    width: { xs: 175, md: 170 },
                    height: { xs: 135, md: 140 },
                    bgcolor: 'white',
                    clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    boxShadow: 3,
                }}
            >
                <Typography variant="h5" fontSize={{ xs: 18, md: 24 }}>
                    {icon}
                </Typography>
                <Typography
                    variant="body2"
                    fontWeight="bold"
                    fontSize={{ xs: '0.75rem', md: '0.875rem' }}
                >
                    {title}
                </Typography>
            </Box>
        </motion.div>
    )

    return (
        <>
            <Header />
            <FadeSection id='banner'>
                <Box mt={17} p={4} sx={{ background: 'linear-gradient(to bottom, #1976d2, rgba(10, 75, 149, 0.56))' }} >
                    <Typography textAlign={"center"} fontWeight={"bold"} variant='h4' color={"white"}>
                        Industries
                    </Typography>
                    <img style={{ position: "absolute" }} width={"10%"} src="https://www.tmasolutions.com/media/services/decorLeft.webp" alt="" />
                    <Container>
                        <Typography textAlign={"center"} color={"white"} >
                            As one of the top software outsourcing companies in Vietnam, Solutions leverages our 28-year experiences working with leading technology companies to offer end-to-end software services and solutions for a variety of industries, helping our clients be more successful in their business.                            </Typography>
                    </Container>
                    {/* HEXAGON GRID SECTION */}
                    <Box sx={{ py: { xs: 4, md: 4 }, position: 'relative' }}>
                        <Container>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: { xs: 2, md: 3 },
                                }}
                            >
                                {isMobile ? (
                                    <>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                gap: 1,
                                                mb: 5
                                            }}
                                        >
                                            {Array.from({ length: Math.ceil(items.length / 3) }).map((_, groupIndex) => {
                                                const i = groupIndex * 3
                                                const top = items[i]
                                                const left = items[i + 1]
                                                const right = items[i + 2]

                                                return (
                                                    <Box key={groupIndex} sx={{ mb: -4.7 }}>
                                                        {/* 1 Hexagon ở giữa */}
                                                        {top && (
                                                            <Box
                                                                sx={{
                                                                    display: 'flex',
                                                                    justifyContent: 'center',
                                                                    mb: '-30px',
                                                                }}
                                                            >
                                                                <Hexagon title={top.title} icon={top.icon} delay={groupIndex * 0.3} />
                                                            </Box>
                                                        )}

                                                        {/* 2 Hexagon bên dưới */}
                                                        {(left || right) && (
                                                            <Box
                                                                sx={{
                                                                    display: 'flex',
                                                                    justifyContent: 'center',
                                                                    gap: 0.1,
                                                                }}
                                                            >
                                                                {left && (
                                                                    <Hexagon
                                                                        title={left.title}
                                                                        icon={left.icon}
                                                                        delay={groupIndex * 0.3 + 0.1}
                                                                    />
                                                                )}
                                                                {right && (
                                                                    <Hexagon
                                                                        title={right.title}
                                                                        icon={right.icon}
                                                                        delay={groupIndex * 0.3 + 0.2}
                                                                    />
                                                                )}
                                                            </Box>
                                                        )}
                                                    </Box>
                                                )
                                            })}
                                        </Box>

                                    </>
                                ) : (
                                    <>
                                        {/* Row 1 */}
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                flexWrap: 'wrap',
                                            }}
                                        >
                                            {items.slice(0, 3).map((item, index) => (
                                                <Hexagon key={index} title={item.title} icon={item.icon} delay={index * 0.2} />
                                            ))}
                                        </Box>

                                        {/* Row 2 – lệch ở mobile */}
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                flexWrap: 'wrap',
                                                mt: { xs: '-20px', md: '-56px' },
                                                ml: { xs: '80px', md: '1px' }, // dịch phải mạnh hơn ở mobile
                                            }}
                                        >
                                            {items.slice(3, 7).map((item, index) => (
                                                <Hexagon key={index + 3} title={item.title} icon={item.icon} delay={index * 0.2} />
                                            ))}
                                        </Box>

                                        {/* Row 3 – lệch ở mobile */}
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                flexWrap: 'wrap',
                                                mt: { xs: '-20px', md: '-55px' },
                                                ml: { xs: '40px', md: '1px' },
                                            }}
                                        >
                                            {items.slice(7).map((item, index) => (
                                                <Hexagon key={index + 6} title={item.title} icon={item.icon} delay={index * 0.2} />
                                            ))}
                                        </Box>
                                    </>
                                )}


                            </Box>
                        </Container>
                    </Box>

                    <Box
                        px={4}
                        py={6}
                        sx={{
                            backgroundColor: '#f9fbfd',
                            borderTopLeftRadius: '60px',
                            borderBottomRightRadius: '60px',
                            boxShadow: '0px 4px 20px rgba(0,0,0,0.05)', // Nhẹ nhàng nổi lên
                        }}
                    >
                        <Grid container spacing={4}>
                            {industries.map((item, index) => (
                                <Grid item xs={12} md={6} key={index}>
                                    <Stack direction="row" spacing={2} alignItems="flex-start">
                                        <Avatar
                                            sx={{
                                                bgcolor: '#e6f1fc',
                                                color: '#1976d2',
                                                width: 54,           // 👈 tăng kích thước
                                                height: 54,
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    bgcolor: '#1976d2',
                                                    color: '#fff',
                                                    transform: 'scale(1.2)',
                                                    cursor: 'pointer',
                                                },
                                            }}
                                        >
                                            <img width="60%" src={item.icon} alt="" /> {/* 👈 giữ icon gọn bên trong */}
                                        </Avatar>

                                        <Box>
                                            <Typography variant="subtitle1" fontWeight="bold">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" mt={0.5}>
                                                {item.description}
                                            </Typography>
                                            <Link href={item.href}>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        position: 'relative',
                                                        cursor: 'pointer',
                                                        mt: 1,
                                                        fontWeight: 600,
                                                        color: 'inherit',
                                                        transition: 'color 0.3s ease',
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
                                    </Stack>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                </Box>
            </FadeSection>
            <FadeSection >
                <Container>
                    <Box sx={{ mt: 5, px: 6, p: 2 }}>
                        <Breadcrumbs separator="›" aria-label="breadcrumb">
                            <Link underline="hover" color="#00A1F1" href="/">
                                <Typography fontWeight={900}>Home</Typography>
                            </Link>
                            <Typography color="text.primary">Industries</Typography>
                        </Breadcrumbs>
                    </Box>
                </Container>
            </FadeSection>
            <FadeSection id='SamplePartners'>
                <Box mt={1} textAlign={"center"}>
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
            </FadeSection>
            <FadeSection>
                <Box sx={{
                    background: 'linear-gradient(to bottom, #1976d2, rgba(149, 10, 138, 0.56))',
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',

                }} textAlign="center" py={3} >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        color={"white"}
                        sx={{ display: 'inline-block', px: 2, py: 0.5, borderRadius: 1 }}
                    >
                        Case Studies
                    </Typography>
                    <Typography color={"white"} variant="body1" mb={4}>
                        Discover Solutions’ sample projects, featuring success stories achieved by our software engineers.<br />
                        Witness the impact of our software outsourcing services on businesses and operations.
                    </Typography>
                    <Container>
                        <Container>
                            <Box sx={{ position: 'relative', py: 2 }}>
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    navigation={{
                                        prevEl: '.custom-swiper-prev',
                                        nextEl: '.custom-swiper-next',
                                    }}
                                    pagination={{ clickable: true }}
                                    autoplay={{ delay: 2000 }}
                                    spaceBetween={24}
                                    breakpoints={{
                                        0: { slidesPerView: 1 },
                                        600: { slidesPerView: 2 },
                                        960: { slidesPerView: 3 },
                                    }}
                                    style={{
                                        paddingBottom: '30px', // 👈 Thêm khoảng trống bên dưới cho pagination
                                    }}
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
            <ScrollToTopButton />
            <Footer />
        </>
    )
}

export default IndustriePage