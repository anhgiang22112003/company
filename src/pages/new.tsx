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
} from '@mui/material'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import FadeSection from '../components/FadeSection'
import ScrollToTopButton from '../components/ScrollToTopButton'

// Dữ liệu cho phần tin tức
const newsEvents = [
  {
    title: "Strengthens Customization and Logistics Solutions",
    description: "Solutions enhances its logistics solutions to meet growing demands.",
    date: "March 15, 2023",
    imageUrl: "https://www.tmasolutions.com/uploadfiles/News/Image%20(13)_2025-05-26-03-32-40-256.webp",
  },
  {
    title: "Solutions' Champions: Going the Extra Mile",
    description: "Celebrating our employees who go above and beyond.",
    date: "February 20, 2023",
    imageUrl: "https://www.tmasolutions.com/uploadfiles/News/Image%20(13)_2025-05-26-03-32-40-256.webp",
  },
  {
    title: "2023 KOREA-VIETNAM DIGITAL INNOVATION FORUM",
    description: "Join us for a forum on digital innovation.",
    date: "January 30, 2023",
    imageUrl: "https://www.tmasolutions.com/uploadfiles/News/Image%20(13)_2025-05-26-03-32-40-256.webp",
  },
  {
    title: "Solutions joins Vietnam Innovation Network",
    description: "Solutions collaborates with various partners to innovate in tech.",
    date: "December 12, 2022",
    imageUrl: "https://www.tmasolutions.com/uploadfiles/News/Image%20(13)_2025-05-26-03-32-40-256.webp",
  },
]
const newsData = [
  {
    id: 1,
    title: 'Vietnam with the Golden Opportunity in the Global AI...',
    date: '30/05/2025',
    category: 'Industry News',
    imageUrl: 'https://www.tmasolutions.com/uploadfiles/News/aisc-2025-international-conference-the-intersection-of-ai-and-semiconductors-a-new-position-for-vietnam-20250312150945_2025-05-30-05-11-41-227.webp',
    description: 'The 2025 International Conference on Artificial Intelligence...',
  },
  {
    id: 2,
    title: 'NVIDIA Opens First R&D Center in Vietnam',
    date: '10/12/2024',
    category: 'Company News',
    imageUrl: 'https://tmastorage.azureedge.net/uploadfiles/News/NVIDIA_2024-12-10-08-54-02-764.webp',
    description: 'December 5, 2024 NVIDIA has announced...',
  },
  {
    id: 3,
    title: 'AI Driving Sustainable Agriculture in Vietnam',
    date: '04/01/2024',
    category: 'Vietnam - A Fast Growing Tech Market',
    imageUrl: 'https://tmastorage.azureedge.net/uploadfiles/News/AI%20Driving%20Sustainable%20Agriculture%20in%20Vietnam_2024-11-14-04-54-38-991.webp',
    description: 'In recent years, AI has been applied to agriculture...',
  },
  // Thêm các mục khác tùy theo nhu cầu
]
const menuItems = ['All', 'Company News', 'Industry News', 'vietnam-a-fast-growing-tech-market']


const NewsEventsPage: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredNews =
    selectedCategory === 'All'
      ? newsEvents
      : newsData.filter((news) => news.category === selectedCategory)
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
              News & Events
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
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              <Link underline="hover" color="#00A1F1" href="/">
                <Typography fontWeight={700}>Home</Typography>
              </Link>
              <Typography color="text.primary">New</Typography>
            </Breadcrumbs>
          </Box>
        </Container>
      </FadeSection>
      <FadeSection>
        <Container sx={{ mt: 4, mb: 4, justifyContent: 'center', }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                backgroundColor: '#f5f5f5',
                padding: 1.5,
                borderRadius: 2,
                width: 'fit-content',
              }}
            >
              {menuItems.map((item) => {
                const isActive = activeMenu === item
                return (
                  <Box
                    key={item}
                    onClick={() => {
                      setActiveMenu(item)
                      setSelectedCategory(item)
                    }}

                    sx={{
                      position: 'relative',
                      cursor: 'pointer',
                      px: 3,
                      py: 1.5,
                      borderRadius: 1.5,
                      overflow: 'hidden',
                      color: isActive ? 'white' : 'black',
                      transition: 'color 0.3s ease-in-out',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: isActive ? '100%' : '0%',
                        height: '100%',
                        backgroundColor: '#1976d2',
                        zIndex: 0,
                        transition: 'width 0.4s ease-in-out',
                        borderRadius: 1.5,
                      },
                      '&:hover': {
                        color: 'white',
                        '&::before': {
                          width: '100%',
                        },
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        position: 'relative',
                        zIndex: 1,
                        fontWeight: 500,
                        userSelect: 'none',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                )
              })}
            </Box>
          </Box>

          <Grid container spacing={4}>
            {filteredNews.map((event, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper elevation={3} sx={{ p: 2, }}>
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
                        src={event.imageUrl}
                        alt={event.title}
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
                    {event.title}
                  </Typography>

                  <Typography variant="body2" color="textSecondary">
                    {event.date}
                  </Typography>

                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {event.description}
                  </Typography>

                  {/* Nút View Details */}
                  <Link href='new/detail/1'>
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


              </Grid>
            ))}
          </Grid>
        </Container>
      </FadeSection>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 4 }}>
        <Pagination count={5} variant="outlined" shape="rounded" />
      </Box>
      <ScrollToTopButton />
      <Footer></Footer>
    </>
  )
}

export default NewsEventsPage

