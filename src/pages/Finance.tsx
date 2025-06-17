import React, { useState } from 'react'
import { Box, Grid, Typography, Avatar, Container, CssBaseline, Stack, Link, Paper, List, ListItemButton, ListItemIcon, ListItemText, Divider, ListItem } from '@mui/material'
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


const data = [
    {
        title: "Fintech Application Development",
        image: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121050717.949.webp",
        description:
            "Develop advanced financial software to improve asset management, core banking integration, mobile payment, and capital market services.",
    },

    {
        title: "Banking Integration",
        image: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121050726.231.webp",
        description:
            "Design and develop frontier applications to integrate with core banking.",
    },
    {
        title: "Web3",
        image: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121050801.766.webp",
        description:
            "Resolve business cases with R&D solutions using Web3, Blockchain, and NFT.",
    },
    {
        title: "AI in Fintech",
        image: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121050744.032.webp",
        description:
            "Apply AI technologies to enhance customer experience, and streamline financial processes.",
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


const Finance = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const selectedService = menuItems[selectedIndex]
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
                                    Finance
                                </Typography>
                                <Typography variant="body1" mb={4}>
                                     Solutions offers a wide range of outsourcing fintech software development services tailored for the banking financial service and insurance sector (BFSI). Our banking & financial solutions empower businesses to excel in the dynamic fintech landscape                                </Typography>

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
                                    <img width={"100%"} src="https://tmastorage.azureedge.net/uploadfiles/Banner/banner_20241204095317.036.webp" alt="" />
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

                            <Link href="industries" underline="hover"><Typography color="#00A1F1">Industries</Typography></Link>

                            <Typography color="#00A1F1">{'>'}</Typography>

                            <Typography color="text.primary">Finance</Typography>
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
                                Our Services
                            </Typography>
                            <Typography textAlign={"center"} >
                                We specialize in developing advanced fintech applications, integrating core banking systems, leveraging Web3 and blockchain technologies, and applying AI to enhance financial services and customer experiences.
                            </Typography>
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

            <FadeSection id='about' >
                <Box p={5} bgcolor={"#f5f5f5"} sx={{
                    mt: 4,
                    
                }}
                >
                    <Box >
                        <Container sx={{ textAlign: "center" }}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                Domain of Expertise
                            </Typography>
                            <Typography textAlign={"center"} >
                                With a focus on fintech software development outsourcing services, pioneers innovative banking and financial technology solutions. Our use of the latest technology drives increased productivity for finance companies, encompassing investments and operational aspects.
                            </Typography>
                        </Container>
                    </Box>
                    <Container sx={{ mt: 4 }}>
                        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                            {/* Menu hàng ngang */}
                            <List
                                component="nav"
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    gap: 1,
                                    mb: 4,
                                    flexWrap: 'wrap',
                                }}
                            >
                                {menuItems.map((item, index) => (
                                    <ListItemButton
                                        key={item.label}
                                        selected={selectedIndex === index}
                                        onClick={() => setSelectedIndex(index)}
                                        sx={{
                                            borderRadius: 2,
                                            bgcolor: selectedIndex === index ? 'primary.main' : 'transparent',
                                            color: selectedIndex === index ? 'white' : 'black',
                                            px: 2,
                                            py: 1,
                                            minWidth: 140,
                                            '&:hover': {
                                                bgcolor: 'primary.light',
                                                color: 'white',
                                            },
                                        }}
                                    >
                                        <ListItemIcon sx={{ minWidth: 32 }}>
                                            <Avatar src={item.icon} variant="square" sx={{ width: 24, height: 24 }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                <Typography variant="body2" noWrap>
                                                    {item.label}
                                                </Typography>
                                            }
                                        />
                                    </ListItemButton>
                                ))}
                            </List>

                            {/* Content */}
                            <Grid container spacing={3}>
                                {selectedService.content.map((service, idx) => (
                                    <Grid item xs={12} md={4} key={idx}>
                                        <Box
                                            sx={{
                                                border: '1px solid #d6e9ff',
                                                borderRadius: 1,
                                                padding: 2,
                                                backgroundColor: '#f9fcff',
                                                minHeight: 180,
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

                        </Paper>
                    </Container>
                </Box>
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
                                Technologies
                            </Typography>
                            <Typography textAlign={"center"} >
                                Discover the future of finance with Solutions in Fintech Technologies. Our fintech solutions include advanced financial management software and groundbreaking banking and financial technology solutions, elevating businesses to new heights of efficiency.                            </Typography>
                        </Container>
                    </Box>
                    <Container sx={{ mt: 4 }}>
                        <Grid
                            container
                            spacing={2}
                            justifyContent="center"
                            sx={{ maxWidth: 1000, mx: 'auto', mt: 4 }}
                        >
                            {imageUrls.map((url, index) => (
                                <Grid item xs={6} sm={4} md={3} key={index}>
                                    <Box
                                        sx={{
                                            border: '1px solid #90caf9',
                                            borderRadius: 2,
                                            textAlign: 'center',
                                            p: 2,
                                            height: '100%',
                                            transition: '0.3s',
                                            '&:hover': {
                                                boxShadow: 3,
                                                transform: 'translateY(-4px)',
                                            },
                                        }}
                                    >
                                        <img
                                            src={url}
                                            alt={`tech-${index}`}
                                            style={{ width: '50%', marginBottom: 8 }}
                                        />
                                        <Typography variant="subtitle2">
                                            {techLabels[index] || `Tech ${index + 1}`}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
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
            <ScrollToTopButton />
            <Footer />
        </>
    )
}

export default Finance
