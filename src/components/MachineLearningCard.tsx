import { Box, Collapse, IconButton, Typography } from "@mui/material"
import { useState } from "react"
import SquareIcon from '@mui/icons-material/Square'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

const MachineLearningCard = ({ section }: any) => {
    const [expanded, setExpanded] = useState(false)
    const toggleExpand = () => setExpanded((prev) => !prev)

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: 300,
                bgcolor: '#f5faff',
                borderRadius: 2,
                overflow: 'hidden',
                mx: 'auto', // center on small screens
                boxShadow: 1,
            }}
        >
            {/* Header */}
            <Box
                sx={{
                    bgcolor: '#1ea7fd',
                    color: '#fff',
                    px: 2,
                    py: 1.5,
                    position: 'relative',
                }}
            >
                <Typography variant="h6" align="center" sx={{ fontWeight: 600, fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                    {section.title}
                </Typography>

                {/* Góc tam giác trên trái */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: 40,
                        height: 40,
                        backgroundColor: '#fff',
                        clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                    }}
                />
            </Box>

            {/* Nội dung */}
            <Box sx={{ p: 2, position: 'relative' }}>
                <Collapse in={expanded} collapsedSize={150}>
                    {section.items.map((item: any, idx: number) => (
                        <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                            <SquareIcon sx={{ fontSize: 10, color: '#1ea7fd', mt: '5px', mr: 1 }} />
                            <Typography variant="body2" sx={{ whiteSpace: 'pre-line', fontSize: { xs: '0.85rem', sm: '0.9rem' } }}>
                                {item}
                            </Typography>
                        </Box>
                    ))}
                </Collapse>

                {section.items.length > 4 && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                        <IconButton size="small" onClick={toggleExpand}>
                            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton>
                    </Box>
                )}

                {/* Góc tam giác dưới phải */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: 40,
                        height: 40,
                        backgroundColor: '#fff',
                        clipPath: 'polygon(100% 100%, 0 100%, 100% 0)',
                    }}
                />
            </Box>
        </Box>
    )
}

export default MachineLearningCard
