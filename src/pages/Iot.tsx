import React, { useEffect, useRef, useState } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { Avatar, Box, Breadcrumbs, Button, Container, Divider, Fade, Grid, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, Tab, Tabs, Typography } from '@mui/material'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import SlideInOnScroll from '../components/SlideInOnScroll'

const caseStudies = [
    {
        label: 'Automatic CV Input',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240325165924.504.webp',
        needs: [
            'Real-time monitoring health status (heart rate/ECG, body temperature, blood pressure, SPO2) of elders/patients via wearable devices',
        ],
        solutions: [
            'End-to-end health monitoring platform (cloud, Web, mobile, device integration). Data analytics, IoT and AI.',
            'Cloud and On-premise',
        ],
    },
    {
        label: 'COD Status update',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240325171342.053.webp',
        needs: [
            'Digital transformation of all insurance activities to increase productivity and enhance customer interaction',
        ],
        solutions: [
            'Automate insurance processes (internal operations and customer services)',
            'Porting all Web applications to mobile applications to support anywhere, any time activities',
        ],
    },
    {
        label: 'Logistics data process',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240326093414.076.webp',
        needs: [
            'A wide range of digital payment solutions: digital wallet, mobile wallet, bill payment, international remittance, payment integration',
        ],
        solutions: [
            'End-to-end and flexible digital payment platform, payment processing that can be customized and integrated to other systems, helping customers to innovate payment solutions',
        ],
    },
    {
        label: 'Automatic debt reminder',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240326092220.979.webp',
        needs: ['Hotel services automation. No check-in. No reception desk or receptionists'],
        solutions: [
            'Full solution from Web to mobile. Workflow automation.',
            'Customer self service.',
        ],
    },
    {
        label: 'Inventory alerts',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240326092220.979.webp',
        needs: ['Hotel services automation. No check-in. No reception desk or receptionists'],
        solutions: [
            'Full solution from Web to mobile. Workflow automation.',
            'Customer self service.',
        ],
    }, {
        label: 'Logistics Shipment Tracing',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240326092220.979.webp',
        needs: ['Hotel services automation. No check-in. No reception desk or receptionists'],
        solutions: [
            'Full solution from Web to mobile. Workflow automation.',
            'Customer self service.',
        ],
    },
    {
        label: 'Invoice Data Process',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240326092220.979.webp',
        needs: ['Hotel services automation. No check-in. No reception desk or receptionists'],
        solutions: [
            'Full solution from Web to mobile. Workflow automation.',
            'Customer self service.',
        ],
    },
    {
        label: 'E-Invoice Collector',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240326092220.979.webp',
        needs: ['Hotel services automation. No check-in. No reception desk or receptionists'],
        solutions: [
            'Full solution from Web to mobile. Workflow automation.',
            'Customer self service.',
        ],
    },
]
const solutions = [
    {
        label: "Water Treatment Management",
        icon: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240522103756.346.webp",
        image: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_20240709095041.538.webp",
    },
    {
        label: "Electricity Consumption Management",
        icon: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240522103802.070.webp",
        image: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_20240709095103.573.webp",
    },
    {
        label: "Container Environment Controller",
        icon: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240522103808.212.webp",
        image: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_20240709095112.013.webp",
    },
    {
        label: "Bus Location Tracking",
        icon: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240522103813.526.webp",
        image: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_20240709095120.210.webp",
    },
    {
        label: "Remote Lab Supervising",
        icon: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240522103818.653.webp",
        image: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_20240709095134.446.webp",
    },
    {
        label: "Bird House Surveillance",
        icon: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240522103824.081.webp",
        image: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_20240709095147.908.webp",
    },
]
const telecomIcons = [
    {
        src: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240621111740.152.webp',
        title: '19+ Years of experience',
    },
    {
        src: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240621112206.619.webp',
        title: '600 Engineers',
    },
    {
        src: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240621151641.245.webp',
        title: 'Customers Vietnams',
    },
    {
        src: "https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240521111533.980.webp",
        title: "50+ Projects"
    },
    {
        src: "https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240521111539.990.webp",
        title: "20+ Projects"
    }
]
const developmentItems = [
    `<b>End-to-end IoT development:</b> From idea to deployment, covering all stages of your digital transformation`,
    `<b>IoT integration:</b> Ensure compatibility with existing systems and legacy devices`,
    `<b>User app development:</b> Control and monitor devices via web & mobile apps with smart UX`,
]

const testingItems = [
    `<b>Black-box testing:</b> Functional, performance, and end-to-end testing`,
    `<b>Firmware testing:</b> AT command compliance & IoT cloud interaction: FOTA, SOTA`,
]

const features = [
    {
        icon: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240522094010.384.webp",
        title: "Equipment Managements",
        desc: "Data collection, real-time device controlling",
    },
    {
        icon: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240522094017.855.webp",
        title: "Rule Setting",
        desc: "Easily set rules, thresholds and schedules",
    },
    {
        icon: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240522094023.596.webp",
        title: "Integrated multiple alarm channels",
        desc: "Integrated alerts via SMS, Call, Skype, Zalo",
    },
    {
        icon: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240522094037.659.webp",
        title: "Responsive Dashboard",
        desc: "Customize the dashboard interface according to the needs of the projects",
    },
    {
        icon: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240522094044.316.webp",
        title: "Integrated Cameras",
        desc: "An integrated variety of IP/WIFI cameras",
    },
    {
        icon: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240522094050.462.webp",
        title: "Risk Forecasting",
        desc: "Analysis Analyze data to predict possible risks",
    },
]
const technologies = [
    {
        title: 'Programming',
        items: [
            'C/C++, Python, Java, Edge Computing',
        ],
    },
    {
        title: 'Devices',
        items: [
            'Sensor, GPS, Mobile, Beacon, Raspberry Pi, Arduino, NVIDIA Jetson, ESP32',
        ],
    },
    {
        title: 'Technologies',
        items: [
            'Bluetooth/BLE, Wi-Fi, 4G/5G, LoRaWAN, MQTT, Modbus, CAN',
        ],
    },
    {
        title: 'OS',
        items: [
            'Linux, RTOS, Android, Raspberry Pi OS',
        ],
    },
    {
        title: 'IoT Platform',
        items: [
            'AWS IoT, Azure IoT Hub, Google Cloud IoT, Thingsboard',
        ],
    },
]




const ServiceBox = ({ iconUrl, title, items }: any) => (
    <Box bgcolor="#1e90ff" color="#fff" p={2} borderRadius={1.5} height="100%">
        <Box display="flex" alignItems="center" mb={2}>
            <Box
                component="img"
                src={iconUrl}
                alt=""
                sx={{ width: 24, height: 24, mr: 1 }}
            />
            <Typography variant="h6" fontWeight="bold">
                {title}
            </Typography>
        </Box>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.3)', mb: 2 }} />
        <List disablePadding dense>
            {items.map((item: any, index: any) => (
                <ListItem key={index} disableGutters sx={{ alignItems: 'flex-start', mb: 1 }}>
                    <ListItemText
                        primary={
                            <Typography variant="body2" component="span" dangerouslySetInnerHTML={{ __html: item }} />
                        }
                    />
                </ListItem>
            ))}
        </List>
    </Box>
)

const IotPage = () => {

    const [tabIndex, setTabIndex] = useState(0)
    const study = caseStudies[tabIndex]
    const [selectedIndex, setSelectedIndex] = useState(5) // default: Bird House Surveillance

    return (
        <>
            <Header />
            <Box>
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
                        <Container >
                            {/* Text section */}
                            <Box textAlign="center" mb={4}>
                                <Typography variant="h4" fontWeight="bold" mb={2}>
                                    Internet of Things (IoT)
                                </Typography>
                                <Typography variant="body1" >
                                    With intensive experience in wireless, network, embedded software and mobile applications,
                                    we have developed many IoT related solutions for our clients, including remote controlling
                                    and monitoring in real-time, automating machinery, and automatic alarming.
                                </Typography>
                            </Box>

                            {/* Icons section */}
                            <Box
                                display="flex"
                                flexWrap="wrap"
                                justifyContent="center"
                                alignItems="center"
                                gap={{ xs: 2, sm: 3, md: 4 }} // 👈 responsive khoảng cách giữa các khối
                                sx={{ px: { xs: 1, sm: 2, md: 0 } }} // 👈 padding ngang nhẹ cho mobile
                            >
                                {telecomIcons.map((item, index) => (
                                    <Box
                                        key={index}
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                        justifyContent="center"
                                        textAlign="center"
                                        sx={{
                                            width: {
                                                xs: 100,   // Mobile
                                                sm: 110,   // Tablet
                                                md: 130,   // PC
                                            },
                                            mx: 'auto',
                                        }}
                                    >
                                        <Avatar
                                            src={item.src}
                                            alt={item.title}
                                            sx={{
                                                width: { xs: 48, sm: 52, md: 56 }, // 👈 Avatar scale theo màn hình
                                                height: { xs: 48, sm: 52, md: 56 },
                                                mb: 1,
                                            }}
                                        />
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem' }, // 👈 text scale
                                                fontWeight: 500,
                                                whiteSpace: 'normal',
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>

                        </Container>
                    </Box>
                </FadeSection>
                <FadeSection >
                    <Container>
                        <Box sx={{ mt: 2, px: 4, p: 2 }}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Link underline="hover" color="#00A1F1" href="/">
                                    <Typography fontWeight={700}>Home</Typography>
                                </Link>

                                <Typography color="#00A1F1">›</Typography>

                                <Link href="technologies" underline="hover"><Typography color="#00A1F1">Technologies</Typography></Link>

                                <Typography color="#00A1F1">{'>'}</Typography>

                                <Typography color="text.primary">IoT</Typography>
                            </Stack>


                        </Box>
                    </Container>
                </FadeSection>
                <FadeSection id="service">
                    <Container>
                        <Box sx={{ padding: '20px 20px', textAlign: 'center' }}>
                            <Typography variant="h4" fontWeight="bold" gutterBottom>
                                Services
                            </Typography>
                            <Box px={{ xs: 2, md: 8 }} py={6} bgcolor="#f9f9f9">
                                <Grid container spacing={4}>
                                    <Grid item xs={12} md={6}>
                                        <SlideInOnScroll>
                                        <ServiceBox
                                            iconUrl="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240521144553.557.webp"
                                            title="IoT Development"
                                            items={developmentItems}
                                        /></SlideInOnScroll>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <SlideInOnScroll direction='right'>
                                        <ServiceBox
                                            iconUrl="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240521144611.169.webp"
                                            title="IoT Testing"
                                            items={testingItems}
                                        /></SlideInOnScroll>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </FadeSection>
                <FadeSection>
                    <Box sx={{
                        background: 'linear-gradient(to bottom, #1976d2, rgba(149, 10, 138, 0.56))',
                        backdropFilter: 'blur(6px)',
                        WebkitBackdropFilter: 'blur(6px)',
                    }} px={{ xs: 2, md: 8 }} py={6}>
                        <Container>
                            <Typography textAlign={"center"} variant="h5" fontWeight="bold" mb={4}>
                                IoT Platform (T-Connect)
                            </Typography>
                            <Grid container spacing={4}>
                                {features.map((item, index) => (
                                    <Grid item xs={12} md={6} key={index}>
                                        <Stack direction="row" spacing={2}>
                                            <Box
                                                component="img"
                                                src={item.icon}
                                                alt={item.title}
                                                sx={{
                                                    width: 40,
                                                    height: 40,
                                                    backgroundColor: "#fff",
                                                    borderRadius: "50%",
                                                    p: 1,
                                                }}
                                            />
                                            <Box>
                                                <Typography fontWeight="bold" fontSize="16px">
                                                    {item.title}
                                                </Typography>
                                                <Typography fontSize="14px" color="text.secondary">
                                                    {item.desc}
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </Box>

                </FadeSection>
                <FadeSection>

                    <Box px={{ xs: 2, md: 8 }} py={6}>
                        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
                            Solutions
                        </Typography>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                            <List sx={{ minWidth: 250, bgcolor: '#f7faff', borderRadius: 2, p: 0 }}>
                                {solutions.map((item, index) => (
                                    <ListItemButton
                                        key={index}
                                        selected={selectedIndex === index}
                                        onClick={() => setSelectedIndex(index)}
                                        sx={{
                                            py: 1.5,
                                            px: 2,
                                            '&.Mui-selected': {
                                                bgcolor: 'white',
                                                borderLeft: '4px solid #007FFF',
                                                color: '#007FFF',
                                            },
                                        }}
                                    >
                                        <ListItemIcon>
                                            <Box
                                                component="img"
                                                src={item.icon}
                                                alt={item.label}
                                                sx={{ width: 24, height: 24 }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary={<Typography fontSize={14}>{item.label}</Typography>} />
                                    </ListItemButton>
                                ))}
                            </List>

                            <Box flex={1} textAlign="center"> <SlideInOnScroll direction='right'>
                                <Box
                                    component="img"
                                    src={solutions[selectedIndex].image}
                                    alt={solutions[selectedIndex].label}
                                    sx={{
                                        maxWidth: '100%',
                                        borderRadius: 2,
                                        boxShadow: 2,
                                    }}
                                /></SlideInOnScroll>
                            </Box>
                        </Stack>
                    </Box>

                </FadeSection>
                <FadeSection>

                    <Box px={{ xs: 2, md: 8 }} py={6} sx={{ background: 'linear-gradient(to bottom, #1976d2, rgba(10, 75, 149, 0.56))', }}>
                        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={4}>
                            Technologies
                        </Typography>
                        <Container>
                            <Grid container border="1px solid #d1e0ff" overflow="hidden">
                                {technologies.map((tech, idx) => (
                                    <React.Fragment key={idx}>
                                        {/* Left label cell */}
                                        <Grid
                                            item
                                            xs={12}
                                            md={2.5}
                                            sx={{
                                                bgcolor: '#1ea0f2',
                                                px: 2,
                                                py: 2,
                                                borderBottom: idx !== technologies.length - 1 ? '1px solid white' : 'none',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Typography fontWeight="bold" color="white" textAlign="center">
                                                {tech.title}
                                            </Typography>
                                        </Grid>

                                        {/* Right content cell */}
                                        <Grid
                                            item
                                            xs={12}
                                            md={9.5}
                                            sx={{
                                                px: 2,
                                                py: 2,
                                                borderBottom: idx !== technologies.length - 1 ? '1px solid #eee' : 'none',
                                            }}
                                        >
                                            <Grid container spacing={2}>
                                                {tech.items.map((item, index) => (
                                                    <Grid item xs={12} md={6} key={index}>
                                                        <Stack direction="row" alignItems="center" spacing={1}>
                                                            <FiberManualRecordIcon sx={{ fontSize: 8, mt: 0.5, color: '#1ea0f2' }} />
                                                            <Typography fontSize={14}>{item}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>
                                ))}
                            </Grid></Container>
                    </Box>

                </FadeSection>
                {/* <FadeSection id='Microsoft'>
                    <Container>
                        <Box mt={3} p={5} >
                            <Box textAlign={"center"}>
                                <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                                <Typography fontWeight={"bold"} variant='h4'>
                                    Case studies
                                </Typography>
                            </Box>

                            <Box sx={{ p: 4 }}>
                                <Stack
                                    direction="row"
                                    spacing={{ xs: 1, sm: 2 }}
                                    flexWrap="wrap"
                                    justifyContent={{ xs: 'center', sm: 'flex-start' }}
                                    rowGap={1}
                                    mb={3}
                                >
                                    {caseStudies.map((tab, index) => (
                                        <Button
                                            key={index}
                                            variant={tabIndex === index ? "contained" : "outlined"}
                                            onClick={() => setTabIndex(index)}
                                            sx={{
                                                px: { xs: 1, sm: 2.5 },
                                                py: { xs: 0.25, sm: 1 },
                                                minWidth: 'auto',
                                                fontSize: { xs: 10, sm: 12 },
                                                borderRadius: 2,
                                            }}
                                        >
                                            {tab.label}
                                        </Button>
                                    ))}
                                </Stack>
                                <Grid container spacing={4}>
                                    <Grid item xs={12} md={6}>
                                        <Stack spacing={3}>
                                            <Box>
                                                <Typography variant="subtitle1" fontWeight="bold">
                                                    Customer’s needs
                                                </Typography>
                                                <List dense>
                                                    {study.needs.map((need, idx) => (
                                                        <ListItem key={idx} sx={{ pl: 0 }}>
                                                            <ListItemText
                                                                primary={
                                                                    <Typography variant="body2" color="text.secondary">
                                                                        {need}
                                                                    </Typography>
                                                                }
                                                            />
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </Box>
                                            <Box>
                                                <Typography variant="subtitle1" fontWeight="bold">
                                                    Solutions
                                                </Typography>
                                                <List dense>
                                                    {study.solutions.map((solution, idx) => (
                                                        <ListItem key={idx} sx={{ pl: 0 }}>
                                                            <ListItemText
                                                                primary={
                                                                    <Typography variant="body2" color="text.secondary">
                                                                        {solution}
                                                                    </Typography>
                                                                }
                                                            />
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </Box>
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <Box
                                            component="img"
                                            src={study.image}
                                            alt={study.label}
                                            sx={{ width: '100%', maxWidth: 500, display: 'block', mx: 'auto' }}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
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
                                        IOT IT Outsourcing
                                    </Link>
                                </Box>
                            </Container>
                        </Box>
                    </Container>
                </FadeSection>

            </Box>
            <ScrollToTopButton />
            <Footer />
        </>
    )
}


export default IotPage


