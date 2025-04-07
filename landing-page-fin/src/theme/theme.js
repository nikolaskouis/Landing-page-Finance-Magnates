import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1967ff',
        },
        background: {
            default: '#121418',
            paper: '#1c1f24',
        },
        text: {
            primary: '#fff',
            secondary: 'rgba(255, 255, 255, 0.8)',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h2: {
            fontWeight: 700,
            marginBottom: '16px',
        },
        body1: {
            marginBottom: '32px',
        },
    },
    breakpoints: {
        values: {
            xs: 0,      // Mobile
            sm: 600,    // Small tablet
            md: 960,    // Large tablet/small desktop
            lg: 1280,   // Desktop
            xl: 1920,   // Large desktop
        },
    },
});
