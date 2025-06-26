import React, { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fab, Zoom, useMediaQuery, useTheme } from '@mui/material';

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={show}>
      <Fab
        color="primary"
        size={isMobile ? 'small' : 'medium'}
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: isMobile ? 20 : 40,
          right: isMobile ? 10 : 24,
          zIndex: 1000,
          backgroundColor: '#009BFF',
          color: 'white',
          boxShadow: isMobile ? 'none' : undefined,
          '&:hover': {
            backgroundColor: '#007ACC',
          },
        }}
      >
        <KeyboardArrowUpIcon fontSize={isMobile ? 'small' : 'medium'} />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTopButton;
