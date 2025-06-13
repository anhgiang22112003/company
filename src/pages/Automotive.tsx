import React, { useState } from 'react'
import { Box, Grid, Typography, Avatar, Container, CssBaseline, Stack, Link, Paper, List, ListItemButton, ListItemIcon, ListItemText, Divider, ListItem, } from '@mui/material'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord' // hình tròn nhỏ
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import BusinessIcon from '@mui/icons-material/Business'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import LanguageIcon from '@mui/icons-material/Language'
import StarIcon from '@mui/icons-material/Star' // icon cho từng item, bạn có thể thay đổi

const infoData = [
    {
        title: '8 Years of experience in Automotive software development',
        icon: <BusinessIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
    },
    {
        title: 'Setup and operate dedicated offshore centers for global companies',
        icon: <GroupAddIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
    },
    {
        title: 'Customers from Japan, USA, Canada, Germany, Luxembourg',
        icon: <LanguageIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
    },
]



const menuItems = [
    {
        label: 'In-Vehicle System',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626143604.752.webp',
        content: [
            {
                title: 'Functionalities',
                items: ['Infotainment embedded software and HMI applications: cluster, launcher, navigation, media player, camera, HVAC controllers',
                    'Surround view camera',
                    'Cluster ECU',
                    'Power door ECU',
                    'LTE & diagnostic module​'],
            },
            {
                title: 'Technologies',
                items: ['Embedded Linux, RTOS',
                    'C/C++, Matlab Simulink, Enterprise Architect, Ascet, SCADE',
                    'CAN, LIN, USB, BT, ETH, SPI, UART, I2C, SOTA, FOTA',
                    'QT, QML, QNX, Genevi, Yocto',
                    'NaverMap, NaviCore, HERE, TomTom, MapBoxGL, Yelp',
                    'MCU, Sensors, Radar, Lidar, Computer Vision​'],
            },
        ]
    },
    {
        label: 'Door and Window Power System',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626143619.591.webp',
        content: [
            {
                title: 'Functionalities',
                items: ['Self-seat automatic and manual control',
                    'Door opening and closing interlocking control',
                    'Control link door key/wireless/smart door​'],
            },
            {
                title: 'Technologies',
                items: ['Matlab 2015a, Enterprise Architect 13',
                    'Language: C++​'],
            },
        ]
    },
    {
        label: 'Car Controller System',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626143637.392.webp',
        content: [
            {
                title: 'Functionalities',
                items: ['Brake and accelerator pedal control',
                    'Steering and gear management',
                    'Lights management',
                    'ADAS: auto braking, collision warning',
                    'Telematics: Develop web and mobile app to send/receive signals from automotive system via embedded wireless node (wifi,4G/5G)​'],
            },
            {
                title: 'Technologies',
                items: ['Software / Embedded RTOS for ECU',
                    'Hardware / Embedded System',
                    'MPC56xx, S32K14x, Jetson',
                    'Lights, Radar, Lidar, Steering, Encoders, Parsers​'],
            },
        ]
    },
    {
        label: 'CarPilot Diagnostic',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626143648.696.webp',
        content: [
            {
                title: 'Functionalities',
                items: ['Mini device receives data from OBD-II port and communicate to server online, supports for 3x CAN, 2x LIN, 1xGMLAN',
                    'Display vehicle status and diagnostic on website',
                    'Send notification automatically to car owner when there is any error',
                    'Location identification​'],
            },
            {
                title: 'Technologies',
                items: ['Tools: Eclipse, VS Code, Gcc for arm, KiCad, ESP8266 NONOS SDK, AWS',
                    'Database: PostgreSQL, OpenDBC file Encodes',
                    'Language: Java, ReactJS, Cordova, MapBoxGL, JS/HTML/CSS, C',
                    'Hardware: STM32F413, ELM327, ESP8266',
                    'Basic protocol: CAN, LIN, GMLAN, SPI, Websocket​'],
            },
        ]
    },
    {
        label: 'Navigation for Android Automotive OS',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626143703.338.webp',
        content: [
            {
                title: 'Functionalities',
                items: ['Social login',
                    'Chat with bot for POI and nearby',
                    'Search with quick and slow mode',
                    'Suggest search keywords',
                    'Navigation AV​'],
            },
            {
                title: 'Technologies',
                items: ['Frontend: ReactJS , Cordova, Google Map, Mapbox, Android OS 7.0+',
                    'Database: PostgreSQL 9.6',
                    'Third-parties: Facebook SDK, Yelp API​'],
            },
        ]
    },
]
const imageUrls = [
    'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112627.082.webp',
    'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112824.251.webp',
    'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112854.529.webp',
    'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112919.816.webp',
    'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112941.514.webp',
    'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121113006.739.webp',
    'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121113054.791.webp',
    'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121113030.589.webp',
    'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121113117.504.webp',
    'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121113423.950.webp',
    'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121113152.694.webp',
]

const techLabels = [
    'Angular', 'React.js', 'Java', 'Spring Boot',
    'Node.js', 'Python', 'Kotlin', 'Django',
    'Solidity', 'Scikit-learn', 'Ethereum', 'Hyperledger',
    'Polygon', 'IPFS', 'TensorFlow', 'PyTorch',
    'Azure', 'OpenAI', 'Hugging Face',
]
const servicesData = [
    {
        title: 'R&D Prototyping',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/icon-service-01.webp',
    },
    {
        title: 'Embedded Software',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/icon-service-02.webp',
    },
    {
        title: 'Model-Based',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/icon-service-03.webp',
    },
    {
        title: 'Application Development',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/icon-service-04.webp',
    },
    {
        title: 'Porting & Optimization',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/icon-service-05.webp',
    },
    {
        title: 'MIL/SIL Test',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/icon-service-06.webp',
    },
    {
        title: 'Testing in Specialized ',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/icon-service-07.webp',
    },
]
const skillSetData = [
    {
        title: 'Skill Set',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/icon_skillset.webp',
        items: [
            { label: 'Model-Based Development' },
            { label: 'Android' },
            { label: 'Mobile Apps' },
            { label: 'Python' },
            { label: 'Wireless' },
            { label: 'Data Science AI/ML' },
            { label: 'ECU, MCU Systems' },
        ],
    },
    {
        title: 'Tools',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/icon_tools.webp',
        items: [
            { label: 'Matlab-Simulink' },
            { label: 'SCADE' },
            { label: 'C/C++, OWIN, ONV' },
            { label: 'Visual Studio Code, Git' },
            { label: 'ESP32/ESP8266 Modules' },
        ],
    },
    {
        title: 'Protocols',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/icon_protocols.webp',
        items: [
            { label: 'CAN, LIN, UART, I2C, USB, TEL, HTTPS' },
            { label: 'MQTT, Websocket, CAN, LIN, GNSS, GPS, LTE, 5G' },
        ],
    },
    {
        title: 'Model-based',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/icon_model_based.webp',
        items: [
            { label: 'Matlab Simulink' },
            { label: 'Model Stateflow' },
            { label: 'ASCET' },
            { label: 'Model in Loop' },
            { label: 'Software in Loop' },
        ],
    },
    {
        title: 'Hardware',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/icon_hardware.webp',
        items: [
            { label: 'Embedded RTOS for RZ/V2L, RH850, S32K, STM32, S32R, S32K3, S32G' },
            { label: 'Automotive Camera Front, Adaptive Cruise Control, Surrounding View System' },
        ],
    },
]


const AutomotivePage = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const selectedService = menuItems[selectedIndex]
    return (
        <>
            <CssBaseline />
            <Header />
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
                    <Container sx={{ textAlign: "center" }}>

                        {/* Left: Text and Icons */}

                        <Typography variant="h4" fontWeight="bold" mb={2}>
                            Automotive
                        </Typography>
                        <Typography variant="body1" mb={4}>
                            With more than 8 years of experience in providing software development services for global automotive suppliers, TMA Automotive Software Center has intensive experience in a wide range of automotive software including in-vehicle system, door and window power system, car controller system, car pilot diagnostic, navigation for Android Automotive OS, car mobile remote, traffic image processing, automotive NAD, and V2X Stack.
                        </Typography>

                        <Box >
                            <Container>

                                <Grid container spacing={4} justifyContent="center">
                                    {infoData.map((info, index) => (
                                        <Grid item xs={12} sm={4} key={index}>
                                            <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
                                                {info.icon}
                                                <Typography variant="body1" sx={{ mt: 2 }}>
                                                    {info.title}
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Container>
                        </Box>
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

                            <Link href="industries" underline="hover"><Typography color="#00A1F1">Industries</Typography></Link>

                            <Typography color="#00A1F1">{'>'}</Typography>

                            <Typography color="text.primary">Automotive</Typography>
                        </Stack>

                    </Box>
                </Container>
            </FadeSection>
            <FadeSection id='about' >
                <Box p={5} sx={{

                    clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0% 100%)"
                }}
                >
                    <Box >
                        <Container sx={{ textAlign: "center" }}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                Services
                            </Typography>
                            <Typography textAlign={"center"} >
                                We specialize in developing advanced fintech applications, integrating core banking systems, leveraging Web3 and blockchain technologies, and applying AI to enhance financial services and customer experiences.
                            </Typography>
                        </Container>
                    </Box>
                    <Container sx={{ mb: 4 }}>
                        <Box sx={{ bgcolor: '#E3F2FD', p: 4 }}>
                            <Container>
                                <Grid container spacing={1} justifyContent="center">
                                    {servicesData.map((service, index) => (
                                        <Grid item xs={12} sm={6} md={3} key={index}>
                                            <Paper elevation={3} sx={{ padding: 3, textAlign: 'center', bgcolor: '#2196F3', color: 'white' }}>
                                                <Box component="img" src={service.icon} alt={service.title} sx={{ width: '20%', mb: 2 }} />
                                                <Typography fontSize={15}>
                                                    {service.title}
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Container>
                        </Box>
                    </Container>
                </Box>
            </FadeSection>
            <FadeSection>
                <Box sx={{ bgcolor: '#E3F2FD', p: 4 }}>
                    <Container>
                        <Box >
                            <Container sx={{ textAlign: "center" }}>
                                <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                                <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                    Technologies
                                </Typography>
                                <Typography textAlign={"center"} >
                                    Our engineers are at the forefront of automotive technology, using their exceptional technical skills to design and develop high-rated automobile products. Stay competitive in the car industry with our advanced automotive software solutions                            </Typography>
                            </Container>
                        </Box>
                        <Box sx={{ p: 4 }}>
                            <Container>
                                <Grid container spacing={4} justifyContent="center">
                                    {skillSetData.map((category, index) => (
                                        <Grid item xs={12} sm={6} md={4} key={index}>
                                            <Paper
                                                elevation={3}
                                                sx={{
                                                    p: 2,
                                                    borderRadius: 3,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between',

                                                }}
                                            > <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                                    <Box
                                                        component="img"
                                                        src={category.icon}
                                                        alt={category.title}
                                                        sx={{ width: "10%" }}
                                                    />
                                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                                        {category.title}
                                                    </Typography>
                                                </Box>

                                                <Divider />

                                                {/* Danh sách item */}
                                                <List dense >
                                                    {category.items.map((item, idx) => (

                                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                            <Box
                                                                sx={{
                                                                    width: 5,
                                                                    height: 5,
                                                                    backgroundColor: 'primary.main',
                                                                    transform: 'rotate(45deg)',
                                                                    borderRadius: '2px',
                                                                    mr: 1,
                                                                }}
                                                            />
                                                            <ListItemText
                                                                primary={
                                                                    <Typography variant="body2" >
                                                                        {item.label}
                                                                    </Typography>
                                                                }
                                                            />
                                                        </Box>


                                                    ))}
                                                </List>
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Container>
                        </Box>
                    </Container>
                </Box>
            </FadeSection>
            <FadeSection id='about' >
                <Box p={5} sx={{
                    mt: 4,
                    clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0% 100%)"
                }}
                >
                    <Box >
                        <Container sx={{ textAlign: "center" }}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                Solutions
                            </Typography>
                            <Typography textAlign={"center"} >
                                Leveraging the latest technologies, we provide end to end software services that address the different needs of the automotive industry
                            </Typography>
                        </Container>
                    </Box>
                    <Container sx={{ mt: 4 }}>
                        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                            {/* Menu hàng ngang */}
                            <List
                                component="nav"
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    gap: 1,
                                    mb: 4,
                                    flexWrap: 'wrap',
                                }}
                            >
                                {menuItems.map((item, index) => (
                                    <ListItemButton
                                        key={item.label}
                                        selected={selectedIndex === index}
                                        onClick={() => setSelectedIndex(index)}
                                        sx={{
                                            borderRadius: 2,
                                            bgcolor: selectedIndex === index ? 'primary.main' : 'transparent',
                                            color: selectedIndex === index ? 'white' : 'black',
                                            px: 2,
                                            py: 1,
                                            minWidth: 140,
                                            '&:hover': {
                                                bgcolor: 'primary.light',
                                                color: 'white',
                                            },
                                        }}
                                    >
                                        <ListItemIcon sx={{ minWidth: 32 }}>
                                            <Avatar src={item.icon} variant="square" sx={{ width: 24, height: 24 }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                <Typography variant="body2" noWrap>
                                                    {item.label}
                                                </Typography>
                                            }
                                        />
                                    </ListItemButton>
                                ))}
                            </List>

                            {/* Content */}
                            <Grid container spacing={3}>
                                {selectedService.content.map((service, idx) => (
                                    <Grid item xs={12} md={4} key={idx}>
                                        <Box
                                            sx={{
                                                border: '1px solid #d6e9ff',
                                                borderRadius: 1,
                                                padding: 2,
                                                backgroundColor: '#f9fcff',
                                                minHeight: 180,
                                            }}
                                        >
                                            <Box display="flex" alignItems="center" mb={1}>
                                               
                                                <Typography variant="subtitle1" fontWeight="bold">
                                                    {service.title}
                                                </Typography>
                                            </Box>
                                            <Divider />
                                            <List dense disablePadding>
                                                {service.items.map((item, i) => (
                                                    <ListItem key={i} disableGutters sx={{ pl: 0 }}>
                                                        <ListItemIcon sx={{ minWidth: 20 }}>
                                                            <FiberManualRecordIcon sx={{ fontSize: 8, color: '#339dff' }} />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={<Typography variant="body2">{item}</Typography>}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>

                        </Paper>
                    </Container>
                </Box>
            </FadeSection>
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
                                    Software Testing Brochure
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

export default AutomotivePage

