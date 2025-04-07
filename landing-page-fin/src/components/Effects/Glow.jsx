import React from 'react';
import {Box, Container, useMediaQuery} from '@mui/material';
import { theme } from '../../theme/theme.js';

const Glow = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    //TODO: FIX THIS GLOW
    const getGlowStyles = () => {
        if (isMobile) {
            return {
                position: 'absolute',
                width: '350px',  // Adjusted for mobile size
                height: '350px',
                left: '50%',     // Center the glow on mobile
                top: '-20px',
                transform: 'translateX(-50%)',
                background: 'linear-gradient(0deg, #1335F5, #1335F5), linear-gradient(67.52deg, #6CACE4 0%, #6CACE4 6.16%, #6DADE4 12.31%, #6FAEE5 18.47%, #72B0E5 24.63%, #75B3E6 30.79%, #79B6E7 36.94%, #7DB9E8 43.1%, #82BDEA 49.26%, #86C0EB 55.42%, #8AC3EC 61.57%, #8DC6ED 67.73%, #90C8ED 73.89%, #92C9EE 80.05%, #93CAEE 86.2%, #93CAEE 92.36%)',
                filter: 'blur(100px)',
                zIndex: -1,
            };
        }

        if (isTablet) {
            return {
                position: 'absolute',
                width: '450px', // Adjusted for tablet size
                height: '450px',
                left: '50%',
                top: '-30px',
                transform: 'translateX(-50%)',
                background: 'linear-gradient(0deg, #1335F5, #1335F5), linear-gradient(67.52deg, #6CACE4 0%, #6CACE4 6.16%, #6DADE4 12.31%, #6FAEE5 18.47%, #72B0E5 24.63%, #75B3E6 30.79%, #79B6E7 36.94%, #7DB9E8 43.1%, #82BDEA 49.26%, #86C0EB 55.42%, #8AC3EC 61.57%, #8DC6ED 67.73%, #90C8ED 73.89%, #92C9EE 80.05%, #93CAEE 86.2%, #93CAEE 92.36%)',
                filter: 'blur(110px)',
                zIndex: -1,
            };
        }

        // Default for Desktop
        return {
            width: "50%",
            height: "50%",
            position: 'absolute',
            background: 'linear-gradient(0deg, #1335F5, #1335F5), linear-gradient(67.52deg, #6CACE4 0%, #6CACE4 6.16%, #6DADE4 12.31%, #6FAEE5 18.47%, #72B0E5 24.63%, #75B3E6 30.79%, #79B6E7 36.94%, #7DB9E8 43.1%, #82BDEA 49.26%, #86C0EB 55.42%, #8AC3EC 61.57%, #8DC6ED 67.73%, #90C8ED 73.89%, #92C9EE 80.05%, #93CAEE 86.2%, #93CAEE 92.36%)',
            filter: 'blur(125px)',
            zIndex: 0,
        };
    };

    return <Container style={getGlowStyles()} />;
};

export default Glow;
