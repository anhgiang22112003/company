import React, { useState } from 'react'
import { Box, Grid, Typography, Avatar, Container, CssBaseline, Stack, Link, Paper, List, ListItemButton, ListItemIcon, ListItemText, Divider, ListItem, Button } from '@mui/material'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord' // hình tròn nhỏ
import FileDownloadIcon from '@mui/icons-material/FileDownload'





const data = [
    {
        image: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626090001.963.webp",
        description:
            "Consult and develop management systems i.e HR, CRM, Warehouse, Delivery, etc. to ensure continuous operation.​",
    },

    {

        image: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626090023.039.webp",
        description:
            "Support import and export data connections from existing systems to increase operational flexibility.​​",
    },
    {

        image: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626090044.231.webp",
        description:
            "Apply Big Data & Analytics & AI technologies to solve problems, and increase visibility to achieve business efficiency.​​",
    },
    {

        image: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626090056.309.webp",
        description:
            "Customize and refine both commercial and open-source platforms to reduce development time, and speed up business expansion needs.​​",
    },
]





const technologiesData = [
    {
        title: 'Open Source Technologies',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626090447.109.webp',
    },
    {
        title: 'Cloud & DevOps',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626090501.232.webp',
    },
    {
        title: 'Web & Mobile Technologies',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626090521.287.webp',
    },
    {
        title: 'Java',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626090535.976.webp',
    },
    {
        title: 'Big Data Analytics & AI',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626090546.117.webp',
    },
    {
        title: 'Microsoft Technologies',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240626090604.093.webp',
    },
]


const LogisticsPage = () => {

    return (
        <>
            <CssBaseline />
            <Header />
            <FadeSection>
                <Box
                    sx={{
                        background: 'linear-gradient(to bottom, #1976d2, rgba(10, 75, 149, 0.56))',
                        mt: 18,
                        py: 8,
                        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
                        WebkitClipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
                        overflow: 'hidden',
                    }}
                >
                    <Box sx={{ position: 'absolute' }}>
                        <img
                            width="20%"
                            src="https://www.tmasolutions.com/media/industries/telecom/bg_right.webp"
                            alt=""
                        />
                    </Box>

                    <Container sx={{ textAlign: 'center', position: 'relative' }}>
                        <Box
                            component="img"
                            src="https://tmastorage.azureedge.net/uploadfiles/Banner/banner_20240626114450.844.webp"
                            alt=""
                            sx={{
                                display: 'block',
                                width: { xs: '600px', md: 'auto' },
                                maxWidth: '100%',
                                height: { xs: '220px', md: 'auto' }, // mobile ảnh cao hơn

                            }}
                        />


                        <Box
                            sx={{
                                position: 'absolute',
                                top: '45%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                textAlign: 'center',
                                px: 2,
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: { xs: '8px', md: '24px' }, // nhỏ hơn ở mobile
                                }}
                            >
                                Logistics & Transportation
                            </Typography>

                            <Typography
                                sx={{
                                    mt: 1,
                                    maxWidth: { xs: '90%', md: '250px' },
                                    fontSize: { xs: '8px', md: '14px' }, // nhỏ hơn ở mobile
                                    mx: 'auto',
                                    whiteSpace: 'normal',
                                    overflow: 'hidden',
                                }}
                            >
                                With heavy investment in navigation and map technology, we have developed many applications for transportation and logistics.
                            </Typography>
                        </Box>
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

                            <Typography color="text.primary">Logistics</Typography>
                        </Stack>

                    </Box>
                </Container>
            </FadeSection>
            <FadeSection id='about' >
                <Box p={3} bgcolor={"#f5f5f5"} 
                >
                    <Box >
                        <Container sx={{ textAlign: "center" }}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                Services
                            </Typography>
                            <Typography textAlign={"center"} >
                                We deliver top-tier supply chain management (SCM) solutions and logistics technology solutions, catering to the needs of big logistics and transportation customers. Our end-to-end software development services ensure seamless operations.                            </Typography>
                        </Container>
                    </Box>
                    <Container sx={{ mt: 4, mb: 4 }}>
                        <Box sx={{ p: 4, }}>
                            <Grid container spacing={3}>
                                {data.map((item, index) => (
                                    <Grid item xs={12} sm={6} md={3} key={index}>
                                        <Box
                                            sx={{
                                                backgroundColor: "white",
                                                p: 3,
                                                height: "100%",
                                                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.05)",
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={item.image}

                                                sx={{ width: 40, height: 40, mb: 2 }}
                                            />

                                            <Typography variant="body2" color="text.secondary">
                                                {item.description}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Container>
                </Box>
            </FadeSection>

            <FadeSection id='about' >
                <Box sx={{ background: 'linear-gradient(to bottom, #1976d2, rgba(10, 75, 149, 0.56))', p: 2 }}>
                    <Container>
                        <Container sx={{ textAlign: "center" }}>
                            <img width={"5%"} src="https://www.tmasolutions.com/media/technologies/5G/decorServices.webp" alt="" />
                            <Typography variant="h4" sx={{ mb: 4 }}>
                                Technologies
                            </Typography>
                            <Typography variant="body1" align="left" sx={{ mb: 4 }}>
                                Our logistics management system and transportation management system are built on modern technology. We’re your partner in modernizing the sector.
                            </Typography></Container>
                        <Grid container spacing={2} justifyContent="center">
                            {technologiesData.map((tech, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
                                        <Box component="img" src={tech.icon} alt={tech.title} sx={{ width: '60px', height: '60px', mb: 2 }} />
                                        <Typography variant="h6">
                                            {tech.title}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            </FadeSection>
            {/* <FadeSection id='Microsoft'>
                    <Container>
                        <Box mt={3} p={5} >
                            <Box textAlign={"center"}>
                                <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                                <Typography fontWeight={"bold"} variant='h4'>
                                    Case studies
                                </Typography>
                            </Box>
                            <Box sx={{ p: 4 }}>
                                <Stack direction="row" spacing={2} mb={3}>
                                    {caseStudies.map((tab, index) => (
                                        <Button
                                            key={index}
                                            variant={tabIndex === index ? "contained" : "outlined"}
                                            onClick={() => setTabIndex(index)}
                                            sx={{
                                                px: { xs: 1.5, sm: 2.5 },
                                                py: { xs: 0.5, sm: 1 },
                                                minWidth: 'auto'
                                            }}
                                        >
                                            <Typography fontSize={{ xs: 10, sm: 12 }}>{tab.label}</Typography>
                                        </Button>

                                    ))}
                                </Stack>
                                <Grid container spacing={4}>
                                    <Grid item xs={12} md={6}>
                                        <Stack spacing={3}>
                                            <Box>
                                                <Typography variant="subtitle1" fontWeight="bold">
                                                    Customer’s needs
                                                </Typography>
                                                <List dense>
                                                    {study.needs.map((need, idx) => (
                                                        <ListItem key={idx} sx={{ pl: 0 }}>
                                                            <ListItemText
                                                                primary={
                                                                    <Typography variant="body2" color="text.secondary">
                                                                        {need}
                                                                    </Typography>
                                                                }
                                                            />
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </Box>
                                            <Box>
                                                <Typography variant="subtitle1" fontWeight="bold">
                                                    Solutions
                                                </Typography>
                                                <List dense>
                                                    {study.solutions.map((solution, idx) => (
                                                        <ListItem key={idx} sx={{ pl: 0 }}>
                                                            <ListItemText
                                                                primary={
                                                                    <Typography variant="body2" color="text.secondary">
                                                                        {solution}
                                                                    </Typography>
                                                                }
                                                            />
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </Box>
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <Box
                                            component="img"
                                            src={study.image}
                                            alt={study.label}
                                            sx={{ width: '100%', maxWidth: 500, display: 'block', mx: 'auto' }}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </FadeSection> */}
            <FadeSection id="download">
                <Container sx={{ mt: { xs: 12, sm: 10, md: 10 } }}>
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
                                    Logistics IT Outsourcing
                                </Link>
                            </Box>
                        </Container>
                    </Box>
                </Container>
            </FadeSection>
            <ScrollToTopButton />
            <Footer />
        </>
    )
}

export default LogisticsPage
