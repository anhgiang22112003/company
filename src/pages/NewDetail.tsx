import React, { useState } from 'react'
import {
    Container,
    Grid,
    Typography,
    Box,
    Button,
    Paper,
    Breadcrumbs,
    Link,
    Pagination,
    Stack,
    Card,
    CardMedia,
    CardContent,
} from '@mui/material'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import FadeSection from '../components/FadeSection'
import ScrollToTopButton from '../components/ScrollToTopButton'
import {
    LinkedIn,
    Facebook,
    Email,
} from '@mui/icons-material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

// Dữ liệu cho phần tin tức
const otherNews = [
    {
        image: 'https://www.tmasolutions.com/uploadfiles/News/aisc-2025-international-conference-the-intersection-of-ai-and-semiconductors-a-new-position-for-vietnam-20250312150945_2025-05-30-05-11-41-227.webp',
        title: 'Vietnam with the Golden Opportunity in the Global AI and Semiconductor Revolution',
        date: '30/05/2025',
    },
    {
        image: 'https://www.tmasolutions.com/uploadfiles/News/Screenshot%202025-06-05%20093752.webp_2025-06-06-06-58-23-193.webp',
        title: 'Smart Factories – A Strategic Shift to Elevate Vietnam’s Supporting Industries',
        date: '27/05/2025',
    },
    {
        image: 'https://www.tmasolutions.com/uploadfiles/News/image_2025-05-26-09-06-34-688.webp',
        title: 'Korea – Vietnam Digital Innovation Forum 2025 to Foster Cross-Border Innovation and Cooperation',
        date: '26/05/2025',
    },
    {
        image: 'https://tmastorage.azureedge.net/uploadfiles/News/bs_2025-02-06-08-40-39-163.webp',
        title: 'AI application in medical care and treatment in Ho Chi Minh City',
        date: '13/11/2024',
    },
]

const newsList = [
    {
        title: ' Shares insights on Australia–Vietnam Alumni...',
        date: '05/06/2025',
        img: 'https://www.tmasolutions.com/uploadfiles/News/3c68d2e223cd9793cedc.webp_2025-06-06-08-36-17-404.webp',
    },
    {
        title: ' Solutions Welcomes KOSSA Delegation and...',
        date: '04/06/2025',
        img: 'https://www.tmasolutions.com/uploadfiles/News/MOU.webp_2025-06-04-08-51-11-943.webp',
    },
    {
        title: 'Vietnam with the Golden Opportunity in the Global AI An...',
        date: '30/05/2025',
        img: 'https://tmastorage.azureedge.net/uploadfiles/News/NVIDIA_2024-12-10-08-54-03-564.webp',
    },
    {
        title: ' Strengthens Collaboration and Explores...',
        date: '29/05/2025',
        img: 'https://tmastorage.azureedge.net/uploadfiles/News/NVIDIA_2024-12-10-08-54-03-564.webp', // placeholder, replace if needed
    },
]
const NewsDetailPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('All')

    return (
        <>
            <Header />
            <FadeSection>
                <Box sx={{
                    bgcolor: "#1976d2", mt: 18, textAlign: 'center', p: 6, clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0% 70%)',
                }}>
                    <Box
                        sx={{
                            backgroundColor: 'white',
                            justifyContent: "center",
                            display: 'inline-block',
                            transform: 'skew(-15deg)', // nghiêng nền
                            px: 4,
                            py: 1,
                            clipPath: 'polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)',
                            mx: 'auto',
                            mb: 2,
                        }}
                    >
                        <Typography
                            fontWeight="bold"
                            variant="h3"
                            textAlign="center"

                            sx={{
                                color: '#1976d2', transform: 'skew(15deg)',
                                fontStyle: 'italic',
                            }}
                        >
                            News & Events Detail
                        </Typography>
                    </Box>

                    <Typography
                        fontWeight="bold"
                        variant="h6"
                        textAlign="center"
                        color="white"
                        sx={{ maxWidth: 600, mx: 'auto' }}
                    >
                        Get The Latest Solutions News & Announcements
                    </Typography>
                </Box>
            </FadeSection>
            <FadeSection >
                <Container>
                    <Box sx={{ mt: 4, px: 4, p: 2 }}>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Link underline="hover" color="#00A1F1" href="/">
                                <Typography fontWeight={700}>Home</Typography>
                            </Link>

                            <Typography color="#00A1F1">›</Typography>

                            <Link href="new" underline="hover"><Typography color="#00A1F1">New</Typography></Link>

                            <Typography color="#00A1F1">{'>'}</Typography>

                            <Typography color="text.primary">New detail</Typography>
                        </Stack>
                    </Box>
                </Container>
            </FadeSection>
            <FadeSection>
                <Container>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: {
                                xs: 'column',
                                md: 'row',
                            },
                            gap: 4,
                            p: {
                                xs: 2,
                                md: 4,
                            },
                        }}
                    >
                        {/* Social Icons */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: {
                                    xs: 'row',
                                    md: 'column',
                                },
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 2,
                                mb: {
                                    xs: 2,
                                    md: 0,
                                },
                            }}
                        >
                            <LinkedIn
                                sx={{
                                    color: '#0e76a8',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.2)',
                                    },
                                }}
                            />
                            <Facebook
                                sx={{
                                    color: '#4267B2',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.2)',
                                    },
                                }}
                            />
                            <Email
                                sx={{
                                    color: '#888',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.2)',
                                    },
                                }}
                            />
                        </Box>

                        {/* Main content */}
                        <Box sx={{ flex: 2 }}>
                            <Typography variant="caption" color="text.secondary">
                                10/12/2024
                            </Typography>
                            <Typography variant="body1" sx={{ mt: 2 }}>
                                December 5, 2024, NVIDIA has announced the opening of its first Research and Development (R&D) Center in Vietnam, marking a significant milestone for the country’s growing artificial intelligence (AI) ecosystem. The new center will focus on developing AI software, leveraging Vietnam’s talented STEM workforce, and collaborating with industry leaders, startups, government agencies, and universities. The goal is to accelerate AI adoption across key sectors such as healthcare, education, transportation, and finance. “We are excited to open NVIDIA’s R&D center to support Vietnam’s AI journey,” said Jensen Huang, founder and CEO of NVIDIA. “By partnering with local researchers, startups, and organizations, we aim to build innovative AI solutions right here in Vietnam.”
                            </Typography>

                            <Box sx={{ my: 3, textAlign: 'center' }}>
                                <img
                                    src="https://tmastorage.azureedge.net/uploadfiles/News/NVIDIA_2024-12-10-08-54-03-564.webp"
                                    alt="NVIDIA"
                                    style={{ maxWidth: '100%', height: 'auto' }}
                                />
                            </Box>

                            <Typography variant="body1">
                                Vietnam has emerged as one of the fastest-growing economies globally, fueled by advancements in technology and manufacturing. AI has become a key focus for the country, with government initiatives promoting innovation and digital transformation. Since 2021, Vietnam has been working to establish itself as a regional leader in AI research and development. Prime Minister Pham Minh Chinh welcomed the collaboration, stating, “Innovation is a core element of Vietnam’s development strategy. This partnership with NVIDIA represents an important step in strengthening Vietnam’s position in AI and high-tech industries in Southeast Asia.”
                                NVIDIA’s presence in Vietnam isn’t new. Over the past eight years, the company has supported over 100 Vietnamese AI startups through its Inception program and partnered with 65 local universities. NVIDIA has also worked with FPT Smart Cloud, its first Vietnamese cloud partner, to drive AI advancements in the region.
                                This R&D center reinforces Vietnam’s potential to become a hub for AI innovation, fostering collaboration and creating opportunities for researchers, businesses, and students alike.
                            </Typography>

                            <Typography variant="body2" sx={{ mt: 3 }}>
                                Source: NVIDIA
                            </Typography>
                        </Box>

                        {/* Sidebar */}
                        <Box sx={{ flex: 1, mt: { xs: 4, md: 0 } }}>
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                Latest News
                            </Typography>

                            <Box sx={{ width: '100%', overflow: 'hidden' }}>
                                <Grid container direction="column" spacing={2}>
                                    {newsList.map((news, index) => (
                                        <Grid item key={index}>
                                            <Card
                                                sx={{
                                                    display: 'flex',
                                                    width: '100%',
                                                    height: 100,
                                                    boxSizing: 'border-box',
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                <CardMedia
                                                    component="img"
                                                    image={news.img}
                                                    alt={news.title}
                                                    sx={{
                                                        width: 100,
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        flexShrink: 0,
                                                    }}
                                                />
                                                <CardContent
                                                    sx={{
                                                        flex: 1,
                                                        p: 1,
                                                        overflow: 'hidden',
                                                    }}
                                                >
                                                    <Typography
                                                        variant="body2"
                                                        noWrap
                                                        sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                                                    >
                                                        {news.title}
                                                    </Typography>
                                                    <Typography variant="caption" color="text.secondary">
                                                        {news.date}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>




                            <Box sx={{ mt: 4, p: 2, bgcolor: '#f0f4ff', borderRadius: 1, textAlign: 'center' }}>
                                <Typography variant="body2" sx={{ mb: 1 }}>
                                    Start your project today!
                                </Typography>
                                <Button variant="contained" color="primary" size="small">
                                    Contact Us
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </FadeSection>


            <FadeSection>
                <Box bgcolor={"#f5f5f5"}>
                    <Container>
                        <Box p={4} sx={{ mt: 6 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                                Other News
                            </Typography>
                            <Grid container spacing={3}>
                                {otherNews.map((news, index) => (
                                    <Grid item xs={12} sm={6} md={3} key={index}>
                                        <Card sx={{ boxShadow: 'none', p: 2 }}>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={news.image}
                                                alt={news.title}
                                                sx={{
                                                    borderRadius: '4px',
                                                    transition: 'transform 0.3s ease',
                                                    '&:hover': {
                                                        transform: 'scale(1.02)',
                                                    },
                                                }}
                                            />
                                            <CardContent sx={{ px: 0 }}>
                                                <Typography
                                                    variant="subtitle2"
                                                    sx={{ mt: 1.5, fontWeight: 500, lineHeight: 1.4 }}
                                                >
                                                    {news.title}
                                                </Typography>
                                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, color: '#888' }}>
                                                    <CalendarMonthIcon sx={{ fontSize: 16, mr: 0.5 }} />
                                                    <Typography variant="caption">{news.date}</Typography>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Container>
                </Box>
            </FadeSection>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 4 }}>
                <Pagination count={5} variant="outlined" shape="rounded" />
            </Box>
            <ScrollToTopButton />
            <Footer></Footer>
        </>
    )
}

export default NewsDetailPage

