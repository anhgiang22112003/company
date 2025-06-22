import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { Box, Breadcrumbs, Button, Container, Fade, Grid, IconButton, Link, Paper, Stack, Typography } from '@mui/material'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import ScrollDots from '../components/ScrollDots'




const SoftwareDevelopmentPage = () => {

    const engineers = [
        {
            count: "700",
            title: "Engineers",
            description: "Big Data & Analytics, AI/ML",
            imageUrl: "https://tmastorage.azureedge.net/media/services/softwareDevelopment/ourTeam/big-data-analytics-aiml-developers.webp",
        },
        {
            count: "400",
            title: "Engineers",
            description: "Cloud, DevOps",
            imageUrl: "https://tmastorage.azureedge.net/media/services/softwareDevelopment/ourTeam/cloud-devops.webp",
        },
        {
            count: "700",
            title: "Engineers",
            description: "Java",
            imageUrl: "https://tmastorage.azureedge.net/media/services/softwareDevelopment/ourTeam/java-developers.webp",
        },
        {
            count: "600",
            title: "Engineers",
            description: "Microsoft Technologies",
            imageUrl: "https://tmastorage.azureedge.net/media/services/softwareDevelopment/ourTeam/microsoft-technologies-developers.webp",
        },
        {
            count: "800",
            title: "Engineers",
            description: "Web - Mobile (Node.js, Angular, React, PHP, Ruby, Golang, Python)",
            imageUrl: "https://tmastorage.azureedge.net/media/services/softwareDevelopment/ourTeam/web-mobile-developers.webp",
        },
        {
            count: "400",
            title: "Engineers",
            description: "C/C++ - Embedded, IoT",
            imageUrl: "https://tmastorage.azureedge.net/media/services/softwareDevelopment/ourTeam/c-c-plusplus-embedded-iot-developers.webp",
        },
    ]


    const services = [
        {
            title: "R&D",
            description: "Research and Development services.",
            imageUrl: "https://tmastorage.azureedge.net/media/services/softwareDevelopment/ourService/r-d.webp",
        },
        {
            title: "MVP Development",
            description: "Create Minimum Viable Products.",
            imageUrl: "https://tmastorage.azureedge.net/media/services/softwareDevelopment/ourService/mvp-development.webp",
        },
        {
            title: "Maintenance & Support",
            description: "Support for your existing products.",
            imageUrl: "https://tmastorage.azureedge.net/media/services/softwareDevelopment/ourService/maintenance-support-your-existing-products.webp",
        },
        {
            title: "PoC and Prototype Development",
            description: "Proof of Concept and prototype services.",
            imageUrl: "https://tmastorage.azureedge.net/media/services/softwareDevelopment/ourService/poc-and-prototype-development.webp",
        },
        {
            title: "Product Enhancement",
            description: "Enhance your existing products.",
            imageUrl: "https://tmastorage.azureedge.net/media/services/softwareDevelopment/ourService/product-enhancement.webp",
        },
        {
            title: "Porting & Migration",
            description: "Migrate and port your applications.",
            imageUrl: "https://tmastorage.azureedge.net/media/services/softwareDevelopment/ourService/porting-migration.webp",
        },
    ]

    return (
        <>
            <Header />
            <Box>
                <FadeSection >
                    <Container>
                        <Box sx={{ mt: 20, px: 4, p: 2 }}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Link underline="hover" color="#00A1F1" href="/">
                                    <Typography fontWeight={700}>Home</Typography>
                                </Link>

                                <Typography color="#00A1F1">›</Typography>

                                <Link href="services"><Typography color="#00A1F1">Services</Typography></Link>

                                <Typography color="#00A1F1">{'>'}</Typography>

                                <Typography color="text.primary">Software Development</Typography>
                            </Stack>

                        </Box>
                    </Container>
                </FadeSection>
                <FadeSection id='about' >
                    <Box
                      >
                        <Box >
                            <Container sx={{ textAlign: "center" }}>
                                <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                                <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                    Software Development Services
                                </Typography>
                                <Typography textAlign={"center"} >At Solutions, we offer comprehensive software development services covering the entire software development life cycle (SDLC). From Product Enhancement to MVP development, R&D, PoC and Prototype development, Maintenance & Support, Porting & Migration - we cater to all your software needs with the utmost expertise.</Typography>
                            </Container>
                        </Box>
                        <Container sx={{ mt: 4, mb: 4 }}>
                            <Grid container spacing={1}>
                                {services.map((service, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Paper elevation={3} sx={{ padding: 3, borderRadius: 2, bgcolor: '#2196F3', color: 'white', textAlign: 'center' }}>
                                            <img
                                                src={service.imageUrl}
                                                alt={service.title}
                                                style={{ width: '10%', borderRadius: 8, }}
                                            />
                                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                                {service.title}
                                            </Typography>
                                            <Typography variant="body2">
                                                {service.description}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>

                        </Container>
                    </Box>
                </FadeSection>
                <FadeSection id='about' >
                    <Box   sx={{
                        p:5,
                            background: 'linear-gradient(to bottom, #1976d2, rgba(149, 10, 138, 0.56))',
                            backdropFilter: 'blur(6px)',
                            WebkitBackdropFilter: 'blur(6px)',
                        }}>
                        <Box >
                            <Box textAlign={"center"}>
                                <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                                <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                    Our Team
                                </Typography>
                                <Typography textAlign={"center"} >Our team of highly proficient software engineers excels in offshore software development services. Complying with international standards, we lead as the top ITO company in Vietnam, aiming to conquer key markets worldwide with our diverse skills and technology expertise.</Typography>
                            </Box>
                        </Box>
                        <Container sx={{ mt: 4, mb: 4 }}>

                            <Grid container spacing={4}>
                                {engineers.map((engineer, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Paper elevation={3} sx={{ padding: 3, borderRadius: 2, textAlign: 'center' }}>
                                            <img
                                                src={engineer.imageUrl}
                                                alt={engineer.title}
                                                style={{ width: '10%', borderRadius: 8, }}
                                            />
                                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                                {engineer.count}
                                            </Typography>
                                            <Typography variant="body2">
                                                {engineer.description}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </Box>
                </FadeSection>
                <FadeSection id='about' >
                    <Box sx={{ mt: 10 }}>
                        <Box >
                            <Container sx={{ textAlign: "center" }}>
                                <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                                <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                    Intensive Agile Experience
                                </Typography>
                                <Typography textAlign={"center"} >With extensive expertise in offshore software development, Solutions delivers amazing agile software outsourcing services. Our team ensures efficient project management, rapid delivery, and continuous improvement, making us the preferred choice for businesses seeking intensive Agile experience.</Typography>
                            </Container>
                        </Box>
                        <Container sx={{ mt: 4, mb: 4 }}>
                            <img width={"100%"} src="https://tmastorage.azureedge.net/uploadfiles/SoftwareDev/software-intensive-1_20231123035847.423.webp" alt="" />
                        </Container>
                    </Box>
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
                                        Software IT Outsourcing
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


export default SoftwareDevelopmentPage


