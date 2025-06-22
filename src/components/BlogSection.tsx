import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SlideInOnScroll from './SlideInOnScroll'

const BlogSection = () => {
  const slides = [
    {
      date: 'February 28, 2023',
      title: 'Tech Leaders Guide to Outsourcing',
      image: 'https://kms-technology.com/wp-content/uploads/2024/11/quality-assurance-concept-business-people-show-high-quality-assurance-mark-excellence-service-high-quality-business-excellence-good-service-premium-five-stars-premium-service-assurance-scaled.jpg',
      desc: 'Tech leaders understand the demand for digital transformation better than anyone...'
    },
    {
      date: 'January 6, 2023',
      title: 'Top 6 Countries for Software Outsourcing',
      image: 'https://kms-technology.com/wp-content/uploads/2024/10/aerial-shot-u-s-bank-tower-los-angeles-scaled.jpg',
      desc: 'Software development outsourcing has become common across global markets...'
    },
    {
      date: 'March 1, 2023',
      title: 'Digital Strategy for Small Businesses',
      image: 'https://kms-technology.com/wp-content/uploads/2024/11/quality-assurance-concept-business-people-show-high-quality-assurance-mark-excellence-service-high-quality-business-excellence-good-service-premium-five-stars-premium-service-assurance-scaled.jpg',
      desc: 'Digital transformation strategies help small businesses stay competitive...'
    }
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center">
        Blogs and Resources
      </Typography>

           <Grid container spacing={4}>
           <Grid item xs={12} md={6}>
            <SlideInOnScroll>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000 }}
            slidesPerView={1}
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <Card sx={{ borderRadius: 3 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={slide.image}
                    alt={slide.title}
                  />
                  <CardContent>
                    <Typography variant="caption" color="text.secondary">
                      Addie Lawrence • {slide.date}
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {slide.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {slide.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper></SlideInOnScroll>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1 }}>
            {slides.map((_, idx) => (
              <Box
                key={idx}
                sx={{
                  width: 10,
                  height: 10,
                  bgcolor: 'blue',
                  borderRadius: '50%',
                  opacity: 0.4,
                  transition: 'opacity 0.3s',
                  '&:hover': { opacity: 1 },
                }}
              />
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
            
          <Card sx={{ bgcolor: '#001F3F', color: 'white', borderRadius: 3, p: 2, height: '100%' }}>
           <SlideInOnScroll direction='right'> 
            <Box height={"100%"}>
            <Grid container spacing={2} alignItems="center" sx={{ height: '100%' }}>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  image="https://kms-technology.com/wp-content/uploads/2025/01/cto-guide.webp"
                  alt="AI Guide"
                  sx={{ height: '100%', objectFit: 'contain' }}
                />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="subtitle1" fontWeight="bold">
                  CTO Guide: Choosing the Right AI Technology Stack
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Clients want the most from their data, and AI helps streamline operations. This guide...
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Download Now
                </Button>
              </Grid>
            </Grid></Box></SlideInOnScroll>
          </Card>
          
        </Grid>
      </Grid>


      {/* Swiper responsive */}
      <SlideInOnScroll>
      <Box mt={6}>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <Card sx={{ borderRadius: 3 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={slide.image}
                  alt={slide.title}
                />
                <CardContent>
                  <Typography variant="caption" color="text.secondary">
                    KMS Team • {slide.date}
                  </Typography>
                  <Typography fontWeight="bold">
                    {slide.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {slide.desc}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box></SlideInOnScroll>
    </Box>
  );
};

export default BlogSection;
