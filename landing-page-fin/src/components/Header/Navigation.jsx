import React from 'react';
import {
    AppBar,
    Box,
} from '@mui/material';

// Logo styles copied from figma
const FmIntelligenceLogo = () => {
    return (
        <Box
            sx={{
                position: 'absolute',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    color: '#FFFFFF',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '24px',
                    letterSpacing: '-0.5px',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Box component="span" sx={{ fontWeight: 700 }}>fm</Box>
                <Box component="span" sx={{ fontWeight: 300 }}>intelligence</Box>
            </Box>
        </Box>
    );
};

const Navigation = () => {

    return (
        <AppBar position="static">
            <FmIntelligenceLogo />
        </AppBar>
    );
};

export default Navigation;