import React, { useState } from 'react'
import { Box, Grid, Typography, Avatar, Container, CssBaseline, Stack, Link, Paper, List, ListItemButton, ListItemIcon, ListItemText, Divider, ListItem, Fade, Card, CardContent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import BiotechIcon from '@mui/icons-material/Biotech'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import ChatIcon from '@mui/icons-material/Chat'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox'
import TimelineIcon from '@mui/icons-material/Timeline'
import HubIcon from '@mui/icons-material/Hub'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import InsightsIcon from '@mui/icons-material/Insights'
import StorageIcon from '@mui/icons-material/Storage'
import DatasetIcon from '@mui/icons-material/Dataset'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import SlideInOnScroll from '../components/SlideInOnScroll'
import { Masonry } from '@mui/lab'

const items = [
    {
        icon: <IntegrationInstructionsIcon fontSize="large" />,
        text: 'Integrate enterprise data in minutes at scale instead of hours or weeks',
    },
    {
        icon: <InsightsIcon fontSize="large" />,
        text: 'Transform raw data into actionable insights in seconds, not hours',
    },
    {
        icon: <StorageIcon fontSize="large" />,
        text: "Maximize data warehouse's performance, cut costs, and enhance efficiency in no time",
    },
    {
        icon: <DatasetIcon fontSize="large" />,
        text: 'Visualize complex data effortlessly, turning numbers into narratives in real-time',
    },
    {
        icon: <PrecisionManufacturingIcon fontSize="large" />,
        text: 'Unlock business intelligence with integrated ML/AI solutions instantly',
    },
]
const solutions = [
    { label: 'BI Platform', icon: <BiotechIcon fontSize="large" /> },
    { label: 'Real-time Data Processing', icon: <QueryStatsIcon fontSize="large" /> },
    { label: 'Intelligent Search Engine & Chat Bot', icon: <ChatIcon fontSize="large" /> },
    { label: 'Large-scale Data Analytics', icon: <AnalyticsIcon fontSize="large" /> },
    { label: 'Customer Data Platform', icon: <PeopleAltIcon fontSize="large" /> },
    { label: 'Data Warehouse Migration', icon: <MoveToInboxIcon fontSize="large" /> },
    { label: 'AI-driven Forecasting', icon: <TimelineIcon fontSize="large" /> },
    { label: 'Data & AI Integration', icon: <HubIcon fontSize="large" /> },
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
]
const techData = [
    {
        title: 'Data Integration',
        items: [
            'Azure Data Factory, Azure Event Hub, Azure Synapse',
            'AWS Glue, AWS Lambda, AWS Kinesis Firehose',
            'Google Cloud Dataflow',
            'Apache Kafka, Apache Nifi, Debezium',
        ],
    },
    {
        title: 'Data Storage',
        items: [
            'Azure Data Lake Storage, Azure Cosmos DB',
            'Amazon S3, Amazon Redshift',
            'PostgreSQL, MongoDB, ClickHouse',
            'Google BigQuery',
            'Delta Lake, Apache Iceberg',
        ],
    },
    {
        title: 'Data Processing & Analytics',
        items: [
            'Azure Databricks, Azure Synapse Analytics',
            'AWS Glue, AWS EMR',
            'Google Cloud Dataproc',
            'Apache Spark, Apache Flink',
        ],
    },
    {
        title: 'Data Observability',
        items: [
            'Azure Monitor, Azure Application Insights',
            'Amazon CloudWatch, AWS X-Ray',
            'Google Cloud Monitoring',
            'Prometheus, Grafana, Datadog',
        ],
    },
    {
        title: 'Data Visualization & BI',
        items: [
            'Power BI, Azure Power BI',
            'Amazon QuickSight',
            'Google Looker',
            'Tableau, Apache Superset, Metabase',
        ],
    },
    {
        title: 'Infrastructure & Platforms',
        items: ['AWS, Azure, Google Cloud, Databricks, Snowflake'],
    },
    {
        title: 'Programming Languages & Frameworks',
        items: ['Python, Java, Scala, Spark, Flink'],
    },
]

const servicesData = [
    {
        title: 'Data Migration',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240517103401.931.webp',
    },
    {
        title: 'Data Visualization',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240517103408.093.webp',
    },
    {
        title: 'Standard and Custom Reports',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240517103414.222.webp',
    },
    {
        title: 'Data Analytics and Forecasting',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240517103422.422.webp',
    },
    {
        title: 'Analyzing High Volume Structured and Unstructured Data',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240517103429.515.webp',
    },
    {
        title: 'Data Warehouse and Data Mining Design and Implementation',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240517103435.185.webp',
    },
    {
        title: 'Collect and Analyze Data in Real-Time',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240517103441.244.webp',
    },
]
const rows = [
    {
        feature: 'Supported Cloud Platforms',
        description:
            'Compatible with platforms like Azure, AWS, and Google Cloud, ensuring broad interoperability and cloud flexibility.',
    },
    {
        feature: 'Scalability',
        description:
            'Designed with horizontal scaling capabilities, allowing seamless expansion as data and user demands grow.',
    },
    {
        feature: 'Query Interface',
        description:
            'Supports SQL, Spark DataFrame, and REST APIs to serve different analytical and development needs.',
    },
    {
        feature: 'Data Structures',
        description:
            'Handles structured (SQL), semi-structured (JSON), and unstructured (logs, audio, video) data types efficiently.',
    },
    {
        feature: 'Services',
        description:
            'Includes core data services like data lake, data warehouse, lakehouse, analytics, and AI/ML workloads.',
    },
    {
        feature: 'Analytic Model',
        description:
            'Supports batch and real-time analytics, including streaming for fast insights.',
    },
    {
        feature: 'BI & Reporting',
        description:
            'Built-in dashboards and reporting tools deliver real-time business intelligence insights.',
    },
    {
        feature: 'Security & Governance',
        description:
            'Includes role-based access control and governance features for secure data access and compliance.',
    },
    {
        feature: 'Easy to Use',
        description:
            'Offers a user-friendly interface with drag-and-drop features, making data workflows accessible to non-technical users.',
    },
]


const BigDataAnalyticsPage = () => {


    return (
        <>
            <CssBaseline />
            <Header />
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
                <Container>
                    <Grid container spacing={6} alignItems="center" justifyContent="center">
                        {/* Left: Text and Icons */}
                        <Grid item xs={12} md={6}><SlideInOnScroll>
                            <Typography variant="h4" fontWeight="bold" mb={2}>
                                Big Data & Analytics
                            </Typography>
                            <Typography variant="body1" mb={4}>
                                Our BI, big data and analytics team has supported many customers in building BI and analytics solutions to process large amounts of business data and provide real-time reports for business decisions.​                                </Typography>

                            {telecomIcons.map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Avatar src={item.src} sx={{ width: 56, height: 56, mr: 2 }} />
                                    <Typography variant="body1">{item.title}</Typography>
                                </Box>
                            ))}</SlideInOnScroll>
                        </Grid>

                        {/* Right: Hex Grid */}
                        <Grid item xs={12} md={6}>
                            <SlideInOnScroll direction='right'>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: 2,
                                    }}
                                >
                                    <img width={"100%"} src="https://tmastorage.azureedge.net/uploadfiles/Banner/banner_20250321093607.455.webp" alt="" />
                                </Box></SlideInOnScroll>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <FadeSection >
                <Container>
                    <Box sx={{ px: 4, p: 2 }}>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Link underline="hover" color="#00A1F1" href="/">
                                <Typography fontWeight={700}>Home</Typography>
                            </Link>

                            <Typography color="#00A1F1">›</Typography>

                            <Link href="technologies" underline="hover"><Typography color="#00A1F1">Technologies</Typography></Link>

                            <Typography color="#00A1F1">{'>'}</Typography>

                            <Typography color="text.primary">Big Data & Analytics</Typography>
                        </Stack>

                    </Box>
                </Container>
            </FadeSection>
            <FadeSection id='about' >
                <Box p={5}
                >
                    <Box >
                        <Container sx={{ textAlign: "center" }}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                Services
                            </Typography>
                        </Container>
                    </Box>
                    <Box sx={{ p: 4 }}>
                        
                            <Grid container spacing={2} justifyContent="center">
                                {servicesData.map((service, index) => (
                                    <Grid item xs={12} sm={6} md={3} key={index}>
                                        <Paper elevation={3} sx={{ padding: 3, textAlign: 'center', bgcolor: '#2196F3', color: 'white', height: '100%' }}>
                                            <Box component="img" src={service.icon} alt={service.title} sx={{ width: "10%", mb: 2 }} />
                                            <Typography variant="h6">
                                                {service.title}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                      
                    </Box>
                </Box>
            </FadeSection>
            <FadeSection>
                <Box p={4} bgcolor={"#f5f5f5"}>
                    
                        <Container sx={{ textAlign: "center" }}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                Technologies
                            </Typography>
                        </Container>
                        <Box sx={{ background: 'linear-gradient(to bottom, #1976d2, rgba(10, 75, 149, 0.56))', px: 4, py: 8 }}>
                            <Grid container spacing={3}>
                                {techData.map((section, index) => (
                                    <Grid item xs={12} md={6} key={index}>
                                        <Card variant="outlined" sx={{ height: '100%' }}>
                                            <CardContent>
                                                <Typography variant="subtitle1" fontWeight="bold" color="primary" gutterBottom>
                                                    {section.title}
                                                </Typography>
                                                <List dense>
                                                    {section.items.map((item, i) => (
                                                        <ListItem key={i} sx={{ pl: 1 }}>
                                                            <ListItemIcon sx={{ minWidth: 24 }}>
                                                                <FiberManualRecordIcon sx={{ fontSize: 8, color: 'text.secondary' }} />
                                                            </ListItemIcon>
                                                            <ListItemText primary={item} />
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                   
                </Box>
            </FadeSection>
            <FadeSection>
                <Box sx={{  py: 6, px: 2 }}>
                    <Box textAlign="center" mb={4}>
                        <Box
                            sx={{
                                width: 32,
                                height: 32,
                                backgroundColor: 'white',
                                margin: '0 auto',
                                borderRadius: 1,
                                mb: 1,
                            }}
                        />
                        <Typography variant="h4" fontWeight="bold" >
                            Solutions
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            overflow: 'hidden',
                            width: '100%',
                            
                            py: 2,
                            position: 'relative',
                        }}
                    >
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
                            {[...solutions, ...solutions].map((solution, index) => (
                                <Card
                                    key={index}
                                    sx={{
                                        minWidth: 200,
                                        height: 100,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                        boxShadow: 2,
                                        borderRadius: 2,
                                        textAlign: 'center',
                                        mx: 1,
                                        flexShrink: 0,
                                    }}
                                >
                                    <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Box mb={1}>{solution.icon}</Box>
                                        <Typography variant="body2" fontWeight={500}>
                                            {solution.label}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>
                    </Box>


                </Box>
            </FadeSection>
            <FadeSection>
                <Box sx={{         background: 'linear-gradient(to bottom, #1976d2, rgba(149, 10, 138, 0.56))', py: 8 }}>
                    <Box textAlign="center" mb={5}>
                        <Container sx={{ textAlign: "center" }}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                Data Platform
                            </Typography>
                        </Container>
                    </Box>

                    <Box
                        maxWidth="lg"
                        mx="auto"
                        px={3}
                        py={4}
                        bgcolor="white"
                        borderRadius={2}
                        boxShadow={1}
                    >
                        <Typography variant="h6" fontWeight="bold" textAlign="center" mb={4}>
                            Introduction Data Platform
                        </Typography>

                        <Grid container spacing={3}>
                            {items.map((item, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            border: '1px solid #2196f3',
                                            borderRadius: 2,
                                            p: 3,
                                            height: '100%',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Box color="primary.main" mb={1}>
                                            {item.icon}
                                        </Box>
                                        <Typography variant="body2">
                                            {item.text}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </FadeSection>
            {/* <FadeSection>
                <Box sx={{ backgroundColor: '#f5f8ff' }}>
                    <Box textAlign="center" mb={5}>
                        <Container sx={{ textAlign: "center" }}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                Data Platform Overview
                            </Typography>
                        </Container>
                    </Box>

                    <Box
                        maxWidth="lg"
                        mx="auto"
                        px={3}
                        py={4}
                        bgcolor="white"
                        borderRadius={2}
                        boxShadow={1}
                    >


                        <img width={"100%"} src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250403082001.211.webp" alt="" />
                    </Box>
                </Box>
            </FadeSection> */}
            {/* <FadeSection>
                <Box sx={{ backgroundColor: '#f5f8ff', mt: 4 }}>
                    <Box textAlign="center" mb={5}>
                        <Container sx={{ textAlign: "center" }}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                Data Platform Architecture
                            </Typography>
                        </Container>
                    </Box>

                    <Box
                        maxWidth="lg"
                        mx="auto"
                        px={3}
                        py={4}
                        bgcolor="white"
                        borderRadius={2}
                        boxShadow={1}
                    >


                        <img width={"100%"} src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250403082047.792.webp" alt="" />
                    </Box>
                </Box>
            </FadeSection> */}
            <FadeSection>

                <Box sx={{ backgroundColor: '#f5f8ff', py: 6, px: 2, mt: 4 }}>
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        align="center"
                        gutterBottom
                        sx={{ mb: 3 }}
                    >
                        Features
                    </Typography>
                    <Container>
                        <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
                            <Table>
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#2196f3' }}>
                                        <TableCell sx={{ color: '#fff', fontWeight: 'bold', width: '25%' }}>
                                            Features
                                        </TableCell>
                                        <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>
                                            Data Platform
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, idx) => (
                                        <TableRow
                                            key={idx}
                                            sx={{
                                                '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' },
                                            }}
                                        >
                                            <TableCell sx={{ fontWeight: 600, color: '#0d47a1' }}>
                                                {row.feature}
                                            </TableCell>
                                            <TableCell>{row.description}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
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
                                    Bigdata IT Outsourcing
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

export default BigDataAnalyticsPage
