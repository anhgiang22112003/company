import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'
import ContactPage from './pages/contact'
import AboutPage from './pages/about'
import ServicePage from './pages/service'
import { ThemeProvider } from '@mui/material'
import theme from './hooks/theme'
import IndustriePage from './pages/industries'
import NewsEventsPage from './pages/new'
import CaseStudiesPage from './pages/caseStudies'
import TechnologiesPage from './pages/Technologies'
import SoftwareDevelopmentPage from './pages/SoftwareDevelopment'
import DigitalTransformation from './pages/DigitalTransformation'
import SoftwareTestingPage from './pages/SoftwareTesting'
import InnovationService from './pages/InnovationService'
import SecurityApplicationDevelopment from './pages/security-application-development'
import TelecomPage from './pages/Telecom'
import Finance from './pages/Finance'
import Insurance from './pages/Insurance'
import ECommerceRetail from './pages/ECommerceRetail'
import Healthcare from './pages/Healthcare'
import LogisticsPage from './pages/Logistics'
import AutomotivePage from './pages/Automotive'
import BigDataAnalyticsPage from './pages/BigDataAnalytics'
import AiDataSciencesPage from './pages/AiDataSciences'
import RpaPage from './pages/Rpa'
import GPage from './pages/5G'
import IotPage from './pages/Iot'
import CloudPage from './pages/Cloud'
import DevOpsPage from './pages/DevOps'
import LowCodePage from './pages/LowCode'
import HardWarePage from './pages/HardWare'
import WhyAbout from './pages/WhyAbout'
import NewsDetailPage from './pages/NewDetail'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='/about' element={<AboutPage />} />
                <Route path='/about/why' element={<WhyAbout />} />

        <Route path='/services' element={<ServicePage />} />
        <Route path='/industries' element={<IndustriePage />} />
        <Route path='/industries/telecom' element={<TelecomPage />} />
        <Route path='/industries/finance' element={<Finance />} />
        <Route path='/industries/insurance' element={<Insurance />} />
        <Route path='/industries/e-commerce-retail' element={<ECommerceRetail />} />
        <Route path='/industries/healthcare' element={<Healthcare />} />
        <Route path='/industries/logistics' element={<LogisticsPage />} />
        <Route path='/industries/automotive' element={<AutomotivePage />} />
        <Route path='/new' element={<NewsEventsPage />} />
          <Route path='/new/detail/1' element={<NewsDetailPage />} />

        <Route path='/services/software-development' element={<SoftwareDevelopmentPage />} />
        <Route path='/services/digital-transformation' element={<DigitalTransformation />} />
        <Route path='/services/testing' element={<SoftwareTestingPage />} />
        <Route path='/services/innovation-as-a-service' element={<InnovationService />} />
        <Route path='/services/security-application-development' element={<SecurityApplicationDevelopment />} />
        <Route path='/case-studies' element={<CaseStudiesPage />} />
        <Route path='/technologies' element={<TechnologiesPage />} />
        <Route path='/technologies/big-data-analytics' element={<BigDataAnalyticsPage />} />
        <Route path='/technologies/ai-ml-data-sciences' element={<AiDataSciencesPage />} />
         <Route path='/technologies/rpa' element={<RpaPage />} />
        <Route path='/technologies/5g' element={<GPage />} />
        <Route path='/technologies/iot' element={<IotPage />} />
         <Route path='/technologies/cloud' element={<CloudPage />} />
        <Route path='/technologies/devops' element={<DevOpsPage />} />
        <Route path='/technologies/low-code' element={<LowCodePage />} />
        <Route path='/technologies/hardware-integration' element={<HardWarePage />} />

      </Routes>
    </ThemeProvider>
  )
}

export default App
