import React, { useEffect, useRef, useState } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { Box, Breadcrumbs, Button, Container, Divider, Fade, Grid, IconButton, Link, List, ListItem, ListItemText, Paper, Stack, Tab, Tabs, Typography, useMediaQuery, useTheme } from '@mui/material'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
const caseStudies = [
    {
        label: 'Digital Health',
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
        label: 'Digital Insurance',
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
        label: 'Digital Payment',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240326093414.076.webp',
        needs: [
            'A wide range of digital payment solutions: digital wallet, mobile wallet, bill payment, international remittance, payment integration',
        ],
        solutions: [
            'End-to-end and flexible digital payment platform, payment processing that can be customized and integrated to other systems, helping customers to innovate payment solutions',
        ],
    },
    {
        label: 'Digital Hotel',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240326092220.979.webp',
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


const DigitalTransformation = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const [tabIndex, setTabIndex] = useState(0)
    const study = caseStudies[tabIndex]
    const [selectedIndex, setSelectedIndex] = useState(0)

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

                                <Typography color="text.primary">Digital Transformation</Typography>
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
                                    Sample Digital Transformation Roadmap
                                </Typography>
                            </Container>
                        </Box>
                        <Container sx={{ mt: 4, mb: 4 }}>
                            <img width={"100%"} src="https://tmastorage.azureedge.net/uploadfiles/Digital/digital-1.webp" alt="" />
                        </Container>
                    </Box>
                </FadeSection>
                <FadeSection id='about' >
                    <Box p={5} sx={{
                        mt: 10,
                        background: 'linear-gradient(180deg, #009BFF 0%,rgb(31, 58, 85) 100%)',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                        borderRadius: 3,

                    }}
                    >
                        <Box >
                            <Box sx={{ textAlign: "center" }}>
                                <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                                <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                    Digital Transformation Services
                                </Typography>
                                <Typography textAlign={"center"} >Accelerate digital transformation for your enterprise with Solutions.</Typography>
                            </Box>
                        </Box>
                        <Container sx={{ mt: 4, mb: 4 }}>
                            <Box sx={{ p: 4, }}>
                                <Grid container spacing={1}>
                                    {data.map((item, index) => (
                                        <Grid item xs={12} sm={6} md={3} key={index}>
                                            <Box
                                                sx={{
                                                    backgroundColor: "white",
                                                    p: 3,
                                                    height: "100%",
                                                    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.05)",
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={item.image}
                                                    alt={item.title}
                                                    sx={{ width: 40, height: 40, mb: 2 }}
                                                />
                                                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {item.description}
                                                </Typography>
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
                                <Stack
                                    direction={isMobile ? undefined : "row"}
                                    flexWrap={isMobile ? undefined : { xs: "wrap", sm: "nowrap" }}
                                    justifyContent={{ xs: "center", sm: "flex-start" }}
                                    spacing={2}
                                    mb={2}
                                >
                                    {caseStudies.map((tab, index) => (
                                        <Button
                                            key={index}
                                            variant={tabIndex === index ? "contained" : "outlined"}
                                            onClick={() => setTabIndex(index)}
                                            sx={{
                                                px: 3,
                                                py: 1.2,
                                                borderRadius: 2,
                                                minWidth: 160,
                                                boxShadow: tabIndex === index ? 3 : 0,
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
                    <Container sx={{ mt: { xs: 12, sm: 16, md: 2 } }}>
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
                                        Digital IT Outsourcing
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


export default DigitalTransformation


