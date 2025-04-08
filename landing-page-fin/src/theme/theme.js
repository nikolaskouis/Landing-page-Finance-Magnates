import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1967ff',
        },
        background: {
            default: '#0A0B0D',
            paper: '#1a1b21',
        },
        text: {
            primary: '#fff',
            secondary: '#A3A5A6',
        },
    },
    typography: {
        fontFamily: 'Poppins, sans-serif',
        h2: {
            fontWeight: 600,
            fontSize: '4rem',
            lineHeight: 1.2,
            textAlign: 'left'
        },
        h6: {
            color: '#fff',
            fontSize: '20px',
            fontWeight: 600,
        },
        body1: {
            marginBottom: '32px',
            fontSize: '20px',
            lineHeight: 1.6,
            textAlign: 'left',
        },
        body2: {
            marginBottom: '32px',
            fontSize: '20px',
            lineHeight: 1.6,
            textAlign: 'left',
            color: '#A3A5A6',
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
