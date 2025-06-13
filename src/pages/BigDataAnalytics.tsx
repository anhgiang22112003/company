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
            'Azure Database Migration Service, Azure Data Factory, Azure Event Hub, Azure Stream Analytics, Azure Synapse',
            'AWS Kinesis Firehose, AWS Database Migration Service, AWS Glue, AWS Lambda, AWS Data Pipeline',
            'Google Cloud Dataflow, Google Cloud Datastream',
            'Apache Nifi, Apache Kafka, Apache Flume, Apache Airbyte, Debezium',
        ],
    },
    {
        title: 'Data Storage',
        items: [
            'Azure Blob Storage, Azure Data Lake Storage, SQL, Azure Cosmos DB',
            'Amazon S3, Amazon DynamoDB, Amazon Redshift',
            'HDFS, MinIO, ClickHouse, Apache Pinot, PostgreSQL, TimeScaleDB, MongoDB',
            'Google BigQuery, Google Cloud Storage',
            'Apache Iceberg, Apache HUDI, Delta Live Table',
        ],
    },
    {
        title: 'Data Processing & Analytics',
        items: [
            'Azure Data Factory, Azure Databricks, Azure Synapse Analytics, Azure Functions, Azure HDInsight',
            'AWS Glue, AWS EMR, AWS Lambda',
            'Google Cloud Dataproc, Google Cloud DataPlex',
            'Apache Flink, Apache Spark, Apache Beam, Apache Storm',
        ],
    },
    {
        title: 'Data Observability',
        items: [
            'Azure Monitor, Azure Application Insights, Azure Firewall',
            'Amazon CloudWatch, AWS X-Ray, AWS CloudTrail, IAM, KMS',
            'Google Cloud Monitoring, Google Cloud Trace',
            'Prometheus, Grafana, Datadog',
        ],
    },
    {
        title: 'Data Visualization & BI',
        items: [
            'Azure Power BI, Azure ML, Azure Open AI, Azure AI Search',
            'Amazon QuickSight, Amazon SageMaker',
            'Google Data Studio, Google Looker',
            'Tableau, Power BI, Apache Superset, Metabase, Grafana',
        ],
    },
    {
        title: 'Infrastructure & Platforms',
        items: ['On-premises, AWS, Azure, Google, Databricks, Snowflake'],
    },
    {
        title: 'Programming Languages & Frameworks',
        items: ['Scala, Java, R, Python, Panda, MapReduce, Spark, Flink'],
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
        feature: 'Service Model',
        description:
            'Supports both on-premises and multi-cloud environments, offering flexibility for deployment based on organizational needs.',
    },
    {
        feature: 'Supported Cloud Platforms',
        description:
            'Compatible with a wide range of platforms including Azure, AWS, Google Cloud, Digital Ocean, as well as private clouds and enterprise data centers, ensuring broad interoperability.',
    },
    {
        feature: 'Scalability',
        description:
            'Designed with horizontal scaling capabilities, allowing seamless expansion as data and user demands grow.',
    },
    {
        feature: 'Vendor Lock-in',
        description:
            'No vendor lock-in, providing customers with full control and freedom to migrate or integrate systems.',
    },
    {
        feature: 'Query Interface',
        description:
            'Offers multiple options like SQL, Spark Dataframe, and REST API to suit diverse analytical and development needs.',
    },
    {
        feature: 'Data Structures',
        description:
            'Capable of handling all types of data, including structured (e.g., relational databases), semi-structured (e.g., JSON, XML) and unstructured (raw, audio, video, logs, text, etc.)',
    },
    {
        feature: 'Services',
        description:
            'Data lake, data warehouse, data lakehouse, data science, data analytics and AI/ML.',
    },
    {
        feature: 'Analytic Model',
        description:
            'Supports Batch processing, Real-time analytics, and Streaming analytics for varied data processing needs.',
    },
    {
        feature: 'AI/ML Capabilities',
        description:
            'Built-in AI/ML models provided by, designed to streamline predictive analysis and decision-making processes.',
    },
    {
        feature: 'BI & Reporting',
        description:
            'Includes built-in reports and dynamic dashboards that offer real-time visualization and business intelligence insights.',
    },
    {
        feature: 'Security & Governance',
        description:
            'Features role-based access control to ensure secure and restricted access to sensitive data. Can be customized to meet customer’s needs.',
    },
    {
        feature: 'Domain Specific',
        description:
            'Tailored solutions for specific industries such as: Networking, Telecom, Health Tech, Customer Insights.',
    },
    {
        feature: 'Composable',
        description:
            'Fully customizable components, enabling organizations to adapt the platform to meet unique business requirements.',
    },
    {
        feature: 'Easy to Use',
        description:
            'Provides an intuitive drag-and-drop interface and customizable workflows, making it accessible even for non-technical users.',
    },
]

const BigDataAnalyticsPage = () => {


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
                    <Container>
                        <Grid container spacing={6} alignItems="center" justifyContent="center">
                            {/* Left: Text and Icons */}
                            <Grid item xs={12} md={6}>
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
                                ))}
                            </Grid>

                            {/* Right: Hex Grid */}
                            <Grid item xs={12} md={6}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: 2,
                                    }}
                                >
                                    <img width={"100%"} src="https://tmastorage.azureedge.net/uploadfiles/Banner/banner_20250321093607.455.webp" alt="" />
                                </Box>
                            </Grid>
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

                            <Link href="technologies" underline="hover"><Typography color="#00A1F1">Technologies</Typography></Link>

                            <Typography color="#00A1F1">{'>'}</Typography>

                            <Typography color="text.primary">Big Data & Analytics</Typography>
                        </Stack>

                    </Box>
                </Container>
            </FadeSection>
            <FadeSection id='about' >
                <Box p={5} sx={{
                    mt: 4,

                }}
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
                        <Container>
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
                        </Container>
                    </Box>
                </Box>
            </FadeSection>
            <FadeSection>
                <Box bgcolor={"#f5f5f5"}>
                    <Container>
                        <Container sx={{ textAlign: "center" }}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                Technologies
                            </Typography>
                        </Container>
                        <Box sx={{ backgroundColor: '#f5f9ff', px: 4, py: 8 }}>
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
                    </Container>
                </Box>
            </FadeSection>
            <FadeSection>
                <Box sx={{ backgroundColor: '#1da1f2', py: 6, px: 2 }}>
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
                        <Typography variant="h4" fontWeight="bold" color="white">
                            Solutions
                        </Typography>
                    </Box>
                    <Container>
                        <Grid container spacing={3} justifyContent="center">
                            {solutions.map((solution, index) => (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <Card
                                        sx={{
                                            height: 120,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexDirection: 'column',
                                            boxShadow: 3,
                                            borderRadius: 2,
                                            textAlign: 'center',
                                            px: 2,
                                        }}
                                    >
                                        <CardContent sx={{ p: 0 }}>
                                            <Box mb={1} color="primary.main">{solution.icon}</Box>
                                            <Typography variant="body2" fontWeight={500}>
                                                {solution.label}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            </FadeSection>
            <FadeSection>
                <Box sx={{ backgroundColor: '#f5f8ff', py: 8 }}>
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
            <FadeSection>
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
            </FadeSection>
            <FadeSection>
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
            </FadeSection>
            <FadeSection>
              
                <Box sx={{ backgroundColor: '#f5f8ff', py: 6, px: 2,mt:4 }}>
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
                                    Data Solution Brochure
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
