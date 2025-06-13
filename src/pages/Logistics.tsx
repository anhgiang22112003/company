import React, { useState } from 'react'
import { Box, Grid, Typography, Avatar, Container, CssBaseline, Stack, Link, Paper, List, ListItemButton, ListItemIcon, ListItemText, Divider, ListItem, Button } from '@mui/material'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord' // hình tròn nhỏ
import FileDownloadIcon from '@mui/icons-material/FileDownload'


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


// const menuItems = [
//     {
//         label: '5G',
//         icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_icon_20240801090712.997.webp',
//         image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240801090710.777.webp',
//     },
//     {
//         label: 'Cloud/NFV',
//         icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_icon_20240801090830.256.webp',
//         image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240801090829.010.webp',
//     },
//     {
//         label: 'Enterprise Solutions',
//         icon: 'https://www.tmasolutions.com/uploadfiles/PageSection/section_content_image_icon_20240801090947.496.webp',
//         image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240801090945.957.webp',
//     },
//     {
//         label: 'Clients',
//         icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_icon_20240801091012.382.webp',
//         image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240801091011.351.webp',
//     },
//     {
//         label: 'Networking',
//         icon: 'https://www.tmasolutions.com/uploadfiles/PageSection/section_content_image_icon_20240801091041.734.webp',
//         image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240801091040.792.webp',
//     },
// ]
const data = [
    {
        image: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626090001.963.webp",
        description:
            "Consult and develop management systems i.e HR, CRM, Warehouse, Delivery, etc. to ensure continuous operation.​",
    },

    {
       
        image: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626090023.039.webp",
        description:
            "Support import and export data connections from existing systems to increase operational flexibility.​​",
    },
    {
        
        image: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626090044.231.webp",
        description:
            "Apply Big Data & Analytics & AI technologies to solve problems, and increase visibility to achieve business efficiency.​​",
    },
    {
       
        image: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626090056.309.webp",
        description:
            "Customize and refine both commercial and open-source platforms to reduce development time, and speed up business expansion needs.​​",
    },
]

const menuItems = [
    {
        label: 'Wealth Management',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240624111018.420.webp',
        content: [
            {
                title: 'Retirement Plan',
                icon: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240625135319.800.webp",
                items: ['Powerful platform having ability to create flexible administration procedures and innovative product design',
                    'Optimized and flexible solutions to adapt diversified Client’s retirement plans​'],
            },
            {
                title: 'Model Portfolio Management',
                icon: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240625135331.035.webp",
                items: ['Advanced tools supporting investment plan creation and maintenance to satisfy various financial goals',
                    'Online seamless process​​',
                    'Individual/Bulk process supported​​​​'],
            },
        ]
    },
    {
        label: 'Capital Markets',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240624111022.827.webp',
        content: [
            {
                title: 'Pre-Settlement',
                icon: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240625135319.800.webp",
                items: ['Allow banks and brokers to perform international clearing, settlement, and corporate action',
                    'Support all major ETC protocols out-of-the-box (e.g. Oasys, CTM, GETC, FIX, Iress)',
                    'Support all settlement types including SWIFT 15022, 20022​'],
            },
            {
                title: 'Clearing And Settlement​',
                icon: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240625140811.953.webp",
                items: ['Provide post-execution and pre-settlement transaction processing',
                    'Support multiple asset classes and markets for greater operational efficiency​'],
            },
        ]
    },
    {
        label: 'Payment',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240624111038.590.webp',
        content: [
            {
                title: 'Buy Now Pay Later',
                icon: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112219.664.webp",
                items: ['Merchant Portal',
                    'Merchant Integration',
                    'Admin Portal​'],
            },
            {
                title: 'International Remittance',
                icon: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112237.637.webp",
                items: ['Local & international payments',
                    'Multilingual and multi-currency',
                    'No bank fee & best rate​​​​'],
            },
        ]
    },
    {
        label: 'AI Finance',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121111750.269.webp',
        content: [
            {
                title: 'Document Intelligent',
                icon: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112303.778.webp",
                items: ['Auto labeling data & adaptability to change',
                    'Custom data labeling & training',
                    'Text detection and recognition',
                    'Data regions and compliance​'],
            },
            {
                title: 'AI and OCR',
                icon: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112311.374.webp",
                items: ['Efficiency & automation',
                    'Enhanced accuracy & searchability',
                    'Versatile document handling​​​​'],
            },
            {
                title: 'AI Chatbot',
                icon: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112328.999.webp",
                items: ['Transcripts storing and retrieving',
                    'Support multiple languages',
                    'Support long conversations',
                    'Simplifying the user experience​​​​'],
            },
        ]
    },
    {
        label: 'Web 3',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121111825.745.webp',
        content: [
            {
                title: 'NFT Trading Platform',
                icon: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112340.736.webp",
                items: ['Multidisciplinary applications',
                    'Easy to integrate and develop',
                    'Multiple payment methods',
                    'High security standards',
                    'Support multiple wallet & chains​'],
            },
            {
                title: 'Letter of Guarantee',
                icon: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112351.529.webp",
                items: ['Data access controller using smart contract',
                    'Banks & beneficiaries application'],
            },
        ]
    },
]
const imageUrls = [
    'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112627.082.webp',
    'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112824.251.webp',
    'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112854.529.webp',
    'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112919.816.webp',
    'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112941.514.webp',
    'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121113006.739.webp',
    'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121113054.791.webp',
    'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121113030.589.webp',
    'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121113117.504.webp',
    'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121113423.950.webp',
    'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121113152.694.webp',
]

const techLabels = [
    'Angular', 'React.js', 'Java', 'Spring Boot',
    'Node.js', 'Python', 'Kotlin', 'Django',
    'Solidity', 'Scikit-learn', 'Ethereum', 'Hyperledger',
    'Polygon', 'IPFS', 'TensorFlow', 'PyTorch',
    'Azure', 'OpenAI', 'Hugging Face',
]
const technologiesData = [
    {
        title: 'Open Source Technologies',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626090447.109.webp',
    },
    {
        title: 'Cloud & DevOps',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626090501.232.webp',
    },
    {
        title: 'Web & Mobile Technologies',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626090521.287.webp',
    },
    {
        title: 'Java',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626090535.976.webp',
    },
    {
        title: 'Big Data Analytics & AI',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626090546.117.webp',
    },
    {
        title: 'Microsoft Technologies',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626090604.093.webp',
    },
];
const caseStudies = [
    {
        label: 'Logistic Mobile Application',
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

const LogisticsPage = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [tabIndex, setTabIndex] = useState(0)
    const study = caseStudies[tabIndex]
    const selectedService = menuItems[selectedIndex]
    return (
        <>
            <CssBaseline />
            <Header />
            <FadeSection>
                <Box

                    sx={{
                        backgroundColor: '#1976d2',
                        
                        mt: 14,
                        py: 8,
                        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
                        WebkitClipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
                        overflow: 'hidden',
                    }}
                >
                    <Box sx={{ position: "absolute" }}>
                        <img width={"20%"} src="https://www.tmasolutions.com/media/industries/telecom/bg_right.webp" alt="" />
                    </Box>
          <Container sx={{ textAlign: "center", position: 'relative' }}>
            <img 
                width={"100%"} 
                src="https://tmastorage.azureedge.net/uploadfiles/Banner/banner_20240626114450.844.webp" 
                alt="" 
                style={{ display: 'block' }} 
            />
            <Box 
                sx={{ 
                    position: 'absolute', 
                    top: '45%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    
                    textAlign: 'center' 
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    Logistics & Transportation
                </Typography>
                <Typography 
                    fontSize={12} 
                    sx={{ 
                        mt: 1, 
                        maxWidth: '250px', 
                        whiteSpace: 'normal', 
                        overflow: 'hidden', 
                        textAlign: 'center' 
                    }}
                >
                    With heavy investment in navigation and map technology, we have developed many applications for transportation and logistics.
                </Typography>
            </Box>
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

                            <Link href="industries" underline="hover"><Typography color="#00A1F1">Industries</Typography></Link>

                            <Typography color="#00A1F1">{'>'}</Typography>

                            <Typography color="text.primary">Logistics</Typography>
                        </Stack>

                    </Box>
                </Container>
            </FadeSection>
            <FadeSection id='about' >
                <Box p={5} bgcolor={"#f5f5f5"} sx={{
                    mt: 4,
                    clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0% 100%)"
                }}
                >
                    <Box >
                        <Container sx={{ textAlign: "center" }}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                Services
                            </Typography>
                            <Typography textAlign={"center"} >
We deliver top-tier supply chain management (SCM) solutions and logistics technology solutions, catering to the needs of big logistics and transportation customers. Our end-to-end software development services ensure seamless operations.                            </Typography>
                        </Container>
                    </Box>
                    <Container sx={{ mt: 4, mb: 4 }}>
                        <Box sx={{ p: 4, }}>
                            <Grid container spacing={3}>
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
                                            
                                                sx={{ width: 40, height: 40, mb: 2 }}
                                            />
                                            
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

            <FadeSection id='about' >
                 <Box sx={{ bgcolor: '#E3F2FD', p: 2 }}>
            <Container>
                <Container sx={{textAlign:"center"}}>
                    <img width={"5%"} src="https://www.tmasolutions.com/media/technologies/5G/decorServices.webp" alt="" />
                <Typography variant="h4"sx={{ mb: 4 }}>
                    Technologies
                </Typography>
                <Typography variant="body1" align="left" sx={{ mb: 4 }}>
                    Our logistics management system and transportation management system are built on modern technology. We’re your partner in modernizing the sector.
                </Typography></Container>
                <Grid container spacing={4} justifyContent="center">
                    {technologiesData.map((tech, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
                                <Box component="img" src={tech.icon} alt={tech.title} sx={{ width: '60px', height: '60px', mb: 2 }} />
                                <Typography variant="h6">
                                    {tech.title}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
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
                                        Logistics Brochure
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

export default LogisticsPage
