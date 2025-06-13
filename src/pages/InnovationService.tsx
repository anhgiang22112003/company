import React, { useEffect, useRef, useState } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { Box, Breadcrumbs, Button, Container, Divider, Fade, Grid, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, Paper, Stack, Tab, Tabs, Typography } from '@mui/material'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
const bannerData = [
    {
        icon: "https://tmastorage.azureedge.net/media/services/innovation/header/icon_header_01.webp",
        text: "Quickly test and evaluate new ideas"
    },
    {
        icon: "https://tmastorage.azureedge.net/media/services/innovation/header/icon_header_02.webp",
        text: "R&D, PoC, Prototyping"
    },
    {
        icon: "https://tmastorage.azureedge.net/media/services/innovation/header/icon_header_03.webp",
        text: "Transform your innovative ideas to reality"
    },
    {
        icon: "https://tmastorage.azureedge.net/media/services/innovation/header/icon_header_04.webp",
        text: "Apply emerging technologies: AI, IoT, Blockchain, robotics"
    },
]
const caseStudies = [
    {
        label: 'Machine Optimization',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240326101006.648.webp',
        needs: [
            'Next generation of machine.', 'Interactive and user friendly services',
        ],
        solutions: [
            'Apply IoT and AI to optimize machine operations',
            'Cloud-based data. Data analytics',
            'Applications for machine troubleshooting and predictive maintenance'
        ],
    },
    {
        label: 'Bus Tracking',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240326102329.510.webp',
        needs: [
            'Bus location tracking',
            'Passenger load monitoring',
            "Tracking bus passenger load by hourly, daily, weekly",
            "Age/Gender analysis"
        ],
        solutions: [
            'IoT solution for bus tracking',
            'AI for passenger analytics (counting, age, gender)'
        ],
    },
    {
        label: 'Container Environment Monitoring',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240326102520.617.webp',
        needs: [
            'A wide range of digital payment solutions: digital wallet, mobile wallet, bill payment, international remittance, payment integration',
        ],
        solutions: [
            'End-to-end and flexible digital payment platform, payment processing that can be customized and integrated to other systems, helping customers to innovate payment solutions',
        ],
    },
    {
        label: 'Interactive Furniture Selection',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240326102905.929.webp',
        needs: ['Hotel services automation. No check-in. No reception desk or receptionists'],
        solutions: [
            'Full solution from Web to mobile. Workflow automation.',
            'Customer self service.',
        ],
    },
]

const data = [
    {
        title: "Digital Customer Journey",
        image: "https://tmastorage.azureedge.net/media/services/digitalTransformation/service/digital-customer-journey.webp",
        description:
            "Use our omnichannel strategy to unify your current systems and enhance your customer journey across all touch points. Collect useful customer data to have a great customer insight.",
    },
    {
        title: "Enhance Operations",
        image: "https://tmastorage.azureedge.net/media/services/digitalTransformation/service/enhance-operations.webp",
        description:
            "tackles operational challenges using Big Data and RPA. We help organizations gain knowledge about business patterns and enhance workflows more efficiently.",
    },
    {
        title: "Implement Digital Platform",
        image: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702103351.094.webp",
        description:
            "Digitize your business process and future goals using the power of technology. We provide a solid foundation giving you a competitive advantage in building new business models",
    },
    {
        title: "Dedicated Digital Team",
        image: "https://tmastorage.azureedge.net/media/services/digitalTransformation/service/dedicated-digital-team.webp",
        description:
            "Our dedicated digital team is a group of SMEs with decades of experiences able to quickly understand the technology and industry requirements of your business. We deliver DX Projects in a short timeframe with the right solution.",
    },
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
        label: "Enable Network Transformation to NGNs",
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
const serviceData = [
    {
        title: "R&D",
        items: [
            "Check technical feasibility",
            "Try and test new solution",
            "Evaluate new technologies and solutions"
        ],
        icon: "https://tmastorage.azureedge.net/media/services/innovation/services/icon_service_01.webp"
    },
    {
        title: "PoC and Prototype development",
        items: [
            "Rapid software prototyping services based on available solutions and frameworks",
            "UI prototype or application demo"
        ],
        icon: "https://tmastorage.azureedge.net/media/services/innovation/services/icon_service_02.webp"
    },
    {
        title: "Find technical solutions",
        items: [
            "Propose new solutions",
            "Compare between technical solutions",
            "Propose system architect"
        ],
        icon: "https://tmastorage.azureedge.net/media/services/innovation/services/icon_service_03.webp"
    },
    {
        title: "Technology Roadmap",
        items: [
            "Identify goals",
            "Propose implementation roadmap",
            "Estimate timeline and budget"
        ],
        icon: "https://tmastorage.azureedge.net/media/services/innovation/services/icon_service_04.webp"
    }
]

const InnovationService = () => {

    const [tabIndex, setTabIndex] = useState(0)
    const study = caseStudies[tabIndex]
    const [selectedIndex, setSelectedIndex] = useState(0)

    const currentTab = tabData[selectedIndex]


    return (
        <>
            <Header />
            <Box>
                <FadeSection>
                    <Box sx={{ bgcolor: '#f5f5f5', }}>
                        <Container sx={{ py: 5 }}>
                            <Grid container mt={18} spacing={4} justifyContent="center">
                                {bannerData.map((item, index) => (
                                    <Grid item xs={12} sm={3} key={index} sx={{ textAlign: 'center' }}>
                                        <Box sx={{ position: 'relative', display: 'inline-block' }}>
                                            {/* Hình tròn nền */}
                                            <Box
                                                sx={{
                                                    bgcolor: '#00A1F1',
                                                    color: 'white',
                                                    borderRadius: '50%',
                                                    width: 150,
                                                    height: 150,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    position: 'relative',
                                                    zIndex: 1,
                                                }}
                                            >
                                                <Typography
                                                    variant="body2"
                                                    sx={{ textAlign: 'center', px: 2 }}
                                                >
                                                    {item.text}
                                                </Typography>
                                            </Box>

                                            {/* Viền nửa trên hình tròn */}
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: -10, // cao hơn hình tròn 5px + 5px border
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    width: 160,
                                                    height: 80,
                                                    borderTop: '5px solid #1976D2',
                                                    borderLeft: '5px solid #1976D2',
                                                    borderRight: '5px solid #1976D2',
                                                    borderBottom: 'none',
                                                    borderTopLeftRadius: 80,
                                                    borderTopRightRadius: 80,
                                                    backgroundColor: 'transparent',
                                                    zIndex: 0,
                                                }}
                                            />

                                            {/* Icon nằm phía trên, chạm nhẹ vào hình tròn */}
                                            <img
                                                src={item.icon}
                                                alt={`Icon ${index + 1}`}
                                                style={{
                                                    position: 'absolute',
                                                    top: -30, // nằm ngoài và đè xuống một chút
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    width: '50px',
                                                    height: '50px',
                                                    zIndex: 2,
                                                }}
                                            />
                                        </Box>
                                    </Grid>
                                ))}
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

                                <Link href="sevices" underline="hover"><Typography color="#00A1F1">Services</Typography></Link>

                                <Typography color="#00A1F1">{'>'}</Typography>

                                <Typography color="text.primary">Innovation as a service</Typography>
                            </Stack>

                        </Box>
                    </Container>
                </FadeSection>
                <FadeSection id="about">
                    <Box sx={{ p: 4 }}>
                        <Container>
                            <Box sx={{ p: 6, position: 'relative' }}>

                                <Grid container spacing={4} alignItems="center" justifyContent="center">
                                    {/* Left Column */}
                                    <Grid item xs={12} md={5}>
                                        <Box
                                            sx={{
                                                border: '1px solid #d0e5f7',
                                                borderRadius: 2,
                                                p: 2,
                                                position: 'relative',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: -20,
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    background: 'linear-gradient(to right, #0d6efd, #00c6ff)',
                                                    px: 2,
                                                    py: 0.5,
                                                    borderRadius: 1,
                                                    color: '#fff',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                Your Organization
                                            </Box>

                                            {['Industry Knowledge', 'Issues & Challenges', 'Innovation Goals'].map((text) => (
                                                <Paper
                                                    key={text}
                                                    variant="outlined"
                                                    sx={{
                                                        p: { xs: 1, md: 2 },
                                                        mt: 2,
                                                        bgcolor: '#f5faff',
                                                        fontSize: { xs: '0.85rem', md: '1rem' },
                                                    }}
                                                >
                                                    {text}
                                                </Paper>
                                            ))}
                                            <Box
                                                sx={{
                                                    display: { xs: 'block', md: 'block' },
                                                    position: 'absolute',
                                                    width: 2,
                                                    height: { xs: 80, md: 120 },
                                                    backgroundColor: '#339dff',
                                                    left: { xs: '50%', md: '60%' },
                                                    bottom: { xs: -100, md: -130 },
                                                }}
                                            />
                                        </Box>
                                    </Grid>


                                    {/* Arrow Center - Ẩn trên mobile */}
                                    <Grid item xs={12} md={2} textAlign="center" sx={{ display: { xs: 'none', md: 'block' } }}>
                                        <Box sx={{ fontSize: 32, color: '#9cc8f7', mt: 4 }}>
                                            <ArrowBackIcon />
                                            <ArrowForwardIcon />
                                        </Box>
                                    </Grid>

                                    {/* Right Column */}
                                    <Grid item xs={12} md={5}>
                                        <Box
                                            sx={{
                                                border: '1px solid #d0e5f7',
                                                borderRadius: 2,
                                                p: 2,
                                                position: 'relative',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: -20,
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    background: 'linear-gradient(to right, #0d6efd, #00c6ff)',
                                                    px: 2,
                                                    py: 0.5,
                                                    borderRadius: 1,
                                                    color: '#fff',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                IT
                                            </Box>

                                            {[
                                                'Skilled R&D team',
                                                'Wide range of technologies and solutions',
                                                'Intensive experience from many innovation projects',
                                            ].map((text) => (
                                                <Paper
                                                    key={text}
                                                    variant="outlined"
                                                    sx={{
                                                        p: { xs: 1, md: 2 },
                                                        mt: 2,
                                                        bgcolor: '#f5faff',
                                                        fontSize: { xs: '0.85rem', md: '1rem' },
                                                    }}
                                                >
                                                    {text}
                                                </Paper>
                                            ))}
                                            <Box
                                                sx={{
                                                    display: { xs: 'block', md: 'block' },
                                                    position: 'absolute',
                                                    width: 2,
                                                    height: { xs: 80, md: 120 },
                                                    backgroundColor: '#339dff',
                                                    left: { xs: '50%', md: '45%' },
                                                    bottom: { xs: -100, md: -130 },
                                                }}
                                            />
                                        </Box>
                                    </Grid>

                                    {/* Line down to center - TMA */}


                                    {/* Connector & Final Result */}
                                    <Grid item xs={12} sx={{ mt: 4, textAlign: 'center' }}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                flexDirection: 'column',
                                            }}
                                        >
                                            {/* Line and arrow only on desktop */}
                                            <Box
                                                sx={{
                                                    display: { xs: 'none', md: 'block' }, // ẩn trên mobile
                                                    position: 'absolute',
                                                    top: 414,
                                                    left: 'calc(25% + 12px)',
                                                    width: '50%',
                                                    height: 2,
                                                    backgroundColor: '#339dff',
                                                }}
                                            >
                                                <ArrowDownwardIcon
                                                    sx={{
                                                        position: 'absolute',
                                                        top: -5,
                                                        left: '49%',
                                                        transform: 'translateX(-50%)',
                                                        color: '#339dff',
                                                        fontSize: 32,
                                                    }}
                                                />
                                            </Box>

                                            {/* Final Result Box */}
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: { xs: 'auto', md: 430 },
                                                    bottom: { xs: 0, md: 'auto' },
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    flexDirection: 'column',
                                                    mt: { xs: 4, md: 0 },
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        background: 'linear-gradient(to right, #0d6efd, #00c6ff)',
                                                        px: { xs: 2, md: 3 },
                                                        py: { xs: 0.5, md: 1 },
                                                        borderRadius: 1,
                                                    }}
                                                >
                                                    <Typography
                                                        variant="subtitle1"
                                                        sx={{
                                                            color: '#fff',
                                                            fontWeight: 'bold',
                                                            fontSize: { xs: '0.85rem', md: '1rem' },
                                                        }}
                                                    >
                                                        Innovative products & solutions
                                                    </Typography>
                                                </Box>

                                                {/* Mobile connector lines from two boxes */}
                                                <Box
                                                    sx={{
                                                        display: { xs: 'flex', md: 'none' },
                                                        flexDirection: 'row',
                                                        justifyContent: 'space-between',
                                                        width: '100%',
                                                        mt: 1,
                                                    }}
                                                >
                                                    <Box sx={{ width: '45%', height: 2, backgroundColor: '#339dff' }} />
                                                    <Box sx={{ width: '10%', height: 2 }} />
                                                    <Box sx={{ width: '45%', height: 2, backgroundColor: '#339dff' }} />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Container>
                    </Box>
                </FadeSection>
                <FadeSection id='about' >
                    <Box p={5} bgcolor={"#f5f5f5"} sx={{
                        mt: 20,
                        clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0% 100%)"
                    }}
                    >
                        <Box >
                            <Container sx={{ textAlign: "center" }}>
                                <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                                <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                    Innovation Services
                                </Typography>
                                <Typography textAlign={"center"} >Elevate your innovation strategy with our specialized services. Unleash the power of innovation to drive your business forward.</Typography>
                            </Container>
                        </Box>
                        <Container sx={{ mt: 4, mb: 4 }}>
                            <Box sx={{ p: 4, }}>
                                <Grid container spacing={3}>
                                    {serviceData.map((service, index) => (
                                        <Grid item xs={12} md={6} key={index}>
                                            <Box
                                                sx={{
                                                    border: '1px solid #d6e9ff',
                                                    borderRadius: 1,
                                                    padding: 2,
                                                    backgroundColor: '#f9fcff',
                                                    minHeight: 180
                                                }}
                                            >
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
                            </Box>
                        </Container>

                    </Box>
                </FadeSection>

                <FadeSection id='Microsoft'>
                    <Container>
                        <Box mt={3} p={5} >
                            <Box textAlign={"center"}>
                                <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                                <Typography fontWeight={"bold"} variant='h4'>
                                    Case studies
                                </Typography>
                            </Box>
                            <Box sx={{ p: 4 }}>

                                <Stack direction="row" spacing={2} mb={3}>
                                                                   {caseStudies.map((tab, index) => (
                                                                       <Button
                                                                           key={index}
                                                                           variant={tabIndex === index ? "contained" : "outlined"}
                                                                           onClick={() => setTabIndex(index)}
                                                                           sx={{
                                                                               px: { xs: 1.5, sm: 2.5 },
                                                                               py: { xs: 0.5, sm: 1 },
                                                                               minWidth: 'auto'
                                                                           }}
                                                                       >
                                                                           <Typography fontSize={{ xs: 10, sm: 12 }}>{tab.label}</Typography>
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


export default InnovationService


