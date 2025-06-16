import React, { useState } from 'react'
import { Box, Grid, Typography, Avatar, Container, CssBaseline, Stack, Link, Paper, List, ListItemButton, ListItemIcon, ListItemText, Divider, ListItem, Fade } from '@mui/material'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'
import StopIcon from '@mui/icons-material/Stop'
import SquareIcon from '@mui/icons-material/Square'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import AssessmentIcon from '@mui/icons-material/Assessment'
import WidgetsIcon from '@mui/icons-material/Widgets'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import StoreIcon from '@mui/icons-material/Store'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import PeopleIcon from '@mui/icons-material/People'
import WarehouseIcon from '@mui/icons-material/Warehouse'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates'
import AssignmentIcon from '@mui/icons-material/Assignment'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import FileDownloadIcon from '@mui/icons-material/FileDownload'

const topSections = [
    { key: 'ecommerce', label: 'Ecommerce', icon: <ShoppingCartIcon />, content: ['Omni-Channel', 'Multi-pricing', 'CRM Integration'] },
    { key: 'store', label: 'Physical Store', icon: <StoreIcon />, content: ['Multi-Store Management', 'Customer Insights', 'In-store Experience'] },
    { key: 'loyalty', label: 'Loyalty Platform', icon: <EmojiEventsIcon />, content: ['Point System', 'Rewards', 'Customer Tiers'] },
]

const bottomSections = [
    { key: 'ai', label: 'AI Features', icon: <TipsAndUpdatesIcon />, content: ['Recommendation System', 'Chatbot'] },
    { key: 'delivery', label: 'Shipping', icon: <LocalShippingIcon />, content: ['Carrier Integration', 'Tracking'] },
    { key: 'Warehouse Management​', label: 'Warehouse', icon: <WarehouseIcon />, content: ['Payment Gateways', 'Refund System'] },
    { key: 'Order Management​​', label: 'Order', icon: <PeopleIcon />, content: ['Stock Management', 'Supplier Integration'] },
]


const technologies = [
    {
        icon: <WidgetsIcon fontSize="small" />,
        title: 'Platforms & Frameworks',
        items: [
            'SharePoint', 'osCommerce', 'Joomla', 'Typo3', 'OpenText',
            'Magento', 'EC-CUBE', 'WordPress', 'Orchard', '3dcart',
            'Intershop', 'SugarCRM', 'Drupal', 'Prestashop', 'Salesforce',
        ],
    },
    {
        icon: <SupportAgentIcon fontSize="small" />,
        title: 'Support',
        items: [
            'Auto shipping (SMC3 Carrier Connect, Rateware)', 'IBiz E-Payment', 'Fax Integration (Biscom FaxCOM)',
            'Address verification (Melissa USPS)', 'Cybersource', 'Gentran EDI solution',
            'Voice Commerce', 'Headless Commerce', 'Augmented Reality (AR)',
        ],
    },
    {
        icon: <AssessmentIcon fontSize="small" />,
        title: 'Analytics & Reporting',
        items: [
            'Cognos report', 'Jasper report', 'QlikView',
            'SSRS', 'Pentaho BI', 'Hive',
            'Data Warehousing (ROLAP, MOLAP, HOLAP)',
            'Data-mining: Classification/Regression, Clustering, Association, Sequence Analysis',
        ],
    },
    {
        icon: <IntegrationInstructionsIcon fontSize="small" />,
        title: 'Integration',
        items: [
            'Auto shipping (SMC3 Carrier Connect, Rateware)', 'SPA (Single Page App)', 'PWA (Progressive Web App)',
            'BEX (Browser Extension)', 'SSR (Server-side Rendered App)', 'Hybrid Mobile App',
            'Multi-platform', 'Desktop App',
        ],
    },
]

const telecomIcons = [
    {
        src: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240621111740.152.webp',
        title: '19+ Years of experience',
    },
    {
        src: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240621112206.619.webp',
        title: '600 Engineers',
    },
    {
        src: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240621151641.245.webp',
        title: 'Customers from Europe, Canada, Australia, Singapore, Hong Kong, Korea, Vietnams',
    },
]

const services = [
    {
        title: 'Innovation Services',
        items: [
            'Technical feasibility of new ideas',
            'Develop prototypes, proof-of-concepts',
            'R&D',
        ],
    },
    {
        title: 'Dedicated Software Team',
        items: [
            'Wide range of skills',
            'Flexible and scalable team',
            'Experienced in Ecommerce, Retail and Distribution applications',
        ],
    },
    {
        title: 'New Solutions Development',
        items: [
            'Develop innovative E-Commerce, Retail and Distribution solutions based on latest technologies',
            'Custom software development',
        ],
    },
    {
        title: 'Maintenance & Support',
        items: [
            'Maintenance and supporting',
            'System integration',
            'Performance optimization',
        ],
    },
    {
        title: 'Integration',
        items: [
            'Integrate with Payment gateway',
            'Connect with CRM, ERP, etc.',
            'Integrate with shipping providers/carriers',
        ],
    },
    {
        title: 'AI Application',
        items: [
            'AI solutions development',
            'Insights and forecasting',
            'Optimization',
        ],
    },
]


const ECommerceRetail = () => {
    const [activeTop, setActiveTop] = useState(null)
    const [activeBottom, setActiveBottom] = useState(null)

    const renderContent = (section: any) => (
        <Box
            sx={{
                mt: 2,
                p: 2,
                backgroundColor: '#f9f9f9',
                borderRadius: 2,
                border: '1px solid #ddd',
            }}
        >
            <Grid container spacing={2}>
                {section.content.map((item: any, index: any) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Typography variant="body1" sx={{ pl: 2, position: 'relative' }}>
                            <Box
                                component="span"
                                sx={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 8,
                                    width: 6,
                                    height: 6,
                                    bgcolor: 'primary.main',
                                    borderRadius: '50%',
                                }}
                            />
                            {item}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )

    const handleTopClick = (key: any) => {
        setActiveTop(prev => prev === key ? null : key)
        setActiveBottom(null) // đóng nhóm dưới khi nhóm trên được click
    }

    const handleBottomClick = (key: any) => {
        setActiveBottom(prev => prev === key ? null : key)
        setActiveTop(null) // đóng nhóm trên khi nhóm dưới được click
    }

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
                                    Ecommerce, Retail & Distribution
                                </Typography>
                                <Typography variant="body1" mb={4}>
                                    We offer a comprehensive ecosystem of solutions for Ecommerce, Retail & Distribution including end-to-end development services with ready-made frameworks for most open-source and commercial platforms to help our clients successfully accelerate their digital business transformation.
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
                                    <img width={"100%"} src="https://tmastorage.azureedge.net/uploadfiles/Banner/banner_20241108035547.944.webp" alt="" />
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

                            <Typography color="text.primary">E-Commerce & Retail</Typography>
                        </Stack>

                    </Box>
                </Container>
            </FadeSection>
            <FadeSection id='about' >
                <Box p={5} sx={{
                    mt: 4,

                }}
                >
                    <Box >
                        <Container sx={{ textAlign: "center" }}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                Services
                            </Typography>
                            <Typography textAlign={"center"} >
                                specializes in e-commerce platforms and e-commerce software development. Our comprehensive ecosystem of solutions supports clients in ecommerce, Retail, and distribution, enabling seamless digital business transformation.                            </Typography>
                        </Container>
                    </Box>
                    <Container sx={{ mb: 4 }}>
                        <Box sx={{ px: 4, py: 6 }}>
                            <Grid container spacing={4}>
                                {services.map((service, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Box
                                            sx={{
                                                border: '1px solid #2196f3',
                                                borderRadius: 1,
                                                overflow: 'hidden',
                                                backgroundColor: '#fff',
                                            }}
                                        >
                                            <Box sx={{ backgroundColor: '#2196f3', p: 2 }}>
                                                <Typography variant="subtitle1" fontWeight="bold" color="#fff" textAlign="center">
                                                    {service.title}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ p: 2 }}>
                                                <List dense>
                                                    {service.items.map((item, i) => (
                                                        <ListItem key={i} sx={{ alignItems: 'center', pl: 0 }}>
                                                            <ListItemIcon sx={{ minWidth: 24 }}>
                                                                <StopIcon sx={{ fontSize: 8, color: '#2196f3', mt: '6px' }} />
                                                            </ListItemIcon>
                                                            <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2' }} />
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Container>
                </Box>
            </FadeSection>
            <FadeSection>
                <Container>
                    <Box sx={{ backgroundColor: '#f5f9ff', px: 4, py: 8 }}>
                        <Grid sx={{ alignItems: "center" }} container spacing={4}>
                            {/* Left Description */}
                            <Grid item xs={12} md={4}>
                                <Box sx={{ maxWidth: 300, mx: 'auto', }}>
                                    <Box sx={{ width: 24, height: 24, border: '1px solid #2196f3', mb: 2, backgroundColor: '#e3f2fd' }} />
                                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                                        Technologies
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Our expertise in ecommerce software development and advanced ecommerce platform solutions empowers you to make intelligent decisions and maximize business value.
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* Right Technology Categories */}
                            <Grid item xs={12} md={8}>
                                <Grid container spacing={2}>
                                    {technologies.map((tech, index) => (
                                        <Grid item xs={12} key={index}>
                                            <Box sx={{
                                                backgroundColor: '#fff',
                                                borderRadius: 2,
                                                boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                                                border: '1px solid #e0e0e0',
                                                p: 2
                                            }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                                    <Box sx={{ mr: 1 }}>{tech.icon}</Box>
                                                    <Typography variant="subtitle1" fontWeight="bold">{tech.title}</Typography>
                                                </Box>
                                                <Divider sx={{ mb: 1 }} />
                                                <Grid container spacing={1}>
                                                    {tech.items.map((item, i) => (
                                                        <Grid item xs={12} sm={6} md={4} key={i}>
                                                            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                                                <SquareIcon sx={{ color: '#2196f3', fontSize: 8, mt: '6px', mr: 1 }} />
                                                                <Typography variant="body2">{item}</Typography>
                                                            </Box>
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box></Container>
            </FadeSection>
            <FadeSection id='about' >
                <Box p={5} sx={{
                    mt: 4,
                    clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0% 100%)"
                }}
                >
                    <Box >
                        <Container sx={{ textAlign: "center" }}>
                            <img src="https://www.tmasolutions.com/media/technologies/iconDecor.webp" alt="" />
                            <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>
                               Areas of Expertise
                            </Typography>
                            
                        </Container>
                    </Box>
                    <Container sx={{ mt: 4 }}>
                        <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
                            <Box sx={{ maxWidth: 1000, mx: 'auto', p: 3 }}>
                                {/* Hàng trên */}
                                <Grid container spacing={2}>
                                    {topSections.map((sec) => (
                                        <Grid item xs={12} sm={4} key={sec.key}>
                                            <Paper
                                                onClick={() => handleTopClick(sec.key)}
                                                elevation={activeTop === sec.key ? 4 : 1}
                                                sx={{
                                                    p: 2,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    cursor: 'pointer',
                                                    border: activeTop === sec.key ? '2px solid #2196f3' : '1px solid #ccc',
                                                }}
                                            >
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    {sec.icon}
                                                    <Typography sx={{ ml: 1, fontWeight: 600 }}>{sec.label}</Typography>
                                                </Box>
                                                {activeTop === sec.key ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>

                                {/* Nội dung hàng trên */}
                                {activeTop && renderContent(topSections.find(sec => sec.key === activeTop))}

                                {/* Hàng dưới */}
                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                    {bottomSections.map((sec) => (
                                        <Grid item xs={12} sm={3} key={sec.key}>
                                            <Paper
                                                onClick={() => handleBottomClick(sec.key)}
                                                elevation={activeBottom === sec.key ? 4 : 1}
                                                sx={{
                                                    p: 2,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    cursor: 'pointer',
                                                    border: activeBottom === sec.key ? '2px solid #2196f3' : '1px solid #ccc',
                                                }}
                                            >
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    {sec.icon}
                                                    <Typography sx={{ ml: 1, fontWeight: 600 }}>{sec.label}</Typography>
                                                </Box>
                                                {activeBottom === sec.key ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>

                                {/* Nội dung hàng dưới */}
                                {activeBottom && renderContent(bottomSections.find(sec => sec.key === activeBottom))}
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </FadeSection>
          
            <ScrollToTopButton />
            <Footer />
        </>
    )
}

export default ECommerceRetail
