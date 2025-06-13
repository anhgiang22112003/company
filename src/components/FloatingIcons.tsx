import { Box } from '@mui/material'
import React, { FC, JSX } from 'react';


const FloatingIcons = ({ icons }: { icons: JSX.Element[] }) => {
  return (
    <>
      {icons.map((icon, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 90}%`,
            animation: `float ${5 + Math.random() * 3}s ease-in-out infinite`,
            zIndex: 3,
            color: '#fff', // Màu trắng, hoặc đổi tùy banner
            opacity: 0.8,
          }}
        >
          {icon}
        </Box>
      ))}
    </>
  );
};
export default FloatingIcons
