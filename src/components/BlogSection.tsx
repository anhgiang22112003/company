import React from 'react'
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, Stack, GlobalStyles, Chip, Paper, Link } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import SlideInOnScroll from './SlideInOnScroll'
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

const BlogSection = () => {
  const filteredNews = [

    {
      id: 1,
      title: "Strengthens Customization and Logistics Solutions",
      description: "Solutions enhances its logistics solutions to meet growing demands.",
      date: "March 15, 2023",
      imageUrl: "https://www.tmasolutions.com/uploadfiles/News/Image%20(13)_2025-05-26-03-32-40-256.webp",
    },
    {
      id: 2,
      title: "Solutions' Champions: Going the Extra Mile",
      description: "Celebrating our employees who go above and beyond.",
      date: "February 20, 2023",
      imageUrl: "https://www.tmasolutions.com/uploadfiles/News/Image%20(13)_2025-05-26-03-32-40-256.webp",
    },
    {
      id: 3,
      title: "2023 KOREA-VIETNAM DIGITAL INNOVATION FORUM",
      description: "Join us for a forum on digital innovation.",
      date: "January 30, 2023",
      imageUrl: "https://www.tmasolutions.com/uploadfiles/News/Image%20(13)_2025-05-26-03-32-40-256.webp",
    },
    {
      id: 4,
      title: "Solutions joins Vietnam Innovation Network",
      description: "Solutions collaborates with various partners to innovate in tech.",
      date: "December 12, 2022",
      imageUrl: "https://www.tmasolutions.com/uploadfiles/News/Image%20(13)_2025-05-26-03-32-40-256.webp",
    },

  ]

  const caseStudies = [
    {
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.NkLddVCJUlFiNntMclKFawHaEJ&pid=Api&P=0&h=220',
      title: 'Transforming Retail with AI',
      date: 'May 25, 2024',
      description: 'We helped a retail chain automate its inventory using AI-powered predictions.',
      tags: ['AI', 'Retail', 'Automation']
    },
    {
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.1RotHpVmkyKw5JZbXGqYGQHaEK&pid=Api&P=0&h=220',
      title: 'Fintech Revolution in Southeast Asia',
      date: 'April 10, 2024',
      description: 'Enabled secure, scalable fintech platform deployment in multiple countries.',
      tags: ['Fintech', 'Security', 'Scalability']
    },
    {
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.q5iusxprP73NzPKdzlQECAHaED&pid=Api&P=0&h=220',
      title: 'Healthcare IoT Transformation',
      date: 'March 5, 2024',
      description: 'IoT implementation helped hospitals monitor patients remotely and in real-time.',
      tags: ['IoT', 'Healthcare', 'Remote Monitoring']
    },
  ]

  return (
    <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center">
        Case Studies and New
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <SlideInOnScroll>
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              spaceBetween={20}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
              }}
              style={{ paddingBottom: '30px' }}
            >
              {caseStudies.map((study, index) => (
                <SwiperSlide key={index}>
                  <Paper elevation={3} sx={{
                    p: 2, borderRadius: 3, background: 'linear-gradient(to bottom, #1976d2, rgba(149, 10, 138, 0.56))', color: "white"
                  }}>
                    {/* Viền bo góc trên và dưới */}
                    <Box sx={{ position: 'relative', mb: 2 }}>
                      <Box
                        sx={{
                          position: 'absolute',
                          top: -5,
                          left: -5,
                          width: 150,
                          height: 100,
                          borderTop: '1px solid #1976d2',
                          borderLeft: '1px solid #1976d2',
                          borderTopLeftRadius: '6px',
                          zIndex: 1,
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: -5,
                          right: -5,
                          width: 150,
                          height: 100,
                          borderBottom: '1px solid #1976d2',
                          borderRight: '1px solid #1976d2',
                          borderBottomRightRadius: '6px',
                          zIndex: 1,
                        }}
                      />

                      <Box
                        sx={{
                          overflow: 'hidden',
                          borderRadius: 2,
                          width: '100%',
                          height: 'auto',
                        }}
                      >
                        <Box
                          component="img"
                          src={study.imageUrl}
                          alt={study.title}
                          sx={{
                            width: '100%',
                            transition: 'transform 0.5s ease',
                            display: 'block',
                            '&:hover': {
                              transform: 'scale(1.1)',
                            },
                          }}
                        />
                      </Box>
                    </Box>

                    {/* Tiêu đề */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                        mt: 1,
                        mb: 1,
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: '#1976d2',
                          cursor: 'pointer',
                        },
                      }}
                    >
                      {study.title}
                    </Typography>

                    <Typography variant="body2" >
                      {study.date}
                    </Typography>

                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {study.description}
                    </Typography>

                    {/* Tags */}
                    <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {study.tags.map((tag) => (
                        <Chip key={tag} label={tag} variant="outlined" />
                      ))}
                    </Box>

                    {/* Button */}
                    <Button
                      variant="outlined"
                      sx={{
                        mt: 2,
                        px: 3,
                        py: 1,
                        color: 'white',
                        borderColor: '#1976d2',
                        overflow: 'hidden',
                        position: 'relative',
                        zIndex: 1,
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          width: '0%',
                          height: '100%',
                          backgroundColor: '#1976d2',
                          zIndex: -1,
                          transition: 'width 0.4s ease',
                        },
                        '&:hover': {
                          color: '#fff',
                          '&::before': {
                            width: '100%',
                          },
                        },
                      }}
                    >
                      View Details
                    </Button>
                  </Paper>
                </SwiperSlide>
              ))}
            </Swiper>
          </SlideInOnScroll>

        </Grid>

        <Grid item xs={12} md={6}>
          <SlideInOnScroll direction='right'>
            <Card
              sx={{
                minHeight: 300,
                height: '100%',
                bgcolor: '#001F3F',
                color: 'white',
                borderRadius: 3,
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box display="flex" alignItems="center" gap={2}>
                <CardMedia
                  component="img"
                  image="https://tse3.mm.bing.net/th?id=OIP.HX8vusjtAV9M90bgzv5XpAHaDl&pid=Api&P=0&h=220"
                  alt="AI Guide"
                  sx={{
                    width: "100%",
                    height: 280,
                    objectFit: 'contain',
                    borderRadius: 1,
                  }}
                />

              </Box>
              <Box >
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    📘 CTO Guide: Choosing the Right AI Technology Stack
                  </Typography>
                </Box>
                <Typography variant="h6">
                  Discover how to pick the best AI tools to boost productivity, reduce costs, and make smarter decisions.
                </Typography>
                <Button
                  variant="contained"
                  sx={{ mt: 2, fontWeight: 'bold', bgcolor: '#1976d2', color: 'white' }}
                >
                  Download Now
                </Button>
              </Box>
            </Card>
          </SlideInOnScroll>


        </Grid>
      </Grid>


      {/* Swiper responsive */}
      <SlideInOnScroll>
        <Box mt={4}>
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            style={{ paddingBottom: '30px' }}
          >
            {filteredNews.map((event, index) => (
              <SwiperSlide key={index}>
                <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
                  {/* Viền bo góc */}
                  <Box sx={{ position: 'relative', mb: 2 }}>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -5,
                        left: -5,
                        width: 150,
                        height: 80,
                        borderTop: '1px solid #1976d2',
                        borderLeft: '1px solid #1976d2',
                        borderTopLeftRadius: '6px',
                        zIndex: 1,
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: -5,
                        right: -5,
                        width: 150,
                        height: 100,
                        borderBottom: '1px solid #1976d2',
                        borderRight: '1px solid #1976d2',
                        borderBottomRightRadius: '6px',
                        zIndex: 1,
                      }}
                    />

                    <Box
                      sx={{
                        overflow: 'hidden',
                        borderRadius: 2,
                        width: '100%',
                        height: 'auto',
                      }}
                    >
                      <Box
                        component="img"
                        src={event.imageUrl}
                        alt={event.title}
                        sx={{
                          width: '100%',
                          height: '200px',        // 👈 Chiều cao cố định
                          objectFit: 'cover',     // 👈 Cắt ảnh để vừa khít khung mà không bị méo
                          transition: 'transform 0.5s ease',
                          display: 'block',
                          '&:hover': {
                            transform: 'scale(1.1)',
                          },
                        }}
                      />


                    </Box>
                  </Box>

                  {/* Tiêu đề */}
                  <Typography
                    fontSize={17}
                    sx={{
                      fontWeight: 'bold',
                      mt: 1,
                      mb: 1,
                      cursor: 'pointer',
                      transition: 'color 0.3s ease',
                      whiteSpace: 'nowrap',       // 👈 Không cho xuống dòng
                      overflow: 'hidden',         // 👈 Ẩn phần vượt quá
                      textOverflow: 'ellipsis',   // 👈 Hiện dấu ...
                      '&:hover': {
                        color: '#1976d2',
                      },
                    }}
                  >
                    {event.title}
                  </Typography>


                  <Typography variant="body2" color="textSecondary">
                    {event.date}
                  </Typography>

                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {event.description}
                  </Typography>

                  {/* Nút View Details */}
                  <Link href={`new/detail/${event.id ?? 1}`}>
                    <Button
                      variant="outlined"
                      sx={{
                        mt: 2,
                        px: 3,
                        py: 1,
                        color: '#1976d2',
                        borderColor: '#1976d2',
                        overflow: 'hidden',
                        position: 'relative',
                        zIndex: 1,
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          width: '0%',
                          height: '100%',
                          backgroundColor: '#1976d2',
                          zIndex: -1,
                          transition: 'width 0.4s ease',
                        },
                        '&:hover': {
                          color: '#fff',
                          '&::before': {
                            width: '100%',
                          },
                        },
                      }}
                    >
                      View Details
                    </Button>
                  </Link>
                </Paper>
              </SwiperSlide>
            ))}
          </Swiper>

        </Box>
      </SlideInOnScroll>
    </Box>
  )
}

export default BlogSection
