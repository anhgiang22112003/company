import React, { useState } from 'react'
import { Box, Grid, Typography, Avatar, Container, CssBaseline, Stack, Link, Paper, List, ListItemButton, ListItemIcon, ListItemText, Divider, ListItem, Fade, Card, CardContent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Chip, CardMedia } from '@mui/material'
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
            'Product sorting/classification',
            'Packaging /barcode/label extraction',
            'Management/inventory data extraction',
            'Machine optimization',
            'Predictive maintenance',
            'Personal protective equipment (PPE) detection',
            'Smart locker',
            'Emergency notification monitoring',
            'Safety & security camera solutions',
            'Worker/beauty/chemics access control',
        ],
    },
    {
        title: 'AI Solutions for Healthcare',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/icon_healthcare.webp',
        items: [
            'Medical documents extraction',
            'Sleep quality data analytics',
            'Sleep syndromes detection',
            'AI-based interaction using ECG',
            'Customer service chatbot',
            'Smart call center assistant',
            'Patient fall detection',
            'Patient taking medication activities detection',
            'Tooth recognition & scoring',
        ],
    },
    {
        title: 'AI Solutions for Telecom/Networking',
        icon: 'https://www.tmasolutions.com/uploadfiles/PageSection/section_content_image_20250425094201.217.webp',
        items: [
            'Anomaly detection for cybersecurity threats',
            'DDos attacks & service degradation in real time',
            'Incident response',
            'Automation and virtual assistants',
            'AI-based recommendation tools for telecom services',
            'Sentiment analysis',
            'Self healing network for issue resolution',
            'Automated root cause analysis and graph of network operation',
            'Workflow forecast',
            'Traffic flow prediction in network diagnostics',
        ],
    },
    {
        title: 'AI Solutions for Automotive',
        icon: 'https://www.tmasolutions.com/uploadfiles/PageSection/section_content_image_20250425094212.170.webp',
        items: [
            'Blind spot detection',
            'Moving object detection',
            'Speed /distance measurement',
            'Driver monitoring',
            'Passenger detection',
            'Lane detection',
            'Vehicle detection',
            'Pedestrian detection',
            'License plate segmentation',
            'Automatic parking/driving',
            'Parking space detection',
            'AI dashcam',
            'ETA (Estimate Time of Arrival) with traffic prediction',
            'POI (Point of Interest) recommendation',
            'Road damage detection',
            'Traffic light recognition',
            'Traffic light color detection',
            'Rear-parking detection',
            'Violation detection',
            'License plates recognition',
            'Audio enhancement for music/person/siren',
            'Voice command & voice assistant',
            'Driver interaction with infotainment controller',
        ],
    },
    {
        title: 'AI Solutions for Security & Safety',
        icon: 'https://www.tmasolutions.com/uploadfiles/PageSection/section_content_image_20250425094220.287.webp',
        items: [
            'Access control',
            'Noise detection',
            'License plate recognition',
            'Parking lot detection',
            'Weapon/explosive/wrongdoer detection',
            'Children/Path detection',
            'Intrusion detection',
            'Smart locker',
            'Emergency notification monitoring',
            'Phishing email detection',
            'Pedestrian control detection',
            'Website spoofing prevention',
        ],
    },
    {
        title: 'AI Solutions for Ecommerce & Retails',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/icon_franchise.webp',
        items: [
            'Smart locker',
            'Multi-camera tracking',
            'NFC & barcode detection',
            'POS monitoring',
            'Age & gender detection',
            'People heatmap',
            'Customer behavior & retail monitoring',
            'Smart call center assistant',
            'Warehouse access control',
            'AI packaging assistant',
            'Inventory level',
            'Visual & voice search',
            'Virtual try on',
            'Product recommendation',
            'Chatbots and virtual assistants',
        ],
    },
    {
        title: 'AI Solutions for Logistics',
        icon: 'https://www.tmasolutions.com/uploadfiles/PageSection/section_content_image_20250425094233.227.webp',
        items: [
            'Automatic container loading',
            'AI packaging',
            'Pallet/package defect detection',
            'Product counting',
            'Parking lot detection',
            'Driver safety solutions',
        ],
    },
    {
        title: 'AI Solutions for Finance, Banking & Insurance',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/icon_bank.webp',
        items: [
            'Automated financial report',
            'Credit scoring & KYC assessment',
            'Finance report/ information detection',
            'Data extraction',
            'Insurance claim payment process',
            'Vault access control',
            'Call center assistant',
            'Identify and verify driver’s license parser',
            'Bank KIs & statement OCR',
        ],
    },
    {
        title: 'AI Solutions for Agriculture',
        icon: 'https://www.tmasolutions.com/uploadfiles/PageSection/section_content_image_20250425094808.202.webp',
        items: [
            'Pest detection',
            'Geolocation satellite detection',
            'Drone security control',
            'Tree disease detection',
            'Environment monitoring',
            'Soil data analytics',
        ],
    },
    {
        title: 'AI Solutions for Education & Recruitment',
        icon: 'https://www.tmasolutions.com/uploadfiles/PageSection/section_content_image_20250425094324.502.webp',
        items: [
            'Course builder',
            'Course finder assistant',
            'Student behavior tracking',
            'CRM/chatbot',
            'Job recommendation',
            'Auto grading assessment',
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
            'Supervised ML: Linear Regression, SVM, Decision Tree, Gradient Boosted, LDA, UMAP',
            'Unsupervised ML: PCA, t-SNE, UMAP, KNN, K-means clustering, Hierarchical clustering',
            'Reinforcement Learning: Markov decision process, Q-learning and Deep Q-Networks',
            'Predictive Analysis: ARIMA, SARIMA, Prophet, LSTMs, Transformer-based forecasting',
            'Recommendation System: Collaborative Filtering, Content-based, Hybrid, Graph-based',
        ],
    },
    {
        title: 'Computer Vision (CV)',
        items: [
            'Object Detection: YOLO v3, Faster R-CNN, SSD, DETR, SORT, DeepSort, ByteTrack',
            'Pose Estimation: OpenPose, MediaPipe, DeepPose',
            'Facial Recognition: FaceNet, ArcFace, Dlib',
            'Optical Character Recognition (OCR): Tesseract, EasyOCR, PaddleOCR',
            'Video Streaming & Analytics: NVIDIA DeepStream SDK, Gstreamer + OpenCV, FFmpeg, WebRTC',
            'Audio & Signal Processing: Mel-Spectrograms, Sound waves processing: Fourier Transform, Dynamic Time Warping, Hubert',
        ],
    },
    {
        title: 'Edge AI',
        items: [
            'Edge AI Devices: Raspberry Pi, Jetson Nano, Intel NCS, MCU',
            'Edge AI Frameworks: TensorRT, OpenVINO, ONNX, TensorFlow Lite, PyTorch Mobile, CoreML, ML Kit',
            'NVIDIA Frameworks: Metropolis, DeepStream SDK, TAO Toolkit',
            'Qualcomm Frameworks: Neural Processing SDK',
        ],
    },
    {
        title: 'Generative AI | LLMs | NLP',
        items: [
            'Chatbot: LLMs: Rasa, Botpress, TensorFlow, PyTorch, Dialogflow, MS Bot Framework, Transformers, Gemini, GPT, llama, Tulu, DeepSeek, open',
            'AI Agent, Agentic AI, RAG-based LLMs: Langchain (LangGraph), LlamaIndex (llamafile Workflow), LangFuse, CrewAI, Prompt flow, Voiceflow',
            'NLP: SpaCy, NLTK, TextBlob, ReGex',
        ],
    },
    {
        title: 'Speech & Voice Recognition',
        items: [
            'Acoustic & Language Modeling: DNNs; CNNs; Transformers',
            'Feature Extraction: MFCCs, PLP, Spectrograms',
            'Frameworks: Google Speech-to-Text, Amazon Transcribe, IBM Watson Speech to Text, Microsoft Azure Speech, Deepgram, SpeechRecognition, DeepSpeech, Kaldi, Pytsx3, PyAudio',
        ],
    },
    {
        title: 'Cloud AI & Services',
        items: [
            'LLM: Azure OpenAI Studio, OpenAI API, Bedrock (AWS), Vertex AI (Google Cloud)',
            'AI & AI Avatar: Azure Avatar, Synthesia, Elai, Heygen, P-I-D',
            'Machine Learning: AWS SageMaker, Azure ML Studio',
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
                                    <img width={"100%"} src="https://tmastorage.azureedge.net/uploadfiles/Banner/banner_20250226035353.985.webp" alt="" />
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

                            <Typography color="text.primary">AI/ML & Data Sciences</Typography>
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
                            <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                                {services.map((service, index) => (
                                    <Grid item key={index} xs={12} sm={6} md={6}>
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                p: 3,
                                                borderRadius: 3,
                                                boxShadow: 3,
                                                height: '100%',
                                                overflow: 'hidden',
                                                backgroundColor: '#f5f5f5',
                                                '&:hover .overlay': {
                                                    transform: 'translateY(100%)',
                                                },
                                                '&:hover .content': {
                                                    opacity: 2,
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
                                                }}
                                            >
                                                <img src={service.icon} width={"10%"} alt="" />
                                                <Typography textAlign={"center"} variant="h6" fontWeight="bold">
                                                    {service.title}
                                                </Typography>
                                            </Box>

                                            {/* Nội dung thực */}
                                            <Box display="flex" mb={5} flexDirection="column" gap={1}>
                                                <Box key={index} display="flex" alignItems="flex-start" gap={1}>
                                                    <FiberManualRecordIcon sx={{ fontSize: 10, color: "#1E40AF", mt: "6px" }} />
                                                    <Typography sx={{ fontSize: 16, color: "#333", lineHeight: 1.6 }}>
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
                <Container>
                    <Box sx={{ py: 8, px: 2, backgroundColor: '#f5f8ff' }}>
                        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
                            Technologies
                        </Typography>
                        <Typography align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
                            With 10 years of experience, our team is familiar with a wide range of AI technologies and
                            platforms, including Generative AI, Agentic AI, Smart Camera, Edge AI, Large Language Model
                            (LLM), Computer Vision, Optical Character Recognition (OCR) technologies, etc.
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
                    </Box></Container>
            </FadeSection>
            <FadeSection>
                <Box sx={{ py: 6, px: 2 }}>
                    <Box textAlign="center" mb={4}>
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
                        <Box sx={{ px: 2, py: 8, backgroundColor: '#f0f4fb' }}>
                            <Typography textAlign={"center"} variant="h4" fontWeight="bold" mb={4}>
                                Industries
                            </Typography>

                            <Grid container spacing={3}>
                                {solutions.map((solution, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Paper
                                            elevation={3}
                                            sx={{
                                                p: 2,
                                                border: '1px solid #d0e0f0',
                                                height: '100%',
                                                borderRadius: 2,
                                            }}
                                        >
                                            <Box display="flex" alignItems="center" mb={1}>
                                                <img src={solution.icon} alt="icon" width={"10%"} style={{ marginRight: 8 }} />
                                                <Typography variant="h6" fontWeight="bold">
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
                                    </Grid>
                                ))}
                            </Grid>
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
                                    AI Brochure
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
