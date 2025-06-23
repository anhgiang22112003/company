import React, { useEffect, useRef, useState } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { Box, Breadcrumbs, Button, Container, Divider, Fade, Grid, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, Paper, Stack, Tab, Tabs, Typography, useMediaQuery, useTheme } from '@mui/material'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import CloudIcon from '@mui/icons-material/Cloud'
import WifiTetheringIcon from '@mui/icons-material/WifiTethering'
import RouterIcon from '@mui/icons-material/Router'
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard'
import CloudQueueIcon from '@mui/icons-material/CloudQueue'
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet'
import CodeIcon from '@mui/icons-material/Code'
import PublicIcon from '@mui/icons-material/Public'

const servicesData = [
    {
        title: '5G Core Development',
        desc: 'UPF, AMF, SMF, PCF, UDM, AF',
    },
    {
        title: 'O–RAN Development',
        desc: 'CU, DU, OAM, Platform',
    },
    {
        title: '5G Apps Development',
        desc: '5G MEC, Connected Car, 5G Network Slicing App',
    },
    {
        title: '5G System Testing',
        desc: 'Component, Solution, Manual, Automation',
    },
    {
        title: '5G Private Network',
        desc: 'Software Development, Network Development',
    },
    {
        title: '5G PoC Implement',
        desc: '5G PoC Implement, Integration, Testing',
    },
]


const technologies = [
  { icon: <CloudIcon fontSize="large" />, title: 'eMBB, uRLLC, mMTC' },
  { icon: <WifiTetheringIcon fontSize="large" />, title: 'O–RAN (Open RAN)' },
  { icon: <RouterIcon fontSize="large" />, title: 'Network Slicing' },
  { icon: <DeveloperBoardIcon fontSize="large" />, title: 'Edge Computing' },
  { icon: <CloudQueueIcon fontSize="large" />, title: 'Cloud-Native', desc: 'VNF, NFV, Kubernetes' },
  { icon: <SettingsEthernetIcon fontSize="large" />, title: 'DevOps', desc: 'CI/CD, Jenkins, GitLab' },
  { icon: <CodeIcon fontSize="large" />, title: 'Programming', desc: 'C/C++, Python, Go' },
  { icon: <PublicIcon fontSize="large" />, title: 'Networking', desc: 'SDN, TCP/IP, TLS' },
];


const caseStudies = [
    {
        label: '5G Applications',
        image: 'https://tmastorage.azureedge.net/uploadfiles/5G/5G_2.webp',
    },
    {
        label: 'O-RAN development project',
        image: 'https://tmastorage.azureedge.net/uploadfiles/5G/5G_3_20230626153200.611.webp',

    },
    {
        label: '5G PoC - 5G MEC System',
        image: 'https://tmastorage.azureedge.net/uploadfiles/5G/5G_4_20230626153219.591.webp',

    },
    {
        label: 'Connected Car Under 5G Private Network',
        image: 'https://tmastorage.azureedge.net/uploadfiles/5G/5G_5.webp',

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

const labData = [
    {
        title: 'Hardware',
        items: ['PC i7 (X64 HW)', 'USRP B210/N300', 'Adlinktech MECS-6110'],
    },
    {
        title: 'Software',
        items: ['gNB: srsRAN', '5GC: Open 5GS'],
    },
    {
        title: 'Bandwidth (UL/DL)',
        items: ['60 Mhz', '30 Mps - 100 Mps'],
    },
    {
        title: 'UE',
        items: ['Quectel: RM500Q-GL', 'Sierra: XR-90', '5G Phone'],
    },
    {
        title: 'Release',
        items: ['3GPP release 17'],
    },
    {
        title: '5G NR SA TDD Configuration',
        items: [
            'Frequency band: n41',
            'SCS: 30kHz',
            'Uplink-Configurations: 64QAM max',
            'Downlink Configurations: 256QAM max',
        ],
    },
]

const deviceImages = [
    {
        url: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240520141201.048.webp',
    },
    {
        url: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240516160623.800.webp',
    },
    {
        url: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240516160633.346.webp',
    },
    {
        url: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240516160642.063.webp',
    },
    {
        url: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240516160653.526.webp',
    },
]


const GPage = () => {

    const [tabIndex, setTabIndex] = useState(0)
    const study = caseStudies[tabIndex]
    const [selectedIndex, setSelectedIndex] = useState(0)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const currentTab = tabData[selectedIndex]

    const [hoveredItem, setHoveredItem] = useState(null)

    return (
        <>
            <Header />
            <Box>
                <FadeSection>
                    <Box mt={18} sx={{
                        background: 'linear-gradient(to bottom, #1976d2, rgba(10, 75, 149, 0.56))',
                        color: 'white',
                        mt: 14,
                        py: 8,
                        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
                        WebkitClipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
                        overflow: 'hidden',
                    }}>

                        {/* Hex image grid */}
                        <Container maxWidth="md" sx={{ textAlign: "center", py: 6 }}>
                            <Typography variant="h2" fontWeight={700} gutterBottom>
                                5G
                            </Typography>

                            <Typography variant="h5" fontWeight={500} color="text.secondary" gutterBottom>
                                Empowering the Future with 5G Innovation
                            </Typography>

                            <Typography variant="body1" color="text.secondary" mb={4}>
                                From Network Deployment to Smart Applications — delivers end-to-end 5G solutions across Telecom, Automotive, Healthcare, and more.
                            </Typography>



                            <Box>
                                <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
                                    Explore Our 5G Services →
                                </Typography>
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

                                <Typography color="text.primary">5G</Typography>
                            </Stack>


                        </Box>
                    </Container>
                </FadeSection>
                <FadeSection id="service">
                    <Container>
                        <Box sx={{ padding: '40px 20px', textAlign: 'center' }}>
                            <Typography variant="h4" fontWeight="bold" gutterBottom>
                                Services
                            </Typography>
                            <Grid container spacing={3} justifyContent="center">
                                {servicesData.map((service, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Paper
                                            elevation={3}
                                            sx={{
                                                border: '1px solid #1aa3ff',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    backgroundColor: '#1aa3ff',
                                                    color: '#fff',
                                                    padding: '16px',
                                                    fontWeight: 'bold',
                                                    fontSize: '16px',
                                                }}
                                            >
                                                {service.title}
                                            </Box>
                                            <Box sx={{ padding: '16px', backgroundColor: '#fff', fontSize: '14px' }}>
                                                {service.desc}
                                            </Box>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Container>
                </FadeSection>
                <FadeSection>

                    <Box sx={{ backgroundColor: '#1aa3ff', py: 6, textAlign: 'center', color: '#fff' }}>
                        <img width={"45px"} src="https://www.tmasolutions.com/media/technologies/5G/decorServices.webp" alt="" />
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            Technologies
                        </Typography>
                            <Box sx={{ overflow: 'hidden', width: '100%', py: 4, backgroundColor: '#f7f9fc' }}>
                                <Box
                                    sx={{
                                       display: 'flex',
                                    width: 'max-content',
                                    animation: 'scroll 40s linear infinite',
                                    '@keyframes scroll': {
                                        '0%': { transform: 'translateX(0)' },
                                        '100%': { transform: 'translateX(-50%)' },
                                    },
                                    }}
                                >
                                    {[...technologies, ...technologies].map((tech, index) => (
                                        <Paper
                                            key={index}
                                            elevation={3}
                                            sx={{
                                                minWidth: 240,
                                                mx: 1.5,
                                                p: 2,
                                                textAlign: 'center',
                                                border: '1px solid #e0e0e0',
                                                borderRadius: '8px',
                                                backgroundColor: '#fff',
                                                color: '#000',
                                                flexShrink: 0,
                                            }}
                                        >
                                            <Box fontSize={32}>{tech.icon}</Box>
                                            <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 1 }}>
                                                {tech.title}
                                            </Typography>
                                            {tech.desc && (
                                                <Typography variant="body2" color="text.secondary">
                                                    {tech.desc}
                                                </Typography>
                                            )}
                                        </Paper>
                                    ))}
                                </Box>
                            </Box>
                    </Box>

                </FadeSection>
                <FadeSection>
                    <Box >
                        <Box mt={4} textAlign={"center"}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography fontWeight={800} mb={3} variant='h4'>
                                5G Solution Lab
                            </Typography>
                        </Box>
                        <Container>
                            <img width={"100%"} src="" alt="" />
                            <Box
                                component="img"
                                src="https://tmastorage.azureedge.net/uploadfiles/PageSection/pageSection_image_20240516153109.929.webp"

                                sx={{ width: "100%", height: { xs: "180px", md: "auto" }, }}
                            />
                        </Container>
                    </Box>
                </FadeSection>
                <FadeSection>
                   
                        <Box sx={{ p: 4,    background: 'linear-gradient(to bottom, #1976d2, rgba(149, 10, 138, 0.56))',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)', }}>
                            <Box display="flex" justifyContent="center" alignItems="center" mb={1}>
                                <Box
                                    component="img"
                                    src="https://www.tmasolutions.com/media/technologies/5G/5gComponent.webp"
                                    alt="5G Lab Icon"
                                    sx={{ width: 40, height: 40, mr: 1 }}
                                />
                                <Typography color={"white"} variant="h5" fontWeight="bold">
                                    5G Lab Components
                                </Typography>
                            </Box>

                            {/* Top Grid */}
                            <Grid container spacing={3} sx={{ mt: 2 }} justifyContent="center">
                                {labData.map((section, index) => (
                                    <Grid item xs={12} sm={6} md={4} mb={3} key={index}>
                                        <Paper elevation={3} sx={{ backgroundColor: '#1ea0ff', color: '#fff', p: 2, height: '100%' }}>
                                            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                                {section.title}
                                            </Typography>
                                            <List dense>
                                                {section.items.map((item, idx) => (
                                                    <ListItem key={idx} sx={{ py: 0.5 }}>
                                                        <ListItemText primary={`• ${item}`} primaryTypographyProps={{ color: '#fff' }} />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>

                            {/* Device Images */}
                            <Grid container spacing={3} sx={{ mt: 4 }} justifyContent="center">
                                {deviceImages.map((device, index) => (
                                    <Grid item xs={6} sm={4} md={2} key={index} textAlign="center">
                                        <Box component="img" src={device.url} sx={{ width: '100%', mb: 1 }} />
                                    </Grid>
                                ))}
                            </Grid>
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
                                    direction={isMobile ? undefined : "row"}
                                    flexWrap={isMobile ? undefined : { xs: "wrap", sm: "wrap" }}
                                    justifyContent={{ xs: "center", sm: "flex-start" }}
                                    spacing={2}
                                    mb={2}
                                >
                                    {tabData.map((tab, index) => (
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
                                                whiteSpace: "wrap",
                                            }}
                                        >
                                            <Typography fontSize={13} fontWeight="bold">
                                                {tab.label}
                                            </Typography>
                                        </Button>
                                    ))}
                                </Stack>
                                <Grid container spacing={4}>
                                    <Box
                                        mt={4}
                                        component="img"
                                        src={study.image}
                                        alt={study.label}
                                        sx={{ width: '100%', display: 'block', mx: 'auto', height: { xs: "200px", md: "auto" } }}
                                    />

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
                                    5G IT Outsourcing
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


export default GPage


