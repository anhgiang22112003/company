import React, { useState } from 'react'
import { Avatar, Box, Breadcrumbs, Collapse, Container, CssBaseline, Fade, Grid, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import { flexbox, Stack, styled, useTheme } from '@mui/system'
import useMediaQuery from '@mui/material/useMediaQuery'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import { motion } from 'framer-motion'
import {
    FaCloud, FaCogs, FaJava, FaRobot, FaMobileAlt,
    FaCode, FaChartBar, FaMicrosoft, FaNetworkWired,
    FaBrain, FaTools, FaSatelliteDish
} from 'react-icons/fa'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import FadeSection from '../components/FadeSection'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import WifiIcon from '@mui/icons-material/Wifi'
import MachineLearningCard from '../components/MachineLearningCard'
import CodeIcon from '@mui/icons-material/Code'
import CloudIcon from '@mui/icons-material/Cloud'
import DnsIcon from '@mui/icons-material/Dns'
import ResponsiveMenu from '../components/reponsiveMenu'
import ScrollToTopButton from '../components/ScrollToTopButton'
import IoTTopics from '../components/Iottopics'
import ScrollDots from '../components/ScrollDots'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import 'swiper/css'
const dataDev = [
    { title: 'CI/CD', img: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240530092107.010.webp' },
    { title: 'LOG MANAGEMENT', img: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240530092113.599.webp' },
    { title: 'CLOUD INFRASTRUCTURE', img: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240530092123.030.webp' },
    { title: 'MONITORING', img: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240530092128.309.webp' },
    { title: 'CONTAINER MANAGEMENT', img: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240530092134.896.webp' },
    { title: 'INFRASTRUCTURE AS CODE', img: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240530092141.197.webp' },
    { title: 'NETWORKING', img: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240530092148.174.webp' },
    { title: 'OS', img: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240530092157.920.webp' },
    { title: 'PROGRAMMING', img: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240530092203.415.webp' },
]
const dataMobile = [
    { title: 'Soft Phone, Call Control', img: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240530094113.562.webp' },
    { title: 'Mobile DRM', img: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240530094130.421.webp' },
    { title: 'Smart TV​', img: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240530094212.621.webp' },
    { title: 'Flutter, React Native​', img: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240530094233.331.webp' },
    { title: 'VoIP, MjSIP, PjSIP, SIP, RTP, SDP', img: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240530094119.014.webp' },
    { title: 'e-Pub3, pdf, mp3, mp4​', img: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240530094139.609.webp' },
    { title: 'Linux kerne', img: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240530094219.372.webp' },
    { title: 'HTML5, JQuery, Sencha Touch', img: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240530094239.491.webp' },
    { title: 'Bluetooth, Beacon​', img: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240530094124.082.webp' },
    { title: '3D, OpenGL, WebGL​', img: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240530094145.310.webp' },
    { title: 'AR, camera​', img: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240530094226.764.webp' },
    { title: 'Google Map, Bing Map, OpenStreet Map, Offline Map​', img: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240530094245.337.webp' },

]
const Microsoft = [
    {
        title: "Technologies",
        technologies: [
            "C#", "ASP.NET Core", "TypeScript", ".NET Core", "Entity Framework", "WPF"
        ],
    },
    {
        title: "Server & Middleware",
        technologies: [
            "SharePoint", "MS Dynamics 365", "TFS", "TeamCity"
        ],
    },
    {
        title: "Cloud",
        technologies: [
            "Azure IoT Hub", "Azure Service Bus", "Azure Monitor", "SignalR"
        ],
    },
    {
        title: "Analytics & BI",
        technologies: [
            "SSIS", "SSRS", "Power BI"
        ],
    },
]

const skills = [
    { icon: <WifiIcon fontSize="large" />, title: 'O-RAN', desc: '(Open RAN)' },
    { icon: <DnsIcon fontSize="large" />, title: '5G Core' },
    { icon: <CloudIcon fontSize="large" />, title: 'Microservices,', desc: 'REST API, Database' },
    { icon: <CodeIcon fontSize="large" />, title: 'Automation', desc: 'Robot Framework, Python' },
    { icon: <CodeIcon fontSize="large" />, title: 'DevOps', desc: 'GitHub, Jenkins, qTest' },
    { icon: <CloudIcon fontSize="large" />, title: '5G Private Network' },
    { icon: <CodeIcon fontSize="large" />, title: 'Programming', desc: 'C/C++, Java, Python, Go' },
    { icon: <CloudIcon fontSize="large" />, title: 'Cloud', desc: 'NFV, Docker, Kubernetes' },
    { icon: <DnsIcon fontSize="large" />, title: 'CI/CD Development/', desc: 'Implementation' },
    { icon: <CloudIcon fontSize="large" />, title: 'Protocols', desc: 'HTTP/2, TLS, TCP, UDP,...' },
]
const technologies = [
    { label: '5G', icon: FaSatelliteDish, color: '#1976d2' },
    { label: 'IoT', icon: FaNetworkWired, color: '#28a745' },
    { label: 'Cloud', icon: FaCloud, color: '#17a2b8' },
    { label: 'DevOps', icon: FaCogs, color: '#ffc107' },
    { label: 'Low Code', icon: FaCode, color: '#fd7e14' },
    { label: 'Java', icon: FaJava, color: '#6f42c1' },
    { label: 'Hardware', icon: FaTools, color: '#dc3545' },
    { label: 'Analytics', icon: FaChartBar, color: '#20c997' },
    { label: 'Microsoft', icon: FaMicrosoft, color: '#007bff' },
    { label: 'AI/ML', icon: FaBrain, color: '#6610f2' },
    { label: 'RPA', icon: FaRobot, color: '#e83e8c' },
    { label: 'Mobile', icon: FaMobileAlt, color: '#fd7e14' },
    { label: 'Web Dev', icon: FaCode, color: '#343a40' },
]

const Item = styled(Box)(({ theme, small }) => ({
    position: 'absolute',
    width: small ? 60 : 100,
    height: small ? 60 : 100,
    backgroundColor: 'white',
    border: '2px solid #bbdefb',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
        transform: small ? 'scale(1.1)' : 'scale(1.15)',
        boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
    },
}))

const CenterCircle = styled(Box)(({ small }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: small ? 180 : 310,
    height: small ? 180 : 310,
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#ffffff',
    border: '4px solid #007bff',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: small ? 8 : 12,
    overflow: 'hidden',
    boxSizing: 'border-box',
    zIndex: 2,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.24)',
    fontSize: small ? '0.9rem' : 'initial',
}))

const data = [
    { title: 'Big Data & Analytics & AI/ML', count: 700, type: 'Developers' },
    { title: 'Cloud, DevOps', count: 400, type: 'Engineers' },
    { title: 'Java', count: 700, type: 'Developers' },
    { title: 'Microsoft Technologies', count: 600, type: 'Developers' },
    { title: 'Web – Mobile', count: 800, type: 'Developers' },
    { title: 'C/C++, Embedded, IoT', count: 400, type: 'Developers' },
]
const machineLearningData = [
    {
        title: 'Machine Learning',
        items: [
            "Descriptive Statistics", "Deep Learning", "TensorFlow", "Keras",
            "Yolo", "Model Optimization", "TensorRT", "OpenVINO",
            "Supervised", "Unsupervised", "Transfer Learning", "Clustering"
        ]
    },
    {
        title: 'Reinforcement Learning',
        items: [
            "Q-Learning", "Policy Gradients", "Actor-Critic", "Deep Q Network (DQN)",
            "Reward Shaping", "Exploration vs Exploitation", "Value Iteration", "Monte Carlo Tree Search"
        ]
    },
    // 👇 Dưới đây là 3 phần bạn cần thêm
    {
        title: 'Natural Language Processing',
        items: [
            "Tokenization", "Named Entity Recognition", "Text Classification",
            "Word Embeddings (Word2Vec, GloVe)", "Transformers", "BERT", "GPT Models",
            "Sentiment Analysis", "Machine Translation"
        ]
    },
    {
        title: 'Computer Vision',
        items: [
            "Image Classification", "Object Detection (YOLO, SSD)", "Semantic Segmentation",
            "OpenCV", "Face Recognition", "OCR", "Data Augmentation", "Image Preprocessing"
        ]
    },
    {
        title: 'AI Tools & Frameworks',
        items: [
            "PyTorch", "Scikit-learn", "FastAI", "Hugging Face",
            "MLflow", "ONNX", "Google Colab", "Weights & Biases",
            "AutoML", "Apache Spark MLlib"
        ]
    }
]

const HardwareData = [
    {
        title: 'Chipset',
        items: [
            "ESP, Raspberry, NXP, STM, PIC​"
        ]
    },
    {
        title: 'Hardware Design',
        items: [
            "Capture schematics and drawing layout using Altium, Kicad, OrCA​​"
        ]
    }, {
        title: 'Microcontroller Unit',
        items: [
            "Capture schematics and drawing layout using Altium, Kicad, OrCA​​"
        ]
    },
    {
        title: 'Domain',
        items: [
            "IoT (BLE, LoRaWAN, WIFI 6, Wi-Fi HaLow)",
            "Power electronics: Buck, boost, Flyback topology...​​​"

        ]
    }

]
const industries = [
    {
        icon: "https://tmastorage.azureedge.net/uploadfiles/PageSection/iconBigdataHover.webp",
        href: "/technologies/big-data-analytics",
        title: 'Big Data & Analytics',
        description: 'Customer Data, Healthcare & Insurance Data, Phishing Simulation Training, Data Warehousing Recruitment System, Data Warehouse',
    },
    {
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/iconDataSciencesHover.webp',
        title: 'AI/ML & Data Sciences',
        href: "/technologies/ai-ml-data-sciences",
        description: 'Computer vision, Pattern recognition, NLP, MLaaS, Supervised Learning, Unsupervised Learning, Recommendation',
    },
    {
        icon: "https://tmastorage.azureedge.net/uploadfiles/PageSection/iconCloudHover.webp",
        title: 'Cloud',
        href: "/technologies/cloud",
        description: 'AWS Services, Azure Services, Google Cloud, OpenStack Services, IBM cloud ,cloud administrator',
    },
    {
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/iconRPAHover.webp',
        title: 'RPA',
        href: "/technologies/rpa",
        description: 'Account Creation Make Easy, Inventory Alert, COD Automation, Traffic Image Processing, Logistics Data Process, Debt reminder, Insurance',
    },
    {
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/iconDevopsHover.webp',
        title: 'DevOps',
        href: "/technologies/devops",
        description: 'CICD, Monitoring & Logging, Migration, DevOps Consulting',
    },
    {
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/icon5GHover.webp',
        title: '5G',
        href: "/technologies/big-data-analytics",
        description: 'Platform development, 5G Core development, RAN development, UE Simulation development, 5G applications development, 5G Software',
    },
    {
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/iconIotHover.webp',
        title: 'Iot',
        href: "/technologies/iot",
        description: 'Inventory Monitoring, Dryer Machine Optimization, Remote Container Monitoring System, Air Conditioner Smart Control System, Embedded',
    },
    {
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/iconLowcodeHover.webp',
        title: 'Low Code',
        href: "/technologies/low-code",
        description: 'Modernize the legacy ecosystems, Integrate the ecosystems, Automate processes, Digital transformation for business, Innovate workplace',
    },
]
const cloudItems = [
    'Amazon Cloud (AWS)',
    'Google Cloud',
    `MS Azure, SQL Azure,\nAzure Mobile,\nSignal R,\nAzure Service Bus`,
    'IBM Watson',
    `Kubernetes, Docker,\nEdge Computing`
]
const datas = [
    {
        title: "Data Warehousing",
        technologies: [
            "SSIS",
            "SSRS",
            "AWS Glue",
            "AWS SQS",
            "AWS DMS",
            "AWS Kinesis Stream",
            "AWS Kinesis Firehose",
            "AWS EMR",
        ],
    },
    {
        title: "BI and Data Visualization",
        technologies: ["BigQuery", "Snowflake", "Redshift", "Azure Synapse"],
    },
    {
        title: "Programming",
        technologies: ["BigQuery", "Snowflake", "Redshift", "Azure Synapse"],
    },
    {
        title: "Frameworks​",
        technologies: ["Databricks", "Hadoop", "Hive"],
    },
]

const leftData = [
    {
        title: 'J2EE',
        items: [
            'EJB, Servlets, JSP, JNDI, RMI/IIOP, JTA/JTS, JMS, JavaMail, JSF, JCA connectors, JDBC, Hibernate, JPA, Spring, Guice, Struts, Liferay portal',
        ],
    },
    {
        title: 'Web/Desktop',
        items: [
            'CSS, JavaScript, AJAX, J2SE, Swing, GWT, GWT-Platform, Sencha GXT, Eclipse RCP, Macromedia Flex',
        ],
    },
    {
        title: 'Business Process & Workflow',
        items: ['BPMN2, JBoss jBPM5'],
    },
]
const rightData = [
    {
        title: 'Application Server',
        items: ['Apache Tomcat, JBoss AS, GlassFish'],
    },
    {
        title: 'Web Services & SOA',
        items: [
            'WSDL, SOAP, REST, XSD, WS-I, UDDI, JAX-RPC, AXIS, XML RPC, WS-Security',
        ],
    },
    {
        title: 'Tools',
        items: [
            'Eclipse, Maven, Jenkins, SonarQube, SoapUI, PowerBuilder.',
            'Atlassian: JIRA, Confluence, Fisheye, Crucible, Bamboo.',
            'SVN, Git, VersionOne.',
        ],
    },
]
const dataWeb = [
    {
        title: 'Frontend',
        items: [
            'ReactJS, React Native, Redux',
            'NextJS, CSS3, Bootstrap',
            'SASS, jQuery'
        ],
    },
    {
        title: 'PHP Frameworks',
        items: ['Laravel, Symfony'],
    },
    {
        title: 'Python Frameworks',
        items: ['Django'],
    },
    {
        title: 'CMS Platforms',
        items: ['WordPress, Drupal'],
    },
    {
        title: 'E-Commerce Platforms',
        items: ['Magento'],
    },
    {
        title: 'Ruby on Rails Ecosystem',
        items: ['Rails, Redis'],
    },
]
const dataLowCode = {
    OutSystems: [
        'Live Style Guide',
        'OutSystems UI',
        'Service Studio',
        'Integration Studio',
        'Architecture Dashboard',

    ],
    Salesforce: [

        'Salesforce Object Query Language',
        'Salesforce CPQ platform',
        'Sales Cloud',
        'Service Cloud',
        'Community Cloud',
    ],
    'Microsoft Power': ['Power BI', 'Power Automate', 'Virtual Agent'],
}

const TechnologiesPage = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const centerX = isMobile ? 140 : 300
    const centerY = isMobile ? 140 : 300
    const radius = isMobile ? 130 : 220
    const itemOffset = isMobile ? 30 : 50 // Half item size for positioning
    const isMd = useMediaQuery(theme.breakpoints.up('md'))
    const isSm = useMediaQuery(theme.breakpoints.up('sm'))

    // Determine number of columns
    const getColumns = () => {
        if (isMd) return 3
        if (isSm) return 2
        return 1
    }

    const columns = getColumns()
    const rows = []
    for (let i = 0; i < dataMobile.length; i += columns) {
        rows.push(dataMobile.slice(i, i + columns))
    }
    const section: any = [
        { id: "AllData Analytics", label: "AllData Analytics" },
        { id: "AI & Machine Learning", label: "AI & Machine Learning" },
        { id: "RPA", label: "RPA" },
        { id: "5G", label: "5G" },
        { id: "LOT", label: "LOT" },
        { id: "Cloud", label: "Cloud" },
        { id: "DevOps", label: "DevOps" },
        { id: "Java", label: "Java" },
        { id: "Microsoft", label: "Microsoft" },
        { id: "Web Development", label: "Web Development" },
        { id: "Mobile", label: "Mobile" },
        { id: "Low code", label: "Low code" },
        { id: "Hardware", label: "Hardware" },
        { id: "download", label: "download" },
    ]

    return (
        <>

            <Header />
            <ScrollDots sections={section} />
            <Box bgcolor="#f5f5f5" sx={{
                boxSizing: 'border-box',
                '*': { boxSizing: 'border-box' },
            }}>
                <FadeSection>

                    <Box py={isMobile ? 25 : 16} sx={{ background: 'linear-gradient(to bottom, #1976d2, rgba(10, 75, 149, 0.56))' }}>
                        <img
                            style={{ position: "absolute" }}
                            width={"30%"}
                            src="https://www.tmasolutions.com/media/services/decorLeft.webp"
                            alt=""
                        />

                        <Box

                            position="relative"
                            sx={{
                                width: isMobile ? 280 : 603,
                                height: isMobile ? 280 : 603,
                                mx: 'auto',
                                borderRadius: '8px',
                                textAlign: 'center',
                            }}
                        >
                            <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>

                                {/* ✅ Vòng bao xoay toàn bộ item */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        animation: 'rotateOrbit 20s linear infinite',
                                        '@keyframes rotateOrbit': {
                                            '0%': { transform: 'rotate(0deg)' },
                                            '100%': { transform: 'rotate(360deg)' },
                                        },
                                    }}
                                >
                                    {technologies.map((tech, i) => {
                                        const IconComponent = tech.icon as React.ElementType
                                        const angle = (360 / technologies.length) * i
                                        const rad = (angle * Math.PI) / 180
                                        const x = centerX + radius * Math.cos(rad) - itemOffset
                                        const y = centerY + radius * Math.sin(rad) - itemOffset

                                        return (
                                            <motion.div
                                                key={tech.label}
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.2, duration: 0.5 }}
                                                style={{
                                                    position: 'absolute',
                                                    top: y,
                                                    left: x,
                                                }}
                                            >
                                                <Item small={isMobile}>
                                                    <IconComponent size={isMobile ? 20 : 30} color={tech.color} />
                                                    <Typography
                                                        variant="caption"
                                                        sx={{
                                                            textAlign: 'center',
                                                            mt: 0.5,
                                                            fontSize: isMobile ? '0.7rem' : 'inherit',
                                                        }}
                                                    >
                                                        {tech.label}
                                                    </Typography>
                                                </Item>
                                            </motion.div>
                                        )
                                    })}
                                </Box>

                                {/* Trung tâm cố định */}
                                <CenterCircle small={isMobile}>
                                    <Typography
                                        variant="h5"
                                        fontWeight="bold"
                                        color="#1976d2"
                                        sx={{ mb: 1, fontSize: isMobile ? '1.25rem' : '2rem' }}
                                    >
                                        Technologies
                                    </Typography>
                                    <Typography
                                        color="#1976d2"
                                        fontSize={isMobile ? '10px' : '12px'}
                                        sx={{
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 5,
                                            WebkitBoxOrient: 'vertical',
                                        }}
                                    >
                                        We gained extensive experience and solid technological expertise working on large-scale and complex projects with a team of highly skilled technical architects and software engineers.
                                    </Typography>
                                </CenterCircle>
                            </Box>
                        </Box>
                    </Box>


                </FadeSection>
                <FadeSection>
                    <Container maxWidth="lg">
                        <Box
                            sx={{
                                position: 'relative',
                                bgcolor: 'white',
                                p: { xs: 2, md: 4 },
                                mt: { xs: -10, md: -8 },
                                zIndex: 10,
                                borderRadius: 2,
                            }}
                        >
                            <Grid container spacing={4}>
                                {data.map((item, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Box
                                            sx={{
                                                height: '100%',
                                                textAlign: 'center',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                px: 2,
                                            }}
                                        >
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    mb: 1,
                                                    fontWeight: 500,
                                                    color: '#666',
                                                    fontSize: isMobile ? '0.75rem' : '0.9rem',
                                                    whiteSpace: isMobile ? 'normal' : 'nowrap',
                                                    overflow: isMobile ? 'visible' : 'hidden',
                                                    textOverflow: isMobile ? 'unset' : 'ellipsis',
                                                    maxWidth: 200,
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                variant="h4"
                                                fontWeight="bold"
                                                color="#007bff"
                                                sx={{
                                                    fontSize: isMobile ? '1.4rem' : '1.9rem',
                                                    lineHeight: 1,
                                                }}
                                            >
                                                {item.count}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="#000000"
                                                sx={{ fontSize: isMobile ? '0.75rem' : '0.95rem' }}
                                            >
                                                {item.type}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Container>
                </FadeSection>
                <FadeSection >
                    <Container>
                        <Box sx={{ mt: 1, px: 4, p: 2 }}>
                            <Breadcrumbs separator="›" aria-label="breadcrumb">
                                <Link underline="hover" color="#00A1F1" href="/">
                                    <Typography fontWeight={700}>Home</Typography>
                                </Link>
                                <Typography color="text.primary">Technologies</Typography>
                            </Breadcrumbs>
                        </Box>
                    </Container>
                </FadeSection>
                <ResponsiveMenu sections={section} />
                <FadeSection>
                    <Container >
                        <Box

                            px={4}
                            py={6}
                            sx={{
                                backgroundColor: '#f9fbfd',
                                borderTopLeftRadius: '60px',
                                borderBottomRightRadius: '60px',
                                boxShadow: '0px 4px 20px rgba(0,0,0,0.05)', // Nhẹ nhàng nổi lên
                            }}
                        >
                            <Grid container spacing={4}>
                                {industries.map((item, index) => (
                                    <Grid item xs={12} md={6} key={index}>
                                        <Stack direction="row" spacing={2} alignItems="flex-start">
                                            <Avatar
                                                sx={{
                                                    bgcolor: '#e6f1fc',
                                                    color: '#1976d2',
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        bgcolor: '#1976d2',
                                                        color: '#fff',
                                                        transform: 'scale(1.2)',
                                                        cursor: 'pointer',
                                                    },
                                                }}
                                            >
                                                <img src={item.icon} alt="" />
                                            </Avatar>
                                            <Box>
                                                <Typography variant="subtitle1" fontWeight="bold">
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" mt={0.5}>
                                                    {item.description}
                                                </Typography>
                                                <Link href={item.href}>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            position: 'relative',
                                                            cursor: 'pointer',
                                                            mt: 1,
                                                            fontWeight: 600,
                                                            color: 'inherit',
                                                            transition: 'color 0.3s ease',
                                                            '&::after': {
                                                                content: '""',
                                                                position: 'absolute',
                                                                left: 0,
                                                                bottom: -2,
                                                                height: '2px',
                                                                backgroundColor: 'blue',
                                                                width: 0,
                                                                transition: 'width 0.5s ease',
                                                            },
                                                            '&:hover': {
                                                                color: 'blue',
                                                                '&::after': {
                                                                    width: '100%',
                                                                },
                                                                '& svg': {
                                                                    color: 'blue',
                                                                    transition: 'color 0.3s ease',
                                                                },
                                                            },
                                                            '& svg': {
                                                                ml: 1,
                                                                transition: 'color 0.3s ease',
                                                            },
                                                        }}
                                                    >
                                                        Explore More
                                                        <ArrowForwardIcon />
                                                    </Typography>
                                                </Link>
                                            </Box>
                                        </Stack>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Container>
                </FadeSection>
                {/**big data */}
                <FadeSection id='AllData Analytics'>
                    <Container>
                        <Box mt={3} bgcolor={"white"} p={5} textAlign={"center"}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography fontWeight={"bold"} variant='h4'>
                                Big Data & Data Analytics
                            </Typography>
                            <Container sx={{ p: 5 }}>
                                {datas.map((item, index) => (
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
                                                alignItems: "center",
                                            }} bgcolor={"#1ea7fd"} fontSize={24} alignItems={"center"} fontWeight={800} color="white">
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
                                                {item.technologies.map((tech, i) => (
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
                                <Link href="/technologies/big-data-analytics">
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            position: 'relative',
                                            cursor: 'pointer',
                                            mt: 1,
                                            fontWeight: 600,
                                            color: 'inherit',
                                            transition: 'color 0.3s ease',
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                left: 0,
                                                bottom: -2,
                                                height: '2px',
                                                backgroundColor: 'blue',
                                                width: 0,
                                                transition: 'width 0.5s ease',
                                            },
                                            '&:hover': {
                                                color: 'blue',
                                                '&::after': {
                                                    width: '100%',
                                                },
                                                '& svg': {
                                                    color: 'blue',
                                                    transition: 'color 0.3s ease',
                                                },
                                            },
                                            '& svg': {
                                                ml: 1,
                                                transition: 'color 0.3s ease',
                                            },
                                        }}
                                    >
                                        Explore More
                                        <ArrowForwardIcon />
                                    </Typography>
                                </Link>
                            </Container>
                        </Box>
                    </Container>
                </FadeSection>
                {/*Ai Machine */}
                <FadeSection id='AI & Machine Learning'>

                    <Box mt={3} sx={{ background: 'linear-gradient(to bottom, #1976d2, rgba(10, 75, 149, 0.56))', }} p={5} textAlign={"center"}>
                        <Container>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography fontWeight={"bold"} mb={6} variant='h4'>
                                AI & Machine Learning
                            </Typography>
                            <Box sx={{ px: 4, mb: 4, position: 'relative', }}>
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    navigation={{
                                        prevEl: '.custom-swiper-prev',
                                        nextEl: '.custom-swiper-next',
                                    }}
                                    spaceBetween={20}

                                    slidesPerView={1}
                                    breakpoints={{
                                        600: {
                                            slidesPerView: 2,
                                        },
                                        900: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                    }}
                                    loop
                                >
                                    {machineLearningData.map((section, index) => (
                                        <SwiperSlide key={index}>
                                            <MachineLearningCard section={section} />
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
                            <Link href="/technologies/ai-ml-data-sciences">
                                <Typography
                                    variant="body2"
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        mt: 1,
                                        fontWeight: 600,
                                        color: 'white',
                                        transition: 'color 0.3s ease',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            left: 0,
                                            bottom: -2,
                                            height: '2px',
                                            backgroundColor: 'blue',
                                            width: 0,
                                            transition: 'width 0.5s ease',
                                        },
                                        '&:hover': {
                                            color: 'blue',
                                            '&::after': {
                                                width: '100%',
                                            },
                                            '& svg': {
                                                color: 'blue',
                                                transition: 'color 0.3s ease',
                                            },
                                        },
                                        '& svg': {
                                            ml: 1,
                                            transition: 'color 0.3s ease',
                                        },
                                    }}
                                >
                                    Explore More
                                    <ArrowForwardIcon />
                                </Typography>
                            </Link>
                        </Container>
                    </Box>


                </FadeSection>
                {/**RPA */}
                <FadeSection id='RPA'>
                    <Container>
                        <Box mt={3} bgcolor={"white"} p={5} textAlign={"center"}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography fontWeight={"bold"} mb={4} variant='h4'>
                                RPA
                            </Typography>
                            <img width={"100%"} src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240529142332.676.webp" alt="" />
                            <Link href="/technologies/rpa">
                                <Typography
                                    variant="body2"
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        mt: 3,
                                        fontWeight: 600,
                                        color: 'inherit',
                                        transition: 'color 0.3s ease',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            left: 0,
                                            bottom: -2,
                                            height: '2px',
                                            backgroundColor: 'blue',
                                            width: 0,
                                            transition: 'width 0.5s ease',
                                        },
                                        '&:hover': {
                                            color: 'blue',
                                            '&::after': {
                                                width: '100%',
                                            },
                                            '& svg': {
                                                color: 'blue',
                                                transition: 'color 0.3s ease',
                                            },
                                        },
                                        '& svg': {
                                            ml: 1,
                                            transition: 'color 0.3s ease',
                                        },
                                    }}
                                >
                                    Explore More
                                    <ArrowForwardIcon />
                                </Typography>
                            </Link>
                        </Box>

                    </Container>
                </FadeSection>
                {/**5g */}
                <FadeSection id="5G">

                    <Box mt={3} sx={{ background: 'linear-gradient(to bottom, #1976d2, rgba(10, 75, 149, 0.56))', }} p={5} textAlign={"center"}>
                        <Container>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography fontWeight={"bold"} mb={4} variant='h4'>
                                5G
                            </Typography>
                            <Grid container mb={4} spacing={2} justifyContent="center">
                                {skills.map((item, index) => (
                                    <Grid
                                        key={index}
                                        item
                                        xs={6}
                                        sm={6}
                                        md={4}
                                        lg={2.4}
                                        xl={2.4}
                                        sx={{
                                            display: 'flex',        // ensure full height
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                bgcolor: '#f5faff',
                                                borderRadius: 2,
                                                textAlign: 'center',
                                                p: {
                                                    xs: 2,
                                                    sm: 3,
                                                },
                                                minHeight: {
                                                    xs: 140,
                                                    sm: 180,
                                                },
                                                height: '100%',       // equal height
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center', // center vertically
                                            }}
                                        >
                                            <Box sx={{ color: '#1ea7fd', mb: 1 }}>{item.icon}</Box>

                                            <Typography
                                                fontWeight={600}
                                                sx={{
                                                    fontSize: {
                                                        xs: '14px',
                                                        sm: '16px',
                                                        md: '18px',
                                                    },
                                                }}
                                            >
                                                {item.title}
                                            </Typography>

                                            {item.desc && (
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    mt={1}
                                                    sx={{
                                                        fontSize: {
                                                            xs: '12px',
                                                            sm: '14px',
                                                            md: '15px',
                                                        },
                                                        mt: 'auto',
                                                    }}
                                                >
                                                    {item.desc}
                                                </Typography>
                                            )}
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>

                            <Link href='/technologies/5g'>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        mt: 4,
                                        fontWeight: 600,
                                        color: 'white',
                                        transition: 'color 0.3s ease',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            left: 0,
                                            bottom: -2,
                                            height: '2px',
                                            backgroundColor: 'blue',
                                            width: 0,
                                            transition: 'width 0.5s ease',
                                        },
                                        '&:hover': {
                                            color: 'white',
                                            '&::after': {
                                                width: '100%',
                                            },
                                            '& svg': {
                                                color: 'white',
                                                transition: 'color 0.3s ease',
                                            },
                                        },
                                        '& svg': {
                                            ml: 1,
                                            transition: 'color 0.3s ease',
                                        },
                                    }}
                                >
                                    Explore More
                                    <ArrowForwardIcon />
                                </Typography>
                            </Link>
                        </Container>
                    </Box>


                </FadeSection>
                {/**iot */}
                <FadeSection id='LOT'>
                    <Container>
                        <Box mt={3} bgcolor={"white"} p={5} textAlign={"center"}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography fontWeight={"bold"} mb={4} variant='h4'>
                                Internet of Things (IoT)
                            </Typography>

                            <IoTTopics />
                            <Link href="/technologies/iot">
                                <Typography
                                    variant="body2"
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        mt: 4,
                                        fontWeight: 600,
                                        color: 'inherit',
                                        transition: 'color 0.3s ease',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            left: 0,
                                            bottom: -2,
                                            height: '2px',
                                            backgroundColor: 'blue',
                                            width: 0,
                                            transition: 'width 0.5s ease',
                                        },
                                        '&:hover': {
                                            color: 'blue',
                                            '&::after': {
                                                width: '100%',
                                            },
                                            '& svg': {
                                                color: 'blue',
                                                transition: 'color 0.3s ease',
                                            },
                                        },
                                        '& svg': {
                                            ml: 1,
                                            transition: 'color 0.3s ease',
                                        },
                                    }}
                                >
                                    Explore More
                                    <ArrowForwardIcon />
                                </Typography>
                            </Link>
                        </Box>

                    </Container>
                </FadeSection>
                {/*cloud */}
                <FadeSection id='Cloud'>

                    <Box mt={3} sx={{
                        background: 'linear-gradient(to bottom, #1976d2, rgba(149, 10, 138, 0.56))',
                        backdropFilter: 'blur(6px)',
                        WebkitBackdropFilter: 'blur(6px)',
                    }} p={5} textAlign={"center"}>
                        <Container> <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography fontWeight={"bold"} mb={4} variant='h4'>
                                Cloud
                            </Typography>
                            <Grid container mb={4} spacing={2}>
                                {cloudItems.map((text, index) => (
                                    <Grid item xs={12} sm={6} md={2.4} key={index}>
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                p: 2.5,
                                                height: 130, // Giảm chiều cao lại
                                                backgroundColor: '#f5f9ff',
                                                border: '1px solid #2196f3',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                whiteSpace: 'pre-line',
                                                borderRadius: '8px',
                                                boxShadow: '0 4px 20px rgba(33, 150, 243, 0.15)', // Đổ bóng xanh dịu
                                                transition: 'transform 0.2s ease-in-out',
                                                '&:hover': {
                                                    transform: 'scale(1.02)', // Hover đẹp hơn
                                                    boxShadow: '0 6px 25px rgba(33, 150, 243, 0.25)',
                                                },
                                            }}
                                        >
                                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                                {text}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                            <img width={"100%"} src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240530090956.184.webp" alt="" />
                            <Link href="/technologies/cloud">
                                <Typography
                                    variant="body2"
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        mt: 4,
                                        fontWeight: 600,
                                        color: 'white',
                                        transition: 'color 0.3s ease',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            left: 0,
                                            bottom: -2,
                                            height: '2px',
                                            backgroundColor: 'blue',
                                            width: 0,
                                            transition: 'width 0.5s ease',
                                        },
                                        '&:hover': {
                                            color: 'blue',
                                            '&::after': {
                                                width: '100%',
                                            },
                                            '& svg': {
                                                color: 'blue',
                                                transition: 'color 0.3s ease',
                                            },
                                        },
                                        '& svg': {
                                            ml: 1,
                                            transition: 'color 0.3s ease',
                                        },
                                    }}
                                >
                                    Explore More
                                    <ArrowForwardIcon />
                                </Typography>
                            </Link>
                        </Container>
                    </Box>

                </FadeSection>
                {/*DevOps */}
                <FadeSection id='DevOps'>
                    <Container>
                        <Box mt={3} bgcolor={"white"} p={5} textAlign={"center"}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography fontWeight={"bold"} mb={4} variant='h4'>
                                DevOps
                            </Typography>
                            <Grid container spacing={4}>
                                {dataDev.map((item, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Box
                                            sx={{
                                                width: '100%',
                                                bgcolor: '#f5faff',
                                                boxShadow: 1,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    bgcolor: '#1ea7fd',
                                                    color: '#fff',
                                                    px: 2,
                                                    py: 1.5,

                                                    position: 'relative',
                                                }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    align="center"
                                                    sx={{ fontWeight: 600, fontSize: { xs: '1rem', sm: '1.1rem' } }}
                                                >
                                                    {item.title}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ p: 2, position: 'relative' }}>
                                                <img width="100%" src={item.img} alt={item.title} />
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                            <Link href="/technologies/devops">
                                <Typography
                                    variant="body2"
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        mt: 4,
                                        fontWeight: 600,
                                        color: 'inherit',
                                        transition: 'color 0.3s ease',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            left: 0,
                                            bottom: -2,
                                            height: '2px',
                                            backgroundColor: 'blue',
                                            width: 0,
                                            transition: 'width 0.5s ease',
                                        },
                                        '&:hover': {
                                            color: 'blue',
                                            '&::after': {
                                                width: '100%',
                                            },
                                            '& svg': {
                                                color: 'blue',
                                                transition: 'color 0.3s ease',
                                            },
                                        },
                                        '& svg': {
                                            ml: 1,
                                            transition: 'color 0.3s ease',
                                        },
                                    }}
                                >
                                    Explore More
                                    <ArrowForwardIcon />
                                </Typography>
                            </Link>
                        </Box>
                    </Container>
                </FadeSection>
                {/* java*/}
                <FadeSection id='Java'>

                    <Box mt={3} sx={{
                        background: 'linear-gradient(to bottom, #1976d2, rgba(10, 75, 149, 0.56))',
                    }} p={5} >
                        <Container> <Box textAlign={"center"}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography fontWeight={"bold"} mb={4} variant='h4'>
                                Java
                            </Typography>
                        </Box>
                            <Box
                                sx={{
                                    backgroundColor: '#f5faff',
                                    p: 3,
                                    boxShadow: 1,
                                    mx: 'auto',
                                }}
                            >
                                <Grid container spacing={4}>
                                    {/* Cột trái */}
                                    <Grid item xs={12} md={6}>
                                        {leftData.map((section, idx) => (
                                            <Box key={idx} mb={3}>
                                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                                    {section.title}
                                                </Typography>
                                                <Stack spacing={1}>
                                                    {section.items.map((item, i) => (
                                                        <Box key={i} display="flex" alignItems="flex-start">
                                                            <FiberManualRecordIcon sx={{ fontSize: 8, color: '#1ea7fd', mt: '6px', mr: 1 }} />
                                                            <Typography variant="body2">{item}</Typography>
                                                        </Box>
                                                    ))}
                                                </Stack>
                                            </Box>
                                        ))}
                                    </Grid>

                                    {/* Cột phải */}
                                    <Grid item xs={12} md={6}>
                                        {rightData.map((section, idx) => (
                                            <Box key={idx} mb={3}>
                                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                                    {section.title}
                                                </Typography>
                                                <Stack spacing={1}>
                                                    {section.items.map((item, i) => (
                                                        <Box key={i} display="flex" alignItems="flex-start">
                                                            <FiberManualRecordIcon sx={{ fontSize: 8, color: '#1ea7fd', mt: '6px', mr: 1 }} />
                                                            <Typography variant="body2">{item}</Typography>
                                                        </Box>
                                                    ))}
                                                </Stack>
                                            </Box>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Box>
                        </Container>
                    </Box>

                </FadeSection>
                {/* micosoft*/}
                <FadeSection id='Microsoft'>
                    <Container>
                        <Box mt={3} bgcolor={"white"} p={5} >
                            <Box textAlign={"center"}>
                                <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                                <Typography fontWeight={"bold"} variant='h4'>
                                    Microsoft Technologies
                                </Typography>
                            </Box>
                            <Container sx={{ p: 5 }}>
                                {Microsoft.map((item, index) => (
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
                                                {item.technologies.map((tech, i) => (
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
                                <Box textAlign={"center"}>


                                </Box>
                            </Container>
                        </Box>
                    </Container>
                </FadeSection>
                {/* web development*/}
                <FadeSection id='Web Development'>

                    <Box mt={3} sx={{ background: 'linear-gradient(to bottom, #1976d2, rgba(10, 75, 149, 0.56))', }} p={5} ><Container>
                        <Box textAlign={"center"}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography fontWeight={"bold"} mb={4} variant='h4'>
                                Web Development
                            </Typography>
                        </Box>
                        <Box sx={{ px: { xs: 1, sm: 2, md: 3 }, py: 2 }}>
                            <Grid container spacing={2}>
                                {dataWeb.map((section, index) => (
                                    <Grid item xs={12} sm={6} md={4} mb={3} key={index}>
                                        <Box
                                            sx={{
                                                bgcolor: '#f0f8ff',
                                                border: '1px solid #cce5ff',
                                                borderRadius: 2,
                                                p: 2,
                                                height: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'flex-start',
                                            }}
                                        >
                                            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                                                {section.title}
                                            </Typography>
                                            <Stack spacing={1}>
                                                {section.items.map((item, i) => (
                                                    <Box key={i} display="flex" alignItems="flex-start">
                                                        <FiberManualRecordIcon
                                                            sx={{ fontSize: 8, color: '#1ea7fd', mt: '6px', mr: 1 }}
                                                        />
                                                        <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                                                            {item}
                                                        </Typography>
                                                    </Box>
                                                ))}
                                            </Stack>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                        <Box textAlign={"center"}>

                        </Box>
                    </Container>
                    </Box>

                </FadeSection>
                {/*mobile*/}
                <FadeSection id='Mobile'>
                    <Box mt={3} sx={{ minHeight: '450px', scrollMarginTop: '130px' }} bgcolor={"white"} p={7} >
                        <Box textAlign={"center"}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography fontWeight={"bold"} mb={4} variant='h4'>
                                Mobile
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                overflow: 'hidden',
                                backgroundColor: '#f5faff',
                                p: { xs: 2, sm: 3 },
                                borderRadius: 2,
                                position: 'relative',
                                width: '100%',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    width: 'max-content',
                                    animation: 'scroll 20s linear infinite',
                                    '@keyframes scroll': {
                                        '0%': { transform: 'translateX(0)' },
                                        '100%': { transform: 'translateX(-50%)' },
                                    },
                                }}
                            >
                                {/* Lặp lại 2 lần để cuộn liên tục */}
                                {[...dataMobile, ...dataMobile].map((item, i) => (
                                    <Box
                                        key={i}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            border: '1px solid #cce5ff',
                                            backgroundColor: '#e8f4fc',
                                            borderRadius: 2,
                                            padding: 2,
                                            minWidth: 220,
                                            marginRight: 2,
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={item.img}
                                            alt={item.title}
                                            sx={{ width: 40, height: 40, objectFit: 'contain', mr: 2 }}
                                        />
                                        <Typography
                                            variant="body2"
                                            sx={{ fontWeight: 500, wordBreak: 'break-word' }}
                                        >
                                            {item.title}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>

                    </Box>

                </FadeSection>
                {/*low code */}
                <FadeSection id='Low code'>

                    <Box mt={3} sx={{
                        background: 'linear-gradient(to bottom, #1976d2, rgba(149, 10, 138, 0.56))',
                        backdropFilter: 'blur(6px)',
                        WebkitBackdropFilter: 'blur(6px)',
                    }} p={5} >
                        <Container> <Box textAlign={"center"}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography fontWeight={"bold"} mb={4} variant='h4'>
                                Low Code
                            </Typography>
                        </Box>
                            <Box
                                sx={{
                                    border: '1px solid #ccc',
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    maxWidth: '100%',
                                    bgcolor: '#f9f9f9',
                                }}
                            >
                                {/* Header */}
                                <Box sx={{ backgroundColor: '#007BFF', color: 'white', p: 2 }}>
                                    <Typography variant="h5" fontWeight={700} align="center">
                                        Platforms
                                    </Typography>
                                </Box>

                                {!isMobile ? (
                                    // ==================== DESKTOP LAYOUT ====================
                                    <>
                                        {/* Column Titles */}
                                        <Grid container>
                                            {Object.keys(dataLowCode).map((key, index) => (
                                                <Grid
                                                    item
                                                    xs={12}
                                                    sm={4}
                                                    key={index}
                                                    sx={{
                                                        backgroundColor: '#E3F2FD',
                                                        p: 2,
                                                        borderBottom: '1px solid #ccc',
                                                        textAlign: 'center',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    {key}
                                                </Grid>
                                            ))}
                                        </Grid>

                                        {/* Content */}
                                        <Grid container>
                                            {Object.entries(dataLowCode).map(([title, items], index) => (
                                                <Grid item xs={12} sm={4} key={index} sx={{ p: 2 }}>
                                                    <List dense disablePadding>
                                                        {items.map((item, idx) => (
                                                            <ListItem key={idx} sx={{ py: 0.5, alignItems: 'center' }}>
                                                                <ListItemIcon sx={{ minWidth: 24 }}>
                                                                    <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                                                                </ListItemIcon>
                                                                <ListItemText
                                                                    primary={<Typography variant="body2">{item}</Typography>}
                                                                />
                                                            </ListItem>
                                                        ))}
                                                    </List>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </>
                                ) : (
                                    // ==================== MOBILE LAYOUT ====================
                                    <Box sx={{ p: 2 }}>
                                        <Stack spacing={3}>
                                            {Object.entries(dataLowCode).map(([title, items], index) => (
                                                <Box key={index} sx={{ display: 'flex' }}>
                                                    <Typography
                                                        sx={{
                                                            fontWeight: 600,
                                                            minWidth: 120,
                                                            mr: 2,
                                                            color: '#000',
                                                        }}
                                                    >
                                                        {title}
                                                    </Typography>
                                                    <Box>
                                                        {items.map((item, idx) => (
                                                            <Box
                                                                key={idx}
                                                                sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
                                                            >
                                                                <FiberManualRecordIcon
                                                                    sx={{ fontSize: 6, color: '#007BFF', mr: 1 }}
                                                                />
                                                                <Typography variant="body2">{item}</Typography>
                                                            </Box>
                                                        ))}
                                                    </Box>
                                                </Box>
                                            ))}
                                        </Stack>
                                    </Box>
                                )}
                            </Box>
                            <Box textAlign={"center"}>
                                <Link href="/technologies/low-code">
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            position: 'relative',
                                            cursor: 'pointer',

                                            mt: 4,
                                            fontWeight: 600,
                                            color: 'white',
                                            transition: 'color 0.3s ease',
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                left: 0,
                                                bottom: -2,
                                                height: '2px',
                                                backgroundColor: 'blue',
                                                width: 0,
                                                transition: 'width 0.5s ease',
                                            },
                                            '&:hover': {
                                                color: 'blue',
                                                '&::after': {
                                                    width: '100%',
                                                },
                                                '& svg': {
                                                    color: 'blue',
                                                    transition: 'color 0.3s ease',
                                                },
                                            },
                                            '& svg': {
                                                ml: 1,
                                                transition: 'color 0.3s ease',
                                            },
                                        }}
                                    >
                                        Explore More
                                        <ArrowForwardIcon />
                                    </Typography>
                                </Link>
                            </Box>
                        </Container>  </Box>

                </FadeSection>
                {/*hard were */}
                <FadeSection id='Hardware'>
                    <Container>
                        <Box mt={3} bgcolor={"white"} p={5} textAlign={"center"}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography fontWeight={"bold"} mb={4} variant='h4'>
                                Hardware Integration
                            </Typography>
                            <Box sx={{ px: 4, mb: 4 }}>
                                <Grid container spacing={4}>
                                    {HardwareData.map((section, index) => (
                                        <Grid item xs={12} sm={6} md={3} key={index}>
                                            <MachineLearningCard section={section} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                            <Link href="/technologies/hardware-integration">
                                <Typography
                                    variant="body2"
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        mt: 1,
                                        fontWeight: 600,
                                        color: 'inherit',
                                        transition: 'color 0.3s ease',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            left: 0,
                                            bottom: -2,
                                            height: '2px',
                                            backgroundColor: 'blue',
                                            width: 0,
                                            transition: 'width 0.5s ease',
                                        },
                                        '&:hover': {
                                            color: 'blue',
                                            '&::after': {
                                                width: '100%',
                                            },
                                            '& svg': {
                                                color: 'blue',
                                                transition: 'color 0.3s ease',
                                            },
                                        },
                                        '& svg': {
                                            ml: 1,
                                            transition: 'color 0.3s ease',
                                        },
                                    }}
                                >
                                    Explore More
                                    <ArrowForwardIcon />
                                </Typography>
                            </Link>

                        </Box>

                    </Container>
                </FadeSection>
                {/*dowload code */}
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
                                        Technologies IT Outsourcing
                                    </Link>
                                </Box>
                            </Container>
                        </Box>
                    </Container>
                </FadeSection>
            </Box>
            <ScrollToTopButton />
            <div id="bottom-anchor" style={{ height: 1 }} />
            <Footer />
        </>
    )
}

export default TechnologiesPage

