import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import '@fontsource/merriweather'; // Font chính

let theme = createTheme({
  typography: {
    fontFamily: '"Merriweather", serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 600,
    },
    // Bạn có thể thêm các thẻ khác nếu cần: h3, body1, subtitle1...
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

// ⚡ Thêm tính năng responsive font
theme = responsiveFontSizes(theme);

export default theme;
