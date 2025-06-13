import React, { JSX } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'; // hình tròn nhỏ
import CodeIcon from '@mui/icons-material/Code';
import HubIcon from '@mui/icons-material/Hub';
import MemoryIcon from '@mui/icons-material/Memory';
import WifiIcon from '@mui/icons-material/Wifi';
import CloudIcon from '@mui/icons-material/Cloud';

const data = {
  Programming: {
    icon: <CodeIcon sx={{ color: '#1976d2' }} />,
    items: ['Edge computing', 'Python', 'C/C++', 'Java'],
    bulletColor: '#1976d2'
  },
  Communication: {
    icon: <HubIcon sx={{ color: '#388e3c' }} />,
    items: [
      '2G/3G/4G/NBIoT/5G',
      'Bluetooth/BLE',
      'Wifi',
      'LoRa/LoRaWAN',
      'Modbus',
      'CAN',
      'LIDAR',
      'SLAM',
      'MQTT',
      'CoAP',
      'LWM2M',
      'AMQP',
    ],
    bulletColor: '#388e3c'
  },
  OS: {
    icon: <WifiIcon sx={{ color: '#f57c00' }} />,
    items: [
      'Android',
      'RTOS',
      'Yocto',
      'Windows IoT Core',
      'Linux',
      'Raspberry Pi OS',
    ],
    bulletColor: '#f57c00'
  },
  Hardware: {
    icon: <MemoryIcon sx={{ color: '#7b1fa2' }} />,
    items: [
      'Arduino',
      'ESP',
      'NVIDIA Jetson',
      'Google Coral',
      'Raspberry Pi',
      'Xilinx',
      'Sierrawireless FX30',
      'STM/ARM/AVR/TI',
    ],
    bulletColor: '#7b1fa2'
  },
  'IoT Platform': {
    icon: <CloudIcon sx={{ color: '#0288d1' }} />,
    items: [
      'AWS IoT',
      'Google Cloud IoT',
      'Azure IoT Hub',
      'SierraWireless Legato/Octave',
      'Thingsboard',
    ],
    bulletColor: '#0288d1'
  },
};

const renderCard = (
  title: string,
  icon: React.ReactNode,
  items: string[],
  bulletColor: string
): JSX.Element => (
  <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
    <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      {icon}
      <Box ml={1}>{title}</Box>
    </Typography>
    <List dense>
      {items.map((item, idx) => (
        <ListItem key={idx} sx={{ py: 0.5 }}>
          <ListItemIcon sx={{ minWidth: 28 }}>
            <FiberManualRecordIcon fontSize="small" sx={{ color: bulletColor }} />
          </ListItemIcon>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default function IoTTopicsLayout() {
  return (
    <Box p={4} sx={{ backgroundColor: '#f4faff',}}>
      <Grid container spacing={2}>
        {/* Cột 1: Programming + Hardware */}
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column'}}>
            <Box sx={{ flex: 1, mb: 2 }}>
              {renderCard('Programming', data.Programming.icon, data.Programming.items, data.Programming.bulletColor)}
            </Box>
            <Box sx={{ flex: 1 }}>
              {renderCard('Hardware', data.Hardware.icon, data.Hardware.items, data.Hardware.bulletColor)}
            </Box>
          </Box>
        </Grid>

        {/* Cột 2: Communication (chiếm toàn bộ chiều cao) */}
        <Grid item xs={12} md={4}>
          <Box >
            {renderCard('Communication', data.Communication.icon, data.Communication.items, data.Communication.bulletColor)}
          </Box>
        </Grid>

        {/* Cột 3: OS + IoT Platform */}
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', }}>
            <Box sx={{ flex: 1, mb: 2 }}>
              {renderCard('OS', data.OS.icon, data.OS.items, data.OS.bulletColor)}
            </Box>
            <Box sx={{ flex: 1 }}>
              {renderCard('IoT Platform', data['IoT Platform'].icon, data['IoT Platform'].items, data['IoT Platform'].bulletColor)}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
