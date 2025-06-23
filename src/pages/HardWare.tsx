import React, { useState } from 'react'
import { Box, Grid, Typography, Avatar, Container, CssBaseline, Stack, Link, Paper, List, ListItemButton, ListItemIcon, ListItemText, Divider, ListItem, Fade, Card, CardContent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Chip, CardMedia, useTheme } from '@mui/material'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import SlideInOnScroll from '../components/SlideInOnScroll'


const leftItems = [
    {
        title: 'FPGA',
        content:
            'FIFO, PISO, MUX, Hash, DDR RAM Handling, VHDL & Verilog, Xilinx ISE',
    },
    {
        title: 'Wireless',
        content: 'GSM/GPRS, Zigbee, BLE, Beacon, RFID, WIFI, 3G, MQTT',
    },
    {
        title: 'Firmware & Device Drivers',
        content: 'Keil C, IAR, Altium, Buildroot, Openembedded, Openwrt',
    },
]

const rightItems = [
    {
        title: 'OS',
        content:
            'VxWorks, Linux/Real-time Linux, Android, ucLinux, ttylinux, gentoo',
    },
    {
        title: 'MCU',
        content: 'ARM, x86, MIPS, PIC, AVR32',
    },
    {
        title: 'Interfaces',
        content: 'USB, Ethernet, LCD, CF/MMC/SD',
    },
]
const services = [
    {
        title: 'New Design',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240528095321.069.webp',
        items: ['Hardware product prototyping'],
    },
    {
        title: 'Testing',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240528095327.398.webp',
        items: ['Functional and non-functional requirements verification'],
    },
    {
        title: 'Integration',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240528095331.901.webp',
        items: [
            'Integrating various kinds of devices (Cameras, Edge Computer, AI Server, Wearable & Medical Devices, IoT Devices, ...)',
            'from multiple hardware vendors (Asus, Intel, NVIDIA, Adlink, ...) into our solutions (AI, Healthcare, Smart Building, Smart Factory)',
        ],
    },
    {
        title: 'Maintenance',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240528095336.934.webp',
        items: [
            'Fixing bugs',
            'Adding new features',
            'End-Of-Life component retrofit redesign',
        ],
    },
]


const technologyItems = [
    {
        title: 'Chipset',
        items: ['ESP, Raspberry, NXP, STM, PIC'],
    },
    {
        title: 'Hardware Design',
        items: ['Capture schematics and drawing layout using Altium, Kicad, OrCA'],
    },
    {
        title: 'Microcontroller Unit',
        items: ['ESP32, NXP32, STM32, PIC32'],
    },
    {
        title: 'Domain',
        items: [
            'IoT (BLE, LoRaWAN, WiFi-6, Wi-Fi HaLow)',
            'Power electronics: Buck, boost, Flyback topology...',
        ],
    },
]
const coreStats = [
    {
        icon: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240528110017.170.webp',
        text: '200+ Embedded engineers',
    },
    {
        icon: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240528110022.684.webp',
        text: 'Integrated 200+ devices',
    },
    {
        icon: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240528110038.416.webp',
        text: 'Services: design, test, integrate',
    },
]


const leftBlocks = [
    {
        title: 'Infrastructure',
        items: ['EV turbo charging station', 'Solar powered building'],
    },
    {
        title: 'Energy',
        items: ['Solar farm predictive maintenance'],
    },
    {
        title: 'Retail',
        items: ['1 minute checkout aisle'],
    },
]

const rightBlocks = [
    {
        title: 'Environment',
        items: ['RF-energy–harvesting wireless sensor', 'Water resource monitor'],
    },
    {
        title: 'Automation & Manufacture',
        items: ['Server battery health monitor', 'Smart terminal block'],
    },
]
const HardWarePage = () => {
    const theme = useTheme()

    const renderItem = (item: any) => (
        <Paper
            variant="outlined"
            sx={{
                p: 2,
                bgcolor: '#f4faff',
                borderRadius: 2,
                borderColor: '#cce7f9',
                position: 'relative',
                textAlign: 'center',
            }}
        >
            <Chip
                label={item.title}
                color="primary"
                size="small"
                sx={{
                    position: 'absolute',
                    top: -12,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontWeight: 'bold',
                }}
            />
            <Typography variant="body2" mt={2}>
                {item.content}
            </Typography>
        </Paper>
    )


    return (
        <>
            <CssBaseline />
            <Header />
            <FadeSection>
                <Box mt={18} sx={{
                    background: 'linear-gradient(to bottom, #1976d2, rgba(10, 75, 149, 0.56))',
                    color: 'white',
                    mt: 18,
                    py: 8,
                    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
                    WebkitClipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)', position: 'relative'
                }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={6} alignItems="center">
                            {/* Left Content */}
                            <Grid item xs={12} md={6}>
                                <SlideInOnScroll>
                                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                                        Hardware Lab
                                    </Typography>
                                    <Typography variant="body1" mb={4}>
                                        Hardware Lab has designed, integrated and tested hundreds of devices for IoT, telecom, network, healthcare, automotive, robotics, manufacturing and smart city.
                                    </Typography>

                                    <Grid container spacing={2}>
                                        {coreStats.map((item, index) => (
                                            <Grid item xs={12} key={index} container alignItems="center" spacing={2}>
                                                <Grid item>
                                                    <Avatar src={item.icon} alt={`icon-${index}`} sx={{ width: 48, height: 48 }} />
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="body1">{item.text}</Typography>
                                                </Grid>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </SlideInOnScroll>
                            </Grid>

                            {/* Right Content */}
                            <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
                                <SlideInOnScroll direction='right'>
                                    <img width={"100%"} src="https://tse1.mm.bing.net/th?id=OIP.Y3t0u1KPNLz7mLnk95hNjQHaEK&pid=Api&P=0&h=220" alt="" />
                                </SlideInOnScroll></Grid>

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

                            <Typography color="text.primary">Hardware Integration</Typography>
                        </Stack>

                    </Box>
                </Container>
            </FadeSection>
            <FadeSection id='about' >
                <Box >
                    <Container>
                        <Box sx={{ py: 8, backgroundColor: '#fff', textAlign: 'center' }}>
                            <Typography variant="h4" fontWeight="bold" gutterBottom>
                                Our Hardware Services
                            </Typography>
                            <Typography variant="body1" color="text.secondary" maxWidth={800} mx="auto" mb={6}>
                                It’s mandatory of any business to maintain and upgrade hardware system to make sure its performance can proceed with high accuracy.
                                Our services cover any requirement of customers.
                            </Typography>

                            <Grid container spacing={2} justifyContent="center">
                                {services.map((service, index) => (
                                    <Grid item xs={12} sm={6} md={3} key={index}>
                                        <Box sx={{ p: 3, borderRadius: 2, backgroundColor: '#f4f8ff', height: '100%' }}>
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
                                            <Divider sx={{ mt: 2, mb: 2, backgroundColor: '#000' }} />
                                            <List dense disablePadding>
                                                {service.items.map((item, i) => (
                                                    <ListItem key={i} disableGutters alignItems="flex-start">
                                                        <ListItemIcon sx={{ minWidth: 20, mt: 0.5 }}>
                                                            <FiberManualRecordIcon sx={{ fontSize: 8, color: '#2196f3' }} />
                                                        </ListItemIcon>
                                                        <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2' }} />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Container>
                </Box>
            </FadeSection>
            <FadeSection>
                <Box sx={{
                    px: 2, py: 4, background: 'linear-gradient(to bottom, #1976d2, rgba(149, 10, 138, 0.56))',
                }}>
                    <Container>
                        <Grid container spacing={4} alignItems="center">
                            {/* Left Content */}
                            <Grid color={"white"} item xs={12} md={5}>
                                <Box textAlign={"center"}>
                                    <img src="https://tmastorage.azureedge.net/cdn/en/_next/static/media/iconSection.9d0bc79c.webp" alt="" />
                                </Box>
                                <Typography textAlign={"center"} variant="h4" fontWeight="bold" gutterBottom>
                                    Technologies
                                </Typography>
                                <Typography variant="body1" color="white">
                                    Possessing extensive knowledge of modern technologies, hardware team is able to provide
                                    customers with high-end hardware services, and to deliver an all-inclusive method to
                                    customers’ projects.
                                </Typography>
                            </Grid>

                            {/* Right Content */}
                            <Grid item xs={12} md={7}>
                                {technologyItems.map((tech, index) => (
                                    <Box
                                        key={index}
                                        display="flex"
                                        flexDirection={{ xs: 'column', sm: 'row' }} // Mobile: column, Tablet+: row
                                        mb={2}
                                        borderRadius={1}
                                        overflow="hidden"
                                        boxShadow={1}
                                        bgcolor="#fff"
                                    >
                                        {/* Blue Label */}
                                        <Box
                                            width={{ xs: '100%', sm: 160, md: 180 }} // full width on mobile
                                            bgcolor="#1ea0f2"
                                            color="#fff"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            fontWeight="bold"
                                            textAlign="center"
                                            px={2}
                                            py={2}
                                        >
                                            {tech.title}
                                        </Box>

                                        {/* Description */}
                                        <Box flex={1} px={2} py={2}>
                                            <List disablePadding>
                                                {tech.items.map((item, idx) => (
                                                    <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
                                                        <ListItemIcon sx={{ minWidth: 24 }}>
                                                            <FiberManualRecordIcon sx={{ fontSize: 8, color: '#1ea0f2' }} />
                                                        </ListItemIcon>
                                                        <ListItemText primary={item} />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Box>
                                    </Box>
                                ))}
                            </Grid>

                        </Grid>
                    </Container>
                </Box>
            </FadeSection>
            <FadeSection>
                <Box sx={{ px: 4, py: 8, backgroundColor: '#f8fbfe' }}>
                    <Container>
                        <Box textAlign={"center"}>
                            <img src="https://tmastorage.azureedge.net/cdn/en/_next/static/media/iconSection.9d0bc79c.webp" alt="" />
                        </Box>
                        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={6}>
                            Sample Custom Solutions
                        </Typography>

                        <Grid container spacing={2}>
                            {/* Left Column */}
                            <Grid item xs={12} md={6}>
                                <Grid
                                    container
                                    direction="column"
                                    spacing={2}
                                    sx={{
                                        height: { xs: 'auto', md: '100%' }, // Mobile: auto height, PC: full height
                                    }}
                                >
                                    {leftBlocks.map((block, idx) => (
                                        <Grid
                                            item
                                            key={idx}
                                            sx={{
                                                flex: { xs: 'unset', md: 1 },
                                                height: { xs: 'auto', md: '100%' },
                                            }}
                                        >
                                            <Box
                                                bgcolor="#1ea0f2"
                                                color="#fff"
                                                borderRadius={1}
                                                p={2}
                                                height="100%"
                                            >
                                                <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                                                    {block.title}
                                                </Typography>
                                                <List dense disablePadding>
                                                    {block.items.map((item, i) => (
                                                        <ListItem key={i} disableGutters>
                                                            <ListItemIcon sx={{ minWidth: 20 }}>
                                                                <FiberManualRecordIcon sx={{ fontSize: 8, color: 'white' }} />
                                                            </ListItemIcon>
                                                            <ListItemText primary={item} />
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>

                            {/* Right Column */}
                            <Grid item xs={12} md={6}>
                                <Grid
                                    container
                                    direction="column"
                                    spacing={2}
                                    sx={{
                                        height: { xs: 'auto', md: '100%' }, // Responsive height
                                    }}
                                >
                                    {rightBlocks.map((block, idx) => (
                                        <Grid
                                            item
                                            key={idx}
                                            sx={{
                                                flex: { xs: 'unset', md: 1 },
                                                height: { xs: 'auto', md: '100%' },
                                            }}
                                        >
                                            <Box
                                                bgcolor="#1ea0f2"
                                                color="#fff"
                                                borderRadius={1}
                                                p={2}
                                                height="100%"
                                            >
                                                <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                                                    {block.title}
                                                </Typography>
                                                <List dense disablePadding>
                                                    {block.items.map((item, i) => (
                                                        <ListItem key={i} disableGutters>
                                                            <ListItemIcon sx={{ minWidth: 20 }}>
                                                                <FiberManualRecordIcon sx={{ fontSize: 8, color: 'white' }} />
                                                            </ListItemIcon>
                                                            <ListItemText primary={item} />
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>

                    </Container>
                </Box>
            </FadeSection>
            <FadeSection>
                <Box sx={{ background: 'linear-gradient(to bottom, #0b99f2, #1cb0f6)', py: 8 }}>
                    <Box textAlign={"center"}>
                        <img src="https://tmastorage.azureedge.net/cdn/en/_next/static/media/iconSection.9d0bc79c.webp" alt="" />
                    </Box>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        textAlign="center"
                        color="white"
                        mb={1}
                    >
                        Embedded System Development
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign="center"
                        color="white"
                        maxWidth="800px"
                        mx="auto"
                        mb={6}
                    >
                        Every stage of embedded system development is proficiently handled by
                        team. Customers have their businesses’ values maximized by configuring
                        hardware platforms and building embedded applications.
                    </Typography>

                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        sx={{
                            background: 'white',
                            mx: 'auto',
                            px: 4,
                            py: 6,
                            borderRadius: 2,
                            width: 'fit-content',
                        }}
                    >
                        {/* Left column */}
                        <Grid item>
                            <Grid container direction="column" spacing={4}>
                                {leftItems.map((item, i) => (
                                    <Grid item key={i}>
                                        {renderItem(item)}
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>

                        {/* Center image */}
                        {/* <Grid item>
                            <Box
                                component="img"
                                src="https://www.tmasolutions.com/media/services/tmaHardwareLab/development/image-bg-box.webp"
                                alt="Embedded"
                                sx={{
                                    width: 160, // tăng từ ví dụ 120 lên 160
                                    height: 160,
                                    position: 'absolute',
                                    top: '65%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: 1,
                                }}
                            />
                        </Grid> */}

                        {/* Right column */}
                        <Grid item>
                            <Grid container direction="column" spacing={4}>
                                {rightItems.map((item, i) => (
                                    <Grid item key={i}>
                                        {renderItem(item)}
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
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
                                    HardWare IT Outsourcing
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

export default HardWarePage
