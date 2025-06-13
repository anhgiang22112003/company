import React, { useEffect, useRef, useState } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { Avatar, Box, Breadcrumbs, Button, Container, Divider, Fade, Grid, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, Tab, Table, TableBody, TableCell, TableRow, Tabs, Typography } from '@mui/material'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import CloudIcon from '@mui/icons-material/Cloud'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
type CloudData = {
  [category: string]: string[];
};

interface CloudCompetencyTableProps {
  title: string;
  data: CloudData;
}
const caseStudies = [
    {
        label: 'Automatic CV Input',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240325165924.504.webp',
        needs: [
            'Real-time monitoring health status (heart rate/ECG, body temperature, blood pressure, SPO2) of elders/patients via wearable devices',
        ],
        solutions: [
            'End-to-end health monitoring platform (cloud, Web, mobile, device integration). Data analytics, IoT and AI.',
            'Cloud and On-premise',
        ],
    },
    {
        label: 'COD Status update',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240325171342.053.webp',
        needs: [
            'Digital transformation of all insurance activities to increase productivity and enhance customer interaction',
        ],
        solutions: [
            'Automate insurance processes (internal operations and customer services)',
            'Porting all Web applications to mobile applications to support anywhere, any time activities',
        ],
    },
    {
        label: 'Logistics data process',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240326093414.076.webp',
        needs: [
            'A wide range of digital payment solutions: digital wallet, mobile wallet, bill payment, international remittance, payment integration',
        ],
        solutions: [
            'End-to-end and flexible digital payment platform, payment processing that can be customized and integrated to other systems, helping customers to innovate payment solutions',
        ],
    },
    {
        label: 'Automatic debt reminder',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240326092220.979.webp',
        needs: ['Hotel services automation. No check-in. No reception desk or receptionists'],
        solutions: [
            'Full solution from Web to mobile. Workflow automation.',
            'Customer self service.',
        ],
    },
    {
        label: 'Inventory alerts',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240326092220.979.webp',
        needs: ['Hotel services automation. No check-in. No reception desk or receptionists'],
        solutions: [
            'Full solution from Web to mobile. Workflow automation.',
            'Customer self service.',
        ],
    }, {
        label: 'Logistics Shipment Tracing',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240326092220.979.webp',
        needs: ['Hotel services automation. No check-in. No reception desk or receptionists'],
        solutions: [
            'Full solution from Web to mobile. Workflow automation.',
            'Customer self service.',
        ],
    },
    {
        label: 'Invoice Data Process',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240326092220.979.webp',
        needs: ['Hotel services automation. No check-in. No reception desk or receptionists'],
        solutions: [
            'Full solution from Web to mobile. Workflow automation.',
            'Customer self service.',
        ],
    },
    {
        label: 'E-Invoice Collector',
        image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240326092220.979.webp',
        needs: ['Hotel services automation. No check-in. No reception desk or receptionists'],
        solutions: [
            'Full solution from Web to mobile. Workflow automation.',
            'Customer self service.',
        ],
    },
]
const cloudServices = [
    {
        title: 'Cloud Application Development',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240514105510.587.webp',
    },
    {
        title: 'Cloud Consulting',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240514105522.379.webp',
    },
    {
        title: 'Cloud Infrastructure Management',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240514105530.921.webp',
    },
    {
        title: 'Cloud Migration',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240514105540.745.webp',
    },
    {
        title: 'Cloud Deployment',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240514105548.897.webp',
    },
    {
        title: 'Cloud Integration',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240514105557.442.webp',
    },
    {
        title: 'Cloud Support & Maintenance',
        icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240514105605.152.webp',
    },
]
const cloudDetails = [
    {
        label: 'Application development on cloud',
        description:
            'Build and maintain a custom application by using cloud delivery platforms such as AWS, MS Azure, Google Cloud, IBM Watson, Salesforce, etc',
    },
    {
        label: 'Cloud administration',
        description: 'Implement a SaaS solution or transition a current application to a SaaS model',
    },
    {
        label: 'Cloud application testing',
        description: 'Porting application to cloud',
    },
    {
        label: 'Porting application to cloud',
        description: 'Solution to test cloud based applications',
    },
    {
        label: 'SaaS implementation',
        description: 'Setup, configure, monitor and manage cloud infrastructure',
    },
]
const cloudHighlights = [
    {
        icon: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240522154631.865.webp',
        title: '15 Years',
        subtitle: 'of experience',
    },
    {
        icon: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240522154638.280.webp',
        title: 'Cloud Back End',
        subtitle: 'Proven architecture, fast track development time, minimize cost',
    },
    {
        icon: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240522154644.801.webp',
        title: '300 Certified',
        subtitle: 'Cloud Engineers',
    },
]
const logoImages = [
    'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240514110250.121.webp',
    'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240514110257.134.webp',
    'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240514110307.845.webp',
    'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240514110314.368.webp',
    'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240514110321.078.webp',
]
const skillMatrixData = [
    {
        title: 'AWS Services',
        content:
            'EC2, ELB, Auto scaling, Elastic beanstalk, ECR, ECS, S3, RDS, AWS Lambda, AWS SQS/SNS, AWS Face recognizer, AWS Face comparison, Route 53',
    },
    {
        title: 'Cloud Administrator',
        content:
            'Kubernetes, Container, App service, Function App, Blob Storage, Azure AD, Azure DevOps, SQL, Logic App, Monitor',
    },
    {
        title: 'IBM Cloud',
        content:
            'App engine, Container engine, Compute engine, Cloud storage, Identify/Security, IoT',
    },
    {
        title: 'OpenStack Services',
        content: 'Keystone, Glance, Neutron, Nova, Cinder, Swift, Horizon',
    },
    {
        title: 'Google Cloud',
        content: 'Infomix, Dr Watson',
    },
    {
        title: 'Azure Services',
        content: 'Terraform, Ansible, Chef, Puppet',
    },
]
const cloudData = [
    {
        title: 'Cloud Platform Competency – Amazon Web Services (AWS)',
        data: {
            Compute: ['AWS EC2', 'AWS AMI', 'Auto scaling'],
            Storage: ['AWS S3', 'AWS EBS'],
            Database: ['AWS RDS', 'AWS ElastiCache'],
            Networking: ['Elastic LB', 'CloudFront', 'Route 53', 'VPC'],
            'Deployment & Management': ['Elastic Beanstalk', 'CloudFormation', 'IAM'],
            'Application services': ['AWS Lambda', 'AWS SQS', 'AWS SES'],
        },
    },
    {
        title: 'Cloud Platform Competency – Azure',
        data: {
            Compute: ['Azure container', 'VM', 'HCI/insight'],
            Storage: ['Blob Storage', 'Table', 'Queue', 'Caching'],
            Database: ['Azure SQL', 'Azure Key Vault'],
            Networking: ['Azure CDN', 'Traffic Manager', 'Azure Active Directory'],
            'Deployment & Management': ['AKS - Azure Kubernetes Service', 'ACR - Azure Container Registry'],
            'Application services': ['Web Role', 'Worker Role'],
        },
    },
    {
        title: 'Cloud Platform Competency – Google Cloud Platform (GCP)',
        data: {
            Compute: ['App Engine', 'Compute Engine', 'Kubernetes Engine', 'Cloud Function'],
            Storage: ['Cloud Storage', 'Data encryption'],
            Database: ['Cloud Datastore', 'Cloud SQL (MySQL)', 'Cloud SQL for Postgre'],
            Networking: ['Cloud SDK', 'Cloud source repository', 'Cloud Load Balancer', 'Stackdriver'],
            'Deployment & Management': ['Monitoring', 'Logging', 'Cloud endpoints', 'Cloud Pub/Sub'],
            'Application services': ['Google Cloud Search', 'Chrome integration', 'G Suite'],
        },
    },
]
const CloudCompetencyTable = ({ title, data }: CloudCompetencyTableProps) => {
    return (
        <Box sx={{ mb: 6 }}>
            <Typography variant="h6" fontWeight="bold" textAlign="center" mb={2}>
                {title}
            </Typography>

            <Grid container>
                {Object.entries(data).map(([category, items], index) => (
                    <React.Fragment key={index}>
                        <Grid item xs={12} sm={4} md={2.5} sx={{ bgcolor: '#0094ff', color: 'white', p: 1, border: '1px solid #bde0ff' }}>
                            <Typography variant="body2" fontWeight="bold" textAlign="center">
                                {category}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={8} md={9.5} sx={{ border: '1px solid #bde0ff', p: 1 }}>
                            <Grid container spacing={1}>
                                {items.map((item, i) => (
                                    <Grid item xs={12} sm={6} md={4} key={i}>
                                        <List dense disablePadding>
                                            <ListItem disableGutters>
                                                <ListItemIcon sx={{ minWidth: '28px' }}>
                                                    <CheckBoxOutlineBlankIcon sx={{ fontSize: 14, color: '#0094ff' }} />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primaryTypographyProps={{ variant: 'body2' }}
                                                    primary={item}
                                                />
                                            </ListItem>
                                        </List>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </React.Fragment>
                ))}
            </Grid>
        </Box>
    )
}

const CloudPage = () => {

    const [tabIndex, setTabIndex] = useState(0)
    const study = caseStudies[tabIndex]
    return (
        <>
            <Header />
            <Box>
                <FadeSection>
                    <Box mt={18} sx={{ background: 'linear-gradient(to bottom, #1976d2, #ffffff)', }}>
                        {/* Cloud Header */}
                        <Container>
                            <Box sx={{ textAlign: 'center', mb: 6, position: 'relative' }}>
                                <CloudIcon sx={{
                                    fontSize: {
                                        xs: 300, // Mobile
                                        md: 400, // Desktop
                                    }, color: '#ffffff',
                                }} />
                                <Stack sx={{
                                    marginTop: {
                                        xs: -25,
                                        md: "-250px"
                                    }
                                }} alignItems="center" spacing={1}>

                                    <Box >
                                        <Typography variant="h5" fontWeight="bold">
                                            Cloud Services
                                        </Typography>
                                        <Typography textAlign="center" sx={{
                                            maxWidth: {
                                                xs: 250,
                                                md: 400
                                            }
                                        }}>
                                            We offer a variety of cloud services (AWS, GCP, Azure...) to help customers optimize and leverage cloud technology.
                                        </Typography>
                                    </Box>

                                </Stack>

                                {/* Dashed Lines + Info Cards */}
                                <Grid container spacing={2} justifyContent="center" mt={-2} sx={{ zIndex: 1, position: 'relative' }}>
                                    {cloudHighlights.map((item, idx) => (
                                        <Grid
                                            key={idx}
                                            item
                                            xs={12}
                                            md={4}
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                mt: 6,
                                                position: 'relative',
                                            }}
                                        >
                                            {/* Dotted Line */}
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    height: '60px',
                                                    top: '-60px',
                                                    zIndex: 0,
                                                }}
                                            />
                                            <Box
                                                component="img"
                                                src={item.icon}
                                                alt={item.title}
                                                sx={{ width: 50, height: 50, mb: 1 }}
                                            />
                                            <Typography fontWeight="bold" color="white" textAlign="center">
                                                {item.title}
                                            </Typography>
                                            <Typography fontSize={13} color="white" textAlign="center">
                                                {item.subtitle}
                                            </Typography>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>

                            {/* Logo Section */}
                            <Grid container spacing={2} justifyContent="center" mt={2}>
                                {logoImages.map((img, idx) => (
                                    <Grid
                                        key={idx}
                                        item
                                        xs={6}
                                        sm={4}
                                        md={2.4}
                                        sx={{ display: 'flex', justifyContent: 'center' }}
                                    >
                                        <Box
                                            component="img"
                                            src={img}
                                            alt={`logo-${idx}`}
                                            sx={{
                                                maxWidth: '100%',
                                                maxHeight: 90,
                                                borderRadius: 2,
                                                boxShadow: 3,
                                                bgcolor: 'white',
                                                p: 1,
                                            }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </Box>
                </FadeSection>
                <FadeSection >
                    <Container>
                        <Box sx={{ mt: 2, px: 4, p: 2 }}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Link underline="hover" color="#00A1F1" href="/">
                                    <Typography fontWeight={700}>Home</Typography>
                                </Link>

                                <Typography color="#00A1F1">›</Typography>

                                <Link href="technologies" underline="hover"><Typography color="#00A1F1">Technologies</Typography></Link>

                                <Typography color="#00A1F1">{'>'}</Typography>

                                <Typography color="text.primary">Cloud</Typography>
                            </Stack>


                        </Box>
                    </Container>
                </FadeSection>
                <FadeSection id="service">
                    <Container>
                        <Box sx={{ padding: '20px 20px', textAlign: 'center' }}>
                            <Box textAlign={"center"}>
                                <img width={"5%"} src="https://www.tmasolutions.com/media/technologies/cloud/header/icon_cloud_heading.webp" alt="" />
                            </Box>
                            <Typography variant="h4" fontWeight="bold" gutterBottom>
                                Services
                            </Typography>
                            <Box sx={{ p: 4 }}>
                                {/* Grid of service cards */}
                                <Grid container spacing={2}>
                                    {/* Hàng trên: 4 item */}
                                    {cloudServices.slice(0, 4).map((service, index) => (
                                        <Grid item xs={12} sm={6} md={3} key={index}>
                                            <Box
                                                sx={{
                                                    border: '1px solid #cce4ff',
                                                    p: 2,
                                                    textAlign: 'center',
                                                    backgroundColor: '#fff',
                                                    height: "70%"
                                                }}
                                            >
                                                <img
                                                    src={service.icon}
                                                    alt={service.title}
                                                    style={{ width: 50, height: 50, marginBottom: 8 }}
                                                />
                                                <Typography fontWeight="bold">{service.title}</Typography>
                                            </Box>
                                        </Grid>
                                    ))}

                                    {cloudServices.slice(4).map((service, index) => (
                                        <Grid item xs={12} sm={6} md={4} key={index}>
                                            <Box
                                                sx={{
                                                    border: '1px solid #cce4ff',
                                                    p: 2,
                                                    textAlign: 'center',
                                                    backgroundColor: '#fff',
                                                }}
                                            >
                                                <img
                                                    src={service.icon}
                                                    alt={service.title}
                                                    style={{ width: 50, height: 50, marginBottom: 8 }}
                                                />
                                                <Typography fontWeight="bold">{service.title}</Typography>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                                <Table sx={{ mt: 4 }}>
                                    <TableBody>
                                        {cloudDetails.map((item, index) => (
                                            <TableRow key={index}>
                                                <TableCell
                                                    sx={{
                                                        bgcolor: '#2196f3',
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        width: '250px',
                                                    }}
                                                >
                                                    {item.label}
                                                </TableCell>
                                                <TableCell>
                                                    <Typography variant="body2">
                                                        <Box component="span" sx={{ color: '#2196f3', fontWeight: 'bold', mr: 1 }}>
                                                            ■
                                                        </Box>
                                                        {item.description}
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Box>
                    </Container>
                </FadeSection>
                <FadeSection>
                    <Container>
                        <Box sx={{ px: 4, py: 6, bgcolor: '#fff' }}>
                            <Box textAlign={"center"}>
                                <img width={"5%"} src="https://www.tmasolutions.com/media/technologies/cloud/header/icon_cloud_heading.webp" alt="" />
                            </Box>
                            <Typography variant="h5" align="center" fontWeight="bold" mb={4}>
                                Skill Matrix
                            </Typography>

                            <Grid container spacing={3}>
                                {skillMatrixData.map((item, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Box
                                            sx={{
                                                border: '1px solid #bde0ff',
                                                borderTop: 'none',
                                                borderBottomRightRadius: '8px',
                                                p: 0,
                                                overflow: 'hidden',
                                            }}
                                        >
                                            {/* Header */}
                                            <Box sx={{ bgcolor: '#2196f3', py: 1.5 }}>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="white"
                                                    fontWeight="bold"
                                                    textAlign="center"
                                                >
                                                    {item.title}
                                                </Typography>
                                            </Box>

                                            {/* Body */}
                                            <Box
                                                sx={{
                                                    p: 2,
                                                    minHeight: '100px',
                                                    borderTop: '1px solid #bde0ff',
                                                    borderBottomRightRadius: '8px',
                                                    borderLeft: '1px solid #bde0ff',
                                                    borderRight: '1px solid #bde0ff',
                                                    borderBottom: '1px solid #bde0ff',
                                                }}
                                            >
                                                <Typography variant="body2" textAlign="center">
                                                    {item.content}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Container>


                </FadeSection>
                <FadeSection>
                    <Container>
                        <Box px={{ xs: 2, md: 8 }} py={6} bgcolor="#f2f7ff">
                            <Box textAlign={"center"}>
                                <img width={"5%"} src="https://www.tmasolutions.com/media/technologies/cloud/header/icon_cloud_heading.webp" alt="" />
                            </Box>
                            <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
                                Technologies
                            </Typography>
                            <img width={"100%"} src="https://tmastorage.azureedge.net/uploadfiles/PageSection/pageSection_image_20240524084302.489.webp" alt="" />
                            <Box sx={{ px: 4, py: 6 }}>
                                {cloudData.map((platform, i) => (
                                    <CloudCompetencyTable key={i} title={platform.title} data={platform.data} />
                                ))}
                            </Box>
                        </Box>
                    </Container>
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
                                <Stack
                                    direction="row"
                                    spacing={{ xs: 1, sm: 2 }}
                                    flexWrap="wrap"
                                    justifyContent={{ xs: 'center', sm: 'flex-start' }}
                                    rowGap={1}
                                    mb={3}
                                >
                                    {caseStudies.map((tab, index) => (
                                        <Button
                                            key={index}
                                            variant={tabIndex === index ? "contained" : "outlined"}
                                            onClick={() => setTabIndex(index)}
                                            sx={{
                                                px: { xs: 1, sm: 2.5 },
                                                py: { xs: 0.25, sm: 1 },
                                                minWidth: 'auto',
                                                fontSize: { xs: 10, sm: 12 },
                                                borderRadius: 2,
                                            }}
                                        >
                                            {tab.label}
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
                    <Container sx={{ mt: 20 }} >
                        <Box
                            sx={{
                                background: '#009BFF',
                                color: 'white',
                                clipPath: 'polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)',
                                py: 8,
                                px: 4,
                                position: 'relative',
                                zIndex: 1,
                                mb: -15

                            }}
                        >
                            <Container>
                                <Typography variant='h4' textAlign="center" fontWeight="bold">
                                    Download
                                </Typography>


                                <Box mt={4} textAlign="center">
                                    <Link
                                        href="/path-to-your-file/IT-Outsourcing.pdf" // <-- Đường dẫn file
                                        download
                                        underline="none"
                                        sx={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            color: '#1976d2',
                                            fontWeight: 'bold',
                                            fontSize: '1.1rem',
                                            '&:hover': {
                                                textDecoration: 'underline',
                                            },
                                        }}
                                    >
                                        <FileDownloadIcon />
                                        Cloud Brochure
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


export default CloudPage


