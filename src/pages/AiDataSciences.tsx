import React, { useState } from 'react'
import { Box, Grid, Typography, Avatar, Container, CssBaseline, Stack, Link, Paper, List, ListItemButton, ListItemIcon, ListItemText, Divider, ListItem, Fade, Card, CardContent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Chip, CardMedia, useMediaQuery, useTheme, IconButton } from '@mui/material'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import InsightsIcon from '@mui/icons-material/Insights'
import StorageIcon from '@mui/icons-material/Storage'
import DatasetIcon from '@mui/icons-material/Dataset'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import SlideInOnScroll from '../components/SlideInOnScroll'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'


const telecomIcons = [
    {
        src: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240621111740.152.webp',
        title: '10 Years of experience',
    },
    {
        src: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240621112206.619.webp',
        title: '600 Engineers',
    },
    {
        src: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240621151641.245.webp',
        title: 'Clients from 20+ Countries',
    },
    {
        src: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20250106090302.897.webp',
        title: '120+ AI certificates',
    },
]

const solutions = [
    {
        title: 'AI Solutions for Manufacturing',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/icon_plant.webp',
        items: [
            'Defect detection',
            'Predictive maintenance',
            'Machine optimization',
        ],
    },
    {
        title: 'AI Solutions for Healthcare',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/icon_healthcare.webp',
        items: [
            'Medical documents extraction',
            'Smart call center assistant',
            'Patient fall detection',
        ],
    },
    {
        title: 'AI Solutions for Telecom/Networking',
        icon: 'https://www.tmasolutions.com/uploadfiles/PageSection/section_content_image_20250425094201.217.webp',
        items: [
            'Anomaly detection for cybersecurity threats',
            'DDoS detection',
            'AI-based recommendation tools',
        ],
    },
    {
        title: 'AI Solutions for Automotive',
        icon: 'https://www.tmasolutions.com/uploadfiles/PageSection/section_content_image_20250425094212.170.webp',
        items: [
            'Driver monitoring',
            'License plates recognition',
            'Voice command & assistant',
        ],
    },
    {
        title: 'AI Solutions for Ecommerce & Retail',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/icon_franchise.webp',
        items: [
            'Customer behavior monitoring',
            'Product recommendation',
            'Chatbots and virtual assistants',
        ],
    },
    {
        title: 'AI Solutions for Finance & Banking',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/icon_bank.webp',
        items: [
            'Credit scoring & KYC assessment',
            'Insurance claim processing',
            'OCR for bank documents',
        ],
    },
]



const services = [
    {
        title: 'Develop AI Features / Products',
        description: "Applying AI technologies within applications, tools, or platforms to elevate functionality, enrich user experience, and address particular challenges.",

        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240510143815.005.webp', // Thay bằng link icon tương ứng
    },
    {
        title: 'Setup AI Development Center',
        description: "We assist in setting up an AI Development Center to create a dedicated environment focused on the design, development, and deployment of artificial intelligence (AI) technologies.",

        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/feature_hover.webp', // Thay bằng link icon tương ứng
    },
    {
        title: 'Provide AI Solutions',
        description: "We build and develop AI solutions that address challenges of enterprises across industries, ensuring rapid implementation and integration for quick market adaptation.",

        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/enterprise_hover.webp', // Thay bằng link icon tương ứng
    },
    {
        title: 'AI as a Service (AaaS)',
        description: "We provide AI as a Service (AIaaS), offering businesses access to advanced artificial intelligence technologies without the need for extensive infrastructure or expertise.",

        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/artificial_hover.webp', // Thay bằng link icon tương ứng
    },
]
const technologies = [
    {
        title: 'Machine Learning (ML)',
        items: [
            'Supervised ML: Linear Regression, Decision Tree, Gradient Boosted (XGBoost, LightGBM)',
            'Unsupervised ML: PCA, K-means clustering, t-SNE',
            'Predictive Analysis: ARIMA, Prophet, LSTMs',
            'Recommendation System: Collaborative Filtering, Hybrid Filtering',
        ],
    },
    {
        title: 'Computer Vision (CV)',
        items: [
            'Object Detection: YOLOv5/v8, Faster R-CNN, SSD',
            'Facial Recognition: FaceNet, ArcFace',
            'OCR: Tesseract, PaddleOCR',
            'Video Analytics: DeepStream SDK, OpenCV + GStreamer',
        ],
    },
    {
        title: 'Edge AI',
        items: [
            'Devices: Jetson Nano, Raspberry Pi',
            'Frameworks: TensorRT, OpenVINO, TensorFlow Lite, CoreML',
        ],
    },
    {
        title: 'Generative AI | LLMs | NLP',
        items: [
            'LLMs & Chatbot: OpenAI GPT, Gemini, LLaMA, Rasa, Langchain, LlamaIndex',
            'Agentic AI: LangGraph, CrewAI, Prompt Flow',
            'NLP: SpaCy, Transformers, ReGex',
        ],
    },
    {
        title: 'Speech & Voice Recognition',
        items: [
            'Frameworks: Google Speech-to-Text, Amazon Transcribe, Deepgram, DeepSpeech',
            'Feature Extraction: MFCCs, Spectrograms',
        ],
    },
    {
        title: 'Cloud AI & Services',
        items: [
            'LLM Hosting: OpenAI API, Azure OpenAI Studio, Vertex AI, Bedrock',
            'ML Services: AWS SageMaker, Azure ML Studio',
            'AI Avatar Tools: Synthesia, Heygen',
        ],
    },
]

const caseStudies = [
    {
        image: 'https://tmastorage.azureedge.net/uploadfiles/CaseStudies/Thumbnails/casestudy_thumbnail_20240611041847.860.webp',
        title: 'Boost productivity with AI-powered Smart Call Center Assistant',
        tags: ['Telecom', 'E-Commerce & Retail'],
        description: 'An application running on agent’s PC to capture real-time audio and provide suggestions for customers’ queries using GenAI',
        link: 'https://example.com/case-study-6',

    },
    {
        image: 'https://tmastorage.azureedge.net/uploadfiles/CaseStudies/Thumbnails/casestudy_thumbnail_20240611042037.731.webp',
        title: 'Public safety monitoring with smart camera',
        tags: ['Data Science & AI/ML', 'Public Safety'],
        description: 'The solution integrates smart cameras equipped with edge AI to provide comprehensive real-time surveillance and alerts in public spaces.',
        link: 'https://example.com/case-study-6',

    },
    {
        image: 'https://tmastorage.azureedge.net/uploadfiles/CaseStudies/Thumbnails/casestudy_thumbnail_20240611042651.146.webp',
        title: 'Apply OCR in Healthcare solutions to automate data collection',
        tags: ['Healthcare', 'Data Science & AI/ML'],
        description: 'Extract health indexes such as blood pressure, blood glucose, body temperature from 30 medical devices, prescriptions, and in-body physical.',
        link: 'https://example.com/case-study-6',

    },
    {
        image: 'https://tmastorage.azureedge.net/uploadfiles/CaseStudies/Thumbnails/casestudy_thumbnail_20240611044638.466.webp',
        title: 'AI sound-based fault detection system in manufacturing',
        tags: ['Manufacturing', 'Data Science & AI/ML', 'IoT'],
        description: 'Utilize AI-based sound analysis to enhance real-time fault detection during value manufacturing, improving product quality.',
        link: 'https://example.com/case-study-6',

    },
    {
        image: 'https://tmastorage.azureedge.net/uploadfiles/CaseStudies/Thumbnails/casestudy_thumbnail_20240611044337.448.webp',
        title: 'Enhance Credit Risk Analysis with AI/ML Technologies',
        tags: ['Finance', 'Data Science & AI/ML'],
        description: 'Provide credit scoring algorithm leveraging AI/ML models to enhance risk assessment from many data sources, reducing efforts.',
        link: 'https://example.com/case-study-6',

    },
    {
        image: 'https://tmastorage.azureedge.net/uploadfiles/CaseStudies/Thumbnails/casestudy_thumbnail_20240611045307.545.webp',
        title: 'Pest Detection Solution Crop Protection With AI Technology',
        tags: ['Agriculture', 'Data Science & AI/ML', 'IoT'],
        description: 'Leverage AI to detect and identify pests and diseases in the field, supporting managing and monitoring.',
        link: 'https://example.com/case-study-6',

    },
]
const AiDataSciencesPage = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

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
                    <Container>
                        <Grid container spacing={6} alignItems="center" justifyContent="center">
                            {/* Left: Text and Icons */}
                            <Grid item xs={12} md={6}>
                                <SlideInOnScroll>
                                    <Typography variant="h4" fontWeight="bold" mb={2}>
                                        AI/ML & Data Sciences
                                    </Typography>
                                    <Typography variant="body1" mb={4}>
                                        We offer AI/ML & Data Sciences development services and solutions to businesses, empowering them to innovate, automate processes, and gain competitive edges.
                                    </Typography>

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
                                        <img width={"100%"} src="https://tmastorage.azureedge.net/uploadfiles/Banner/banner_20250226035353.985.webp" alt="" />
                                    </Box></SlideInOnScroll>
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

                            <Typography color="text.primary">AI/ML & Data Sciences</Typography>
                        </Stack>

                    </Box>
                </Container>
            </FadeSection>
            <FadeSection id='about' >
                <Box p={2}
                >
                    <Box >
                        <Container sx={{ textAlign: "center" }}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                Services
                            </Typography>
                        </Container>
                    </Box>
                    <Box >
                        <Container>
                            <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                                {services.map((service, index) => (
                                    <Grid item key={index} xs={12} sm={6} md={6}>
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                p: isMobile ? 1 : 3,
                                                borderRadius: 3,
                                                boxShadow: 3,
                                                height: '100%',
                                                overflow: 'hidden',
                                                backgroundColor: '#f5f5f5',
                                                '&:hover .overlay': {
                                                    transform: 'translateY(100%)',
                                                },
                                                '&:hover .content': {
                                                    opacity: 1,
                                                },
                                            }}
                                        >
                                            {/* Overlay nền xanh */}
                                            <Box
                                                className="overlay"
                                                sx={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    bgcolor: 'primary.main',
                                                    color: 'white',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    transition: 'transform 0.5s ease',
                                                    zIndex: 2,
                                                    transform: isMobile ? 'none' : 'translateY(0)',
                                                }}
                                            >
                                                <img
                                                    src={service.icon}
                                                    alt=""
                                                    style={{
                                                        width: isMobile ? '18%' : '10%',
                                                        marginBottom: 8,
                                                    }}
                                                />
                                                <Typography
                                                    textAlign="center"
                                                    variant="h6"
                                                    fontWeight="bold"
                                                    fontSize={isMobile ? '1rem' : '1.125rem'}
                                                >
                                                    {service.title}
                                                </Typography>
                                            </Box>

                                            {/* Nội dung thực */}
                                            <Box display="flex" mb={5} flexDirection="column" gap={1}>
                                                <Box display="flex" alignItems="flex-start" gap={1}>
                                                    <FiberManualRecordIcon
                                                        sx={{
                                                            fontSize: 10,
                                                            color: '#1E40AF',
                                                            mt: '6px',
                                                        }}
                                                    />
                                                    <Typography
                                                        sx={{
                                                            fontSize: isMobile ? 14 : 16,
                                                            color: '#333',
                                                            lineHeight: 1.6,
                                                        }}
                                                    >
                                                        {service.description}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>

                        </Container>
                    </Box>
                </Box>
            </FadeSection>
            <FadeSection>

                <Box sx={{
                    py: 8, px: 2, background: 'linear-gradient(to bottom, #1976d2, rgba(10, 75, 149, 0.56))',
                }}>
                    <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
                        Technologies
                    </Typography>


                    <Grid container spacing={3}>
                        {technologies.map((tech, index) => (
                            <Grid item xs={12} md={6} lg={4} key={index}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 2,
                                        height: '100%',
                                        border: '1px solid #e0e0e0',
                                        borderRadius: 2,
                                    }}
                                >
                                    <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
                                        {tech.title}
                                    </Typography>
                                    <List dense>
                                        {tech.items.map((item, idx) => (
                                            <ListItem key={idx} sx={{ pl: 0, alignItems: 'flex-start' }}>
                                                <ListItemText primary={`• ${item}`} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </FadeSection>
            <FadeSection>
                <Box >
                    <Box textAlign="center" >
                        <Box
                            sx={{
                                width: 32,
                                height: 32,
                                margin: '0 auto',
                                borderRadius: 1,
                                mb: 1,
                            }}
                        />

                    </Box>
                    <Container>
                        <Box sx={{ px: 2,p:2}}>
                            <Typography textAlign={"center"} variant="h4" fontWeight="bold" mb={4}>
                                Industries
                            </Typography>

                            <Box position="relative">
                                <Swiper
                                    modules={[Autoplay, Navigation,Pagination]}
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    pagination={{clickable:true}}
                                    breakpoints={{
                                        600: { slidesPerView: 1 },
                                        900: { slidesPerView: 2 },
                                        1200: { slidesPerView: 3 },
                                    }}
                                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                                 navigation={{
                                    prevEl: '.custom-swiper-prev',
                                    nextEl: '.custom-swiper-next',
                                }}
                                     style={{ paddingBottom: 28 }}
                                >
                                    {solutions.map((solution, index) => (
                                        <SwiperSlide key={index}>
                                            <Paper
                                                elevation={3}
                                                sx={{
                                                    p: 2,
                                                    border: '1px solid #d0e0f0',
                                                    height: '100%',
                                                    borderRadius: 2,
                                                    mb: 2,
                                                }}
                                            >
                                                <Box display="flex" alignItems="center" mb={1}>
                                                    <img
                                                        src={solution.icon}
                                                        alt="icon"
                                                        width="10%"
                                                        style={{ marginRight: 8 }}
                                                    />
                                                    <Typography fontSize={15} fontWeight="bold">
                                                        {solution.title}
                                                    </Typography>
                                                </Box>
                                                <List dense>
                                                    {solution.items.map((item, idx) => (
                                                        <ListItem key={idx} sx={{ pl: 0 }}>
                                                            <ListItemText primary={`• ${item}`} />
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </Paper>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* Prev Button */}
                               
                            <IconButton
                                className="custom-swiper-prev"
                                sx={{
                                    position: 'absolute',
                                    display:{xs:"none",md:"flex"},
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
                                                                        display:{xs:"none",md:"flex"},

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
                        </Box>
                    </Container>
                </Box>
            </FadeSection>
            <FadeSection>
                <Container>
                    <Box sx={{ px: 4, py: 6, backgroundColor: '#f7fafd' }}>
                        <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center">
                            Case Studies
                        </Typography>

                        <Grid container spacing={4}>
                            {caseStudies.map((item, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Link href={item.link} underline="none" target="_blank" rel="noopener noreferrer">
                                        <Card
                                            sx={{
                                                height: '100%',
                                                border: '1px solid #e0e0e0',
                                                boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
                                                transition: 'transform 0.2s, box-shadow 0.3s',
                                                '&:hover': {
                                                    boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
                                                    transform: 'translateY(-4px)',
                                                },
                                            }}
                                        >
                                            <Box sx={{ overflow: 'hidden' }}>
                                                <CardMedia
                                                    component="img"
                                                    height="160"
                                                    image={item.image}
                                                    alt={item.title}
                                                    sx={{
                                                        objectFit: 'cover',
                                                        transition: 'transform 0.4s ease',
                                                        '&:hover': {
                                                            transform: 'scale(1.05)',
                                                        },
                                                    }}
                                                />
                                            </Box>
                                            <CardContent>
                                                <Typography
                                                    variant="subtitle1"
                                                    fontWeight={600}
                                                    gutterBottom
                                                    sx={{
                                                        transition: 'color 0.3s',
                                                        '&:hover': { color: '#007bff' },
                                                    }}
                                                >
                                                    {item.title}
                                                </Typography>
                                                <Box mb={1} display="flex" flexWrap="wrap" gap={1}>
                                                    {item.tags.map((tag, i) => (
                                                        <Chip key={i} label={tag} size="small" sx={{ backgroundColor: '#f0f0f0' }} />
                                                    ))}
                                                </Box>
                                                <Typography variant="body2" color="text.secondary">
                                                    {item.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
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
                                    AiDataSciences IT Outsourcing
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

export default AiDataSciencesPage
