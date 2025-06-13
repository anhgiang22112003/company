import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import FadeSection from '../components/FadeSection'
import { Avatar, Box, Breadcrumbs, Container, Divider, Grid, Link, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import './hexagon.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import SchoolIcon from '@mui/icons-material/School'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import WifiIcon from '@mui/icons-material/Wifi'
import StoreIcon from '@mui/icons-material/Store'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import { Stack } from '@mui/system'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import WysiwygIcon from '@mui/icons-material/Wysiwyg'
import { Wifi, LocalShipping, ShoppingCart, AttachMoney, DirectionsCar } from '@mui/icons-material'
import ScrollToTopButton from '../components/ScrollToTopButton'

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
const caseStudies = [
    {
        title: 'Telecom',
        icon: <Wifi fontSize="large" color="primary" />,
        items: ['5G Applications', '4G MVNO LTE EPC & MANO', 'Network Transformation Solutions', 'Enterprise Communication Solution']
    },
    {
        title: 'Logistics & Transportation',
        icon: <LocalShipping fontSize="large" color="primary" />,
        items: ['Vehicle Traffic Management', 'Navigation Solution', 'Route Information Lookup', 'Lane and Vehicle Detection']
    },
    {
        title: 'Ecommerce, Retail & Distribution',
        icon: <ShoppingCart fontSize="large" color="primary" />,
        items: ['Deal Management', 'Mobile Ecommerce', 'Cosmetic Ecommerce Platform', 'School Furniture Sales and Distribution']
    },
    {
        title: 'Healthcare',
        icon: <WysiwygIcon fontSize="large" color="primary" />,
        items: ['Remote Health Monitoring Platform', 'Health Information Systems Programme (HISP)', 'World Mosquito Program (VMP)', 'Clinical Research Tools']
    },
    {
        title: 'Finance',
        icon: <AttachMoney fontSize="large" color="primary" />,
        items: ['Cash Flow Management Application', 'Digital Product Trading', 'NFT Trading Platform', 'Stable Coin']
    },
    {
        title: 'Automotive',
        icon: <DirectionsCar fontSize="large" color="primary" />,
        items: ['Infotainment HMI', 'Camera ECU', 'MCU Vehicle Functions', 'Lane and Vehicle Detection']
    }
]
const industries = [
    {
        icon: <WifiIcon />,
        title: 'Telecom',
        href: '/industries/telecom',
        description: 'Unified Communication, Network and Access Management, Carrier VoIP, SIP, Asterisk, Soft Switch, 4G LTE, 5G Open RAN, Wireless and Edge Router.',
    },
    {
        icon: <HealthAndSafetyIcon />,
        title: 'Insurance',
        href: '/industries/insurance',
        description: 'AutoCare Insurance, AutoCare Tracking, Quotation Tool, Sales Support Tool, Sales Agent Learning Tool.',
    },
    {
        icon: <StoreIcon />,
        title: 'E-Commerce & Retail',
        href: '/industries/e-commerce-retail',
        description: 'Mobile Ecommerce, Cosmetic Ecommerce Platform, School Furniture Sales and Distribution Management System.',
    },
    {
        icon: <AttachMoneyIcon />,
        title: 'Finance',
        href: '/industries/finance',
        description: 'Web3, Asset Management, Embedded Finance, Institutional Capital Markets, Payment.',
    },
    {
        icon: <LocalShippingIcon />,
        title: 'Logistics',
        href: '/industries/logistics',
        description: 'Supply chain and logistics automation, fleet and vehicle management, inventory & warehouse management.',
    },
    {
        icon: <DirectionsCarIcon />,
        title: 'Automotive',
        href: '/industries/automotive',
        description: 'AR Navigation, ECU MCU Modeling, ECU Monitoring System Development, Surround View Camera ECU Development.',
    },
    {
        icon: <HealthAndSafetyIcon />,
        title: 'Healthcare',
        href: '/industries/healthcare',
        description: 'Remote health monitoring, Patient analytics, Pharmacy automation, Fitness solutions, GNOME sequencing.',
    },
]

const IndustriePage = () => {
    const Hexagon = ({ title, icon }: { title: string; icon: string }) => (
        <Box
            sx={{
                width: 160,
                height: 140,
                bgcolor: 'white',
                clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                boxShadow: 3,
                mx: 1,
                my: { xs: 0.5, md: 1 }, // giảm khoảng cách hàng
            }}
        >
            <Typography variant="h5" fontSize={24}>
                {icon}
            </Typography>
            <Typography variant="body2" fontWeight="bold">
                {title}
            </Typography>
        </Box>
    )


    const CategoryCard = ({ icon, title, items }: any) => (
        <Paper
            elevation={3}
            sx={{
                padding: 2,
                borderRadius: 2,
                border: '2px solid transparent',
                transition: 'all 0.3s ease',
                '&:hover': {
                    border: '2px solid #1976d2',
                    boxShadow: '0 4px 20px rgba(25, 118, 210, 0.2)',
                },
            }}
        >
            <Box display="flex" flexDirection="column" alignItems="center">
                {icon}
                <Typography variant="h6" fontWeight="bold" mt={1}>
                    {title}
                </Typography>
            </Box>
            <Divider
                sx={{
                    marginY: 1,
                    height: '2px',
                    backgroundColor: '#e0e0e0',
                    transition: 'background-color 0.3s ease',
                    '.MuiPaper-root:hover &': {
                        backgroundColor: '#1976d2',
                    }
                }}
            />
            <List dense>
                {items?.map((item: any, index: any) => (
                    <ListItem key={index} sx={{ paddingY: 0.5 }}>
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
        </Paper>
    )

    return (
        <>
            <Header />
            <FadeSection id='banner'>
                <Box mt={17} p={4} sx={{ background: "#1976d2" }} >
                    <Typography textAlign={"center"} fontWeight={"bold"} variant='h4' color={"white"}>
                        Industries
                    </Typography>
                    <img style={{ position: "absolute" }} width={"10%"} src="https://www.tmasolutions.com/media/services/decorLeft.webp" alt="" />
                    <Container>
                        <Typography textAlign={"center"} color={"white"} >
                            As one of the top software outsourcing companies in Vietnam, Solutions leverages our 28-year experiences working with leading technology companies to offer end-to-end software services and solutions for a variety of industries, helping our clients be more successful in their business.                            </Typography>
                    </Container>
                    {/* HEXAGON GRID SECTION */}
                    <Box sx={{ py: { xs: 4, md: 6 }, position: 'relative' }}>
                        <Container>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: { xs: 2, md: 3 },
                                }}
                            >
                                {/* Row 1 */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    {items.slice(0, 3).map((item, index) => (
                                        <Hexagon key={index} title={item.title} icon={item.icon} />
                                    ))}
                                </Box>

                                {/* Row 2 – lệch */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        flexWrap: 'wrap',
                                        mt: { xs: '-16px', md: '-56px' }, // khoảng âm để khớp đỉnh - đáy
                                        ml: { xs: '40px', md: '10px' },    // lệch hàng
                                    }}
                                >
                                    {items.slice(3, 7).map((item, index) => (
                                        <Hexagon key={index + 3} title={item.title} icon={item.icon} />
                                    ))}
                                </Box>

                                {/* Row 3 */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        flexWrap: 'wrap',
                                        mt: { xs: '-16px', md: '-53px' }, // khoảng âm để khớp đỉnh - đáy
                                        ml: { xs: '40px', md: '10px' },
                                    }}
                                >
                                    {items.slice(7).map((item, index) => (
                                        <Hexagon key={index + 6} title={item.title} icon={item.icon} />
                                    ))}
                                </Box>
                            </Box>
                        </Container>
                    </Box>
                    <Container>
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
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        bgcolor: '#1976d2',
                                                        color: '#fff',
                                                        transform: 'scale(1.2)',
                                                        cursor: 'pointer',
                                                    },
                                                }}
                                            >
                                                {item.icon}
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
                    </Container>
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
                <Box mt={10} textAlign={"center"}>
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
                <Box textAlign="center" py={6} px={2}>
                    <Typography
                        variant="h4"
                        fontWeight="bold"

                        sx={{ display: 'inline-block', px: 2, py: 0.5, borderRadius: 1 }}
                    >
                        Case Studies
                    </Typography>
                    <Typography variant="body1" mt={2} mb={4}>
                        Discover Solutions’ sample projects, featuring success stories achieved by our software engineers.<br />
                        Witness the impact of our software outsourcing services on businesses and operations.
                    </Typography>
                    <Container>
                        <Grid container spacing={3}>
                            {caseStudies.map((cat, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <CategoryCard {...cat} />
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            </FadeSection>
            <FadeSection id="What-clients">
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
            <ScrollToTopButton />
            <Footer />
        </>
    )
}

export default IndustriePage