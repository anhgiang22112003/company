import React, { useState } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import FadeSection from '../components/FadeSection'
import { Box, Breadcrumbs, Button, Container, Divider, Drawer, FormControlLabel, FormGroup, Grid, IconButton, Link, Pagination, Paper, TextField, useMediaQuery, useTheme } from '@mui/material'
import { Checkbox, Typography, Card, CardContent, Chip } from '@mui/material'
import TuneIcon from '@mui/icons-material/Tune'
import ScrollToTopButton from '../components/ScrollToTopButton'

const CaseStudiesPage = () => {
    const [selectedCategories, setSelectedCategories] = useState<any>([])
    const [selectedIndustries, setSelectedIndustries] = useState<any>([])
    const [selectedTechnologies, setSelectedTechnologies] = useState<any>([])
    const [selectedServices, setSelectedServices] = useState<any>([])
    const [searchTerm, setSearchTerm] = useState<any>(null)
    const [filterOpen, setFilterOpen] = useState(false)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const categories = ['All', 'Agriculture', 'Automotive', 'Cybersecurity', 'E-Commerce & Retail', 'Education',]
    const industries = ['All', 'Telecom', 'E-Commerce & Retail', 'Logistics']
    const technologies = ['All', '5G', 'Big Data & Analytics', 'Cloud', 'Data Science & AI/ML', 'DevOps']
    const services = ['All', 'Digital Transformation', 'Innovation as a service', 'Security', 'Software Development', 'Software Testing']

    const handleCategoryChange = (category: any) => {
        setSelectedCategories(category === 'All' ? [] : [category])
    }

    const handleIndustryChange = (industry: any) => {
        setSelectedIndustries(industry === 'All' ? [] : [industry])
    }

    const handleTechnologyChange = (technology: any) => {
        setSelectedTechnologies(technology === 'All' ? [] : [technology])
    }

    const handleServiceChange = (service: any) => {
        setSelectedServices(service === 'All' ? [] : [service])
    }
    const newsEvents = [
        {
            title: " Strengthens Customization and Logistics Solutions",
            description: "Solutions enhances its logistics solutions to meet growing demands.",
            date: "March 15, 2023",
            imageUrl: "https://www.tmasolutions.com/uploadfiles/News/Image%20(13)_2025-05-26-03-32-40-256.webp",
            tags: ['Telecom', 'E-Commerce & Retail']
        },
        {
            title: " Solutions' Champions: Going the Extra Mile",
            description: "Celebrating our employees who go above and beyond.",
            date: "February 20, 2023",
            imageUrl: "https://www.tmasolutions.com/uploadfiles/News/Image%20(13)_2025-05-26-03-32-40-256.webp",
            tags: ['Telecom', 'E-Commerce & Retail']
        },
        {
            title: "2023 KOREA-VIETNAM DIGITAL INNOVATION FORUM",
            description: "Join us for a forum on digital innovation.",
            date: "January 30, 2023",
            imageUrl: "https://www.tmasolutions.com/uploadfiles/News/Image%20(13)_2025-05-26-03-32-40-256.webp",
            tags: ['Telecom', 'E-Commerce & Retail']
        },
        {
            title: "Solutions joins Vietnam Innovation Network",
            description: "Solutions collaborates with various partners to innovate in tech.",
            date: "December 12, 2022",
            imageUrl: "https://www.tmasolutions.com/uploadfiles/News/Image%20(13)_2025-05-26-03-32-40-256.webp",
            tags: ['Cybersecurity', 'Security']
        },
    ]

    const filteredCaseStudies = newsEvents.filter(study => {
        return (
            (selectedCategories.length === 0 || selectedCategories.includes('All') || selectedCategories.some((cat: any) => study.tags.includes(cat))) &&
            (selectedIndustries.length === 0 || selectedIndustries.includes('All') || selectedIndustries.some((ind: any) => study.tags.includes(ind))) &&
            (selectedTechnologies.length === 0 || selectedTechnologies.includes('All') || selectedTechnologies.some((tech: any) => study.tags.includes(tech))) &&
            (selectedServices.length === 0 || selectedServices.includes('All') || selectedServices.some((serv: any) => study.tags.includes(serv)))
        )
    })
    return (
        <>
            <Header />
            <FadeSection>
                <img style={{ position: "absolute" }} width={"15%"} src="https://www.tmasolutions.com/media/services/decorLeft.webp" alt="" />

                <Box bgcolor={"#1976d2"} textAlign={"center"} p={5} mt={18}>
                    <Box
                        bgcolor="white"
                        sx={{
                            display: 'inline-block',
                            mx: 'auto',
                            mb: 2,
                            px: 2,
                            py: 1,
                        }}
                    >
                        <Box
                            sx={{
                                border: '2px solid #1976d2',
                                boxShadow: 'inset 0 0 0 1px #90caf9',
                                borderRadius: 1,
                                px: 3,
                                py: 1,
                            }}
                        >
                            <Typography
                                variant="h4"
                                color="#1976d2"
                                textAlign="center"
                                fontWeight="bold"
                            >
                                Case Studies
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </FadeSection>
            <FadeSection >
                <Container>
                    <Box sx={{ mt: 2, px: 4, p: 2 }}>
                        <Breadcrumbs separator="›" aria-label="breadcrumb">
                            <Link underline="hover" color="#00A1F1" href="/">
                                <Typography fontWeight={700}>Home</Typography>
                            </Link>
                            <Typography color="text.primary">Case Studies</Typography>
                              {isMobile && (
                            <Box sx={{ textAlign: 'right',}}>
                                <IconButton onClick={() => setFilterOpen(true)}>
                                    <TuneIcon />
                                </IconButton>
                            </Box>
                        )}
                        </Breadcrumbs>
                    </Box>
                </Container>
            </FadeSection>
            <FadeSection>
                <Container>
  
                    <Grid container spacing={3}>
                    

                        {/* Sidebar lọc */}
                        {!isMobile && (
                            <Grid item xs={12} md={3}>
                                <Box sx={{ px: 2 }}>
                                    {/* Ô tìm kiếm */}
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Tìm kiếm..."
                                        size="small"
                                        sx={{ mb: 2 }}
                                    />

                                    {/* Category Filter */}
                                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Categories</Typography>
                                    <Box sx={{
                                        maxHeight: 250,
                                        overflowY: 'auto',
                                        pr: 1,
                                        mb: 2,
                                        '&::-webkit-scrollbar': {
                                            width: '4px',
                                        },
                                        '&::-webkit-scrollbar-thumb': {
                                            backgroundColor: '#ccc',
                                        },
                                    }}>
                                        <FormGroup>
                                            {categories.map((category) => (
                                                <FormControlLabel
                                                    key={category}
                                                    control={
                                                        <Checkbox
                                                            checked={selectedCategories.includes(category)}
                                                            onChange={() => handleCategoryChange(category)}
                                                        />
                                                    }
                                                    label={category}
                                                    sx={{ mr: 0 }}
                                                />
                                            ))}
                                        </FormGroup>
                                    </Box>

                                    {/* Industry Filter */}
                                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Industries</Typography>
                                    <Box sx={{
                                        maxHeight: 250,
                                        overflowY: 'auto',
                                        pr: 1,
                                        mb: 2,
                                        '&::-webkit-scrollbar': {
                                            width: '4px',
                                        },
                                        '&::-webkit-scrollbar-thumb': {
                                            backgroundColor: '#ccc',
                                        },
                                    }}>
                                        <FormGroup>
                                            {industries.map((industry) => (
                                                <FormControlLabel
                                                    key={industry}
                                                    control={
                                                        <Checkbox
                                                            checked={selectedIndustries.includes(industry)}
                                                            onChange={() => handleIndustryChange(industry)}
                                                        />
                                                    }
                                                    label={industry}
                                                    sx={{ mr: 0 }}
                                                />
                                            ))}
                                        </FormGroup>
                                    </Box>

                                    {/* Technology Filter */}
                                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Technologies</Typography>
                                    <Box sx={{
                                        maxHeight: 250,
                                        overflowY: 'auto',
                                        pr: 1,
                                        mb: 2,
                                        '&::-webkit-scrollbar': {
                                            width: '4px',
                                        },
                                        '&::-webkit-scrollbar-thumb': {
                                            backgroundColor: '#ccc',
                                        },
                                    }}>
                                        <FormGroup>
                                            {technologies.map((tech) => (
                                                <FormControlLabel
                                                    key={tech}
                                                    control={
                                                        <Checkbox
                                                            checked={selectedTechnologies.includes(tech)}
                                                            onChange={() => handleTechnologyChange(tech)}
                                                        />
                                                    }
                                                    label={tech}
                                                    sx={{ mr: 0 }}
                                                />
                                            ))}
                                        </FormGroup>
                                    </Box>

                                    {/* Services Filter */}
                                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Services</Typography>
                                    <Box sx={{
                                        maxHeight: 250,
                                        overflowY: 'auto',
                                        pr: 1,
                                        mb: 2,
                                        '&::-webkit-scrollbar': {
                                            width: '4px',
                                        },
                                        '&::-webkit-scrollbar-thumb': {
                                            backgroundColor: '#ccc',
                                        },
                                    }}>
                                        <FormGroup>
                                            {services.map((serv) => (
                                                <FormControlLabel
                                                    key={serv}
                                                    control={
                                                        <Checkbox
                                                            checked={selectedServices.includes(serv)}
                                                            onChange={() => handleServiceChange(serv)}
                                                        />
                                                    }
                                                    label={serv}
                                                    sx={{ mr: 0 }}
                                                />
                                            ))}
                                        </FormGroup>
                                    </Box>
                                </Box>
                            </Grid>
                        )}
                        <Drawer
                            anchor="left"
                            open={filterOpen}
                            onClose={() => setFilterOpen(false)}
                            PaperProps={{
                                sx: { width: '80vw', p: 2 },
                            }}
                        >
                            
                            {/* Tìm kiếm */}
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Tìm kiếm..."
                                size="small"
                                sx={{ mb: 3 }}
                            />

                            {/* Categories */}
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Categories</Typography>
                            <Box sx={{ maxHeight: 120, overflowY: 'auto', pr: 1, mb: 2 }}>
                                <FormGroup>
                                    {categories.map((category) => (
                                        <FormControlLabel
                                            key={category}
                                            control={
                                                <Checkbox
                                                    checked={selectedCategories.includes(category)}
                                                    onChange={() => handleCategoryChange(category)}
                                                />
                                            }
                                            label={category}
                                        />
                                    ))}
                                </FormGroup>
                            </Box>

                            {/* Industries */}
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Industries</Typography>
                            <Box sx={{ maxHeight: 120, overflowY: 'auto', pr: 1, mb: 2 }}>
                                <FormGroup>
                                    {industries.map((industry) => (
                                        <FormControlLabel
                                            key={industry}
                                            control={
                                                <Checkbox
                                                    checked={selectedIndustries.includes(industry)}
                                                    onChange={() => handleIndustryChange(industry)}
                                                />
                                            }
                                            label={industry}
                                        />
                                    ))}
                                </FormGroup>
                            </Box>

                            {/* Technologies */}
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Technologies</Typography>
                            <Box sx={{ maxHeight: 120, overflowY: 'auto', pr: 1, mb: 2 }}>
                                <FormGroup>
                                    {technologies.map((tech) => (
                                        <FormControlLabel
                                            key={tech}
                                            control={
                                                <Checkbox
                                                    checked={selectedTechnologies.includes(tech)}
                                                    onChange={() => handleTechnologyChange(tech)}
                                                />
                                            }
                                            label={tech}
                                        />
                                    ))}
                                </FormGroup>
                            </Box>

                            {/* Services */}
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Services</Typography>
                            <Box sx={{ maxHeight: 120, overflowY: 'auto', pr: 1 }}>
                                <FormGroup>
                                    {services.map((serv) => (
                                        <FormControlLabel
                                            key={serv}
                                            control={
                                                <Checkbox
                                                    checked={selectedServices.includes(serv)}
                                                    onChange={() => handleServiceChange(serv)}
                                                />
                                            }
                                            label={serv}
                                        />
                                    ))}
                                </FormGroup>
                            </Box>
                        </Drawer>

                        {/* Hiển thị nội dung tương tự newsEvents */}
                        <Grid item xs={12} md={9}>
                            <Grid container spacing={3}>
                                {filteredCaseStudies.map((study, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Paper elevation={3} sx={{ p: 2 }}>
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

                                            <Typography variant="body2" color="textSecondary">
                                                {study.date}
                                            </Typography>

                                            <Typography variant="body2" sx={{ mt: 1 }}>
                                                {study.description}
                                            </Typography>

                                            {/* Tag */}
                                            <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                                {study?.tags.map((tag: any) => (
                                                    <Chip key={tag} label={tag} variant="outlined" />
                                                ))}
                                            </Box>

                                            {/* Nút View Details */}
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
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </FadeSection>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 4 }}>
                <Pagination count={5} variant="outlined" shape="rounded" />
            </Box>
            <ScrollToTopButton/>
            <Footer />
        </>
    )
}

export default CaseStudiesPage