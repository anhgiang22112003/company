import React, { useEffect, useRef, useState } from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Link,
    IconButton,
    InputBase,
    Button,
    Grow,
    Fade,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useTheme,

    useMediaQuery,
    Slide,
    CssBaseline,
    Grid,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import MenuIcon from '@mui/icons-material/Menu'
interface SubMenuItem {
    label: string
    href: string
    icon?: string // chỉ có trong Services
}
const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', hasSubMenu: true, href: '/services' },
    { label: 'Industries', hasSubMenu: true, href: '/industries' },
    { label: 'Technologies', hasSubMenu: true, href: '/technologies' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'News', href: '/new' },
]
const subMenus: Record<string, SubMenuItem[]> = {

    Services: [
        {
            label: 'Software Development',
            href: '/services/software-development',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/service/Software-Development.webp',
        },
        {
            label: 'Testing',
            href: '/services/testing',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/service/Software-Testing.webp',
        },
        {
            label: 'Digital Transformation',
            href: '/services/digital-transformation',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/service/Digital-Transformation.webp',
        },
        {
            label: 'Innovation as a Service',
            href: '/services/innovation-as-a-service',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/service/Innovation-as-a-service.webp',
        },
        {
            label: 'Security Application Development',
            href: '/services/security-application-development',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/menu_item_20250331075046.201.webp',
        },
    ],
    Industries: [
        {
            label: 'Telecom',
            href: '/industries/telecom',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/industries/Telecom.webp',
        },
        {
            label: 'Finance',
            href: '/industries/finance',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/industries/Finance.webp',
        },
        {
            label: 'Insurance',
            href: '/industries/insurance',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/industries/Insurance.webp',
        },
        {
            label: 'E-Commerce & Retail',
            href: '/industries/e-commerce-retail',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/industries/E-Commerce-Retail.webp',
        },
        {
            label: 'Healthcare',
            href: '/industries/healthcare',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/industries/Healthcare.webp',
        },
        {
            label: 'Logistics',
            href: '/industries/logistics',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/industries/Logistics.webp',
        },
        {
            label: 'Automotive',
            href: '/industries/automotive',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/industries/Automotive.webp',
        },
    ],
    Technologies: [
        {
            label: 'Big Data & Analytics',
            href: '/technologies/big-data-analytics',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/technologies/Big-Data-Analytics.webp',
        },
        {
            label: 'AI/ML & Data Sciences',
            href: '/technologies/ai-ml-data-sciences',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/technologies/AI-ML-Data-Science.webp',
        },
        {
            label: 'RPA',
            href: '/technologies/rpa',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/technologies/RPA.webp',
        },
        {
            label: '5G',
            href: '/technologies/5g',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/technologies/5G.webp',
        },
        {
            label: 'IoT',
            href: '/technologies/iot',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/technologies/IOT.webp',
        },
        {
            label: 'Cloud',
            href: '/technologies/cloud',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/technologies/Cloud.webp',
        },
        {
            label: 'DevOps',
            href: '/technologies/devops',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/technologies/DevOps.webp',
        },
        {
            label: 'Low Code',
            href: '/technologies/low-code',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/technologies/Low-Code.webp',
        },
        {
            label: 'Hardware Integration',
            href: '/technologies/hardware-integration',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/service/tma-hardware-lab.webp',
        },
    ],
    About: [
        {
            label: 'Why',
            href: '/about/why',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240701172550.100.webp',
        },
        {
            label: 'Leadership',
            href: '/about/leadership',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/AboutTMA/Leadership.webp',
        },
        {
            label: 'CSR',
            href: '/about/csr',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/AboutTMA/csr.webp',
        },
        {
            label: 'Image Gallery',
            href: '/about/image-gallery',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/AboutTMA/image-gallery.webp',
        },
        {
            label: 'Company History',
            href: '/about/company-history',
            icon: 'https://tmastorage.azureedge.net/uploadfiles/icon-sub-menu/AboutTMA/company-history.webp',
        },
    ]


}

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const menuRefs = useRef<(HTMLAnchorElement | null)[]>([])
    const menuAreaRef = useRef<HTMLDivElement | null>(null)
    const subMenuRef = useRef<HTMLDivElement | null>(null)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 10)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const target = e.target as Node
            if (
                menuAreaRef.current &&
                !menuAreaRef.current.contains(target) &&
                subMenuRef.current &&
                !subMenuRef.current.contains(target)
            ) {
                setOpenMenuIndex(null)
            }
        }

        if (openMenuIndex !== null) {
            document.addEventListener('mousemove', handleMouseMove)
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [openMenuIndex])
    const [arrowLeft, setArrowLeft] = useState(0)

    useEffect(() => {
        const updateArrowPosition = () => {
            const menuItemEl = menuRefs.current[openMenuIndex ?? 0]
            const submenuEl = subMenuRef.current

            if (menuItemEl && submenuEl) {
                const menuRect = menuItemEl.getBoundingClientRect()
                const submenuRect = submenuEl.getBoundingClientRect()

                const newArrowLeft = menuRect.left + menuRect.width / 2 - submenuRect.left
                setArrowLeft(newArrowLeft)
            }
        }

        let rafId: number

        if (openMenuIndex !== null) {
            // Gọi sau khi trình duyệt render để chắc chắn DOM submenu đã sẵn sàng
            rafId = requestAnimationFrame(updateArrowPosition)
            window.addEventListener('resize', updateArrowPosition)
        }

        return () => {
            cancelAnimationFrame(rafId) // hủy nếu cần
            window.removeEventListener('resize', updateArrowPosition)
        }
    }, [openMenuIndex])

    // Tính toán vị trí menu con


    const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    // Logic hover cho menu items
    const handleMouseEnter = () => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current)
        }
    }

    const handleMouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setOpenMenuIndex(null)
        }, 200)
    }


    // === RENDER ===
    return (
        <>
        
            <Box
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                sx={{ position: 'relative' }}
            >
                {/* Menu Desktop */}
                
                <AppBar
                    position="fixed"
                    elevation={0} // Start with no shadow
                    sx={{
                        // Background and text color change based on scroll
                        bgcolor: isScrolled ? 'white' : '#1976d2',
                        color: isScrolled ? 'black' : 'white',
                        // Smoother shadow transition
                        boxShadow: isScrolled ? '0 4px 12px rgba(0,0,0,0.15)' : 'none', // Thêm shadow hiện đại hơn
                        transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)', // Custom transition curve for smoothness
                        px: { xs: 2, sm: 3, md: 5 }, // Responsive padding
                        zIndex: 1500,
                        borderBottom: isScrolled ? '1px solid #eee' : 'none', // Thêm đường viền mỏng khi cuộn
                    }}
                >
                    <Toolbar
                        sx={{
                            justifyContent: 'space-between',
                            // Giảm minHeight khi cuộn để AppBar trông gọn hơn
                            minHeight: '150px !important', px: 0,
                            transition: 'min-height 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)', // Smooth height transition
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: {
                                    xs: '1.4rem',  // Mobile
                                    sm: '1.8rem',  // Tablet
                                    md: '2.2rem',    // Desktop (lớn hơn một chút)
                                },
                                // Hiệu ứng chữ đổi màu mượt mà
                                transition: 'color 0.4s ease-in-out',
                            }}
                        >
                            IT Outsourcing
                        </Typography>

                        {/* MOBILE: Hamburger */}
                        <Box
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                alignItems: 'center',
                                gap: 1.5, // Khoảng cách giữa icon
                            }}
                        >
                            <IconButton
                                onClick={() => setMobileMenuOpen(true)}
                                sx={{
                                    color: isScrolled ? 'black' : 'white',
                                    '&:hover': {
                                        bgcolor: isScrolled ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.1)', // Hover effect
                                    },
                                    transition: 'color 0.3s ease, background-color 0.3s ease',
                                }}
                            >
                                <MenuIcon sx={{ fontSize: 32 }} /> {/* Kích thước icon tinh tế hơn */}
                            </IconButton>
                            <IconButton
                                onClick={() => setSearchOpen((prev) => !prev)}
                                sx={{
                                    color: isScrolled ? 'black' : 'white',
                                    '&:hover': {
                                        bgcolor: isScrolled ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.1)',
                                    },
                                    transition: 'color 0.3s ease, background-color 0.3s ease',
                                }}
                            >
                                <SearchIcon sx={{ fontSize: 32 }} />
                            </IconButton>
                        </Box>

                        {/* DESKTOP: Menu chính */}
                        <Box
                            ref={menuAreaRef}
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                alignItems: 'center',
                                gap: 4, // Khoảng cách giữa các mục menu
                            }}
                        >
                            {menuItems.map((item, index) => (
                                <Box key={index} sx={{ position: 'relative' }}>
                                    <Link
                                        href={item?.href}
                                        underline="none"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 0.5, // Khoảng cách nhỏ hơn giữa chữ và mũi tên
                                            color:
                                                isScrolled || openMenuIndex === index
                                                    ? 'black'
                                                    : 'white',
                                            fontWeight: 600,
                                            fontSize: '1.05rem', // Kích thước font tinh tế hơn
                                            cursor: 'pointer',
                                            transition: 'color 0.3s ease, border-bottom 0.3s ease',
                                            // Hiệu ứng gạch chân hiện đại hơn
                                            borderBottom:
                                                openMenuIndex === index
                                                    ? '2px solid #1976d2'
                                                    : '2px solid transparent', // Luôn có border nhưng trong suốt
                                            pb: '4px', // padding bottom để border không dính chữ
                                            '&:hover': {
                                                color: isScrolled ? '#1976d2' : 'white', // Đổi màu khi hover
                                                borderBottom: '2px solid #1976d2', // Hiện border khi hover
                                            }
                                        }}
                                        onMouseEnter={() => {
                                            if (item.hasSubMenu) {
                                                setOpenMenuIndex(index)
                                            } else {
                                                setOpenMenuIndex(null)
                                            }
                                        }}
                                        // Thêm onMouseLeave để đóng menu khi rời khỏi Link nếu không có submenu
                                        onMouseLeave={() => {
                                            if (!item.hasSubMenu) {
                                                setOpenMenuIndex(null)
                                            }
                                        }}
                                        ref={(el) => {
                                            menuRefs.current[index] = el
                                        }}
                                    >
                                        {item.label}
                                        {item.hasSubMenu && (
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    transition: 'transform 0.3s ease',
                                                    transform:
                                                        openMenuIndex === index
                                                            ? 'rotate(180deg)'
                                                            : 'rotate(0deg)',
                                                    color: openMenuIndex === index ? 'white' : (isScrolled ? 'black' : 'white'), // Màu mũi tên
                                                }}
                                            >
                                                <KeyboardArrowDownIcon sx={{ fontSize: 22 }} /> {/* Kích thước icon mũi tên */}
                                            </Box>
                                        )}
                                    </Link>
                                </Box>
                            ))}
                            <Link href="/contact" underline="none"> {/* Đảm bảo Link bao bọc Button */}
                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: 'white',
                                        color: '#1976d2', // Màu chữ xanh dương trên nền trắng
                                        border: '1px solid #1976d2', // Border cùng màu chữ
                                        fontWeight: 600,
                                        fontSize: '1.05rem',
                                        py: '8px', // Padding dọc
                                        px: '20px', // Padding ngang
                                        borderRadius: 8, // Góc bo tròn nhiều hơn
                                        transition: 'all 0.3s ease-in-out',
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)', // Thêm shadow nhẹ
                                        '&:hover': {
                                            bgcolor: '#1976d2',
                                            color: 'white',
                                            boxShadow: '0 6px 14px rgba(0,0,0,0.2)', // Shadow lớn hơn khi hover
                                            transform: 'translateY(-2px)', // Nhô lên một chút khi hover
                                        },
                                    }}
                                >
                                    Contact Us
                                </Button>
                            </Link>

                            <IconButton
                                onClick={() => setSearchOpen((prev) => !prev)}
                                sx={{
                                    color: isScrolled ? 'black' : 'white',
                                    '&:hover': {
                                        bgcolor: isScrolled ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.1)',
                                    },
                                    transition: 'color 0.3s ease, background-color 0.3s ease',
                                }}
                            >
                                <SearchIcon sx={{ fontSize: 32 }} />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {/* SubMenu Desktop */}
                {!isMobile && openMenuIndex !== null && (
                    <Grow in>
                        <Box>
                            <Box
                                ref={subMenuRef}
                                sx={{
                                    position: 'fixed',
                                    top: '108px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    minWidth: '450px',
                                    maxWidth: 'calc(100vw - 60px)',
                                    bgcolor: 'white',
                                    p: 0,
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)',
                                    zIndex: 1600,
                                    borderRadius: '12px',
                                    boxSizing: 'border-box',
                                    pointerEvents: 'auto',
                                    right: 'auto',

                                }}
                                onMouseLeave={() => setOpenMenuIndex(null)}
                            >
                                {/* Enhanced Arrow */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: -18.5,
                                        left: `${arrowLeft}px`,
                                        transform: 'translateX(-50%)',
                                        zIndex: 1401,
                                        width: 0,
                                        height: 0,
                                        borderLeft: '19px solid transparent',
                                        borderRight: '19px solid transparent',
                                        borderBottom: `19px solid ${isScrolled ? ' #667eea' : 'white'}`,
                                        filter: 'drop-shadow(0 -2px 3px rgba(0,0,0,0.08))',
                                    }}
                                />

                                {/* Modern Header */}
                                <Box
                                    sx={{
                                                                           

                                        color: isScrolled ?'white':'black',
                                        p: 1,
                                        position: 'relative',
                                        overflow: 'hidden',
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: isScrolled ? "#667eea": 'white',
                                        }
                                    }}
                                >
                                    <Typography
                                        
                                        sx={{
                                            textAlign: 'center',
                                            fontWeight: 700,
                                            mb: 0,
                                            position: 'relative',
                                            zIndex: 1,
                                            letterSpacing: '0.5px',
                                            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                        }}
                                    >
                                        {menuItems[openMenuIndex].label}
                                    </Typography>
                                </Box>

                                {/* Content Area */}
                                <Box sx={{ p: 1 }}>
                                    {/* Navigation breadcrumb - back to main menu */}

                                    <Grid
                                        container
                                        spacing={1}
                                        sx={{
                                            justifyContent: 'center',
                                            maxWidth: '100%',
                                        }}
                                    >
                                        {(subMenus[menuItems[openMenuIndex].label] || []).map((item, idx) => (
                                            <Grid item xs={6} sm={4} md={2.3} key={idx}>
                                                <Link
                                                    href={item.href}
                                                    underline="none"
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'row', // ✅ nằm cùng hàng
                                                        alignItems: 'center',
                                                        gap: 1,
                                                        p: 1,
                                                        borderRadius: '10px',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                        color: '#374151',
                                                        textDecoration: 'none',
                                                        border: '1px solid transparent',
                                                        position: 'relative',
                                                        overflow: 'hidden',
                                                        minHeight: '50px',
                                                        background: 'rgba(255,255,255,0.8)',
                                                        '&::before': {
                                                            content: '""',
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            right: 0,
                                                            bottom: 0,
                                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                                            opacity: 0,
                                                            transition: 'all 0.9s cubic-bezier(0.23, 1, 0.32, 1)',
                                                            transform: 'translateX(-100%)',
                                                            zIndex: -1,
                                                            borderRadius: '10px',
                                                        },
                                                        '&::after': {
                                                            content: '""',
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            right: 0,
                                                            bottom: 0,
                                                            borderRadius: '10px',
                                                            background: '#667eea',
                                                            opacity: 0,
                                                            transition: 'opacity 0.9s ease',
                                                            zIndex: 1,
                                                            pointerEvents: 'none',
                                                        },
                                                        '&:hover': {
                                                            transform: 'translateY(-6px) scale(1.03)',
                                                            boxShadow: '0 20px 40px rgba(102, 126, 234, 0.25), 0 0 0 1px rgba(102, 126, 234, 0.15)',
                                                            border: '1px solid rgba(102, 126, 234, 0.2)',
                                                            '&::before': {
                                                                opacity: 1,
                                                                transform: 'translateX(0)',
                                                            },
                                                            '&::after': {
                                                                opacity: 1,
                                                            },
                                                            '& .submenu-icon': {
                                                                transform: 'scale(1.15) rotate(8deg)',
                                                                zIndex: 2,
                                                                '& img': {
                                                                    filter: 'brightness(0) saturate(100%) invert(100%)',
                                                                }
                                                            },
                                                            '& .submenu-icon-bg': {
                                                                background: 'rgba(255,255,255,0.25)',
                                                                backdropFilter: 'blur(15px)',
                                                                border: '1px solid rgba(255,255,255,0.3)',
                                                            },
                                                            '& .submenu-text': {
                                                                fontWeight: 600,
                                                                color: 'white',
                                                                zIndex: 2,
                                                                position: 'relative',
                                                                textShadow: '0 1px 3px rgba(0,0,0,0.2)',
                                                            }
                                                        },
                                                    }}
                                                >
                                                    {item.icon && (
                                                        <Box
                                                            className="submenu-icon"
                                                            sx={{
                                                                width: 40,
                                                                height: 40,
                                                                borderRadius: '8px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                transition: 'all 0.3s ease',
                                                                mb: 0.5,
                                                            }}
                                                        >
                                                            <Box
                                                                className="submenu-icon-bg"
                                                                sx={{
                                                                    width: '46px',
                                                                    height: '46px',
                                                                    borderRadius: '8px',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                                                                    transition: 'all 0.3s ease',
                                                                }}
                                                            >
                                                                <Box
                                                                    component="img"
                                                                    src={item.icon}
                                                                    alt={item.label}
                                                                    width={20}
                                                                    height={20}
                                                                    sx={{
                                                                        filter: 'brightness(0) saturate(100%) invert(47%) sepia(69%) saturate(959%) hue-rotate(217deg) brightness(91%) contrast(86%)',
                                                                        transition: 'all 0.3s ease',
                                                                    }}
                                                                />
                                                            </Box>
                                                        </Box>
                                                    )}
                                                    <Typography
                                                        variant="body2"
                                                        className="submenu-text"
                                                        sx={{
                                                            fontWeight: 500,
                                                            textAlign: 'center',
                                                            transition: 'all 0.3s ease',
                                                            lineHeight: 1.3,
                                                            fontSize: '0.75rem',
                                                        }}
                                                    >
                                                        {item.label}
                                                    </Typography>
                                                </Link>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </Box>
                        </Box>
                    </Grow>
                )}
            </Box>
            {/* Search Box */}
            <Slide direction="down" in={searchOpen} mountOnEnter unmountOnExit timeout={300}>
                <Box
                    sx={{
                        position: 'fixed',
                        // Điều chỉnh top để khớp với chiều cao AppBar khi cuộn
                        top: isScrolled ? '150px' : '150px', // Adjusted top based on AppBar height
                        left: 0,
                        width: '100%',
                        bgcolor: 'white',
                        py: { xs: 1.5, md: 2 },
                        px: { xs: 2, md: 6 }, // Tăng padding ngang
                        zIndex: 1400, // Đảm bảo search box nằm trên content nhưng dưới Appbar
                        display: 'flex',
                        justifyContent: 'center',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.15)', // Shadow rõ ràng hơn
                        transition: 'top 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)', // Smooth transition for top
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            bgcolor: '#f0f4f8', // Màu nền nhẹ nhàng hơn
                            px: { xs: 1.5, md: 3 }, // Tăng padding
                            py: { xs: 1.2, md: 1 }, // Tăng padding dọc
                            borderRadius: 20, // Bo tròn hoàn toàn
                            width: { xs: '90%', sm: '80%', md: '70%', lg: '50%' }, // Kích thước linh hoạt
                            border: '1px solid #e0e0e0', // Border tinh tế hơn
                        }}
                    >
                        <SearchIcon sx={{ color: '#666', mr: 1.5, fontSize: { xs: 24, md: 30 } }} />
                        <InputBase
                            placeholder="Tìm kiếm..."
                            sx={{
                                flex: 1,
                                fontSize: { xs: 16, md: 20 }, // Kích thước font tinh tế hơn
                                color: '#333',
                            }}
                        />
                        <IconButton
                            onClick={() => setSearchOpen(false)}
                            sx={{
                                ml: 1,
                                color: '#666',
                                '&:hover': { bgcolor: '#e0e0e0' }
                            }}
                        >
                            <CloseIcon sx={{ fontSize: { xs: 24, md: 30 } }} />
                        </IconButton>
                    </Box>
                </Box>
            </Slide>

            {/* Mobile Drawer Menu */}
            {isMobile && (
                <Drawer
                    anchor="left"
                    open={mobileMenuOpen}
                    onClose={() => setMobileMenuOpen(false)}
                    sx={{
                        '& .MuiDrawer-paper': {
                            width: '80%', // Rộng hơn một chút
                            maxWidth: 320, // Giới hạn chiều rộng
                            p: 3, // Tăng padding
                            bgcolor: '#1976d2',
                            color: 'white',
                            transition: 'all 0.3s ease-in-out',
                            boxShadow: '8px 0 15px rgba(0,0,0,0.3)', // Shadow rõ ràng hơn
                        },
                        zIndex: 1550
                    }}
                >
                    <Box sx={{ mb: 3, display: 'flex', justifyContent: 'flex-end' }}>
                        <IconButton
                            onClick={() => setMobileMenuOpen(false)}
                            sx={{ color: 'white' }}
                        >
                            <CloseIcon sx={{ fontSize: 30 }} /> {/* Kích thước icon lớn hơn */}
                        </IconButton>
                    </Box>
                    <List sx={{ pt: 0 }}> {/* Remove default padding-top */}
                        {menuItems.map((item, index) => (
                            <React.Fragment key={index}>
                                <ListItem
                                    disableGutters
                                    sx={{
                                        // Sử dụng display flex và justify content space-between để căn chỉnh tốt hơn
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        px: 2,
                                        py: 1.5, // Tăng padding
                                        borderRadius: 1, // Bo tròn nhẹ
                                        transition: 'background-color 0.2s ease',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Highlight khi hover
                                        },
                                    }}
                                    onClick={() => {
                                        if (!item.hasSubMenu) {
                                            setMobileMenuOpen(false)
                                            setOpenMenuIndex(null) // Đảm bảo reset trạng thái submenu
                                        }
                                    }}
                                >
                                    <Link
                                        href={item.href}
                                        underline="none"
                                        color="inherit" // Kế thừa màu trắng từ Drawer
                                        style={{
                                            flex: 1, textDecoration: 'none', // ✅ Ngăn Link bắt sự kiện click nếu có submenu
                                        }} // Ensure no underline
                                    >
                                        <ListItemText
                                            primary={item.label}
                                            primaryTypographyProps={{
                                                fontWeight: openMenuIndex === index ? 'bold' : 500, // Giữ đậm khi mở
                                                fontSize: '1.1rem', // Kích thước font menu
                                            }}
                                        />
                                    </Link>

                                    {item.hasSubMenu && (
                                        <IconButton
                                            size="small"
                                            onClick={(event) => {
                                                event.stopPropagation() // ✅ Ngăn ListItem bị click
                                                event.preventDefault()  // ✅ Ngăn xử lý mặc định
                                                setOpenMenuIndex(openMenuIndex === index ? null : index)
                                            }}
                                            sx={{ color: 'white' }} // Icon màu trắng
                                        >
                                            {openMenuIndex === index ? (
                                                <KeyboardArrowUpIcon sx={{ fontSize: 24 }} />
                                            ) : (
                                                <KeyboardArrowDownIcon sx={{ fontSize: 24 }} />
                                            )}
                                        </IconButton>
                                    )}
                                </ListItem>

                                {/* Submenu mobile */}
                                {item.hasSubMenu && openMenuIndex === index && (
                                    <List sx={{ pl: 4, py: 1, bgcolor: 'rgba(0,0,0,0.1)' }}> {/* Nền submenu đậm hơn */}
                                        {(subMenus[item.label] || []).map((subItem, idx) => (
                                            <ListItem
                                                key={idx}
                                                disableGutters
                                                onClick={() => {
                                                    setMobileMenuOpen(false)
                                                    setOpenMenuIndex(null) // Đóng cả menu chính khi click sub-item
                                                }}
                                                sx={{ py: 0.8, borderRadius: 1, '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' } }}
                                            >
                                                <Link
                                                    href={subItem.href}
                                                    underline="none"
                                                    color="inherit"
                                                    style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 1 }}
                                                >
                                                    {subItem.icon && (
                                                        <Box
                                                            component="img"
                                                            src={subItem.icon}
                                                            alt={subItem.label}
                                                            width={20}
                                                            height={20}
                                                            sx={{ filter: 'invert(1) grayscale(100%) brightness(200%)' }} // Làm icon trắng
                                                        />
                                                    )}
                                                    <ListItemText
                                                        primary={subItem.label}
                                                        primaryTypographyProps={{
                                                            fontSize: 15,
                                                            fontWeight: 400
                                                        }}
                                                    />
                                                </Link>
                                            </ListItem>
                                        ))}
                                    </List>
                                )}
                            </React.Fragment>
                        ))}

                        <ListItem sx={{ mt: 3 }}> {/* Khoảng cách trên nút Contact Us */}
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{
                                    bgcolor: 'white', // Nút màu trắng
                                    color: '#1976d2', // Chữ màu xanh dương
                                    fontWeight: 600,
                                    py: 1.5, // Padding lớn hơn
                                    borderRadius: 8, // Bo tròn nhiều hơn
                                    textTransform: 'none', // Không viết hoa chữ
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                                    '&:hover': {
                                        bgcolor: '#e0e0e0', // Màu xám nhẹ khi hover
                                        boxShadow: '0 6px 14px rgba(0,0,0,0.2)',
                                    }
                                }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <Link style={{ color: 'inherit', textDecoration: 'none' }} href="/contact">
                                    Contact Us
                                </Link>
                            </Button>
                        </ListItem>
                    </List>
                </Drawer>
            )}
        </>
    )
}

export default Header
