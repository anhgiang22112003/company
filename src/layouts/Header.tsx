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
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import MenuIcon from '@mui/icons-material/Menu'
import MenuBookIcon from '@mui/icons-material/MenuBook'
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

    // Tính toán vị trí menu con
    const menuItemEl = menuRefs.current[openMenuIndex ?? 0]
    const menuRect = menuItemEl?.getBoundingClientRect()
    const parentRect = menuItemEl?.offsetParent?.getBoundingClientRect()
    const arrowLeft =
        menuRect && parentRect
            ? menuRect.left - 60 + (menuRect.width ?? 0) / 2 - 10
            : 0

    // === RENDER ===
    return (
        <>

            <AppBar
                position="fixed"

                elevation={0}
                sx={{
                    bgcolor: isScrolled ? 'white' : '#1976d2',
                    color: isScrolled ? 'black' : 'white',
                    boxShadow: isScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
                    transition: 'all 0.3s ease-in-out',
                    px: 3,
                    zIndex: 1500
                }}
            >
                <Toolbar
                    sx={{
                        justifyContent: 'space-between',
                        minHeight: '150px !important',
                        px: 0,
                        display: 'flex',
                    }}
                >
                    <Typography variant="h4" sx={{
                        fontWeight: 'bold', fontSize: {
                            xs: '1.2rem',  // Mobile
                            sm: '1.5rem',  // Tablet
                            md: '2rem',    // Desktop
                        },
                    }}>
                        IT Outsourcing
                    </Typography>

                    {/* MOBILE: Hamburger */}
                    <Box
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            alignItems: 'center',
                            gap: 1,
                        }}
                    >
                        <IconButton
                            onClick={() => setMobileMenuOpen(true)}
                            sx={{ color: isScrolled ? 'black' : 'white' }}
                        >
                            <MenuIcon sx={{ fontSize: 37 }} />
                        </IconButton>
                        <IconButton
                            onClick={() => setSearchOpen((prev) => !prev)}
                            sx={{ color: isScrolled ? 'black' : 'white' }}
                        >
                            <SearchIcon sx={{ fontSize: 37 }} />
                        </IconButton>
                    </Box>

                    {/* DESKTOP: Menu chính */}
                    <Box
                        ref={menuAreaRef}
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            alignItems: 'center',
                            gap: 4,
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
                                        gap: 1,
                                        color:
                                            isScrolled || openMenuIndex === index
                                                ? 'black'
                                                : 'white',
                                        fontWeight: 600,
                                        fontSize: '1.1rem',
                                        cursor: 'pointer',
                                        transition: 'color 0.3s ease',
                                        borderBottom:
                                            openMenuIndex === index
                                                ? '2px solid #1976d2'
                                                : 'none',
                                        pb: openMenuIndex === index ? '4px' : 0,
                                    }}
                                    onMouseEnter={() => {
                                        if (item.hasSubMenu) {
                                            setOpenMenuIndex(index)
                                        } else {
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
                                            }}
                                        >
                                            <KeyboardArrowDownIcon sx={{ fontSize: 27 }} />
                                        </Box>
                                    )}
                                </Link>
                            </Box>
                        ))}
                        <Link href="/contact">
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: 'white',
                                    color: 'black',
                                    border: '1px solid #ccc',
                                    fontWeight: 600,
                                    fontSize: '1.1rem',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        bgcolor: '#1976d2',
                                        color: 'white',
                                    },
                                }}
                            >
                                Contact Us
                            </Button>
                        </Link>

                        <IconButton
                            onClick={() => setSearchOpen((prev) => !prev)}
                            sx={{ color: isScrolled ? 'black' : 'white' }}
                        >
                            <SearchIcon sx={{ fontSize: 37 }} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Search Box */}
            <Slide direction="down" in={searchOpen} mountOnEnter unmountOnExit timeout={300}>
                <Box
                    sx={{
                        position: 'fixed',
                        top: '144px',
                        left: 0,
                        width: '100%',
                        bgcolor: 'white',
                        py: { xs: 1.5, md: 2 },
                        px: { xs: 0.1, md: 4 },
                        zIndex: 1200,
                        display: 'flex',
                        justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            bgcolor: '#f9f9f9',
                            px: { xs: 1, md: 2.5 },
                            py: { xs: 1, md: 0.5 },
                            borderRadius: 3,
                            width: { xs: '80%', sm: '80%', md: '60%' },
                            border: '1px solid #ddd',
                        }}
                    >
                        <SearchIcon sx={{ color: '#999', mr: 1, fontSize: { xs: 22, md: 28 } }} />
                        <InputBase
                            placeholder="Tìm kiếm..."
                            sx={{
                                flex: 1,
                                fontSize: { xs: 18, md: 24 },
                                color: '#333',
                            }}
                        />
                        <IconButton
                            onClick={() => setSearchOpen(false)}
                            sx={{ ml: 1 }}
                        >
                            <CloseIcon sx={{ fontSize: { xs: 22, md: 28 } }} />
                        </IconButton>
                    </Box>
                </Box>
            </Slide>


            {/* SubMenu Desktop */}
            {!isMobile && (
                <>
                    {openMenuIndex !== null && (
                        <Grow in>
                            <Box
                                ref={subMenuRef}
                                sx={{
                                    position: 'fixed',
                                    top: '104px',
                                    left: '60px',
                                    right: '60px',
                                    margin: 'auto',
                                    bgcolor: 'white',
                                    p: 3,
                                    boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
                                    zIndex: 1600,
                                    borderRadius: 1,
                                    boxSizing: 'border-box',
                                    maxWidth: 'calc(100% - 120px)',
                                    pointerEvents: 'auto',
                                }}
                                onMouseLeave={() => setOpenMenuIndex(null)}
                            >
                                {/* Mũi tên chỉ lên */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: -20,
                                        left: `${arrowLeft}px`,
                                        transform: 'translateX(-50%)',
                                        zIndex: 1401,
                                    }}
                                >
                                    <KeyboardArrowUpIcon
                                        sx={{
                                            fontSize: 34,
                                            color: 'white',
                                        }}
                                    />
                                </Box>

                                {/* ⭐️ Tên menu chính hiện tại */}
                                <Typography
                                    sx={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        mb: 2,
                                        fontSize: '18px',
                                        color: '#007ACC',
                                    }}
                                >
                                    {menuItems[openMenuIndex].label}
                                </Typography>

                                {/* 🌟 Menu con */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        gap: 4,
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    {(subMenus[menuItems[openMenuIndex].label] || []).map((item, idx) => (
                                        <Box
                                            key={idx}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1,
                                                px: 2,
                                                py: 1,
                                                borderRadius: 1,
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    backgroundColor: '#E3F2FD',
                                                    color: '#007ACC',
                                                },
                                            }}
                                        >
                                            <Typography>
                                                <Link
                                                    href={item.href}
                                                    key={item.label}
                                                    underline="none"
                                                    sx={{ display: 'flex', alignItems: 'center', gap: 1, py: 0.5 }}
                                                >
                                                    {item.icon && (
                                                        <Box component="img" src={item.icon} alt={item.label} width={20} height={20} />
                                                    )}
                                                    <Typography variant="body2">{item.label}</Typography>
                                                </Link></Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Grow>
                    )}
                </>
            )}

            {/* Mobile Drawer Menu */}
            {isMobile && (
                <Drawer
                    anchor="left"
                    open={mobileMenuOpen}
                    onClose={() => setMobileMenuOpen(false)}
                    sx={{
                        '& .MuiDrawer-paper': {
                            width: '75%',
                            maxWidth: 300,
                            p: 2,

                        }, zIndex: 1550
                    }}
                >
                    <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
                        <IconButton onClick={() => setMobileMenuOpen(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <List>
                        {menuItems.map((item, index) => (
                            <React.Fragment key={index}>
                                <ListItem
                                    button
                                    onClick={() => {
                                        if (item.hasSubMenu) {
                                            if (openMenuIndex === index) {
                                                setOpenMenuIndex(null)
                                            } else {
                                                setOpenMenuIndex(index)
                                            }
                                        } else {
                                            setMobileMenuOpen(false)
                                            setOpenMenuIndex(null)
                                        }
                                    }}
                                >
                                    <ListItem
                                        disableGutters // Bỏ padding trái/phải nếu muốn gọn
                                        sx={{
                                            borderBottom: 'none', // Bỏ gạch dưới
                                            color: 'black', // Màu chữ hoặc có thể dùng theme.palette.text.primary
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            px: 2, // Padding trái phải nếu cần
                                            py: 1,
                                            '&:hover': {
                                                backgroundColor: 'rgba(0, 0, 0, 0.04)', // Hover nhẹ
                                            },
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            underline="none" // Bỏ gạch dưới của link
                                            color="inherit" // Kế thừa màu chữ từ ListItem
                                            style={{ flex: 1 }} // Cho chiếm phần lớn không gian
                                        >
                                            <ListItemText
                                                primary={item.label}
                                                primaryTypographyProps={{
                                                    fontWeight: openMenuIndex === index ? 'bold' : 'normal',
                                                }}
                                            />
                                        </Link>

                                        {item.hasSubMenu &&
                                            (openMenuIndex === index ? (
                                                <KeyboardArrowUpIcon sx={{ ml: 1 }} />
                                            ) : (
                                                <KeyboardArrowDownIcon sx={{ ml: 1 }} />
                                            ))}
                                    </ListItem>
                                </ListItem>
                                {/* Submenu mobile */}
                                {item.hasSubMenu && openMenuIndex === index && (
                                    <List sx={{ pl: 4 }}>
                                        {(subMenus[item.label] || []).map((subItem, idx) => (
                                            <ListItem
                                                key={idx}
                                                disableGutters
                                                onClick={() => setMobileMenuOpen(false)}
                                                sx={{ py: 0.5 }}
                                            >
                                                <Link
                                                    href={subItem.href}
                                                    underline="none"
                                                    color="inherit"
                                                    style={{ width: '100%' }} // để Link chiếm toàn bộ chiều ngang ListItem
                                                >
                                                    <ListItemText
                                                        primary={subItem.label}
                                                        primaryTypographyProps={{
                                                            fontSize: 14,
                                                        }}
                                                    />
                                                </Link>
                                            </ListItem>
                                        ))}
                                    </List>
                                )}

                            </React.Fragment>
                        ))}
                        <ListItem>

                            <Button
                                fullWidth
                                variant="contained"
                                sx={{
                                    bgcolor: '#1976d2',

                                    fontWeight: 600,
                                }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <Link style={{ color: 'white' }} href="/contact">
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
