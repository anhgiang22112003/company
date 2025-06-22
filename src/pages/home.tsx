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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { styled } from '@mui/system'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ScrollToTopButton from '../components/ScrollToTopButton'
import ScrollDots from '../components/ScrollDots'
import FadeSection from '../components/FadeSection'
import GroupsIcon from '@mui/icons-material/Groups'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import TrackChangesIcon from '@mui/icons-material/TrackChanges'
import DevicesOtherIcon from '@mui/icons-material/DevicesOther'
import VerifiedIcon from '@mui/icons-material/Verified'
import ScienceIcon from '@mui/icons-material/Science'
import Banner from '../components/banner'
import ArticleCarousel from '../components/cardItemHome'
import BlogSection from '../components/BlogSection'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import PeopleIcon from '@mui/icons-material/People'
import BusinessIcon from '@mui/icons-material/Business'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import GradeIcon from '@mui/icons-material/Grade'
import SlideInOnScroll from '../components/SlideInOnScroll'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

const stats = [
    {
        icon: <PeopleIcon fontSize="large" />,
        value: 13,
        suffix: '%',
        label: 'Developer Attrition Rates',
        prefix: '<',
    },
    {
        icon: <BusinessIcon fontSize="large" />,
        value: 250,
        suffix: '+',
        label: 'Software Companies Served',
    },
    {
        icon: <EmojiObjectsIcon fontSize="large" />,
        value: 15,
        suffix: '+',
        label: 'Years of Digital Innovation',
    },
    {
        icon: <GradeIcon fontSize="large" htmlColor="#FFD700" />,
        value: 4.9,
        suffix: '',
        label: 'Average Review Rating on Clutch',
    },
]

const data = [
    {
        title: 'Telecom',
        description:
            'Unified Communication. Network and Access Management. VoIP, SIP, Asterisk, Soft-Switch. 4G LTE. Wireless and Edge Router.',
        img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_mobile_20240711174411.019.webp",
        href: '/industries/telecom'

    },
    {
        title: 'Healthcare',
        description:
            'Electronic Medical Records. Health Insurance. Clinical Decision Support. Health Device Management & Control.',
        img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_mobile_20240711174421.677.webp",
        href: "/industries/healthcare"
    },
    {
        title: 'Finance',
        description:
            'Wealth Management. Capital Market. Financial Analyst Tool. Loans Manager. Dealer Manager.',
        img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_mobile_20240711174433.586.webp",
        href: "/industries/finance"
    },
    {
        title: 'Logistics & Transportation',
        description:
            'Smart Route. Traffic data Analysis. Asset Tracking System. Field Force Automation.',
        img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_mobile_20240711174443.755.webp",
        href: "/industries/logistics"
    },
    {
        title: 'E-Commerce, Retail & Distribution',
        description:
            'Online and Mobile Store. Visual Product Catalogue. Full Back-Office Administration Tool.',
        img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_mobile_20240711174453.979.webp",
        href: "/industries/e-commerce-retail"
    },
    {
        title: 'Automotive',
        description:
            'Smart Route. Traffic data Analysis. Visual Yellow Pages. Asset Tracking System. Field Force Automation.',
        img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_mobile_20240711174502.960.webp",
        href: "/industries/automotive"
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


    const categories = [
        {
            img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240711154741.713.webp",
            title: 'Telecom',
            items: [
                '5G Applications',
                'Network Transformation Solutions',
            ],
        },
        {
            img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240711154756.705.webp",
            title: 'Logistics & Transportation',
            items: [
                'Vehicle Traffic Management',
                'Navigation Solution',
            ],
        },
        {
            img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240711154806.114.webp",
            title: 'E-Commerce, Retail & Distribution',
            items: [
                'Deal Management',
                'Mobile Ecommerce',
            ],
        },
        {
            img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240711154817.034.webp",
            title: 'Healthcare',
            items: [
                "Remote Health Monitoring Platform",
                "Clinical Research Tools",
            ],
        },
        {
            img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240711154834.691.webp",
            title: 'Finance',
            items: [
                "Cash Flow Management Application​",
                "NFT Trading Platform​",
            ],
        },
        {
            img: "https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240711154849.798.webp",
            title: 'Automotive',
            items: [
                'Infotainment HMI',
                'AR Navigation',
            ],
        },
    ]


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
        { id: 'technologies', label: 'Technologies' },
        { id: 'why', label: 'Why' },
        { id: 'services', label: 'Services' },
        { id: 'stories', label: 'Stories' },
        { id: 'industries', label: 'Industries' },
        { id: 'blog', label: 'blog' },
        { id: 'footer', label: 'Footer' },
    ]

    const { ref, inView } = useInView({ triggerOnce: true })

    return (
        <><Header />
            <CssBaseline />

            <ScrollDots sections={sections} />
            {/* Banner chính */}
            <Banner />
            <FadeSection id="overview">
                <Container sx={{ py: 8 }}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} md={5}><SlideInOnScroll direction='left'>
                            <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
                                Overview
                            </Typography>
                            <Typography sx={{ textAlign: 'justify' }}>
                                Solutions was established in 1997 to provide quality software outsourcing services to leading companies worldwide. With 4,000 engineers, we stand as one of Vietnam's largest software outsourcing companies. Our engineering team was selected from a large pool of Vietnam IT outsourcing; they are well-trained and have successfully completed numerous large and complex projects to provide world-class technology solutions to customers in 30 countries.
                                solutions and technology centers:
                            </Typography></SlideInOnScroll>
                        </Grid>
                        <Grid item xs={12} md={1}></Grid>

                        <Grid item xs={12} md={6}> <SlideInOnScroll direction='right'>
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
                            </Grid></SlideInOnScroll>
                        </Grid>
                    </Grid>
                </Container>
            </FadeSection>
            <FadeSection id='technologies'>
                <ArticleCarousel />
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
                            background: 'linear-gradient(to bottom, rgba(59, 13, 243, 0.85), rgba(38, 90, 145, 0))',

                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: -1,
                            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 90%)', // Tạo hiệu ứng viền
                        }}
                    />
                    <Container><SlideInOnScroll direction='right'>
                        <Grid container spacing={2}>

                            <Grid item xs={12} md={5}>
                                <Typography variant='h4' sx={{ fontWeight: "bold", color: "white" }}>Services</Typography>
                                <Typography sx={{ color: "white" }} mt={2}>
                                    We provide end-to-end solutions from ideas to design, implementation, testing, deployment, maintenance and support, across Software Development, Software Testing, Digital Transformation, and Innovation as a Service.
                                </Typography>
                            </Grid>

                        </Grid></SlideInOnScroll>
                        <SlideInOnScroll>
                            <img width={"98%"} src="https://tmastorage.azureedge.net/uploadfiles/Home/Services/page_home_section_service_desktop.webp" alt="" />
                        </SlideInOnScroll>
                    </Container>
                </Box>
            </FadeSection>
            <FadeSection id='stories'>
                <Container sx={{}}>
                    <Typography variant='h4' sx={{ fontWeight: "bold", textAlign: "center" }}>Our Success Stories</Typography>
                    <Typography textAlign={"center"}>Discover Solutions' sample projects, featuring success stories achieved by our software engineers. Witness the impact of our software outsourcing services on businesses and operations.</Typography>
                    <Box sx={{ position: 'relative', py: 6 }}>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            navigation={{
                                prevEl: '.custom-swiper-prev',
                                nextEl: '.custom-swiper-next',
                            }}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 2000 }}
                            spaceBetween={24}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                600: { slidesPerView: 2 },
                                960: { slidesPerView: 3 },
                            }}
                        >
                            {categories.map((cat, index) => (
                                <SwiperSlide key={index}>
                                    <Box
                                        sx={{
                                            backgroundColor: '#f5f9ff',
                                            borderRadius: 2,
                                            p: 3,
                                            height: '100%',
                                            border: '2px solid transparent',
                                            transition: '0.4s',
                                            '&:hover': {
                                                borderColor: '#1976d2',
                                            },
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <img src={cat.img} width="10%" alt="" />
                                            <Typography fontSize={"15px"} fontWeight="bold">
                                                {cat.title}
                                            </Typography>
                                        </Box>

                                        <Divider sx={{ my: 1 }} />

                                        <List dense>
                                            {cat.items.map((item, i) => (
                                                <ListItem key={i} disableGutters>
                                                    <ListItemIcon sx={{ minWidth: 24 }}>
                                                        <FiberManualRecordIcon fontSize="small" sx={{ color: '#c1c1c1' }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary={item} primaryTypographyProps={{ fontSize: 14 }} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Prev Button */}
                        <IconButton
                            className="custom-swiper-prev"
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: { xs: -20, sm: -40, md: -50 },
                                transform: 'translateY(-50%)',
                                zIndex: 10,
                                backgroundColor: 'white',
                                boxShadow: 1,
                                '&:hover': { backgroundColor: '#e0f2ff' },
                            }}
                        >
                            <ArrowBackIosNewIcon />
                        </IconButton>

                        {/* Nút next */}
                        <IconButton
                            className="custom-swiper-next"
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                right: { xs: -20, sm: -40, md: -50 },
                                transform: 'translateY(-50%)',
                                zIndex: 10,
                                backgroundColor: 'white',
                                boxShadow: 1,
                                '&:hover': { backgroundColor: '#e0f2ff' },
                            }}
                        >
                            <ArrowForwardIosIcon />
                        </IconButton>
                        <Box mt={3}>
                            <div className="swiper-pagination" />
                        </Box>
                    </Box>


                </Container>
            </FadeSection>
            <FadeSection id="industries" >
                <Box sx={{ mx: 'auto', py: 4 }}>
                    <Box
                        sx={{
                            p: 5,
                            background: 'linear-gradient(to bottom, #1976d2, rgba(149, 10, 138, 0.56))',
                            backdropFilter: 'blur(6px)',
                            WebkitBackdropFilter: 'blur(6px)',
                        }}
                    >
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
                    </Box>
                    <FadeSection id="blog" >
                        <BlogSection />
                    </FadeSection>
                </Box>
            </FadeSection>
            <FadeSection id='star'>
                <Box
                    ref={ref}
                    sx={{
                        background: '#001F3F',
                        py: 6,
                        color: 'white',
                        textAlign: 'center',
                        mb: 6
                    }}
                >
                    <Grid container spacing={4} justifyContent="center">
                        {stats.map((item, index) => (
                            <Grid item xs={6} md={3} key={index}>
                                <Box>
                                    {item.icon}
                                    <Typography variant="h5" fontWeight="bold" mt={1}>
                                        {item.prefix}
                                        {inView ? (
                                            <CountUp
                                                start={0}
                                                end={item.value}
                                                duration={2}
                                                decimals={item.value % 1 !== 0 ? 1 : 0}
                                            />
                                        ) : (
                                            '0'
                                        )}
                                        {item.suffix}
                                    </Typography>
                                    <Typography variant="body2">{item.label}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </FadeSection>
            <FadeSection id="What-clients">
                <Container disableGutters maxWidth={false}>
                    <Box
                        sx={{
                            background: '#009BFF',
                            color: 'white',
                            clipPath: {
                                xs: 'polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0 100%)', // ít nghiêng hơn ở mobile
                                md: 'polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)',
                            },
                            py: { xs: 5, sm: 6, md: 8 },
                            px: { xs: 2, sm: 4 },
                            position: 'relative',
                            zIndex: 1,
                            mb: { xs: -10, md: -23 }, // đỡ bị lấn nội dung bên dưới ở mobile
                            textAlign: 'center',
                        }}
                    >
                        <Container>
                            <Typography
                                variant="h4"
                                fontWeight="bold"
                                fontSize={{ xs: '1.5rem', sm: '1.8rem', md: '2rem' }}
                            >
                                What our clients say?
                            </Typography>

                            <Typography
                                mt={2}
                                fontSize={{ xs: '0.95rem', sm: '1rem' }}
                                maxWidth="md"
                                mx="auto"
                            >
                                We sincerely appreciate our customers for their valuable feedback and support.
                                Our top priority is to fulfill your business needs with our appropriate technology solutions.
                            </Typography>

                            <Box mt={4}>
                                <Typography
                                    sx={{
                                        fontStyle: 'italic',
                                        fontSize: { xs: '0.95rem', sm: '1rem' },
                                    }}
                                >
                                    “The management team is attentive, responsive to feedback and demonstrates initiative
                                    in continually improving effectiveness.”
                                </Typography>

                                <Typography
                                    mt={2}
                                    fontWeight="bold"
                                    fontSize={{ xs: '0.95rem', sm: '1rem' }}
                                >
                                    Lori Ciaralli, Engineering Director, Network Management & Security, Ribbon Communications
                                </Typography>

                                <Typography fontSize={{ xs: '0.9rem', sm: '1rem' }}>
                                    USA
                                </Typography>
                            </Box>
                        </Container>
                    </Box>
                </Container>
            </FadeSection>


            <ScrollToTopButton />
            <Footer hasDownload={true} />
        </>
    )
}

export default OutsourceHomePage
