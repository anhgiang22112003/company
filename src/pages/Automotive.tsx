import React, { useState } from 'react'
import { Box, Grid, Typography, Avatar, Container, CssBaseline, Stack, Link, Paper, List, ListItemButton, ListItemIcon, ListItemText, Divider, ListItem, IconButton, } from '@mui/material'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord' // hình tròn nhỏ
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import BusinessIcon from '@mui/icons-material/Business'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import LanguageIcon from '@mui/icons-material/Language'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
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
                items: [
                    'Infotainment & HMI: cluster, navigation, camera, media player',
                    'Surround view camera',
                    'LTE & diagnostic module',
                ],
            },
            {
                title: 'Technologies',
                items: [
                    'Embedded Linux, RTOS, CAN, LIN',
                    'C/C++, QT/QML, Yocto, QNX',
                    'Map APIs: NaverMap, HERE, MapBoxGL',
                ],
            },
        ],
    },
    {
        label: 'Door and Window Power System',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626143619.591.webp',
        content: [
            {
                title: 'Functionalities',
                items: [
                    'Automatic/manual seat control',
                    'Smart door control',
                ],
            },
            {
                title: 'Technologies',
                items: [
                    'C++',
                    'Matlab, Enterprise Architect',
                ],
            },
        ],
    },
    {
        label: 'Car Controller System',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626143637.392.webp',
        content: [
            {
                title: 'Functionalities',
                items: [
                    'Brake, accelerator, steering control',
                    'ADAS: auto braking, collision warning',
                    'Telematics: web/mobile signal control',
                ],
            },
            {
                title: 'Technologies',
                items: [
                    'RTOS for ECU, Jetson, S32K',
                    'Radar, Lidar, Lights',
                ],
            },
        ],
    },
    {
        label: 'CarPilot Diagnostic',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626143648.696.webp',
        content: [
            {
                title: 'Functionalities',
                items: [
                    'OBD-II data reader with CAN/LIN',
                    'Diagnostic dashboard & notifications',
                    'Vehicle tracking',
                ],
            },
            {
                title: 'Technologies',
                items: [
                    'Java, ReactJS, Cordova',
                    'ESP8266, STM32F413',
                    'CAN, LIN, GMLAN, Websocket',
                ],
            },
        ],
    },
    {
        label: 'Navigation for Android Automotive OS',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626143703.338.webp',
        content: [
            {
                title: 'Functionalities',
                items: [
                    'POI search with chatbot',
                    'Social login & keyword suggestions',
                    'Turn-by-turn navigation',
                ],
            },
            {
                title: 'Technologies',
                items: [
                    'ReactJS, Android OS 7.0+',
                    'Mapbox, Google Map, Yelp API',
                ],
            },
        ],
    },
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
            { label: 'Python' },
            { label: 'Android' },
            { label: 'Data Science AI/ML' },
            { label: 'Model-Based Development' },
        ],
    },
    {
        title: 'Tools',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/icon_tools.webp',
        items: [
            { label: 'Matlab-Simulink' },
            { label: 'Visual Studio Code' },
            { label: 'Git' },
            { label: 'C/C++' },
        ],
    },
    {
        title: 'Protocols',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/icon_protocols.webp',
        items: [
            { label: 'CAN, LIN, UART, I2C' },
            { label: 'MQTT, HTTPS, 5G' },
        ],
    },
    {
        title: 'Model-based',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/icon_model_based.webp',
        items: [
            { label: 'Simulink' },
            { label: 'Stateflow' },
            { label: 'Model in Loop' },
        ],
    },
    {
        title: 'Hardware',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/icon_hardware.webp',
        items: [
            { label: 'RTOS on RH850, STM32, S32K' },
            { label: 'Automotive Camera Systems' },
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
                    <Container sx={{ textAlign: "center" }}>

                        {/* Left: Text and Icons */}

                        <Typography variant="h4" fontWeight="bold" mb={2}>
                            Automotive
                        </Typography>
                        <Typography variant="body1" mb={4}>
                            With more than 8 years of experience in providing software development services for global automotive suppliers, Automotive Software Center has intensive experience in a wide range of automotive software including in-vehicle system, door and window power system, car controller system, car pilot diagnostic, navigation for Android Automotive OS, car mobile remote, traffic image processing, automotive NAD, and V2X Stack.
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
                    background: 'linear-gradient(to bottom, #1976d2, rgba(10, 75, 149, 0.56))',


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
                        <Box sx={{ p: 4 }}>
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
                        <Box sx={{ py: 6, position: 'relative', }}>
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                navigation={{
                                    prevEl: '.custom-swiper-prev',
                                    nextEl: '.custom-swiper-next',
                                }}
                                spaceBetween={20}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                autoplay={{
                                    delay: 2000, // 4 giây
                                    disableOnInteraction: false, // vẫn tiếp tục auto sau khi người dùng vuốt
                                }}
                                breakpoints={{
                                    600: { slidesPerView: 1.2 },
                                    900: { slidesPerView: 2 },
                                    1200: { slidesPerView: 3 },
                                }}
                                style={{ paddingBottom: 32 }}
                            >
                                {skillSetData.map((category, index) => (
                                    <SwiperSlide key={index}>
                                        <Paper
                                            elevation={2}
                                            sx={{
                                                p: 2,
                                                borderRadius: 3,
                                                height: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                <Box
                                                    component="img"
                                                    src={category.icon}
                                                    alt={category.title}
                                                    sx={{ width: 36, height: 36, mr: 1 }}
                                                />
                                                <Typography variant="h6" fontWeight="bold">
                                                    {category.title}
                                                </Typography>
                                            </Box>

                                            <Divider sx={{ mb: 2 }} />

                                            <List dense disablePadding>
                                                {category.items.map((item, idx) => (
                                                    <ListItem
                                                        key={idx}
                                                        disableGutters
                                                        sx={{
                                                            px: 0,
                                                            py: 0.6,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                        }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                width: 8,
                                                                height: 8,
                                                                backgroundColor: 'primary.main',
                                                                transform: 'rotate(45deg)',
                                                                borderRadius: '2px',
                                                                mr: 1.5,
                                                            }}
                                                        />
                                                        <ListItemText
                                                            primary={
                                                                <Typography variant="body2" color="text.primary">
                                                                    {item.label}
                                                                </Typography>
                                                            }
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Paper>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

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
                                    Automove IT Outsourcing
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

