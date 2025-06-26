import { Box, Grid, Paper, Typography, Button, Link, Fade } from '@mui/material'
import { Container, Stack, styled } from '@mui/system'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FadeSection from '../components/FadeSection'

const items = [
  {
    text: 'Strong quality foundation',
    icon: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240702134805.162.webp',
  },
  {
    text: 'Good brand name to attract and retain talent',
    icon: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240702134850.423.webp',
  },
  {
    text: 'Wide range of technologies',
    icon: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240702135158.607.webp',
  },
  {
    text: 'Intensive R&D Capabilities',
    icon: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240702135446.389.webp',
  },
  {
    text: 'Experienced in large and complex projects',
    icon: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240702135405.768.webp',
  },
  {
    text: 'Global software provider',
    icon: 'https://tmastorage.azureedge.net/uploadfiles/Banner/banner_item_20240702135103.547.webp',
  },
]
const technologyData = [
  {
    number: '600',
    title: 'Microsoft Technologies Developers',
    icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702150521.245.webp',
  },
  {
    number: '700',
    title: 'Java Developers',
    icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702150640.743.webp',
  },
  {
    number: '800',
    title: 'Web – Mobile Developers',
    icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702150850.870.webp',
    subtitle: '(NodeJS, AngularJS, ReactJS, PHP, Ruby, Golang, Python, Blockchain)',
  },
  {
    number: '700',
    title: 'Big Data & Analytics & AI/ML Developers',
    icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702151009.876.webp',
  },
  {
    number: '400',
    title: 'C/C++, Embedded, IoT Developers',
    icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702151207.627.webp',
  },
  {
    number: '400',
    title: 'Cloud, DevOps Engineers',
    icon: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702151244.485.webp',
  },
]
const centers = [
  { title: 'Telecom Software', image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702142148.025.webp' },
  { title: 'Data Solution', image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702142858.343.webp' },
  { title: 'Fintech', image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702142946.618.webp' },
  { title: 'AI', image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702143049.931.webp' },
  { title: 'Healthtech', image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702143305.077.webp' },
  { title: 'IoT', image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702144059.914.webp' },
  { title: 'Automotive Software', image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702144131.353.webp' },
  { title: 'Hardware', image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702144201.988.webp' },
  { title: 'Robotics Software', image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702144236.340.webp' },
  { title: '5G', image: 'https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702144302.918.webp' },
]

const InfoCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  width: 200,
  height: 150,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
}))

const WhyTMALayout = () => {
  return (
    <>
      <Header />
      <FadeSection>
        <Box
          sx={{
            background: 'linear-gradient(to bottom, #1976d2, #ffffff)',
            py: { xs: 4, md: 6 },
            px: 2,
            mt: 16,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 4 }}
            justifyContent="center"
            alignItems="center"
            sx={{ maxWidth: 1000 }}
          >
            {/* Row 1 */}
            <Grid
              container
              item
              xs={12}
              spacing={2}
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <InfoCard>
                  <img src={items[0].icon} alt="" style={{ width: 50, height: 50 }} />
                  <Typography variant="body2" mt={2} textAlign="center">{items[0].text}</Typography>
                </InfoCard>
              </Grid>
              <Grid item>
                <InfoCard>
                  <img src={items[1].icon} alt="" style={{ width: 50, height: 50 }} />
                  <Typography variant="body2" mt={2} textAlign="center">{items[1].text}</Typography>
                </InfoCard>
              </Grid>
            </Grid>

            {/* Row 2 */}
            <Grid
              container
              item
              xs={12}
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item sx={{ mr: { xs: 0, sm: 5 }, mb: { xs: 2, sm: 0 } }}>
                <InfoCard>
                  <img src={items[5].icon} alt="" style={{ width: 50, height: 50 }} />
                  <Typography variant="body2" mt={2} textAlign="center">{items[5].text}</Typography>
                </InfoCard>
              </Grid>

              <Grid item>
                <Button
                  variant="contained"
                  sx={{
                    fontSize: { xs: '16px', sm: '20px' },
                    px: 5,
                    py: 2,
                    backgroundColor: '#0066ff',
                    fontWeight: 'bold',
                    height: 80,
                    mx: { xs: 0, sm: 4 },
                  }}
                >
                  WHY
                </Button>
              </Grid>

              <Grid item sx={{ ml: { xs: 0, sm: 5 }, mt: { xs: 2, sm: 0 } }}>
                <InfoCard>
                  <img src={items[2].icon} alt="" style={{ width: 50, height: 50 }} />
                  <Typography variant="body2" mt={2} textAlign="center">{items[2].text}</Typography>
                </InfoCard>
              </Grid>
            </Grid>

            {/* Row 3 */}
            <Grid
              container
              item
              xs={12}
              spacing={2}
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <InfoCard>
                  <img src={items[4].icon} alt="" style={{ width: 50, height: 50 }} />
                  <Typography variant="body2" mt={2} textAlign="center">{items[4].text}</Typography>
                </InfoCard>
              </Grid>
              <Grid item>
                <InfoCard>
                  <img src={items[3].icon} alt="" style={{ width: 50, height: 50 }} />
                  <Typography variant="body2" mt={2} textAlign="center">{items[3].text}</Typography>
                </InfoCard>
              </Grid>
            </Grid>
          </Grid>
        </Box>

      </FadeSection>
      <FadeSection>
        <FadeSection >
          <Container>
            <Box sx={{ px: 4, p: 2 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Link underline="hover" color="#00A1F1" href="/">
                  <Typography fontWeight={700}>Home</Typography>
                </Link>

                <Typography color="#00A1F1">›</Typography>

                <Link href="about" underline="hover"><Typography color="#00A1F1">About</Typography></Link>

                <Typography color="#00A1F1">{'>'}</Typography>

                <Typography color="text.primary">Why</Typography>
              </Stack>

            </Box>
          </Container>
        </FadeSection>
      </FadeSection>
      <FadeSection>
        <Box sx={{ py: 2, textAlign: 'center', backgroundColor: '#f7fbff' }}>
          <Box textAlign={"center"}>
            <img width={"54px"} src="https://tmastorage.azureedge.net/cdn/en/_next/static/media/icon_section.84cf50a7.webp" alt="" />
          </Box>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Intensive R&D Capabilities
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
            With many years of experience, showcases excellence in software outsourcing services. Discover our R&D
            Capabilities, powered by 10 technology centers, serving customers worldwide.
          </Typography>
          <Container>
            <Grid container spacing={2} justifyContent="center">
              {centers.map((center, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={2.4}>
                  <Box
                    sx={{
                      background: '#fff',
                      borderRadius: 2,
                      p: 2,
                      boxShadow: '0 0 15px rgba(0,0,0,0.05)',
                      height: '90%',
                      textAlign: 'center',
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <Box component="img" src={center.image} alt={center.title} sx={{ height: 40, mb: 2 }} />
                    <Typography variant="subtitle1" fontWeight="bold" color="primary">
                      {center.title}
                    </Typography>
                    <Typography variant="body2">Center</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
          <Box mt={4}>
            <Link href="/technologies" underline="none" sx={{ color: 'primary.main', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center' }}>
              Explore More &nbsp; →
            </Link>
          </Box>
        </Box>
      </FadeSection>
      <FadeSection>
        <Box sx={{ py: 6, backgroundColor: '#fafafa' }}>
          <Container>
            <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
              Wide range of technologies
            </Typography>
            <Typography align="center" sx={{ mb: 4 }}>
              With years of experience in the global IT sector, supported by a team of skilled software developers and a robust operational process,
              our company stands as the foremost ITO company in Vietnam.
            </Typography>
            <Grid container spacing={2}>
              {technologyData.map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box
                    sx={{
                      backgroundColor: '#1aa3ff',
                      color: '#fff',
                      borderRadius: 1,
                      py: 2,
                      px: 2,
                      textAlign: 'center',
                      height: '100%',
                    }}
                  >
                    <Box
                      component="img"
                      src={item.icon}
                      alt={item.title}
                      sx={{ width: 40, height: 40, mb: 1 }}
                    />
                    <Typography variant="h6" fontWeight="bold">
                      {item.number}{' '}
                      <Typography variant="h6" component="span" fontWeight="regular">
                        {item.title}
                      </Typography>
                    </Typography>
                    {item.subtitle && (
                      <Typography variant="body2" mt={1}>
                        {item.subtitle}
                      </Typography>
                    )}
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box mt={10} textAlign="center">
              <Link href="/technologies">
                <Typography sx={{ color: '#1aa3ff', fontWeight: 500, cursor: 'pointer' }}>
                  Explore More →
                </Typography></Link>
            </Box>
          </Container>
        </Box>
      </FadeSection>
      <FadeSection>
        <Box>
          <Container>
            <Typography textAlign={"center"} fontWeight={"bold"} variant='h4'>
              Good brand name to attract and retain talent
            </Typography>
            <Typography textAlign={"center"}>
              As a leading name among software outsourcing companies in Vietnam,  garners awards and recognitions, establishing itself as an attractive brand for talent attraction and retention. We actively invest in university programs and training courses to cultivate skilled professionals.
            </Typography>
            <Grid mt={2} container spacing={2} justifyContent="center">
              <Grid item>
                <Box display="flex" alignItems="center" gap={1}>
                  <Box sx={{ width: 10, height: 10, bgcolor: '#1aa3ff', borderRadius: '2px' }} />
                  <Typography variant="body2">
                    University program: with <Typography component="span" sx={{ color: '#1aa3ff', fontWeight: 600 }}>65</Typography> universities
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box display="flex" alignItems="center" gap={1}>
                  <Box sx={{ width: 10, height: 10, bgcolor: '#1aa3ff', borderRadius: '2px' }} />
                  <Typography variant="body2" sx={{ color: '#1aa3ff', fontWeight: 600 }}>15,000+</Typography>
                  <Typography variant="body2">resumes/year</Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box display="flex" alignItems="center" gap={1}>
                  <Box sx={{ width: 10, height: 10, bgcolor: '#1aa3ff', borderRadius: '2px' }} />
                  <Typography variant="body2" sx={{ color: '#1aa3ff', fontWeight: 600 }}>430+</Typography>
                  <Typography variant="body2">training courses/year</Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box display="flex" alignItems="center" gap={1}>
                  <Box sx={{ width: 10, height: 10, bgcolor: '#1aa3ff', borderRadius: '2px' }} />
                  <Typography variant="body2" sx={{ color: '#1aa3ff', fontWeight: 600 }}>1,000+</Typography>
                  <Typography variant="body2">interns/year</Typography>
                </Box>
              </Grid>
            </Grid>
            <Container>
              <Box mt={3}>
                <img width={"100%"} src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20240702161842.668.webp" alt="" />
              </Box>
            </Container>
            <Box mt={2} textAlign="center">
              <Link href="/technologies">
                <Typography sx={{ color: '#1aa3ff', fontWeight: 500, cursor: 'pointer' }}>
                  Explore More →
                </Typography></Link>
            </Box>
          </Container>
        </Box>
      </FadeSection>
      <FadeSection>
        <Box mt={4} p={2} color={"white"} bgcolor={"#1976d2"}>
          <Container>
            <Box textAlign={"center"}>
              <img width={"3%"} src="https://tmastorage.azureedge.net/cdn/en/_next/static/media/icon_section.84cf50a7.webp" alt="" />
            </Box>
            <Typography textAlign={"center"} fontWeight={"bold"} variant='h4'>
              Strong Quality Foundation
            </Typography>
            <Typography textAlign={"center"}>
              At , our strong quality foundation ensures we meet the exacting requirements of leading clients. Aligned with industry practices and standards (CMMi, Agile, RUP, ISO 9001, ISO 27001), we stand strong as one of Vietnam's premier software outsourcing companies, excelling in agile offshore software development.

            </Typography>

            <Container>
              <Box mt={3}>
                <img width={"100%"} src="https://tmastorage.azureedge.net/uploadfiles/PageSection/section_content_image_20250211032113.445.webp" alt="" />
              </Box>
            </Container>
            <Box mt={2} textAlign="center">
              <Link href="/technologies">
                <Typography sx={{ color: 'white', fontWeight: 500, cursor: 'pointer' }}>
                  Explore More →
                </Typography></Link>
            </Box>
          </Container>
        </Box>
      </FadeSection>
      <ScrollToTopButton />
      <Footer />
    </>
  )
}

export default WhyTMALayout
