import React, { useEffect, useRef, useState } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { Box, Breadcrumbs, Button, Container, Divider, Fade, Grid, IconButton, Link, List, ListItem, ListItemText, Paper, Stack, Tab, Tabs, Typography, useMediaQuery, useTheme } from '@mui/material'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import ScrollDots from '../components/ScrollDots'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

import { Circle } from '@mui/icons-material' // Biểu tượng hình tròn
const testingServices = [
    {
        title: "Types of Software Testing",
        imageUrl: "https://tmastorage.azureedge.net/media/services/softwareTesting/service/software_testing_service_test_planning_and_execution.webp",
        items: [
            "Manage all aspects of product testing",
            "Product quality assurance consulting",
            "Test solutions (process and tools)",
        ],
    },
    {
        title: "Full Product Verification",
        imageUrl: "https://tmastorage.azureedge.net/media/services/softwareTesting/service/software_testing_service_full_product_verification.webp",
        items: [
            "Integration & system testing",
            "Performance testing",
            "Regression testing",
            "Compatibility testing",
            "Installation & upgrading testing",
            "Localization testing",
            "Security testing",
            "Interoperability testing",
        ],
    },
    {
        title: "Automation Testing",
        imageUrl: "https://tmastorage.azureedge.net/media/services/softwareTesting/service/software_testing_service_test_automation.webp",
        items: [
            "Develop test automation tools/solutions",
            "Enhance test automation coverage for regression",
            "Execute test scripts and report results",
            "In-house automation framework available and customizable",
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
            "Contact Center",
            "Billing, BSS/OSS, IP, WebRTC",
            "Wireless: 4G LTE, 5G, WiFi-6",
        ],
    },
    {
        title: "Business Applications",
        imageUrl: "https://tmastorage.azureedge.net/media/services/softwareTesting/areaExpertise/software_testing_area_expertise_business_applications.webp",
        items: [
            "CRM",
            "E-commerce, Retail and Distribution",
            "Finance & Insurance",
            "Healthcare",
            "Education",
            "Hospitality",
            "Media & Publishing",
            "Logistics & Transportation",
        ],
    },
    {
        title: "Mobile Applications",
        imageUrl: "https://tmastorage.azureedge.net/media/services/softwareTesting/areaExpertise/software_testing_area_expertise_mobile_applications.webp",
        items: [
            "iOS, Android, Windows Phone, Blackberry, HTML5",
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
            "Set up the test domain, environment",
            "Verify all supported functionalities of the OTT services in various platforms: video/audio call, conference, message, voice, group call, presence",
            "Verify push notification for active/passive push on android and iOS",
            "Verify 2FA with 1 million subscribers via BOT tools",
            "Verify media stream under different network conditions",
            "Verify media stream switch back and forth between wifi and 4G/LTE",
            "Verify interaction with Voice mail service, multi-party & collaboration and SIP client for Call-P service"
        ]
    },
    {
        label: "Enable Network Transformation",
        image: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240325164259.128.webp",
        solutions: [
            "Test strategy, test plan, test cases development",
            "Feature verification and system verification",
            "Solution regression",
            "Performance & capacity test",
            "Customer documentation validation",
            "Sanity and regression automation",
            "Installation, migration, upgrade test",
            "Security scan",
            "Field issues verification"
        ]
    },
    {
        label: "Billing Mediation Platform",
        image: "https://tmastorage.azureedge.net/uploadfiles/Testing/Testing_6.webp",
        solutions: [
            "Development",
            "New Features & Tools",
            "Product Sustaining",
            "Product & Solution Testing",
            "Full testing including Performance and Security test",
            "Automation and Manual",
            "Production Services",
            "Demo, deployment support"
        ]
    },
    {
        label: "Enterprise Communication Solution",
        image: "https://tmastorage.azureedge.net/uploadfiles/Testing/Testing_5.webp",
        solutions: [
            "Software Testing",
            "Test Tool Development",
            "Att tool: automation frame work to executes procedure described in a scenario file",
            "Ysim tool: simulate network devices and send message in any protocols",
            "ICARUS: establish a big number of UE sessions",
            "MP3: generate a big data traffic via LTE tunnel",
            "Log collector tools: shsuite, pstat, dwdf, admf (for lawful intercept)"
        ]
    }
]

const testingTools = [
    {
        title: "Test Case Tracking / Bug/Defect Tracking",
        tools: [
            "TCAT, Quality Center, Clarify, Remedy",
            "Team Track, ClearQuest, Bugzilla, TestRails",
            "Confluence and Wiki",
            "JIRA, Azure DevOps, Asana, Redmine, Problem Reporting System (PRS)",
            "Salesforce, TestLink",
        ],
    },
    {
        title: "GUI Test",
        tools: [
            "QTP, WinRunner, Silk Test, QA Run, Robot Test",
        ],
    },
    {
        title: "CLI Test",
        tools: [
            "TCL/Tk, Expect, Perl, Awk, Java, Unix shell, Fanfare, Python",
        ],
    },
    {
        title: "UI Test",
        tools: [
            "QTP (UFT), SilkTest, TestComplete, MS Test Professional, SoapUI, Selenium, Sikuli, AutoIT, Protractor",
        ],
    },
    {
        title: "Mobile Test",
        tools: [
            "UIAutomator, Selendroid, Appium, Calabash, LogCat, Mobile Log, Device Log Viewer, SBSetting, Pylot, Grinder",
        ],
    },
    {
        title: "Voice Test",
        tools: [
            "Crescendo (Voice path), VQuad (Voice quality), Hurricane (Signaling), SIPp (Signaling), TARTS, In-house speech path verification",
        ],
    },
    {
        title: "Automated Testing Tools",
        tools: [
            "RobotFramework, Cucumber, Katalon, MS Automation UI, TestShell Studio, TestNG, BDD Framework, Att, Twister, In-house Framework Tools (Hybrid Model)",
        ],
    },
    {
        title: "Performance and Traffic Test Tools",
        tools: [
            "IXIA, SmartBits, Ameritec, Hammer",
            "Hurricane, NES, Fortissimo",
            "Jmeter, Ysim, ICARUS, MP3, iPerl",
        ],
    },
    {
        title: "Instrument Control",
        tools: [
            "MatLab, Labview",
        ],
    },
    {
        title: "API Test",
        tools: [
            " NodeJS, PyrestTest, SOAPUI, Postman, Curl"
        ],
    },
    {
        title: "Security Testing",
        tools: [
            "Spectra2, SIPp, INES",
            "IxExplorer/IxLoad, VLC, IXIA, Spirent",
            "Nessus, Codenomicon, OpenVas, Cain Radius, SAML, USB Token",
            "Qualys, OpenScap"
        ],
    },
    {
        title: "Penetration Testing",
        tools: [
            "Nessus, Kali, BurpSuite, Metasploits, NMAP, OWASP ZAP"
        ],
    },
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
                                    <Grid item xs={12} sm={4} key={index}>
                                        <Paper elevation={3} sx={{ padding: 3, borderRadius: 2, bgcolor: '#E3F2FD', textAlign: 'center' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                <img
                                                    src={service.imageUrl}
                                                    alt={service.title}
                                                    style={{ width: "10%", marginRight: 16 }}
                                                />
                                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                                    {service.title}
                                                </Typography>
                                            </Box>
                                            <Divider sx={{ mb: 2 }} />
                                            <Box sx={{ listStyleType: 'none', pl: 0 }}>
                                                {service.items.map((item, idx) => (
                                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }} key={idx}>
                                                        <Circle sx={{ color: '#00BFFF', fontSize: 12, mr: 1 }} />
                                                        <Typography variant="body2" sx={{ textAlign: 'left' }}>
                                                            {item}
                                                        </Typography>
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
                    <Box p={5} bgcolor={"blue"} sx={{
                        mt: 10,
                        bgcolor: "blue",
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
                                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
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
                                                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
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
                    <Container>
                        <Box mt={3} bgcolor={"white"} p={5} >
                            <Box textAlign={"center"}>
                                <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                                <Typography fontWeight={"bold"} variant='h4'>
                                    Testing Tools
                                </Typography>
                            </Box>
                            <Container sx={{ p: 5 }}>
                                {testingTools.map((item, index) => (
                                    <Grid
                                        key={index}
                                        container
                                        item
                                        spacing={2}
                                        sx={{ mb: 2.3 }} // khoảng trắng nhỏ giữa mỗi block
                                    >
                                        <Grid p={2} item
                                            xs={12}
                                            md={4}
                                            sx={{
                                                bgcolor: "#1ea7fd",
                                                color: "white",
                                                display: "flex",
                                                justifyContent: "center",
                                                textAlign: "center",
                                                alignItems: "center",
                                            }} bgcolor={"#1ea7fd"} fontSize={24} alignItems={"center"} fontWeight={700} color="white">
                                            {item.title}
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            md={8}
                                            sx={{
                                                bgcolor: "#f5f5f5",
                                                p: 2,
                                            }}
                                        >
                                            <Box
                                                display="flex"
                                                flexWrap="wrap"
                                                gap={2} // khoảng cách giữa các item
                                            >
                                                {item.tools.map((tech, i) => (
                                                    <Box
                                                        key={i}
                                                        display="flex"
                                                        alignItems="center"
                                                    >
                                                        <FiberManualRecordIcon
                                                            sx={{ fontSize: 8, color: "green", mr: 1 }}
                                                        />
                                                        <Typography variant="body2">{tech}</Typography>
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Grid>
                                    </Grid>
                                ))}

                            </Container>
                        </Box>
                    </Container>
                </FadeSection>
                <FadeSection id='Microsoft'>
                    <Container>
                        <Box mt={3} sx={{ bgcolor: "#f5f5f5" }} p={5}>
                            <Box textAlign="center">
                                <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                                <Typography fontWeight="bold" variant="h4">
                                    Case studies
                                </Typography>
                            </Box>

                            <Box sx={{ width: "100%", p: 2 }}>
                                {/* Buttons as menu */}
                                <Box
                                    sx={{
                                        overflowX: "auto",
                                        width: "100%",
                                        pb: 1,
                                    }}
                                >
                                    <Stack
                                        direction={isMobile ? undefined : "row"}
                                        flexWrap={isMobile ? undefined : { xs: "wrap", sm: "nowrap" }}
                                        justifyContent={{ xs: "center", sm: "flex-start" }}
                                        spacing={2}
                                        mb={2}
                                    >
                                        {tabData.map((tab, index) => (
                                            <Button
                                                key={index}
                                                variant={selectedIndex === index ? "contained" : "outlined"}
                                                onClick={() => setSelectedIndex(index)}
                                                sx={{
                                                    px: 3,
                                                    py: 1.2,
                                                    borderRadius: 2,
                                                    minWidth: 160,
                                                    boxShadow: selectedIndex === index ? 3 : 0,
                                                    transition: "all 0.3s ease",
                                                    whiteSpace: "nowrap",
                                                }}
                                            >
                                                <Typography fontSize={13} fontWeight="bold">
                                                    {tab.label}
                                                </Typography>
                                            </Button>
                                        ))}
                                    </Stack>
                                    {/* Buttons as menu */}


                                </Box>

                                {/* Content display */}
                                <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
                                    {/* Left: Text */}
                                    <Box flex={1}>
                                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                                            Solutions
                                        </Typography>
                                        <List dense>
                                            {currentTab.solutions.map((item, i) => (
                                                <ListItem key={i} sx={{ pl: 0 }}>
                                                    <ListItemText primaryTypographyProps={{ fontSize: 14 }} primary={`• ${item}`} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>

                                    {/* Right: Image */}
                                    <Box flex={1} display="flex" justifyContent="center" alignItems="center">
                                        <Box
                                            component="img"
                                            src={currentTab.image}
                                            alt={currentTab.label}
                                            sx={{
                                                width: "100%",
                                                objectFit: "contain",
                                                boxShadow: 3,
                                            }}
                                        />
                                    </Box>
                                </Stack>
                            </Box>
                        </Box>
                    </Container>

                </FadeSection>
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
                                        Software Testing Brochure
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


