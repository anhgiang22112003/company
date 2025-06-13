import React, { useState } from 'react'
import { Box, Grid, Typography, Avatar, Container, CssBaseline, Stack, Link, Paper, List, ListItemButton, ListItemIcon, ListItemText, Divider, ListItem, Fade, Card, CardContent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Chip, CardMedia, useTheme } from '@mui/material'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import DiamondIcon from '@mui/icons-material/Diamond'

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
const iconBoxWidth = 100
const iconBoxHeight = 80
const iconSpacing = 5 // khoảng cách từ trung tâm đến icon

const positionMap = [
    { top: '26%', left: -iconSpacing },   // Icon 0
    { top: '45%', left: -iconSpacing },   // Icon 1
    { top: '65%', left: -iconSpacing },   // Icon 2
    { top: '85%', left: -iconSpacing },   // Icon 3
    { top: '26%', right: -iconSpacing },  // Icon 4
    { top: '45%', right: -iconSpacing },  // Icon 5
    { top: '65%', right: -iconSpacing },  // Icon 6
    { top: '85%', right: -iconSpacing },  // Icon 7
]

const connectorLine = (pos: any) => ({
    content: '""',
    position: 'absolute',
    width: '140px', // tăng độ dài để nối đến khối trung tâm
    height: '2px',
    backgroundColor: '#fff',
    top: '30%',
    ...(pos.left !== undefined
        ? { left: iconBoxWidth } // iconBoxWidth = 80
        : { right: iconBoxWidth }),
    transform: 'translateY(-50%)',
    zIndex: 0,
})
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
    {
        image: 'https://tmastorage.azureedge.net/uploadfiles/CaseStudies/Thumbnails/casestudy_thumbnail_20240611044638.466.webp',
        title: 'AI sound-based fault detection system in manufacturing',
        tags: ['Manufacturing', 'Data Science & AI/ML', 'IoT'],
        description: 'Utilize AI-based sound analysis to enhance real-time fault detection during value manufacturing, improving product quality.',
        link: 'https://example.com/case-study-6',

    },
    {
        image: 'https://tmastorage.azureedge.net/uploadfiles/CaseStudies/Thumbnails/casestudy_thumbnail_20240611044337.448.webp',
        title: 'Enhance Credit Risk Analysis with AI/ML Technologies',
        tags: ['Finance', 'Data Science & AI/ML'],
        description: 'Provide credit scoring algorithm leveraging AI/ML models to enhance risk assessment from many data sources, reducing efforts.',
        link: 'https://example.com/case-study-6',

    },
    {
        image: 'https://tmastorage.azureedge.net/uploadfiles/CaseStudies/Thumbnails/casestudy_thumbnail_20240611045307.545.webp',
        title: 'Pest Detection Solution Crop Protection With AI Technology',
        tags: ['Agriculture', 'Data Science & AI/ML', 'IoT'],
        description: 'Leverage AI to detect and identify pests and diseases in the field, supporting managing and monitoring.',
        link: 'https://example.com/case-study-6',

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
        text: 'Services: design, test, integrate, and maintain',
    },
]

const hardwareFields = [
    { name: 'Healthcare', icon: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240528110220.287.webp' },
    { name: 'Manufacturing', icon: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240528110251.683.webp' },
    { name: 'Network', icon: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240528110257.504.webp' },
    { name: 'Smart city', icon: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240528110303.808.webp' },
    { name: 'Telecom', icon: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240528110310.094.webp' },
    { name: 'IoT', icon: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240528110310.094.webp' },
    { name: 'Automotive', icon: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240528110325.921.webp' },
    { name: 'Robotics', icon: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240528110346.746.webp' },
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
                <Box mt={18} sx={{ backgroundColor: '#1976d2', py: 8, color: '#fff', position: 'relative' }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={6} alignItems="center">
                            {/* Left Content */}
                            <Grid item xs={12} md={6}>
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
                            </Grid>

                            {/* Right Content */}
                            <Grid item xs={12} md={6} sx={{ position: 'relative', height: 400 }}>
                                <Paper
                                    elevation={6}
                                    sx={{
                                        width: 220,
                                        height: 240,
                                        mx: 'auto',
                                        mt: 5,
                                        position: 'relative',
                                        backgroundColor: '#fff',
                                        color: '#1ea0f2',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 20,
                                    }}
                                >
                                    Hardware<br />Integration
                                </Paper>

                                {/* Floating icons with connectors */}
                                {hardwareFields.map((field, i) => {
                                    const pos = positionMap[i]
                                    return (
                                        <Box
                                            key={i}
                                            sx={{
                                                position: 'absolute',
                                                ...pos,
                                                width: iconBoxWidth,
                                                height: iconBoxHeight,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                zIndex: 2,
                                                transform: 'translateY(-50%)',
                                                ...(pos.left !== undefined ? { left: pos.left } : { right: pos.right }),
                                            }}
                                        >
                                            {/* Connector line */}
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    width: '140px', // Length of the connector line
                                                    height: '2px',
                                                    backgroundColor: '#fff',
                                                    top: '50%', // Center the line vertically
                                                    ...(pos.left !== undefined
                                                        ? { left: iconBoxWidth } // Position for left icons
                                                        : { right: iconBoxWidth }), // Position for right icons
                                                    transform: 'translateY(-50%)',
                                                    zIndex: 0,
                                                }}
                                            />

                                            <Avatar
                                                src={field.icon}
                                                alt={field.name}
                                                sx={{ width: 48, height: 48, mb: 1, bgcolor: 'white' }}
                                            />
                                            <Typography variant="body2" sx={{ color: '#fff' }}>{field.name}</Typography>
                                        </Box>
                                    )
                                })}
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
                <Box sx={{ px: 4, py: 8, backgroundColor: '#f4f8fd' }}>
                    <Container>
                        <Grid container spacing={4} alignItems="center">
                            {/* Left Content */}
                            <Grid item xs={12} md={5}>
                                <Box textAlign={"center"}>
                                    <img src="https://tmastorage.azureedge.net/cdn/en/_next/static/media/iconSection.9d0bc79c.webp" alt="" />
                                </Box>
                                <Typography textAlign={"center"} variant="h4" fontWeight="bold" gutterBottom>
                                    Technologies
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
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
                                        mb={2}
                                        borderRadius={1}
                                        overflow="hidden"
                                        boxShadow={1}
                                        bgcolor="#fff"
                                    >
                                        {/* Blue Label */}
                                        <Box
                                            width={180}
                                            bgcolor="#1ea0f2"
                                            color="#fff"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            fontWeight="bold"
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
                            {/* Left Column: 3 blocks, each 1/3 height */}
                            <Grid item xs={12} md={6}>
                                <Grid container direction="column" spacing={2} sx={{ height: '100%' }}>
                                    {leftBlocks.map((block, idx) => (
                                        <Grid item xs key={idx} sx={{ flex: 1 }}>
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
                                                                <FiberManualRecordIcon
                                                                    sx={{ fontSize: 8, color: 'white' }}
                                                                />
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

                            {/* Right Column: 2 blocks stacked but stretch to match left column */}
                            <Grid item xs={12} md={6}>
                                <Grid
                                    container
                                    direction="column"
                                    spacing={2}
                                    sx={{ height: '100%' }}
                                >
                                    {rightBlocks.map((block, idx) => (
                                        <Grid item xs key={idx} sx={{ flex: 1 }}>
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
                                                                <FiberManualRecordIcon
                                                                    sx={{ fontSize: 8, color: 'white' }}
                                                                />
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
                        <Grid item>
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
                        </Grid>

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
                <Container sx={{ mt: 4 }} >
                    <Box
                        sx={{
                            background: '#009BFF',
                            color: 'white',
                            clipPath: 'polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)',
                            py: 8,
                            px: 4,
                            position: 'relative',
                            zIndex: 1,
                            mb: -15

                        }}
                    >
                        <Container>
                            <Typography variant='h4' textAlign="center" fontWeight="bold">
                                Download
                            </Typography>
                            <Box mt={4} textAlign="center">
                                <Link
                                    href="/path-to-your-file/IT-Outsourcing.pdf" // <-- Đường dẫn file
                                    download
                                    underline="none"
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        color: '#1976d2',
                                        fontWeight: 'bold',
                                        fontSize: '1.1rem',
                                        '&:hover': {
                                            textDecoration: 'underline',
                                        },
                                    }}
                                >
                                    <FileDownloadIcon />
                                    Hardware Lab Brochure
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
