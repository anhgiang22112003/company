import React, { useEffect, useRef, useState } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { Box, Breadcrumbs, Button, Container, Divider, Fade, Grid, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, Paper, Slide, Stack, Tab, Tabs, Typography, useMediaQuery, useTheme } from '@mui/material'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

import FileDownloadIcon from '@mui/icons-material/FileDownload'
import SlideInOnScroll from '../components/SlideInOnScroll'
const hexImages = [
    'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240521094225.100.webp',
    'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240521094233.103.webp',
    'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240521094240.655.webp',
    'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240521094247.151.webp',
    '', // trống để giữ khoảng trắng
    '',
]

const stats = [
    {
        icon: 'https://tmastorage.azureedge.net/uploadfiles/RPA/Header/icon-header_1.webp',
        number: '7 Years',
        label: 'of experience',
    },
    {
        icon: 'https://tmastorage.azureedge.net/uploadfiles/RPA/Header/icon-header_2.webp',
        number: '100+',
        label: 'Engineers',
    },
    {
        icon: 'https://tmastorage.azureedge.net/uploadfiles/RPA/Header/icon-header_3.webp',
        number: '20+',
        label: 'Available solutions',
    },
]
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
const steps = [
    {
        title: 'UNDERSTAND',
        color: '#1E90FF',
        items: ['Understand clients’ working process', 'Collect information on tools and effort for each task'],
        details: [<img src="/images/overview1.png" alt="flow" style={{ width: "60%" }} />],
    },
    {
        title: 'ANALYZE',
        color: '#1E90FF',
        items: ['Analyze clients’ system, break down processes and identify where to automate'],
        details: ['Image', 'Video', 'Voice', 'Text'],
    },
    {
        title: 'STRUCTURE',
        color: '#1E90FF',
        items: ['List all parts of the process that can be automated'],
        details: ['Document', 'Parser', 'ID card Parser', 'License parser', 'OCR', 'Video analytic'],
    },
    {
        title: 'PROPOSAL',
        color: '#1E90FF',
        items: ['Propose solutions for automation', 'Provide quotation'],
        details: ['Options', 'Benefits', 'Trial/Production'],
    },
]
const solutions = [
    {
        title: 'Logistics',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240522100715.506.webp',
        items: [
            'Account Creation Make Easy',
            'Inventory Alert',
            'COD Automation',
            'Traffic Image Processing',
            'Logistics Data Process',
        ],
    },
    {
        title: 'Finance',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240522100722.046.webp',
        items: [
            'Debt reminder',
            'Insurance Claim Payment Process',
            'Finance report mismatches detection',
            'Bank & Tax Statement OCR',
        ],
    },
    {
        title: 'E-commerce',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240522100727.863.webp',
        items: [
            'Brand Labeling & Recognition',
            'Product Description Optimization',
            'Product Description Generator',
            'Vendor Application Process',
        ],
    },
    {
        title: 'Human Resource',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240522100733.143.webp',
        items: [
            'Document Parser',
            'Job vs Candidate Matching',
            'Automatic Resume Input',
            'Onboarding Process',
        ],
    },
]


const RpaPage = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))


    return (
        <>
            <Header />
            <Box>
                <FadeSection>
                    <Box mt={16} sx={{
                        background: 'linear-gradient(to bottom, #1976d2, rgba(10, 75, 149, 0.56))',

                        color: 'white',
                        py: 4,
                        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
                        WebkitClipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
                        overflow: 'hidden',
                    }}>

                        {/* Hex image grid */}
                        <Container>
                            <Grid
                                container
                                spacing={{ xs: 2, sm: 4 }} // giảm spacing trên mobile
                                alignItems="center"
                                justifyContent="center"
                                sx={{ py: { xs: 2, }, textAlign: { xs: 'center', md: 'left' } }}
                            >
                                {/* Cột hình lục giác */}


                                {/* Cột chữ RPA */}

                                <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontWeight: 700,

                                            transition: 'color 0.3s',
                                            '&:hover': { color: '#00e5ff', cursor: 'pointer' },
                                        }}
                                    >
                                        RPA Center
                                    </Typography>

                                    <Typography fontWeight={600} mb={1}>
                                        Now your business processes can be automated
                                    </Typography>
                                    <Typography>✓ Arm all of your employees with virtual assistant</Typography>
                                    <Typography>✓ Propelling digital transformation forward</Typography>
                                    <Typography>✓ Your processes are now more intelligent with AI</Typography>
                                </Box>

                            </Grid>
                            <Grid container justifyContent="center" spacing={{ xs: 2, sm: 3 }}
                                mt={{ xs: 2, sm: 3, }} >
                                {stats.map((stat, index) => (
                                    <Grid item key={index} xs={6} sm={4} md="auto">
                                        <Paper
                                            elevation={2}
                                            sx={{
                                                px: 1,
                                                py: 1,
                                                borderRadius: 2,
                                                textAlign: 'center',
                                                width: { xs: 130, sm: 140, md: 160 },

                                                mx: 'auto',
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={stat.icon}
                                                alt="icon"
                                                sx={{ width: 32, height: 32, mb: 1 }}
                                            />
                                            <Typography variant="subtitle1" color="primary" fontWeight={600}>
                                                {stat.number}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                                sx={{ fontSize: { xs: '0.75rem', sm: '0.8rem' } }}
                                            >
                                                {stat.label}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
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

                                <Typography color="text.primary">RPA</Typography>
                            </Stack>


                        </Box>
                    </Container>
                </FadeSection>
                <FadeSection id="overview">
                    <Container sx={{ py: 8 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={5}>
                                <SlideInOnScroll>
                                    <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
                                        Overview
                                    </Typography>
                                    <Typography sx={{ textAlign: 'justify' }}>
                                        With a wide range of solutions for AI/ML, document parsing, object detection and popular tools (Automation Anywhere,Ui Path, Power Automate, Blueprism), RPA Center has provided automation solutions for a variety of industries, including finance, banking, logistics, human resources, and e-commerce.
                                        RPA Center provides solutions for automation projects or dedicated teams for a full automation program with multiple projects.

                                    </Typography>
                                </SlideInOnScroll>
                            </Grid>
                            <Grid item xs={12} md={1}></Grid>
                            <Grid item xs={12} md={6}>
                                <SlideInOnScroll direction='right'>
                                    <Grid container spacing={2}>
                                        <img width={"100%"} src="/images/overview.png" alt="overview" />
                                    </Grid></SlideInOnScroll>
                            </Grid>
                        </Grid>
                    </Container>
                </FadeSection>
                <FadeSection>
                    <Box sx={{
                        p:5,
                        background: 'linear-gradient(to bottom, #1976d2, rgba(10, 75, 149, 0.56))',
                    }}>
                        <Box >
                            <Container sx={{ textAlign: "center" }}>
                                <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                                <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                    RPA Process
                                </Typography>
                            </Container>
                        </Box>
                        <Box sx={{ p: 4 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
                                {steps.map((step, idx) => (
                                    <Box key={idx} sx={{ width: 260, textAlign: 'center', position: 'relative' }}>
                                        {/* Arrow Title */}
                                        <Box
                                            sx={{
                                                width: '100%',
                                                height: 60,
                                                backgroundColor: step.color,
                                                clipPath: 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%, 10% 50%)',
                                                color: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: 'bold',
                                                fontSize: '18px',
                                            }}
                                        >
                                            {step.title}
                                        </Box>

                                        {/* Description */}
                                        <Box
                                            sx={{
                                                backgroundColor: 'white',
                                                border: '1px solid #e0e0e0',
                                                padding: 2,
                                                minHeight: 120,
                                            }}
                                        >
                                            <List dense>
                                                {step.items.map((item, i) => (
                                                    <ListItem key={i} disableGutters>
                                                        <ListItemText
                                                            primaryTypographyProps={{ fontSize: 14 }}
                                                            primary={`• ${item}`}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Box>

                                        {/* Only show ArrowDownwardIcon for UNDERSTAND */}
                                        {!(step.title === 'UNDERSTAND') && (
                                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                                                <ArrowDownwardIcon sx={{ fontSize: 28, color: '#1E90FF' }} />
                                            </Box>
                                        )}

                                        {/* Details Box */}
                                        <Box
                                            sx={{
                                                backgroundColor: '#eef6fd',
                                                padding: 2,
                                                mt: step.title === "UNDERSTAND" ? 5 : 1,
                                                borderRadius: 1,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                gap: 1,
                                            }}
                                        >
                                            {step.details.map((detail, i) =>
                                                typeof detail === 'string' ? (
                                                    <Typography fontSize={14} key={i}>• {detail}</Typography>
                                                ) : (
                                                    <Box key={i} sx={{ width: '100%' }}>
                                                        {detail}
                                                    </Box>
                                                )
                                            )}
                                        </Box>
                                    </Box>
                                ))}

                            </Box>
                        </Box>
                    </Box>
                </FadeSection>
                <FadeSection>
                    <Box >
                        <Box mt={4} textAlign={"center"}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography fontWeight={"bold"} mb={3} variant='h4'>
                                Empowered by AI Center
                            </Typography>
                        </Box>
                        <Container>
                            <img width={"100%"} src="/images/overview2.png" alt="" />
                        </Container>
                    </Box>
                </FadeSection>
                <FadeSection>
                    <Box
                        sx={{
                            background: 'linear-gradient(135deg, #1da1ff 0%, #1da1ff 100%)',
                            py: 10,
                            px: 2,
                            transform: 'skewY(-3deg)',
                            mt: 8,
                        }}
                    >
                        <Box sx={{ transform: 'skewY(3deg)', maxWidth: 1200, mx: 'auto' }}>
                            <Typography
                                variant="h4"
                                fontWeight="bold"
                                textAlign="center"
                                color="#fff"
                                mb={6}
                            >
                                Sample Solutions
                            </Typography>

                            <Grid container spacing={3}>
                                {solutions.map((solution, idx) => (
                                    <Grid item xs={12} sm={6} md={3} key={idx}>
                                        <Box
                                            sx={{
                                                backgroundColor: '#fff',
                                                borderRadius: 2,
                                                p: 3,
                                                boxShadow: 3,
                                                minHeight: 300,
                                            }}
                                        >
                                            <Box >
                                                <img src={solution.icon} alt={solution.title} style={{ width: "20%" }} />
                                            </Box>
                                            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                                                {solution.title}
                                            </Typography>
                                            <List dense>
                                                {solution.items.map((item, i) => (
                                                    <ListItem key={i} disablePadding>
                                                        <ListItemIcon sx={{ minWidth: 24 }}>
                                                            <FiberManualRecordIcon sx={{ fontSize: 8, color: '#1da1ff' }} />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={item}
                                                            primaryTypographyProps={{ fontSize: 14 }}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
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
                                        RPA IT Outsourcing
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


export default RpaPage


