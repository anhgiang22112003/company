import React, { useEffect, useRef, useState } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { Avatar, Box, Breadcrumbs, Button, Container, Divider, Fade, Grid, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, Tab, Tabs, Typography, useMediaQuery, useTheme } from '@mui/material'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'
import FileDownloadIcon from '@mui/icons-material/FileDownload'

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

import { Circle } from '@mui/icons-material' // Biểu tượng hình tròn
const testingServices = [
    {
        title: "Types of Software Testing",
        imageUrl: "https://tmastorage.azureedge.net/media/services/softwareTesting/service/software_testing_service_test_planning_and_execution.webp",
        items: [
            "Manage all aspects of product testing",
            "Product quality assurance consulting",
        ],
    },
    {
        title: "Full Product Verification",
        imageUrl: "https://tmastorage.azureedge.net/media/services/softwareTesting/service/software_testing_service_full_product_verification.webp",
        items: [
            "Integration & system testing",
            "Performance testing",
            "Security testing",
        ],
    },
    {
        title: "Automation Testing",
        imageUrl: "https://tmastorage.azureedge.net/media/services/softwareTesting/service/software_testing_service_test_automation.webp",
        items: [
            "Develop test automation tools/solutions",
            "Execute test scripts and report results",
        ],
    },
]

const expertiseAreas = [
    {
        title: "Telecom & Networks",
        imageUrl: "https://tmastorage.azureedge.net/media/services/softwareTesting/areaExpertise/software_testing_area_expertise_telecom_and_networks.webp",
        items: [
            "Soft Switch, Carrier VoIP",
            "PBX and IP Telephony Systems",
            "Unified Communications",
            "Wireless: 4G LTE, 5G, WiFi-6",
        ],
    },
    {
        title: "Business Applications",
        imageUrl: "https://tmastorage.azureedge.net/media/services/softwareTesting/areaExpertise/software_testing_area_expertise_business_applications.webp",
        items: [
            "CRM",
            "E-commerce",
            "Finance & Insurance",
            "Healthcare",
            "Logistics & Transportation",
        ],
    },
    {
        title: "Mobile Applications",
        imageUrl: "https://tmastorage.azureedge.net/media/services/softwareTesting/areaExpertise/software_testing_area_expertise_mobile_applications.webp",
        items: [
            "iOS, Android, HTML5",
        ],
    },
]


const cloudApplications = {
    title: "Cloud Applications",
    imageUrl: "https://tmastorage.azureedge.net/media/services/softwareTesting/areaExpertise/software_testing_area_expertise_mobile_applications.webp",
    items: [
        "Windows Azure, Google App Engine, Force.com",
        "Amazon Web Services, Amazon EC2, Crackspace",
    ],
}
const imageList = [
    {
        label: "Agile test flow (1/3)",
        url: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_20240724013925.942.webp"
    },
    {
        label: "Agile test flow (2/3)",
        url: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_20240718172627.865.webp"
    },
    {
        label: "Agile test flow (3/3)",
        url: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_20240718172659.461.webp"
    }
]
const tabData = [
    {
        label: "4G MVNO LTE EPC & MANO",
        image: "https://tmastorage.azureedge.net/uploadfiles/Testing/Testing_8.webp",
        solutions: [
            "Verify OTT services: video/audio call, message, group call",
            "Push notification verification on Android & iOS",
            "2FA verification with large subscriber base",
            "Media stream testing under various network conditions",
        ]
    },
    {
        label: "Enable Network Transformation",
        image: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240325164259.128.webp",
        solutions: [
            "Test strategy & test case development",
            "Feature & system verification",
            "Performance & capacity test",
            "Automation for sanity and regression",
        ]
    },
    {
        label: "Billing Mediation Platform",
        image: "https://tmastorage.azureedge.net/uploadfiles/Testing/Testing_6.webp",
        solutions: [
            "Product & solution testing",
            "Automation & manual testing",
            "Demo and deployment support",
        ]
    },
    {
        label: "Enterprise Communication Solution",
        image: "https://tmastorage.azureedge.net/uploadfiles/Testing/Testing_5.webp",
        solutions: [
            "Software testing",
            "Automation tool development",
            "Network simulation tools (e.g. Ysim, MP3)",
        ]
    }
]





const SoftwareTestingPage = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    const myRef = useRef<HTMLDivElement | null>(null)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const currentTab = tabData[selectedIndex]


    return (
        <>
            <Header />
            <Box>
                <FadeSection >
                    <Container>
                        <Box sx={{ mt: 20, px: 4, p: 2 }}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Link underline="hover" color="#00A1F1" href="/">
                                    <Typography fontWeight={700}>Home</Typography>
                                </Link>

                                <Typography color="#00A1F1">›</Typography>

                                <Link href="sevices" underline="hover"><Typography color="#00A1F1">Services</Typography></Link>

                                <Typography color="#00A1F1">{'>'}</Typography>

                                <Typography color="text.primary">Software Testing</Typography>
                            </Stack>

                        </Box>
                    </Container>
                </FadeSection>
                <FadeSection id='about' >
                    <Box >
                        <Box >
                            <Container sx={{ textAlign: "center" }}>
                                <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                                <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                    Software Development Services
                                </Typography>
                                <Typography textAlign={"center"} >At Solutions, we offer comprehensive software development services covering the entire software development life cycle (SDLC). From Product Enhancement to MVP development, R&D, PoC and Prototype development, Maintenance & Support, Porting & Migration - we cater to all your software needs with the utmost expertise.</Typography>
                            </Container>
                        </Box>

                        <Container sx={{ mt: 6, mb: 4 }}>
                            <Grid container spacing={4}>
                                {testingServices.map((service, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Paper
                                            elevation={3}
                                            sx={{
                                                padding: 3,
                                                borderRadius: 2,
                                                bgcolor: '#E3F2FD',
                                                textAlign: 'center',
                                                height: '100%',


                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', }}>
                                                <Box
                                                    component="img"
                                                    src={service.imageUrl}
                                                    alt={service.title}
                                                    sx={{ width: "10%", objectFit: 'contain', mb: 1 }}
                                                />
                                                <Typography fontSize={15} fontWeight="bold">
                                                    {service.title}
                                                </Typography>
                                            </Box>
                                            <Divider sx={{ mb: 2 }} />
                                            <Box component="ul" sx={{ pl: 1, m: 0, textAlign: 'left' }}>
                                                {service.items.map((item, idx) => (
                                                    <Box
                                                        component="li"
                                                        key={idx}
                                                        sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
                                                    >
                                                        <Circle sx={{ color: '#00BFFF', fontSize: 10, mr: 1 }} />
                                                        <Typography variant="body2">{item}</Typography>
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>

                    </Box>
                </FadeSection>
                <FadeSection id='about' >
                    <Box p={5} sx={{
                        mt: 10,
                        background: 'linear-gradient(to bottom, #1976d2, rgba(149, 10, 138, 0.56))',
                        backdropFilter: 'blur(6px)',
                        WebkitBackdropFilter: 'blur(6px)',
                        color: "white",
                        clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0% 100%)"
                    }}
                    >
                        <Box >
                            <Container sx={{ textAlign: "center", color: "white" }}>
                                <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                                <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                    Areas of Testing Expertise
                                </Typography>
                                <Typography textAlign={"center"} >Accelerate your product launch with  Solutions' software testing and QA support.</Typography>
                            </Container>
                        </Box>
                        <Container sx={{ mt: 4, mb: 4 }}>
                            <Paper elevation={3} sx={{ padding: 3, borderRadius: 2, bgcolor: 'white' }}>
                                <Grid container spacing={4}>
                                    {expertiseAreas.slice(0, 2).map((area, index) => (
                                        <Grid item xs={12} sm={4} key={index}>
                                            <Box sx={{ textAlign: 'center', height: '100%' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                    <img
                                                        src={area.imageUrl}
                                                        alt={area.title}
                                                        style={{ width: 50, height: 50, marginRight: 16 }}
                                                    />
                                                    <Typography fontSize={{ xs: 15, md: 18 }} sx={{ fontWeight: 'bold' }}>
                                                        {area.title}
                                                    </Typography>
                                                </Box>
                                                <Divider sx={{ mb: 2 }} />
                                                <Box sx={{ listStyleType: 'none', pl: 0 }}>
                                                    {area.items.map((item, idx) => (
                                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }} key={idx}>
                                                            <Circle sx={{ color: '#00BFFF', fontSize: 12, mr: 1 }} />
                                                            <Typography variant="body2" sx={{ textAlign: 'left' }}>
                                                                {item}
                                                            </Typography>
                                                        </Box>
                                                    ))}
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}

                                    {/* Gộp Mobile và Cloud Applications vào cùng một Grid item */}
                                    <Grid item xs={12} sm={4}>
                                        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                            {[expertiseAreas[2], cloudApplications].map((area, index) => (
                                                <Box sx={{ textAlign: 'center', mb: index === 0 ? 4 : 0 }} key={index}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                        <img
                                                            src={area.imageUrl}
                                                            alt={area.title}
                                                            style={{ width: 50, height: 50, marginRight: 16 }}
                                                        />
                                                        <Typography fontSize={{ xs: 15, md: 18 }} sx={{ fontWeight: 'bold' }}>
                                                            {area.title}
                                                        </Typography>
                                                    </Box>
                                                    <Divider sx={{ mb: 2 }} />
                                                    <Box sx={{ listStyleType: 'none', pl: 0 }}>
                                                        {area.items.map((item, idx) => (
                                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }} key={idx}>
                                                                <Circle sx={{ color: '#00BFFF', fontSize: 12, mr: 1 }} />
                                                                <Typography variant="body2" sx={{ textAlign: 'left' }}>
                                                                    {item}
                                                                </Typography>
                                                            </Box>
                                                        ))}
                                                    </Box>
                                                </Box>
                                            ))}
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Container>

                    </Box>
                </FadeSection>
                <FadeSection id='about' >
                    <Box sx={{ mt: 10 }}>
                        <Box >
                            <Container sx={{ textAlign: "center" }}>
                                <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                                <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                    Agile Testing Process
                                </Typography>
                                <Typography textAlign={"center"} >With extensive expertise in offshore software development,  Solutions delivers amazing agile software outsourcing services. Our team ensures efficient project management, rapid delivery, and continuous improvement, making us the preferred choice for businesses seeking intensive Agile experience.</Typography>
                            </Container>
                        </Box>
                        <Container sx={{ mt: 4, mb: 4 }}>
                            <Box width="100%">
                                {/* Menu */}
                                <Stack
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={0}
                                    sx={{ mb: 3 }}
                                >
                                    {imageList.map((item, index) => (
                                        <Box
                                            key={item.label}
                                            onClick={() => setActiveIndex(index)}
                                            sx={{
                                                cursor: "pointer",
                                                px: 2,
                                                position: "relative",
                                                color: activeIndex === index ? "#1976d2" : "#444",
                                                fontWeight: activeIndex === index ? "bold" : "normal",
                                                transition: "color 0.3s",
                                                "&:not(:last-child)::after": {
                                                    content: '"|"',
                                                    position: "absolute",
                                                    right: "-8px",
                                                    top: "50%",
                                                    transform: "translateY(-50%)",
                                                    color: "#999"
                                                },
                                                "&::before": {
                                                    content: '""',
                                                    position: "absolute",
                                                    bottom: 0,
                                                    left: 0,
                                                    width: 0,
                                                    height: "2px",
                                                    backgroundColor: "#1976d2",
                                                    transition: "width 0.3s ease"
                                                },
                                                "&:hover::before": {
                                                    width: "100%"
                                                }
                                            }}
                                        >
                                            <Typography variant="body1">{item.label}</Typography>
                                        </Box>
                                    ))}
                                </Stack>

                                {/* Image */}
                                <Box
                                    component="img"
                                    src={imageList[activeIndex].url}
                                    alt={imageList[activeIndex].label}
                                    sx={{
                                        width: "100%",
                                        maxHeight: "600px",
                                        objectFit: "contain",
                                        mt: 2
                                    }}
                                />
                            </Box>
                        </Container>
                    </Box>
                </FadeSection>
                <FadeSection id='Microsoft'>
                    <Box
                        sx={{
                            background: 'linear-gradient(180deg, #009BFF 0%,rgb(31, 58, 85) 100%)',
                            boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                            borderRadius: 3,
                        }}>


                        <Container sx={{ mt: 12 }}>
                            <Box
                                sx={{
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    color: 'white',
                                    px: { xs: 2, sm: 4 },
                                    py: { xs: 6, sm: 8 },
                                }}
                            >
                                <Box textAlign="center" mb={6}>
                                    <img
                                        src="https://www.tmasolutions.com/media/technologies/iconDecor.webp"
                                        alt=""
                                        style={{ marginBottom: 16 }}
                                    />
                                    <Typography variant="h4" fontWeight="bold">
                                        Testing Tools
                                    </Typography>
                                </Box>

                                <Grid container spacing={4}>
                                    {[
                                        {
                                            title: 'Bug Tracking',
                                            tools: ['JIRA', 'Redmine', 'Azure DevOps', 'TestRails'],
                                        },
                                        {
                                            title: 'UI & Mobile Test',
                                            tools: ['Selenium', 'Appium', 'QTP', 'TestComplete'],
                                        },
                                        {
                                            title: 'API & Automation',
                                            tools: ['Postman', 'RobotFramework', 'Cucumber', 'SoapUI'],
                                        },
                                        {
                                            title: 'Performance & Security',
                                            tools: ['JMeter', 'IXIA', 'Nessus', 'BurpSuite'],
                                        },
                                    ].map((item, index) => (
                                        <Grid item xs={12} md={6} key={index}>
                                            <Box
                                                sx={{
                                                    bgcolor: 'white',
                                                    color: '#333',
                                                    borderRadius: 2,
                                                    p: 3,
                                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                                    height: '100%',
                                                }}
                                            >
                                                <Typography variant="h6" fontWeight="bold" mb={2} color="#1976d2">
                                                    {item.title}
                                                </Typography>
                                                <Box display="flex" flexWrap="wrap" gap={2}>
                                                    {item.tools.map((tech, i) => (
                                                        <Box key={i} display="flex" alignItems="center" width="100%">
                                                            <FiberManualRecordIcon sx={{ fontSize: 8, color: 'green', mr: 1 }} />
                                                            <Typography variant="body2">{tech}</Typography>
                                                        </Box>
                                                    ))}
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Container>
                    </Box>


                </FadeSection>
                <FadeSection id='Microsoft'>
                    <Container>
                        <Box py={5}>
                            <Box textAlign="center" mb={4}>
                                <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                                <Typography fontWeight="bold" variant="h4">
                                    Case studies
                                </Typography>
                            </Box>

                            {/* Tabs menu giống phần trên */}
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 4,
                                    borderRadius: 3,
                                }}
                            >
                                <List
                                    component="nav"
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        gap: 1,
                                        mb: 4,
                                        flexWrap: 'wrap',
                                        overflowX: 'auto',
                                    }}
                                >
                                    {tabData.map((tab, index) => (
                                        <ListItemButton
                                            key={tab.label}
                                            selected={selectedIndex === index}
                                            onClick={() => setSelectedIndex(index)}
                                            sx={{
                                                borderRadius: 2,
                                                bgcolor: selectedIndex === index ? 'primary.main' : 'transparent',
                                                color: selectedIndex === index ? 'white' : 'black',
                                                px: 2,
                                                py: 1,
                                                minWidth: 160,
                                                '&:hover': {
                                                    bgcolor: 'primary.light',
                                                    color: 'white',
                                                },
                                            }}
                                        >
                                            <ListItemIcon sx={{ minWidth: 32 }}>
                                                <Avatar
                                                    src={tab.image || ''}
                                                    variant="square"
                                                    sx={{ width: 24, height: 24, bgcolor: 'transparent' }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={
                                                    <Typography variant="body2" noWrap>
                                                        {tab.label}
                                                    </Typography>
                                                }
                                            />
                                        </ListItemButton>
                                    ))}
                                </List>

                                {/* Nội dung tương ứng giống style phần trên */}
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6}>
                                        <Box
                                            sx={{
                                                border: '1px solid #d6e9ff',
                                                borderRadius: 1,
                                                padding: 2,
                                                backgroundColor: '#f9fcff',
                                                height: '100%',
                                            }}
                                        >
                                            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                                                Solutions
                                            </Typography>
                                            <Divider sx={{ mb: 1 }} />
                                            <List dense disablePadding>
                                                {currentTab.solutions.map((item, i) => (
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

                                    <Grid item xs={12} md={6}>
                                        <Box
                                            sx={{
                                                border: '1px solid #d6e9ff',
                                                borderRadius: 1,
                                                padding: 2,
                                                backgroundColor: '#f9fcff',
                                                height: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={currentTab.image}
                                                alt={currentTab.label}
                                                sx={{
                                                    width: '100%',
                                                    maxHeight: 300,
                                                    objectFit: 'contain',
                                                }}
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Box>
                    </Container>


                </FadeSection>
                <FadeSection id="download">
                    <Container sx={{ mt: { xs: 12, sm: 16, } }}>
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
                                        Testing IT Outsourcing
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


export default SoftwareTestingPage


