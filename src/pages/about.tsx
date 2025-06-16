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
import BusinessIcon from '@mui/icons-material/Business'
import CodeIcon from '@mui/icons-material/Code'
import SecurityIcon from '@mui/icons-material/Security'
import PeopleIcon from '@mui/icons-material/People'

const hexagonStyle = {
    position: 'relative',
    width: '200px',
    height: '115px',
    backgroundColor: 'white', // Màu xanh nước biển
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    boxShadow: 2,
    '&:before': {
        content: '""',
        position: 'absolute',
        top: '-28px',
        left: '0',
        width: '0',
        height: '0',
        borderLeft: '100px solid transparent',
        borderRight: '100px solid transparent',
        borderBottom: '30px solid #00BFFF', // Màu xanh nước biển
    },
    '&:after': {
        content: '""',
        position: 'absolute',
        bottom: '-28px',
        left: '0',
        width: '0',
        height: '0',
        borderLeft: '100px solid transparent',
        borderRight: '100px solid transparent',
        borderTop: '30px solid #00BFFF', // Màu xanh nước biển
    },
}
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

    const infoData = [
        {
            title: "Mission",
            description: "Helping our customers succeed by providing effective and innovative software solutions.",
        },
        {
            title: "Vision",
            description: "Become a reliable and innovative software partner for all customers.",
        },
        {
            title: "Core Values",
            description: "Respect, Honesty, Commitment.",
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
                                    <Grid item xs={12} sm={6} md={2.4} key={index}>
                                        <Box
                                            sx={{
                                                height: "200px",
                                                border: '1px solid #e0e0e0',
                                                borderRadius: 2,
                                                padding: 3,
                                                textAlign: 'center',
                                                backgroundColor: 'white',
                                                boxShadow: 1,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                transition: 'transform 0.3s',
                                                '&:hover': {
                                                    transform: 'scale(1.05)',
                                                },
                                            }}
                                        >
                                            <img
                                                src={card.image}
                                                alt={card.title}
                                                style={{ width: '30%', }} // Kích thước hình ảnh
                                            />
                                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                                {card.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ mb: 2 }}>
                                                {card.description}
                                            </Typography>
                                            {/* <Typography
                                                variant="body2"
                                                sx={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    position: 'relative',
                                                    cursor: 'pointer',
                                                    color: 'inherit',
                                                    transition: 'color 0.3s ease',
                                                    '&::after': {
                                                        content: '""',
                                                        position: 'absolute',
                                                        left: 0,
                                                        bottom: -2,
                                                        height: '2px',
                                                        backgroundColor: 'blue',
                                                        width: 0,
                                                        transition: 'width 0.5s ease',
                                                    },
                                                    '&:hover': {
                                                        color: 'blue',
                                                        '&::after': {
                                                            width: '100%',
                                                        },
                                                        '& svg': {
                                                            color: 'blue',
                                                            transition: 'color 0.3s ease',
                                                        },
                                                    },
                                                    '& svg': {
                                                        ml: 1,
                                                        transition: 'color 0.3s ease',
                                                    },
                                                }}
                                            >
                                                Explore More
                                                <ArrowForwardIcon />
                                            </Typography> */}
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </Box>
                </FadeSection>
                <FadeSection id='global-software'>
                    <Box sx={{ background: "blue", position: 'relative' }}>
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
                        <Container sx={{ mt: 6, mb: 4, p: 6 }}>
                            <Box textAlign={"center"}>
                                <img width={"5%"} src="https://tmastorage.azureedge.net/cdn/en/_next/static/media/icon_header.734c55dc.webp" alt="" />
                            </Box>
                            <Typography variant="h5" align="center" sx={{ mb: 3, color: 'white' }}>
                                Global Software Outsourcing Company
                            </Typography>
                            <Typography variant="body1" align="center" sx={{ mb: 4, color: 'white' }}>
                                Solutions, headquartered in Vietnam, is a leading software outsourcing company with a global footprint. Explore our 8 overseas offices (USA, Canada, Germany, Japan, Australia, Singapore) for outstanding IT solutions.
                            </Typography>
                            <Grid
                                container
                                spacing={2}              // spacing ngang
                                rowSpacing={4}           // spacing dọc riêng biệt cho mobile rõ hơn
                                justifyContent="center"
                            >
                                {infoData.map((item, index) => (
                                    <Grid item xs={12} sm={4} key={index}>
                                        <Box
                                            sx={{
                                                ...hexagonStyle,
                                                mb: { xs: 3, sm: 0 }, // khoảng cách dưới khi là mobile
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                sx={{ fontWeight: 'bold', textAlign: 'center' }}
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ textAlign: 'center', padding: 1 }}
                                            >
                                                {item.description}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>

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
                                <Box>
                                    <Grid item xs={12} md={12}>
                                        <Box >
                                            <img width={"10%"} src="https://tmastorage.azureedge.net/cdn/en/_next/static/media/icon_header.734c55dc.webp" alt="" />
                                        </Box>
                                        <Typography variant='h4' sx={{ fontWeight: "bold" }}>Our Expertise</Typography>
                                        <Typography  >With Solutions' expertise, we are one of the leading software outsourcing companies in Vietnam, housing a team of skilled engineers and catering to diverse industries' needs. With TMA Solutions' expertise, we are one of the leading software outsourcing companies in Vietnam, housing a team of skilled engineers and catering to diverse industries' needs.</Typography>
                                    </Grid>
                                    <Box sx={{ listStyleType: 'disc', mt: 2 }}>
                                        {expertiseData.map((item, index) => (
                                            <Typography key={index} variant="body2" sx={{ mb: 1 }}>
                                                - {item}
                                            </Typography>
                                        ))}
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
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
                                With TMA Solutions' expertise, we are one of the leading software outsourcing companies in Vietnam, providing high-quality services to clients around the world.
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
                    <Container sx={{ mt: 15, mb: 2 }}>
                        <Box textAlign="center" >
                            <EmojiEventsIcon sx={{ fontSize: 60, color: '#FFD700', mb: 1 }} />
                            <Typography variant="h5" align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
                                Awards and Recognitions
                            </Typography>
                        </Box>
                        <Typography textAlign={"center"} sx={{ mb: 4 }}>
                            TMA Solutions has garnered numerous accolades, notably the VINASA award, ranking among the Top 10 Software Outsourcing and IT Services enterprises in Vietnam. Our core mission is to ensure our customers' success through the delivery of effective and innovative software solutions.
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


