import React, { useState } from 'react'
import { Box, Grid, Typography, Avatar, Container, CssBaseline, Stack, Link, Paper, List, ListItemButton, ListItemIcon, ListItemText, Divider, ListItem } from '@mui/material'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord' // hình tròn nhỏ
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import SlideInOnScroll from '../components/SlideInOnScroll'


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
                icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240625135319.800.webp',
                items: [
                    'Flexible administration procedures',
                    'Optimized solutions for retirement plans'
                ],
            },
        ],
    },
    {
        label: 'Capital Markets',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240624111022.827.webp',
        content: [
            {
                title: 'Clearing And Settlement​',
                icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240625140811.953.webp',
                items: [
                    'Post-execution transaction processing',
                    'Multi-asset & market support',
                ],
            },
        ],
    },
    {
        label: 'Payment',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240624111038.590.webp',
        content: [
            {
                title: 'International Remittance',
                icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112237.637.webp',
                items: [
                    'Local & international payments',
                    'Multi-currency support',
                ],
            },
        ],
    },
    {
        label: 'AI Finance',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121111750.269.webp',
        content: [
            {
                title: 'Document Intelligent',
                icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112303.778.webp',
                items: [
                    'Auto data labeling',
                    'Text detection & recognition',
                ],
            },
            {
                title: 'AI Chatbot',
                icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112328.999.webp',
                items: [
                    'Multi-language support',
                    'Support long conversations',
                ],
            },
        ],
    },
    {
        label: 'Web 3',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121111825.745.webp',
        content: [
            {
                title: 'NFT Trading Platform',
                icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112340.736.webp',
                items: [
                    'Multi-wallet & chain support',
                    'High security standards',
                ],
            },
        ],
    },
]

const techItems = [
    { url: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112627.082.webp', label: 'Angular' },
    { url: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112824.251.webp', label: 'React.js' },
    { url: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112854.529.webp', label: 'Java' },
    { url: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112919.816.webp', label: 'Spring Boot' },
    { url: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121112941.514.webp', label: 'Node.js' },
    { url: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121113006.739.webp', label: 'Python' },
    { url: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121113054.791.webp', label: 'Kotlin' },
    { url: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121113030.589.webp', label: 'Django' },
    { url: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121113117.504.webp', label: 'Solidity' },
    { url: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121113423.950.webp', label: 'Scikit-learn' },
    { url: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250121113152.694.webp', label: 'Ethereum' },
]



const Finance = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const selectedService = menuItems[selectedIndex]
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
                        <Grid item xs={12} md={6}>
                            <SlideInOnScroll>
                                <Box>
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
                                    ))}</Box>
                            </SlideInOnScroll>
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
                                    <img width={"100%"} src="https://tmastorage.azureedge.net/uploadfiles/Banner/banner_20241204095317.036.webp" alt="" />
                                </Box>
                            </SlideInOnScroll>
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

                            <Link href="industries" underline="hover"><Typography color="#00A1F1">Industries</Typography></Link>

                            <Typography color="#00A1F1">{'>'}</Typography>

                            <Typography color="text.primary">Finance</Typography>
                        </Stack>

                    </Box>
                </Container>
            </FadeSection>
            <FadeSection id='about' >
                <Box p={2} bgcolor={"#f5f5f5"} sx={{
                    mt: 4,
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
                <Box p={2} sx={{
                    background: 'linear-gradient(to bottom, #1976d2, rgba(10, 75, 149, 0.56))',
                    mt: 4,

                }}
                >
                    <Box >
                        <Box sx={{ textAlign: "center", color:"white" }}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                Domain of Expertise
                            </Typography>
                            <Typography textAlign={"center"} >
                                With a focus on fintech software development outsourcing services, pioneers innovative banking and financial technology solutions. Our use of the latest technology drives increased productivity for finance companies, encompassing investments and operational aspects.
                            </Typography>
                        </Box>
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
                <Box p={5} sx={{
                    mt: 4,
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
                    <Box sx={{
                                overflow: 'hidden',
                                backgroundColor: '#f5faff',
                                p: { xs: 2, sm: 3 },
                                borderRadius: 2,
                                position: 'relative',
                                width: '100%',
                            }}>
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
                            {[...techItems, ...techItems].map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        flex: '0 0 auto',
                                        width: 180,
                                        mx: 2,
                                        height: 150,
                                        backgroundColor: '#fff',
                                        border: '1px solid #90caf9',
                                        borderRadius: 2,
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        transition: '0.3s',
                                        '&:hover': {
                                            boxShadow: 3,
                                            transform: 'translateY(-4px)',
                                        },
                                    }}
                                >
                                    <img src={item.url} alt={`tech-${index}`} style={{ width: '40%', objectFit: 'contain' }} />
                                    <Typography
                                        variant="subtitle2"
                                        sx={{ mt: 1, fontWeight: 500, whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
                                    >
                                        {item.label}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
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
                                    Finance IT Outsourcing
                                </Link>
                            </Box>
                        </Container>
                    </Box>
                </Container>
            </FadeSection>

            <Footer />
            <ScrollToTopButton />
        </>
    )
}

export default Finance
