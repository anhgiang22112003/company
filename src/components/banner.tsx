import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Paper, Box } from "@mui/material"

import MapBanner from "./ClientsBanner"
import NewsletterBanner from "./NewsletterBanner"
import InfoBanner from "./SolutionsBanner"

const banners = [
  <MapBanner key="map" />,
  <NewsletterBanner key="news" />,
  <InfoBanner key="info" />,
]

export default function Banner() {
  return (
    <Box sx={{
      width: "100%", height: {
        xs: '80vh',
        md:"90%",
        sm:"90%" // mobile: 80% chiều cao viewport
      }, mt: 8
    }}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        style={{ width: "100%", height: "100%" }} // 👈 make swiper fill space
      >
        {banners.map((item, index) => (
          <SwiperSlide key={index}>
            <Paper
              square
              elevation={0}
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "#f5f5f5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {item}
            </Paper>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
