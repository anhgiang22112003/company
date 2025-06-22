import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { Box, Breadcrumbs, Button, Container, Fade, Grid, IconButton, Link, Paper, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ScrollToTopButton from '../components/ScrollToTopButton'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import WorkIcon from '@mui/icons-material/Work'
import AssessmentIcon from '@mui/icons-material/Assessment'
import { LocationOn, Verified, Code } from '@mui/icons-material'
import FadeSection from '../components/FadeSection'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents' // Icon hình cúp
import ScrollDots from '../components/ScrollDots'
import { styled } from '@mui/system'
import IntegrityIcon from '@mui/icons-material/HandshakeOutlined' // Biểu tượng cho Integrity
import ExcellenceIcon from '@mui/icons-material/EmojiEventsOutlined' // Biểu tượng cho Excellence
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined' // Biểu tượng cho Joy (vui vẻ)
import SlideInOnScroll from '../components/SlideInOnScroll'

const ValueItem = styled(Box)(({ theme }) => ({
    backgroundColor: '#FFF', // Nền trắng cho mỗi card giá trị
    borderRadius: theme.shape.borderRadius, // Sử dụng border-radius của theme
    padding: theme.spacing(4), // Padding lớn hơn
    textAlign: 'center',
    height: '100%', // Đảm bảo chiều cao bằng nhau
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)', // Shadow nhẹ nhàng
    border: '1px solid #E0E7EB', // Border mỏng
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-5px)', // Hiệu ứng nhô lên khi hover
        boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.1)', // Shadow mạnh hơn khi hover
    },
}))

// Styled Box cho container của icon


const section = [
    { id: 'about', label: 'About' },
    { id: 'global-software', label: 'Global Software' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'profile', label: 'Profile' },
    { id: 'awards', label: 'Awards' },
    { id: 'download', label: 'Download' },
]

const AboutPage = () => {

    const cards = [
        {
            title: 'Why',
            description: 'Your Technology & Innovation Partner',
            image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240701172550.100.webp',
        },
        {
            title: 'Leadership',
            description: 'Experienced executive team in employee orientation and leadership',
            image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240701172659.455.webp',
        },
        {
            title: 'Company History',
            description: 'Our formation and continuous development over the last 28 years',
            image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240701172711.944.webp',
        },
        {
            title: 'CSR',
            description: " CSR strategy focuses on people, society, and environment",
            image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240701172746.933.webp',
        },
        {
            title: 'Image Gallery',
            description: 'Our facilities, people, activities, and events',
            image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240701172822.783.webp',
        },
    ]


    const expertiseData = [
        "Telecom, 5G, IoT, Automotive",
        "Finance & Insurance",
        "Data Analytics & AI/ML",
        "E-commerce, Retail, Distribution, Logistics",
        "IT & Robotics",
        "Application Development",
        "Testing Center",
        "Cloud, DevOps",
    ]
    const briefProfileData = {
        established: '1997',
        coreValues: '4,000 Employees',
        capabilities: "Ha noi City ,Vietnam",
    }
    const locations = [
        { country: "Vietnam", cities: ["Ho Chi Minh City", "Quy Nhon City"] },
        { country: "USA", cities: ["San Jose"] },
        { country: "Canada", cities: ["Ottawa"] },
        { country: "Germany", cities: ["Munich"] },
        { country: "Australia", cities: ["Melbourne", "Adelaide"] },
        { country: "Japan", cities: ["Tokyo"] },
        { country: "Singapore", cities: ["Singapore"] },
    ]
    const internationalStandards = [
        "RLP",
        "ISO 9001:2000",
        "CMMI Level 3",
        "Agile",
        "ISO/IEC 27001:2022",
    ]
    const softwareCapabilities = [
        "Telecom, 5G, Automotive: 2,000 Engineers",
        "Finance & Insurance: 600 Engineers",
        "E-commerce & Retail: 400 Engineers",
        "Logistics: 200 Engineers",
    ]
    const awards = [
        {
            title: "GOLD MEDAL",
            description: "for Software Export and Top ICT Companies from HCMC Computer Associations (2004-2022)",
            imageUrl: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702103855.372.webp",
        },
        {
            title: "ONE OF THE TOP 15",
            description: "in the category of 'Offshore Software Outsourcing Best Practices' (VNUSA, 2023)",
            imageUrl: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702103855.372.webp",
        },
        {
            title: "TOP 10",
            description: "Software Outsourcing and IT Services enterprises (VNUSA, 2023)",
            imageUrl: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702103855.372.webp",
        },
        {
            title: "TOP 10",
            description: "Healthtech Smart City Companies (VNUSA, 2023)",
            imageUrl: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702103855.372.webp",
        },
        {
            title: "TOP 10",
            description: "Healthtech Smart City Companies (VNUSA, 2023)",
            imageUrl: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702103855.372.webp",
        },
    ]
    const values = [
        {
            icon: <IntegrityIcon />,
            title: 'Integrity',
            description: 'We believe in doing the right thing and following ethical business practices. At , we pride ourselves in transparency, we keep our promises, and we strive to always do good.'
        },
        {
            icon: <ExcellenceIcon />,
            title: 'Excellence',
            description: 'Focusing on achieving excellence provides great business value and personal pride. At , we bring together great people who strive to meet very high standards.'
        },
        {
            icon: <SentimentSatisfiedAltIcon />,
            title: 'Joy',
            description: 'Our teams prioritize positive work environments where innovation and challenges are met with enthusiasm. At , we enjoy the work we do, where we do it, and who we work with.'
        },
    ]

    return (
        <>
            <Header />
            <ScrollDots sections={section} />
            <Box>
                <FadeSection >
                    <Container>
                        <Box sx={{ mt: 20, px: 4, p: 2 }}>
                            <Breadcrumbs separator="›" aria-label="breadcrumb">
                                <Link underline="hover" color="#00A1F1" href="/">
                                    <Typography fontWeight={700}>Home</Typography>
                                </Link>
                                <Typography color="text.primary">About</Typography>
                            </Breadcrumbs>
                        </Box>
                    </Container>
                </FadeSection>
                <FadeSection id='about' >
                    <Box sx={{ mt: 10 }}>
                        <Box >
                            <Container>
                                <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                    About IT Outsourcing
                                </Typography>
                                <Typography textAlign={"center"} >Established in 1997,Solutions stands out as one of the premier Vietnam software outsourcing companies. We have been providing various services, especially agile software outsourcing services to clients, our highly skilled engineers are dedicated to delivering exceptional IT outsourcing solutions.</Typography>
                            </Container>
                        </Box>
                        <Container sx={{ mt: 6 }}>
                           <Grid container spacing={3}>
  {cards.map((card, index) => (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      lg={2.4}
      key={index}
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          height: '100%',
          border: '1px solid #e0e0e0',
          borderRadius: 2,
          padding: 3,
          backgroundColor: 'white',
          boxShadow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      >
        {/* Ảnh: giữ cùng chiều cao và canh giữa */}
        <Box
          component="img"
          src={card.image}
          alt={card.title}
          sx={{
            width: '20%',
            objectFit: 'contain',
           
          }}
        />

        {/* Tiêu đề: giữ chiều cao đồng đều */}
        <Typography
          fontSize={17}
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            height: 48, // chiều cao cố định cho tiêu đề (2 dòng)
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            
          }}
        >
          {card.title}
        </Typography>

        {/* Mô tả: tự co giãn, không làm vỡ layout */}
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            textAlign: 'center',
            
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            
            WebkitBoxOrient: 'vertical',
          }}
        >
          {card.description}
        </Typography>
      </Box>
    </Grid>
  ))}
</Grid>



                        </Container>
                    </Box>
                </FadeSection>
                <FadeSection id='global-software'>
                    <Box sx={{
                        background: 'linear-gradient(to bottom, #1976d2, rgba(149, 10, 138, 0.56))',
                        
                        position: 'relative'
                    }}>
                        <img
                            src="https://tmastorage.azureedge.net/cdn/en/_next/static/media/decor_left.8fb5f39e.webp"
                            alt="Decoration"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100px', // Kích thước hình ảnh
                                height: 'auto',
                                zIndex: 0,
                            }}
                        />
                        <Container sx={{ mt: 6, p: 3 }}>
                            <Box textAlign={"center"}>
                                <img width={"5%"} src="https://tmastorage.azureedge.net/cdn/en/_next/static/media/icon_header.734c55dc.webp" alt="" />
                            </Box>
                            <Typography variant="h5" align="center" sx={{ mb: 3, color: 'white' }}>
                                Global Software Outsourcing Company
                            </Typography>
                            <Typography variant="body1" align="center" sx={{  color: 'white' }}>
                                Solutions, headquartered in Vietnam, is a leading software outsourcing company with a global footprint. Explore our 8 overseas offices (USA, Canada, Germany, Japan, Australia, Singapore) for outstanding IT solutions.
                            </Typography>
                            <Box
                                sx={{
                                    py: { xs: 6, md: 6 }, // Padding trên dưới lớn

                                }}
                            >
                                <Container maxWidth="lg">
                                    <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
                                        {values.map((value, index) => (
                                            <Grid item xs={12} sm={6} md={4} key={index}>
                                                <ValueItem>

                                                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1.5, color: '#333' }}>
                                                        {value.title}
                                                    </Typography>
                                                    <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                                                        {value.description}
                                                    </Typography>
                                                </ValueItem>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Container>
                            </Box>

                        </Container>
                        <img
                            src="https://tmastorage.azureedge.net/cdn/en/_next/static/media/decor_left.8fb5f39e.webp"
                            alt="Decoration"
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: '100px', // Kích thước hình ảnh
                                height: 'auto',
                                zIndex: 0,
                            }}
                        />
                    </Box>
                </FadeSection>
                <FadeSection id='expertise'>
                    <Container sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={6}>
                                <SlideInOnScroll >
                                    <Box>
                                        <Grid item xs={12} md={12}>
                                            <Box >
                                                <img width={"10%"} src="https://tmastorage.azureedge.net/cdn/en/_next/static/media/icon_header.734c55dc.webp" alt="" />
                                            </Box>
                                            <Typography variant='h4' sx={{ fontWeight: "bold" }}>Our Expertise</Typography>
                                            <Typography  >With Solutions' expertise, we are one of the leading software outsourcing companies in Vietnam, housing a team of skilled engineers and catering to diverse industries' needs. With  Solutions' expertise, we are one of the leading software outsourcing companies in Vietnam, housing a team of skilled engineers and catering to diverse industries' needs.</Typography>
                                        </Grid>
                                        <Box sx={{ listStyleType: 'disc', mt: 2 }}>
                                            {expertiseData.map((item, index) => (
                                                <Typography key={index} variant="body2" sx={{ mb: 1 }}>
                                                    - {item}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </Box>
                                </SlideInOnScroll>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <SlideInOnScroll direction='right'>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <img src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702162903.598.webp" alt="Expertise 1" style={{ width: '100%', borderRadius: 8 }} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <img src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702162921.295.webp" alt="Expertise 2" style={{ width: '100%', borderRadius: 8 }} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <img src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702162903.598.webp" alt="Expertise 3" style={{ width: '100%', borderRadius: 8 }} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <img src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702162940.000.webp" alt="Expertise 4" style={{ width: '100%', borderRadius: 8 }} />
                                        </Grid>
                                    </Grid>
                                </SlideInOnScroll>
                            </Grid>
                        </Grid>
                    </Container>
                </FadeSection>
                <FadeSection id='profile'>
                    <Box sx={{ bgcolor: '#E3F2FD' }}>

                        <Container sx={{ mt: 4, mb: 4, padding: 4, borderRadius: 2 }}>
                            <Box textAlign={"center"}>
                                <img width={"5%"} src="https://tmastorage.azureedge.net/cdn/en/_next/static/media/icon_header.734c55dc.webp" alt="" />
                            </Box>
                            <Typography variant="h5" align="center" sx={{ mb: 2 }}>
                                Brief Profile
                            </Typography>
                            <Typography variant="body1" align="center" sx={{ mb: 4 }}>
                                With Solutions' expertise, we are one of the leading software outsourcing companies in Vietnam, providing high-quality services to clients around the world.
                            </Typography>
                            <Grid container spacing={4} justifyContent="center">
                                <Grid item xs={12} sm={4}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <IconButton>
                                            <img
                                                src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702094234.630.webp"
                                                alt="Established Icon"
                                                style={{ width: '60px', height: '60px' }}
                                            />
                                        </IconButton>
                                        <Typography variant="h6" sx={{ mt: 1 }}>
                                            Established
                                        </Typography>
                                        <Typography variant="body2">
                                            {briefProfileData.established}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <IconButton>
                                            <img
                                                src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702094316.629.webp"
                                                alt="Core Values Icon"
                                                style={{ width: '60px', height: '60px' }}
                                            />
                                        </IconButton>
                                        <Typography variant="h6" sx={{ mt: 1 }}>
                                            Company size
                                        </Typography>
                                        <Box sx={{ listStyleType: 'disc', pl: 2 }}>

                                            <Typography variant="body2">
                                                {briefProfileData.coreValues}
                                            </Typography>

                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <IconButton>
                                            <img
                                                src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702094417.412.webp"
                                                alt="Capabilities Icon"
                                                style={{ width: '60px', height: '60px' }}
                                            />
                                        </IconButton>
                                        <Typography variant="h6" sx={{ mt: 1 }}>
                                            Headquarter
                                        </Typography>
                                        <Box sx={{ listStyleType: 'disc', pl: 2 }}>

                                            <Typography variant="body2">
                                                {briefProfileData.capabilities}
                                            </Typography>

                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Container sx={{ mt: 4, mb: 4, bgcolor: 'white', padding: 4, borderRadius: 2 }}>
                                <Grid container spacing={4}>
                                    {/* Locations */}
                                    <Grid item xs={12} sm={4}>
                                        <Box
                                            sx={{
                                                border: '1px solid #ccc',
                                                borderRadius: 2,
                                                p: 2,
                                                minHeight: 150,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 1,
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                                <LocationOn sx={{ color: 'primary.main' }} />
                                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                                    Locations
                                                </Typography>
                                            </Box>

                                            {locations.map((location, index) => (
                                                <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                                                    <Typography variant="body1" sx={{ fontWeight: 'bold', minWidth: 90 }}>
                                                        {location.country}:
                                                    </Typography>
                                                    <Typography variant="body2">{location.cities.join(' • ')}</Typography>
                                                </Box>
                                            ))}
                                        </Box>
                                    </Grid>

                                    {/* International Standards */}
                                    <Grid item xs={12} sm={4}>
                                        <Box
                                            sx={{
                                                border: '1px solid #ccc',
                                                borderRadius: 2,
                                                p: 2,
                                                minHeight: 150,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 1,
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                                <Verified sx={{ color: 'success.main' }} />
                                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                                    International Standards
                                                </Typography>
                                            </Box>

                                            {internationalStandards.map((standard, index) => (
                                                <Typography key={index} variant="body2">
                                                    • {standard}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </Grid>

                                    {/* Software Capabilities */}
                                    <Grid item xs={12} sm={4}>
                                        <Box
                                            sx={{
                                                border: '1px solid #ccc',
                                                borderRadius: 2,
                                                p: 2,
                                                minHeight: 150,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 1,
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                                <Code sx={{ color: 'info.main' }} />
                                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                                    Software Capabilities
                                                </Typography>
                                            </Box>

                                            {softwareCapabilities.map((capability, index) => (
                                                <Typography key={index} variant="body2">
                                                    • {capability}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Container>
                    </Box>
                </FadeSection>
                <FadeSection id='awards'>
                    <Container sx={{ mt: 5, mb: 2 }}>
                        <Box textAlign="center" >
                            <EmojiEventsIcon sx={{ fontSize: 60, color: '#FFD700', mb: 1 }} />
                            <Typography variant="h5" align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
                                Awards and Recognitions
                            </Typography>
                        </Box>
                        <Typography textAlign={"center"} sx={{ mb: 4 }}>
                            Has garnered numerous accolades, notably the VINASA award, ranking among the Top 10 Software Outsourcing and IT Services enterprises in Vietnam. Our core mission is to ensure our customers' success through the delivery of effective and innovative software solutions.
                        </Typography>

                        {/* Hàng trên: 2 giải đầu - nhỏ hơn và nằm giữa */}
                        <Grid container spacing={4} justifyContent="center">
                            {awards.slice(0, 2).map((award, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            width: '100%',
                                            height: 180,
                                            backgroundImage: `url(${award.imageUrl})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 22,
                                                width: '78%',
                                                height: '100%',
                                                //   backgroundColor: 'rgba(0, 0, 0, 0.45)',
                                                //   color: '#fff',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',

                                                pt: 4,
                                                px: 2,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', }}>
                                                {award.title}
                                            </Typography>
                                            <Typography variant="caption" sx={{ fontSize: 12 }}>
                                                {award.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>

                        {/* Hàng dưới: 3 giải còn lại - to hơn */}
                        <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
                            {awards.slice(2).map((award, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            width: '100%',
                                            height: 180,
                                            backgroundImage: `url(${award.imageUrl})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 22,
                                                width: '78%',
                                                height: '100%',
                                                //   backgroundColor: 'rgba(0, 0, 0, 0.45)',
                                                //   color: '#fff',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                                pt: 4,
                                                px: 2,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', }}>
                                                {award.title}
                                            </Typography>
                                            <Typography variant="caption" sx={{ fontSize: 12 }}>
                                                {award.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </FadeSection>
                <FadeSection id="download">
                    <Container sx={{ mt: { xs: 12, sm: 16, md: 20 } }}>
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
                                        About IT Outsourcing
                                    </Link>
                                </Box>
                            </Container>
                        </Box>
                    </Container>
                </FadeSection>


            </Box>
            <ScrollToTopButton />
            <Footer />
        </>
    )
}


export default AboutPage


