import React, { useState } from 'react'
import { Box, Grid, Typography, Avatar, Container, CssBaseline, Stack, Link, Paper, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'

const telecomIcons = [
    {
        src: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240621134026.330.webp',
        title: '28 Years of experience in Telecom Software & Solution Services',
    },
    {
        src: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240621134032.876.webp',
        title: '2,000 Engineers',
    },
    {
        src: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240621134038.954.webp',
        title: 'R&D Centers for leading companies',
    },
]

const hexagonImages = [
    'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240621133930.544.webp',
    'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240621133941.577.webp',
    'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240621133951.972.webp',
]
const menuItems = [
    {
        label: '5G',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_icon_20240801090712.997.webp',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240801090710.777.webp',
    },
    {
        label: 'Cloud/NFV',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_icon_20240801090830.256.webp',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240801090829.010.webp',
    },
    {
        label: 'Enterprise Solutions',
        icon: 'https://www.tmasolutions.com/uploadfiles/PageSection/section_content_image_icon_20240801090947.496.webp',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240801090945.957.webp',
    },
    {
        label: 'Clients',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_icon_20240801091012.382.webp',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240801091011.351.webp',
    },
    {
        label: 'Networking',
        icon: 'https://www.tmasolutions.com/uploadfiles/PageSection/section_content_image_icon_20240801091041.734.webp',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240801091040.792.webp',
    },
]

const HexImage = ({ src, size = 200 }: any) => (
    <Box
        sx={{
            width: size,
            height: size,
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            clipPath:
                'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
            WebkitClipPath:
                'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
            mx: 'auto',
        }}
    />
)

const TelecomBanner = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)

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
                                    Telecom
                                </Typography>
                                <Typography variant="body1" mb={4}>
                                    With more than 28 years of experience in the Telecom industry, Solutions stands as a leading telecom services provider and an expert in telecom software development. Our comprehensive suite of End-to-End Services and cutting-edge telecom applications are designed to fast-track your market readiness. Whether you require assistance in Enterprise Communications, Carrier Communications, Broadband Network, EMS/NMS/OSS/BSS, or 5G R&D Lab, our proficient team is at your service.
                                </Typography>

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
                                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                                        <HexImage src={hexagonImages[0]} />
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: '-60px' }}>
                                        <HexImage src={hexagonImages[1]} />
                                        <HexImage src={hexagonImages[2]} />
                                    </Box>
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

                            <Typography color="text.primary">Industries</Typography>
                        </Stack>

                    </Box>
                </Container>
            </FadeSection>
            <FadeSection>
                <Container>
                    <img width={"100%"} src="https://tmastorage.azureedge.net/uploadfiles/PageSection/pageSection_image_20240718170713.903.webp" alt="" />
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
                                Domains of expertise
                            </Typography>
                            <Typography textAlign={"center"} >At Solutions, our engineers are well-versed in telecom software services and telecommunication networks, with a wealth of experience spanning many years. Count on us for unparalleled expertise in these crucial telecom domains.</Typography>
                        </Container>
                    </Box>
                    <Container>
                        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                            <Grid container spacing={4}>
                                {/* Menu bên trái */}
                                <Grid item xs={12} md={4}>
                                    <List component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                        {menuItems.map((item, index) => (
                                            <ListItemButton
                                                key={item.label}
                                                selected={selectedIndex === index}
                                                onClick={() => setSelectedIndex(index)}
                                                sx={{
                                                    borderRadius: 2,
                                                    bgcolor: selectedIndex === index ? 'primary.main' : 'transparent',
                                                    color: selectedIndex === index ? 'white' : 'black',
                                                    '&:hover': {
                                                        bgcolor: 'primary.light',
                                                        color: 'white',
                                                    },
                                                }}
                                            >
                                                <ListItemIcon>
                                                    <Avatar src={item.icon} variant="square" sx={{ width: 40, height: 40 }} />
                                                </ListItemIcon>
                                                <ListItemText primary={item.label} />
                                            </ListItemButton>
                                        ))}
                                    </List>
                                </Grid>

                                {/* Ảnh bên phải */}
                                <Grid item xs={12} md={8}>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            minHeight: 400,
                                            borderRadius: 2,
                                            overflow: 'hidden',
                                            boxShadow: 3,
                                        }}
                                    >
                                        <img
                                            src={menuItems[selectedIndex].image}
                                            alt={menuItems[selectedIndex].label}
                                            style={{
                                                width: '100%',
                                                
                                                
                                                
                                            }}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Container>
                </Box>
            </FadeSection>
            <ScrollToTopButton />
            <Footer />
        </>
    )
}

export default TelecomBanner
