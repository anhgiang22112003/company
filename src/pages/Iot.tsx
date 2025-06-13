import React, { useEffect, useRef, useState } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { Avatar, Box, Breadcrumbs, Button, Container, Divider, Fade, Grid, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, Tab, Tabs, Typography } from '@mui/material'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

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
        title: 'Customers from Europe, Canada, Australia, Singapore, Hong Kong, Korea, Vietnams',
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
    `<b>Full-cycle IoT development:</b> Streamline your path from initial idea to ready solution with our end-to-end software development services, covering all stages of your digital transformation`,
    `<b>IoT integrations:</b> Maximize the value of your IoT initiative by ensuring your software platform is compatible with existing infrastructure and legacy equipment`,
    `<b>IoT acceleration:</b> Speed up your IoT solution development by using our IoT accelerator as a kick-off point to manage device connectivity based on predefined scenarios`,
    `<b>User app development:</b> Explore the data your devices provide and manage them on the go with native mobile and web applications powered by an intelligent UX`,
]
const testingItems = [
    `<b>Black-box test type:</b> Black-box test type: functional, performance, stress test, end-to-end testing`,
    `<b>Applications testing:</b> C/C++ API testing`,
    `<b>Firmware testing:</b><br/>
    • Testing for AT commands is based on ITU V.25 ter, 3GPP specifications and manufacturer’s specifications<br/>
    • IoT cloud interaction testing: device management, firmware-over-the-air (FOTA), software-over-the-air (SOTA)`,
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
            'Edge computing, C/C++, Python, Java',
        ],
    },
    {
        title: 'Devices',
        items: [
            'Mobile, sensor, GPS, light therapy device, beacon, electronic plug',
            'ARM, Ar7240, RT-Linux, Android',
            'Arduino, ESP, NVIDIA Jetson, Google Coral, Raspberry Pi, Google Coral, Xilinx, Sierra Wireless FX30, STM/ ARM/ AVR/ TI',
            'Network simulators, oscilloscope, shielding box, temperature chamber',
        ],
    },
    {
        title: 'Technologies',
        items: [
            '2G/3G/4G/NB-IoT/5G, Bluetooth/BLE, Wifi, LoRa/LoRaWAN, Modbus, CAN, LIDAR, SLAM, MQTT, CoAP, LWM2M, AMQP',
        ],
    },
    {
        title: 'OS',
        items: [
            'Android, RTOS, Yocto, Windows IoT Core, Linux, Raspberry Pi OS',
        ],
    },
    {
        title: 'IoT Platform',
        items: [
            'AWS IoT, Google Cloud IoT, Azure IoT Hub, Sierra Wireless Legato/Octave, Thingsboard',
        ],
    },
]



const ServiceBox = ({ iconUrl, title, items }: any) => (
    <Box bgcolor="#1e90ff" color="#fff" p={3} borderRadius={1.5} height="100%">
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
                            backgroundColor: '#1976d2',
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
                                gap={4}
                            >
                                {telecomIcons.map((item, index) => (
                                    <Box
                                        key={index}
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                        width={120}
                                        textAlign="center"
                                    >
                                        <Avatar src={item.src} sx={{ width: 56, height: 56, mb: 1 }} />
                                        <Typography variant="body2">{item.title}</Typography>
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
                                        <ServiceBox
                                            iconUrl="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240521144553.557.webp"
                                            title="IoT Development"
                                            items={developmentItems}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <ServiceBox
                                            iconUrl="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240521144611.169.webp"
                                            title="IoT Testing"
                                            items={testingItems}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </FadeSection>
                <FadeSection>
                    <Box bgcolor="#f6f9fc" px={{ xs: 2, md: 8 }} py={6}>
                        <Container>
                            <Typography textAlign={"center"} variant="h5" fontWeight="bold" mb={4}>
                                TMA IoT Platform (T-Connect)
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
                    <Container>
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

                                <Box flex={1} textAlign="center">
                                    <Box
                                        component="img"
                                        src={solutions[selectedIndex].image}
                                        alt={solutions[selectedIndex].label}
                                        sx={{
                                            maxWidth: '100%',
                                            borderRadius: 2,
                                            boxShadow: 2,
                                        }}
                                    />
                                </Box>
                            </Stack>
                        </Box>
                    </Container>
                </FadeSection>
                <FadeSection>
                    <Container>
                        <Box px={{ xs: 2, md: 8 }} py={6} bgcolor="#f2f7ff">
                            <Typography variant="h5" fontWeight="bold" textAlign="center" mb={4}>
                                Technologies
                            </Typography>

                            <Grid container border="1px solid #d1e0ff"  overflow="hidden">
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
                            </Grid>
                        </Box>
                    </Container>
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
                    <Container sx={{ mt: 20 }} >
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
                                        IOT Brochure
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


