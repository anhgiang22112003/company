import React, { useEffect, useState } from 'react'
import {
    Box,
    Button,
    Collapse,
    Container,
    CssBaseline,
    Divider,
    Fade,
    Grid,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import CellTowerIcon from '@mui/icons-material/CellTower' // MUI v5
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { styled } from '@mui/system'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import BusinessIcon from '@mui/icons-material/Business' // thay thế bằng icon tương ứng
import ScrollToTopButton from '../components/ScrollToTopButton'
import ScrollDots from '../components/ScrollDots'
import FadeSection from '../components/FadeSection'
import StarIcon from '@mui/icons-material/Star'
import GroupsIcon from '@mui/icons-material/Groups'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import TrackChangesIcon from '@mui/icons-material/TrackChanges'
import DevicesOtherIcon from '@mui/icons-material/DevicesOther'
import VerifiedIcon from '@mui/icons-material/Verified'
import ScienceIcon from '@mui/icons-material/Science'
import Banner from '../components/banner'


const data = [
    {
        title: 'Telecom',
        description:
            'Unified Communication. Network and Access Management. VoIP, SIP, Asterisk, Soft-Switch. 4G LTE. Wireless and Edge Router.',
        img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_mobile_20240711174411.019.webp",
        href:'/industries/telecom'

    },
    {
        title: 'Healthcare',
        description:
            'Electronic Medical Records. Health Insurance. Clinical Decision Support. Health Device Management & Control.',
        img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_mobile_20240711174421.677.webp",
       href:"/industries/healthcare"
    },
    {
        title: 'Finance',
        description:
            'Wealth Management. Capital Market. Financial Analyst Tool. Loans Manager. Dealer Manager.',
        img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_mobile_20240711174433.586.webp",
       href:"/industries/finance"
    },
    {
        title: 'Logistics & Transportation',
        description:
            'Smart Route. Traffic data Analysis. Asset Tracking System. Field Force Automation.',
        img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_mobile_20240711174443.755.webp",
   href:"/industries/logistics"
    },
    {
        title: 'E-Commerce, Retail & Distribution',
        description:
            'Online and Mobile Store. Visual Product Catalogue. Full Back-Office Administration Tool.',
        img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_mobile_20240711174453.979.webp",
  href:"/industries/e-commerce-retail" 
    },
    {
        title: 'Automotive',
        description:
            'Smart Route. Traffic data Analysis. Visual Yellow Pages. Asset Tracking System. Field Force Automation.',
        img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_mobile_20240711174502.960.webp",
    href:"/industries/automotive"
    },

]
const StyledCard = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    backgroundColor: '#f4f8fe',
    borderRadius: 12,
    padding: 20,
    height: '100%',
    gap: 16,
    transition: 'all 0.3s ease',
    '&:hover .icon': {
        transform: 'scale(1.15)',
    },
    '&:hover .explore': {
        color: 'blue',
    },
}))

const IconWrapper = styled(Box)(() => ({
    width: 50,
    height: 50,
    borderRadius: '50%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease',
    flexShrink: 0,
}))

const OutsourceHomePage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [prevIndex, setPrevIndex] = useState<number | null>(null)
    const [showPrev, setShowPrev] = useState(false)
    const fadeDuration = 1000
    const images: any = [
        'https://tmastorage.azureedge.net/uploadfiles/Home/Overview/Home_Overview_9.webp',
        'https://tmastorage.azureedge.net/uploadfiles/Home/Overview/Home_Overview_5.webp',
        'https://tmastorage.azureedge.net/uploadfiles/Home/Overview/Home_Overview_10.webp'
    ]
    const cards = [
        {
            icon: '📡',
            title: 'Telecom',
            desc: 'Unified Communication. Network and Access Management. VoIP, SIP, Asterisk, Soft-Switch. 4G LTE. Wireless and Edge Router.',
        },
        {
            icon: '🏥',
            title: 'Healthcare',
            desc: 'Electronic Medical Records. Health Insurance. Clinical Decision Support. Health Device Management & Control. DNA Alignment and Analysis',
        },
        {
            icon: '💰',
            title: 'Finance',
            desc: 'Wealth Management. Capital Market. Financial Analyst Tool. Loans Manager. Dealer Manager.',
        },
    ]
    // const banners = [
    //     {
    //         title: 'Giải pháp gia công phần mềm hàng đầu',
    //         subtitle: 'Cung cấp dịch vụ chất lượng với chi phí tối ưu',
    //         image: '/img/outsourcing1.jpg',
    //     },
    //     {
    //         title: 'Đội ngũ chuyên gia giàu kinh nghiệm',
    //         subtitle: 'Mang đến sản phẩm tốt nhất cho doanh nghiệp của bạn',
    //         image: '/img/outsourcing2.jpg',
    //     },
    //     {
    //         title: 'Tiết kiệm thời gian và chi phí',
    //         subtitle: 'Tập trung vào kinh doanh, để chúng tôi lo về công nghệ',
    //         image: '/img/outsourcing3.jpg',
    //     },
    // ]

    const services = [
        {
            title: 'Phát triển phần mềm theo yêu cầu',
            description: [
                'University program: with 65 universities',
                '1,000+ interns/year',
                '15,000+ resumes/year',
                '430+ courses/year',
            ],
            name: 'Large Talent Pool & Well–established Training System',
            icon: <GroupsIcon sx={{ fontSize: 50, mb: 2 }} />,
        },

        {
            title: 'Gia công ứng dụng di động',
            description: 'Successfully completed many mission critical applications in telecom, finance, healthcare, etc. that need hundreds of engineers',
            name: 'Experienced in Large & Complex Projects',
            icon: <AccountTreeIcon sx={{ fontSize: 50, mb: 2 }} />,

        },
        {
            title: 'Kiểm thử phần mềm',
            description: ['28 years of experience in providing software, outsourcing services',
                '4,000 engineers',
                'Clients from 30 countries'],
            name: 'Good Track Record',
            icon: <TrackChangesIcon sx={{ fontSize: 50, mb: 2 }} />,

        },
        {
            title: 'Phát triển phần mềm theo yêu cầu',
            description: 'Microsoft Technologies Gold Partner since 2007, Java, Cloud, AI, IoT, etc',
            name: 'Wide Range of Technologies',
            icon: <DevicesOtherIcon sx={{ fontSize: 50, mb: 2 }} />,
        },
        {
            title: 'Gia công ứng dụng di động',
            description: 'CMMI, Agile, RUP, ISO 9001, ISO 27001',
            name: 'Strong Quality Foundation',
            icon: <VerifiedIcon sx={{ fontSize: 50, mb: 2 }} />,
        },
        {
            title: 'Kiểm thử phần mềm',
            description: '10 solution and technology centers: Telecom, Fintech, Healthtech, Automotive, etc',
            name: 'Intensive R&D Capabilities',
            icon: <ScienceIcon sx={{ fontSize: 50, mb: 2 }} />,
        },
    ]

    const testimonialsData = [
        {
            text: 'Dịch vụ tuyệt vời, đội ngũ rất chuyên nghiệp và tận tâm.',
            client: 'Nguyễn Văn A - CEO Công ty ABC',
        },
        {
            text: 'Chúng tôi rất hài lòng với sản phẩm và tiến độ triển khai.',
            client: 'Trần Thị B - Giám đốc điều hành Công ty XYZ',
        },
    ]
    const categories = [
        {
            img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240711154741.713.webp",
            title: 'Telecom',
            items: [
                '5G Applications',
                '4G MVNO LTE EPC & MANO',
                'Network Transformation Solutions',
                'Enterprise Communication Solution',
            ],
        },
        {
            img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240711154756.705.webp",
            title: 'Logistics & Transportation',
            items: [
                'Vehicle Traffic Management',
                'Navigation Solution',
                'Route Information Lookup',
                'Lane and Vehicle Detection',
            ],
        },
        {
            img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240711154806.114.webp",
            title: 'E-Commerce, Retail & Distribution',
            items: [
                'Deal Management',
                'Mobile Ecommerce',
                'Cosmetic Ecommerce Platform',
                'School Furniture Sales and Distribution Management System',
            ],
        },
        {
            img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240711154817.034.webp",
            title: 'Healthcare',
            items: [
                " Remote Health Monitoring Platform",
                "Health Information Systems Programme (HISP)",
                "World Mosquito Program (WMP)",
                "Clinical Research Tools",
                "Fitness Solution"
            ],
        },
        {
            img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240711154834.691.webp",
            title: 'Finance',
            items: [
                "  Cash Flow Management Application​",
                "Digital Product Trading",
                "NFT Trading Platform​",
                "Stable Coin​",
            ],
        },
        {
            img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240711154849.798.webp",
            title: 'Automotive',
            items: [
                'Infotainment HMI',
                'ECU MCU Modeling',
                'AR Navigation',
                'Traffic Management,'
            ],
        },
    ]


    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setPrevIndex(currentIndex)
    //         setCurrentIndex((prev) => (prev + 1) % banners.length)
    //     }, 15000)
    //     return () => clearInterval(interval)
    // }, [currentIndex])

    useEffect(() => {
        setShowPrev(true)
        const timeout = setTimeout(() => setShowPrev(false), fadeDuration)
        return () => clearTimeout(timeout)
    }, [currentIndex])
    const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({})

    const toggleExpand = (index: number) => {
        setExpandedItems((prev) => ({
            ...prev,
            [index]: !prev[index],
        }))
    }
    const sections = [  
        { id: 'overview', label: 'Overview' },
        { id: 'why', label: 'Why' },
        { id: 'services', label: 'Services' },
        { id: 'stories', label: 'Stories' },
        { id: 'industries', label: 'Industries' },
        { id: 'technologies', label: 'Technologies' },
        { id: 'feedback', label: 'Feedback' },
        { id: 'footer', label: 'Footer' },
    ]



    return (
        <>
            <CssBaseline />
            <Header />
            <ScrollDots sections={sections} />
            {/* Banner chính */}
            <Banner />
            <FadeSection id="overview">
                <Container sx={{ py: 8 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
                                Overview
                            </Typography>
                            <Typography sx={{ textAlign: 'justify' }}>
                                 Solutions was established in 1997 to provide quality software outsourcing services to leading companies worldwide. With 4,000 engineers, we stand as one of Vietnam's largest software outsourcing companies. Our engineering team was selected from a large pool of Vietnam IT outsourcing; they are well-trained and have successfully completed numerous large and complex projects to provide world-class technology solutions to customers in 30 countries.
                                 solutions and technology centers:
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={1}></Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={2}>
                                {images.map((src: any, index: any) => (
                                    <Grid item xs={12} sm={6} key={index}>
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                overflow: 'hidden',
                                                borderRadius: 2,
                                                '&:hover img': {
                                                    transform: 'scale(1.1)',
                                                    transition: 'transform 0.3s ease',
                                                },
                                            }}
                                        >
                                            <img
                                                src={src}
                                                alt={`Image ${index + 1}`}
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                    display: 'block',
                                                    transition: 'transform 0.3s ease',
                                                }}
                                            />
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </FadeSection>
            <FadeSection id="why">
                <Container sx={{ py: 8 }}>

                    <Typography variant="h4" sx={{ fontWeight: "bold" }} align="center" gutterBottom>
                        Why GPH
                    </Typography>
                    <Typography textAlign={"center"}> Solutions - your reliable partner, is one of Vietnam's leading software outsourcing companies. With many years of experience, we provide high-quality IT outsourcing and innovative software solutions.</Typography>
                    <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
                        {services.map((service, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        p: 3,
                                        borderRadius: 3,
                                        boxShadow: 3,
                                        height: '100%',
                                        overflow: 'hidden',
                                        backgroundColor: '#f5f5f5',
                                        '&:hover .overlay': {
                                            transform: 'translateY(100%)',
                                        },
                                        '&:hover .content': {
                                            opacity: 2,
                                        },
                                    }}
                                >
                                    {/* Overlay nền xanh */}

                                    <Box
                                        className="overlay"
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            bgcolor: 'primary.main',
                                            color: 'white',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'transform 0.5s ease',
                                            zIndex: 2,
                                        }}
                                    >
                                        {service.icon}
                                        <Typography textAlign={"center"} variant="h6" fontWeight="bold">
                                            {service.name}
                                        </Typography>
                                    </Box>

                                    {/* Nội dung thực */}
                                    <Box display="flex" mb={5} flexDirection="column" gap={1}>
                                        <Box key={index} display="flex" alignItems="flex-start" gap={1}>
                                            <FiberManualRecordIcon sx={{ fontSize: 10, color: "#1E40AF", mt: "6px" }} />
                                            <Typography sx={{ fontSize: 16, color: "#333", lineHeight: 1.6 }}>
                                                {service.description}
                                            </Typography>
                                        </Box>

                                    </Box>

                                    {/* Explore More Button */}
                                    <Link href="/about/why">
                                    <button
                                        style={{
                                            position: "absolute",
                                            bottom: 16,
                                            right: 16,
                                            background: "none",
                                            border: "none",
                                            color: "#1E40AF", // xanh nước biển
                                            fontWeight: "bold",
                                            fontSize: 16,
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 6,
                                            padding: 0,

                                        }}
                                        onMouseEnter={(e) => {
                                            const arrow = e.currentTarget.querySelector(".arrow")
                                            if (arrow) {
                                                (arrow as HTMLElement).style.transform = "translateX(5px)";
                                                (arrow as HTMLElement).style.color = "#0ea5e9" // xanh nước biển sáng hơn
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            const arrow = e.currentTarget.querySelector(".arrow")
                                            if (arrow) {
                                                (arrow as HTMLElement).style.transform = "translateX(0)";
                                                (arrow as HTMLElement).style.color = "#1E40AF"
                                            }
                                        }}
                                    >
                                        Explore More
                                        <span
                                            className="arrow"
                                            style={{
                                                display: "inline-block",
                                                transition: "all 0.3s ease",
                                                color: "#1E40AF",
                                                fontSize: 20,
                                                fontWeight: "bold",
                                            }}
                                        >
                                            ➔
                                        </span>
                                    </button></Link>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </FadeSection>
            <FadeSection id="services">
                <Box sx={{ position: 'relative', py: 8 }}>
                    <Box
                        sx={{
                            background: "blue",
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: -1,
                            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 90%)', // Tạo hiệu ứng viền
                        }}
                    />
                    <Container>
                        <Grid container spacing={2}>
                            <Grid  item xs={12} md={5}>
                                <Typography variant='h4' sx={{ fontWeight: "bold", color: "white" }}>Services</Typography>
                                <Typography sx={{ color: "white" }} mt={2}>
                                    We provide end-to-end solutions from ideas to design, implementation, testing, deployment, maintenance and support, across Software Development, Software Testing, Digital Transformation, and Innovation as a Service.
                                </Typography>
                            </Grid>
                        </Grid>
                        <img width={"98%"} src="https://tmastorage.azureedge.net/uploadfiles/Home/Services/page_home_section_service_desktop.webp" alt="" />
                    </Container>
                </Box>
            </FadeSection>
            <FadeSection id='stories'>
                <Container sx={{ py: 12 }}>
                    <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>Our Success Stories</Typography>
                    <Typography textAlign={"center"}>Discover Solutions' sample projects, featuring success stories achieved by our software engineers. Witness the impact of our software outsourcing services on businesses and operations.</Typography>
                    <Grid container sx={{ py: 6 }} spacing={2} alignItems="flex-start">
                        {categories.map((cat, index) => {
                            const hasExtra = cat.items.length > 3
                            const visibleItems = cat.items.slice(0, 3)
                            const hiddenItems = cat.items.slice(3)

                            return (
                                <Grid item xs={12} md={4} key={index}>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            backgroundColor: '#f5f9ff',
                                            borderRadius: 2,
                                            p: 3,
                                            height: '100%',
                                            overflow: 'hidden',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                border: '2px solid #1976d2',
                                                borderRadius: 2,
                                                opacity: 0,
                                                transform: 'scale(0.9)',
                                                transition: 'opacity 0.4s ease, transform 0.4s ease',
                                                pointerEvents: 'none',
                                            },
                                            '&:hover::before': {
                                                opacity: 1,
                                                transform: 'scale(1)',
                                            },
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <img src={cat.img} width={"10%"} alt="" />
                                            <Typography variant="h6" fontWeight="bold">
                                                {cat.title}
                                            </Typography>
                                        </Box>

                                        <Divider sx={{ my: 1 }} />

                                        <List dense>
                                            {visibleItems.map((item, i) => (
                                                <ListItem key={i} disableGutters>
                                                    <ListItemIcon sx={{ minWidth: 24 }}>
                                                        <FiberManualRecordIcon fontSize="small" sx={{ color: '#c1c1c1' }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary={item} primaryTypographyProps={{ fontSize: 14 }} />
                                                </ListItem>
                                            ))}

                                            <Collapse in={!!expandedItems[index]} timeout="auto" unmountOnExit>
                                                {hiddenItems.map((item, i) => (
                                                    <ListItem key={i} disableGutters>
                                                        <ListItemIcon sx={{ minWidth: 24 }}>
                                                            <FiberManualRecordIcon fontSize="small" sx={{ color: '#c1c1c1' }} />
                                                        </ListItemIcon>
                                                        <ListItemText primary={item} primaryTypographyProps={{ fontSize: 14 }} />
                                                    </ListItem>
                                                ))}
                                            </Collapse>
                                        </List>

                                        {hasExtra && (
                                            <Box sx={{ position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)' }}>
                                                <IconButton size="small" onClick={() => toggleExpand(index)}>
                                                    {expandedItems[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                                </IconButton>
                                            </Box>
                                        )}
                                    </Box>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </FadeSection>
            <FadeSection id="industries" >
                <Box sx={{ mx: 'auto', py: 4 }}>
                    <Container>
                        <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>Industries</Typography>
                        <Typography textAlign={"center"}>Discover Solutions' sample projects, featuring success stories achieved by our software engineers. Witness the impact of our software outsourcing services on businesses and operations.</Typography>
                        <Grid sx={{ background: "#f4f8fe", }} container mt={2} spacing={3}>
                            {data.map((item, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <StyledCard>
                                        <IconWrapper className="icon"><img width={"80%"} src={item.img} alt="" /></IconWrapper>
                                        <Box>
                                            
                                            <Typography variant="h6" fontWeight="bold">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ mt: 1 }}>
                                                {item.description}
                                            </Typography>
                                            <Link href={item.href}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    mt: 2,
                                                    fontWeight: 500,
                                                    fontSize: '14px',
                                                    transition: 'color 0.3s ease',
                                                }}
                                                className="explore"
                                            >
                                                Explore More
                                                <ArrowForwardIcon fontSize="small" sx={{ ml: 1 }} />
                                            </Box>
                                            </Link>
                                        </Box>
                                    </StyledCard>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                    <FadeSection id="technologies" >
                        <Box id="technologies" sx={{ position: 'relative', py: 15 }}>
                            <Box
                                sx={{
                                    background: "blue",
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    zIndex: -1,
                                    clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0% 100%)'
                                }}
                            />
                            <Container sx={{ mt: 8 }}>
                                <Typography variant='h4' textAlign={"center"} sx={{ fontWeight: "bold", color: "white" }}>
                                    Technologies
                                </Typography>
                                <Typography sx={{ color: "white" }} mt={2} mb={4}>
                                    We provide end-to-end solutions from ideas to design, implementation, testing, deployment, maintenance and support, across Software Development, Software Testing, Digital Transformation, and Innovation as a Service.
                                </Typography>

                                <Grid container spacing={3}>
                                    {/* LEFT COLUMN – 4 tech cards */}
                                    <Grid item xs={12} md={8}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={6}>
                                                <Box sx={{ background: "white", p: 5 }}>
                                                    <Typography variant="h6" fontWeight="bold">Microsoft Technologies</Typography>
                                                    <Typography color="primary">600 Developers</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Box sx={{ background: "white", p: 5 }}>
                                                    <Typography variant="h6" fontWeight="bold">Java</Typography>
                                                    <Typography color="primary">700 Developers</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Box sx={{ background: "white", p: 5 }}>
                                                    <Typography variant="h6" fontWeight="bold">Web – Mobile</Typography>
                                                    <Typography color="primary">800 Developers</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Box sx={{ background: "white", p: 5 }}>
                                                    <Typography variant="h6" fontWeight="bold">Big Data & Analytics & AI/ML</Typography>
                                                    <Typography color="primary">700 Developers</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Box sx={{ background: "white", p: 5 }}>
                                                    <Typography variant="h6" fontWeight="bold">C/C++, Embedded, IoT</Typography>
                                                    <Typography color="primary">400 Developers</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Box sx={{ background: "white", p: 5 }}>
                                                    <Typography variant="h6" fontWeight="bold">Cloud, DevOps</Typography>
                                                    <Typography color="primary">700 Engineers</Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    {/* RIGHT COLUMN – 2 images stacked vertically */}
                                    <Grid item xs={12} md={4}>
                                        <Box mb={3}>
                                            <img
                                                width="100%"
                                                style={{ borderRadius: 8 }}
                                                src="https://tmastorage.azureedge.net/uploadfiles/Home/Technologies/Home_Technology_4.webp"
                                                alt="Monitoring"
                                            />
                                        </Box>
                                        <Box>
                                            <img
                                                width="100%"
                                                style={{ borderRadius: 8 }}
                                                src="https://tmastorage.azureedge.net/uploadfiles/Home/Technologies/Home_Technology_1.webp"
                                                alt="Server"
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Container>

                        </Box>
                    </FadeSection>
                </Box>
            </FadeSection>
            <FadeSection id="feedback">
                <Box sx={{ bgcolor: '#f9f9f9', py: 8 }}>
                    <Container>
                        <Typography variant="h4" align="center" gutterBottom>
                            Feedback
                        </Typography>
                        <Grid container justifyContent="center" sx={{ mt: 2 }}>
                            <Grid item xs={12} md={8}>
                                {testimonialsData.map(({ text, client }, i) => (
                                    <Box key={i} sx={{ mb: i !== testimonialsData.length - 1 ? 4 : 0 }}>
                                        <Typography sx={{ fontStyle: 'italic', fontSize: '1.1rem', mb: 1 }}>
                                            “{text}”
                                        </Typography>
                                        <Typography sx={{ fontWeight: 'bold', color: '#ffcb05' }}>
                                            – {client}
                                        </Typography>
                                    </Box>
                                ))}
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </FadeSection>
            <FadeSection id="What-clients">
                <Container  >
                    <Box
                        sx={{
                            background: '#009BFF',
                            color: 'white',
                            clipPath: 'polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)',
                            py: 8,
                            px: 4,
                            position: 'relative',
                            zIndex: 1,
                            mb: -23

                        }}
                    >
                        <Container>
                            <Typography variant='h4' textAlign="center" fontWeight="bold">
                                What our clients say?
                            </Typography>
                            <Typography textAlign="center" mt={2} maxWidth="md" mx="auto">
                                We sincerely appreciate our customers for their valuable feedback and support.
                                Our top priority is to fulfill your business needs with our appropriate technology solutions.
                            </Typography>

                            <Box mt={4} textAlign="center">
                                <Typography sx={{ fontStyle: 'italic' }}>
                                    “The management team is attentive, responsive to feedback and demonstrates initiative
                                    in continually improving effectiveness.”
                                </Typography>
                                <Typography mt={2} fontWeight="bold">
                                    Lori Ciaralli, Engineering Director, Network Management & Security, Ribbon Communications
                                </Typography>
                                <Typography>USA</Typography>
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

export default OutsourceHomePage
