import React, { JSX } from 'react'
import {
  Box,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord' // hình tròn nhỏ
import CodeIcon from '@mui/icons-material/Code'
import HubIcon from '@mui/icons-material/Hub'
import MemoryIcon from '@mui/icons-material/Memory'
import WifiIcon from '@mui/icons-material/Wifi'
import CloudIcon from '@mui/icons-material/Cloud'

const cardSections = [
  {
    column: 1,
    sections: [
      {
        title: 'Programming',
        icon: <CodeIcon sx={{ color: '#1976d2' }} />,
        items: ['Edge Computing', 'Python', 'C/C++', 'Java'],
        bulletColor: '#1976d2',
      },
      {
        title: 'Hardware',
        icon: <MemoryIcon sx={{ color: '#7b1fa2' }} />,
        items: ['Arduino', 'ESP32', 'Jetson', 'Raspberry Pi', 'STM32'],
        bulletColor: '#7b1fa2',
      },
    ],
  },
  {
    column: 2,
    sections: [
      {
        title: 'Communication',
        icon: <HubIcon sx={{ color: '#388e3c' }} />,
        items: ['5G/NBIoT', 'Bluetooth/BLE', 'Wi-Fi', 'LoRaWAN', 'MQTT', 'Modbus'],
        bulletColor: '#388e3c',
      },
    ],
  },
  {
    column: 3,
    sections: [
      {
        title: 'Operating Systems',
        icon: <WifiIcon sx={{ color: '#f57c00' }} />,
        items: ['Android', 'RTOS', 'Yocto', 'Linux'],
        bulletColor: '#f57c00',
      },
      {
        title: 'IoT Platforms',
        icon: <CloudIcon sx={{ color: '#0288d1' }} />,
        items: ['AWS IoT', 'Google Cloud IoT', 'Azure IoT', 'Thingsboard'],
        bulletColor: '#0288d1',
      },
    ],
  },
]



const renderCard = ({ title, icon, items, bulletColor }: any) => (
  <>
  <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
    <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      {icon}
      <Box ml={1}>{title}</Box>
    </Typography>
    <List dense>
      {items.map((item:any, idx:any) => (
        <ListItem key={idx} sx={{ py: 0.5 }}>
          <ListItemIcon sx={{ minWidth: 28 }}>
            <FiberManualRecordIcon fontSize="small" sx={{ color: bulletColor }} />
          </ListItemIcon>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  </Paper>


  </>
)


export default function IoTTopicsLayout() {
  return (
    <Box p={{ xs: 2, sm: 4 }} sx={{ backgroundColor: '#f4faff' }}>
      <Grid container spacing={3}>
        {cardSections.map((col, colIndex) => (
          <Grid item xs={12} md={4} key={colIndex}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                height: '100%',
              }}
            >
              {col.sections.map((sec, secIndex) => (
                <Box
                  key={secIndex}
                  sx={{
                    flex: 1,
                    bgcolor: 'white',
                    borderRadius: 2,
                    boxShadow: 1,
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {renderCard({
                    title: sec.title,
                    icon: sec.icon,
                    items: sec.items,
                    bulletColor: sec.bulletColor
                  })}
                </Box>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>

  )
}
