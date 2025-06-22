import React, { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardMedia, Typography, Box, IconButton, Paper, Chip, useMediaQuery, useTheme } from '@mui/material'
import { ArrowBackIos, ArrowForwardIos, AccessTime, Person } from '@mui/icons-material'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SwiperCore from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'

// Kích hoạt module
SwiperCore.use([Navigation, Autoplay])
const ArticleCarousel = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isDesktop = useMediaQuery(theme.breakpoints.up('md')) // md: 900px+
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')) // 600px - 899px
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const articles = [
        {
            id: 1,
            title: "QA & Testing",
            excerpt:
                "Ensure reliable performance with our rigorous QA services, including test automation, manual testing, and test framework implementation.",
            image: "https://kms-technology.com/wp-content/uploads/2025/03/magnifying-glass-e1744282126554.webp",
            author: "Digital Engineering",
            readTime: "3 min read",
            category: "Services",
            publishDate: "Today"
        },
        {
            id: 2,
            title: "AI/Machine Learning",
            excerpt:
                "Achieve successful digital transformation by leveraging AI and ML to drive intelligent automation and data-driven insights.",
            image: "https://kms-technology.com/wp-content/uploads/2024/06/AI-and-Machine-Learning.webp",
            author: "Digital Engineering",
            readTime: "4 min read",
            category: "Services",
            publishDate: "Today"
        },
        {
            id: 3,
            title: "Data Management",
            excerpt:
                "Optimize, integrate, and secure your data with data management services, including warehousing, data lakes, governance, and analytics.",
            image: "https://kms-technology.com/wp-content/uploads/2024/05/data-analytics-solutions-e1742789351378.jpeg",
            author: "Digital Engineering",
            readTime: "4 min read",
            category: "Services",
            publishDate: "Today"
        },
        {
            id: 4,
            title: "Mobile App Development",
            excerpt:
                "Build sleek, high-performing mobile apps with seamless user experiences through our expert design and development services.",
            image: "https://kms-technology.com/wp-content/uploads/2025/01/mobile-app-testing-e1744281310310.webp",
            author: "Digital Engineering",
            readTime: "5 min read",
            category: "Services",
            publishDate: "Today"
        },
        {
            id: 5,
            title: "Mobile App Development",
            excerpt:
                "Build sleek, high-performing mobile apps with seamless user experiences through our expert design and development services.",
            image: "https://kms-technology.com/wp-content/uploads/2025/01/ongoing-maintenance-e1742854045389.webp",
            author: "Digital Engineering",
            readTime: "5 min read",
            category: "Services",
            publishDate: "Today"
        }
    ]

    return (
        <Box sx={{
            mx: 'auto', p: 5,
            background: 'linear-gradient(to bottom, rgba(56, 18, 210, 0.85), rgba(38, 90, 145, 0))',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
        }}>
            <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
                End-to-End Technology Solutions
            </Typography>

            <Box sx={{ position: 'relative' }}>
                <Swiper
                    modules={[Navigation, Autoplay]} // <== Quan trọng
                    spaceBetween={20}
                    slidesPerView={isMobile ? 1 : isTablet?2:4}
                    loop
                    autoplay={{ delay: 4000 }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper:any) => {
                        if (
                            swiper.params &&
                            swiper.params.navigation &&
                            typeof swiper.params.navigation !== 'boolean'
                        ) {
                            swiper.params.navigation.prevEl = prevRef.current
                            swiper.params.navigation.nextEl = nextRef.current
                        }
                    }}

                >
                    {articles.map((article) => (
                        <SwiperSlide key={article.id}>
                            <Card
                                sx={{
                                    width: '100%',
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    position: 'relative',
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="160"
                                    image={article.image}
                                    alt={article.title}
                                />
                                <CardContent
                                    sx={{
                                        p: 2,
                                        background: 'linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.6))',
                                        backdropFilter: 'blur(6px)',
                                        WebkitBackdropFilter: 'blur(6px)',
                                    }}
                                >
                                    <Chip
                                        label={article.category}
                                        color="primary"
                                        size="small"
                                        sx={{ mb: 1, fontWeight: 'bold' }}
                                    />
                                    <Typography variant="h6" gutterBottom>
                                        {article.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ minHeight: 50 }}>
                                        {article.excerpt}
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <Person fontSize="small" color="action" />
                                            <Typography variant="caption">{article.author}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <AccessTime fontSize="small" color="action" />
                                            <Typography variant="caption">{article.readTime}</Typography>
                                        </Box>
                                        <Typography variant="caption">{article.publishDate}</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                    ))}

                </Swiper>
                <IconButton

                    ref={prevRef}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: { xs: -40, md: -40 },
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        bgcolor: 'rgba(255,255,255,0.9)',
                        boxShadow: 2,
                        '&:hover': { bgcolor: 'white' },
                    }}
                >
                    <ArrowBackIos />
                </IconButton>

                <IconButton
                    ref={nextRef}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        right: { xs: -40, md: -40 },
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        bgcolor: 'rgba(255,255,255,0.9)',
                        boxShadow: 2,
                        '&:hover': { bgcolor: 'white' },
                    }}
                >
                    <ArrowForwardIos />
                </IconButton>

                {/* Navigation Buttons */}

            </Box>
        </Box>
    )
}

export default ArticleCarousel
