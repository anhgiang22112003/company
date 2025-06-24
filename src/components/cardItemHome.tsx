import React, { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardMedia, Typography, Box, IconButton, Paper, Chip, useMediaQuery, useTheme, Link } from '@mui/material'
import { ArrowBackIos, ArrowForwardIos, AccessTime, Person } from '@mui/icons-material'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SwiperCore from 'swiper'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import { GlobalStyles } from '@mui/material'

<GlobalStyles
    styles={{
        '.swiper-pagination': {
            marginTop: '10px',
            textAlign: 'center',
        },
        '.swiper-pagination-bullet': {
            backgroundColor: '#1976d2',
            opacity: 0.5,
        },
        '.swiper-pagination-bullet-active': {
            backgroundColor: '#1976d2',
            opacity: 1,
        },
    }}
/>

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
            publishDate: "Today",
            href: "services/testing"
        },
        {
            id: 2,
            title: "AI/Machine Learning",
            excerpt:
                "Achieve successful digital transformation by leveraging AI and ML to drive intelligent automation and data-driven insights.",
            image: "https://kms-technology.com/wp-content/uploads/2024/06/AI-and-Machine-Learning.webp",
            category: "Technologies",
            href: "technologies/ai-ml-data-sciences"
        },
        {
            id: 3,
            title: "Data Management",
            excerpt:
                "Optimize, integrate, and secure your data with data management services, including warehousing, data lakes, governance, and analytics.",
            image: "https://kms-technology.com/wp-content/uploads/2024/05/data-analytics-solutions-e1742789351378.jpeg",
            category: "Technologies",
            href: "technologies/big-data-analytics"
        },
        {
            id: 4,
            title: "Software Development",
            excerpt:
                "Build sleek, high-performing mobile apps with seamless user experiences through our expert design and development services.",
            image: "https://tse2.mm.bing.net/th?id=OIP.vpNAoso6RVXKtwP8ELDF7gHaD7&pid=Api&P=0&h=220",

            category: "Services",

            href: "services/software-development"
        },

        {
            id: 5,
            title: "Cloud Solutions",
            excerpt:
                "Harness the power of the cloud to scale efficiently, ensure high availability, and enhance business agility with our expert services.",
            image: "https://tse2.mm.bing.net/th?id=OIP.HjTaU2AJkvV-Ub779QWVoAHaE8&pid=Api&P=0&h=220",

            category: "Technologies",
            href: "technologies/cloud"
        },
        {
            id: 6,
            title: "Low-Code Development",
            excerpt:
                "Accelerate application delivery with intuitive, low-code platforms tailored to your business needs and workflows.",
            image: "https://tse3.mm.bing.net/th?id=OIP.nOVpT0E2IdvqX0bHt_jZZAHaFU&pid=Api&P=0&h=220", // bạn có thể thay URL phù hợp

            category: "Technologies",

            href: "technologies/low-code"
        },
        {
            id: 7,
            title: "Digital Transformation",
            excerpt:
                "Empower your organization to evolve with cutting-edge technologies and data-driven strategies for a successful digital journey.",
            image: "https://tse1.mm.bing.net/th?id=OIP.wKmW8-7WeI0mggEmZ0V-CwHaEK&pid=Api&P=0&h=220", // cập nhật URL hình ảnh nếu cần

            category: "Services",

            href: "services/digital-transformation"
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



            <Box sx={{ position: 'relative', pb: 6 }}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={isMobile ? 1 : isTablet ? 2 : 4}
                    loop
                    autoplay={{ delay: 2000 }}
                    pagination={{ clickable: true }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper: any) => {
                        if (
                            swiper.params &&
                            swiper.params.navigation &&
                            typeof swiper.params.navigation !== 'boolean'
                        ) {
                            swiper.params.navigation.prevEl = prevRef.current
                            swiper.params.navigation.nextEl = nextRef.current
                        }
                    }}
                    style={{
                        paddingBottom: '30px', // 👈 Thêm khoảng trống bên dưới cho pagination
                    }}
                >
                    {articles.map((article) => (
                        <SwiperSlide key={article.id}>
                            <Card
                                sx={{
                                    width: '100%',
                                    minHeight: { xs: 360, sm: 380, md: 350 }, // responsive height
                                    display: 'flex',
                                    flexDirection: 'column',
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
                                        flex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 1, // hoặc 2 tuỳ bạn muốn khoảng cách lớn nhỏ
                                        p: 2,
                                        background: 'linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.6))',
                                        backdropFilter: 'blur(2px)',
                                        WebkitBackdropFilter: 'blur(2px)'
                                    }}
                                >
                                    <Box>
                                        <Chip
                                            label={article.category}
                                            color="primary"
                                            size="small"
                                            sx={{ mb: 1, fontWeight: 'bold' }}
                                        />
                                        <Typography variant="h6" gutterBottom>
                                            <a
                                                href={article.href}
                                                style={{ textDecoration: 'none', color: 'inherit', fontWeight: 600 }}
                                            >
                                                {article.title}
                                            </a>
                                        </Typography>
                                    </Box>

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            mt: 1,
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                        }}
                                    >
                                        {article.excerpt}
                                    </Typography>
                                </CardContent>
                            </Card>

                        </SwiperSlide>
                    ))}

                </Swiper>

                {/* Prev Button (PC only) */}
                <IconButton
                    ref={prevRef}
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        position: 'absolute',
                        top: '50%',
                        left: -40,
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        bgcolor: 'rgba(255,255,255,0.9)',
                        boxShadow: 2,
                        '&:hover': { bgcolor: 'white' },
                    }}
                >
                    <ArrowBackIos />
                </IconButton>

                {/* Next Button (PC only) */}
                <IconButton
                    ref={nextRef}
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        position: 'absolute',
                        top: '50%',
                        right: -40,
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        bgcolor: 'rgba(255,255,255,0.9)',
                        boxShadow: 2,
                        '&:hover': { bgcolor: 'white' },
                    }}
                >
                    <ArrowForwardIos />
                </IconButton>

                {/* Pagination spacing */}

            </Box>
        </Box>
    )
}

export default ArticleCarousel
