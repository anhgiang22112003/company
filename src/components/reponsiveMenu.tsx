import { Box, Container, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useEffect, useRef, useState } from "react"

interface Section {
    id: string
    label: string
}

interface ResponsiveMenuProps {
    sections: Section[]
}

const ResponsiveMenu = ({ sections }: ResponsiveMenuProps) => {
    const [activeMenu, setActiveMenu] = useState(sections[0]?.id || '')
    const [menuPage, setMenuPage] = useState(0)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const ITEMS_PER_PAGE = isMobile ? 2 : 7
    const totalPages = Math.ceil(sections.length / ITEMS_PER_PAGE)
    const [isAtBottom, setIsAtBottom] = useState(false)
    const [isSticky, setIsSticky] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const visibleItems = sections.slice(menuPage * ITEMS_PER_PAGE, (menuPage + 1) * ITEMS_PER_PAGE)

    // Chuyển trang menu prev
    const handlePrev = () => {
        if (menuPage > 0) setMenuPage(menuPage - 1)
    }

    // Chuyển trang menu next
    const handleNext = () => {
        if (menuPage < totalPages - 1) setMenuPage(menuPage + 1)
    }

    const handleMenuClick = (id: string) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        setActiveMenu(id)
    }
    useEffect(() => {
        const handleScroll = () => {
            if (menuRef.current) {
                const offsetTop = menuRef.current.getBoundingClientRect().top
                setIsSticky(offsetTop <= 143) // header cao 140px
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const bottomAnchor = document.getElementById('bottom-anchor')
        if (!bottomAnchor) return

        const bottomObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsAtBottom(entry.isIntersecting)
                })
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        )

        bottomObserver.observe(bottomAnchor)

        return () => {
            bottomObserver.disconnect()
        }
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {

                // Tìm entry đang intersecting và có tỉ lệ lớn hơn threshold
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        const id = entry.target.id
                        const index = sections.findIndex((sec) => sec.id === id)
                        if (index === -1) return
                        const newPage = Math.floor(index / ITEMS_PER_PAGE)

                        setMenuPage((currentPage) => {
                            if (currentPage !== newPage) {
                                return newPage
                            }
                            return currentPage
                        })

                        setActiveMenu(id)
                        break
                    }
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        )
        sections.forEach((sec) => {
            const el = document.getElementById(sec.id)
            if (el) observer.observe(el)
        })

        // Cleanup khi unmount
        return () => observer.disconnect()
    }, [sections, ITEMS_PER_PAGE])

    return (
        <Box
            ref={menuRef}
            sx={{
                position: 'sticky',
                top: 142,
                zIndex: 1100, // thấp hơn header
                py: 1,
                transform: isAtBottom ? 'translateY(-100%)' : 'translateY(0)',
                transition: 'transform 0.3s ease',
            }}
        >

            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, bgcolor: isSticky ? '#1976d3' : 'white', }}>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2,
                            padding: 1.5,
                            flexWrap: 'nowrap',
                            borderRadius: 2,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: isMobile ? '90%' : '100%',
                            maxWidth: isMobile ? '90%' : '100%',
                            boxShadow: 1,
                        }}
                    >
                        <IconButton onClick={handlePrev} disabled={menuPage === 0} size="small">
                            <ArrowBackIosNewIcon fontSize="small" />
                        </IconButton>

                        {visibleItems.map(({ id, label }) => {
                            const isActive = activeMenu === id
                            return (
                                <Box
                                    key={id}
                                    onClick={() => handleMenuClick(id)}
                                    sx={{
                                        position: 'relative',
                                        cursor: 'pointer',
                                        px: 2,
                                        py: 1.5,
                                        borderRadius: 1.5,
                                        minWidth: isMobile ? '120px' : 'auto',
                                        maxWidth: isMobile ? '160px' : 'auto',
                                        flex: isMobile ? '0 0 auto' : 'unset',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: isActive ? 'black' : 'black',
                                        textAlign: 'center',
                                        backgroundColor: isActive ? 'white' : 'transparent',
                                        transition: 'color 0.3s ease-in-out',
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: isActive ? '100%' : '0%',
                                            height: '100%',
                                            backgroundColor: 'white',
                                            zIndex: 0,
                                            transition: 'width 0.4s ease-in-out',
                                            borderRadius: 1.5,
                                        }, '&:hover': {
                                            color: 'black',
                                            '&::before': {
                                                width: '100%',
                                            },
                                        },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            position: 'relative',
                                            fontWeight: 500,
                                            fontSize: { xs: '0.75rem', sm: '0.875rem' },
                                            textAlign: 'center',
                                            whiteSpace: 'normal',
                                            wordBreak: 'break-word',
                                            zIndex: 1,
                                        }}
                                    >
                                        {label}
                                    </Typography>
                                </Box>
                            )
                        })}

                        <IconButton
                            onClick={handleNext}
                            disabled={menuPage >= totalPages - 1}
                            size="small"
                            sx={{ visibility: menuPage >= totalPages - 1 ? 'hidden' : 'visible', }}

                        >
                            <ArrowForwardIosIcon fontSize="small" />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default ResponsiveMenu
