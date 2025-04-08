import React from 'react';
import { Container, useMediaQuery } from '@mui/material';
import { theme } from '../../theme/theme.js';

const Glow = ({ top, left, right, bottom, transform, zIndex = 0 }) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const baseGlow = {
        position: 'absolute',
        width: "40%",
        height: "40%",
        background: 'linear-gradient(0deg, #1335F5, #1335F5), linear-gradient(67.52deg, #6CACE4 0%, #6CACE4 6.16%, #6DADE4 12.31%, #6FAEE5 18.47%, #72B0E5 24.63%, #75B3E6 30.79%, #79B6E7 36.94%, #7DB9E8 43.1%, #82BDEA 49.26%, #86C0EB 55.42%, #8AC3EC 61.57%, #8DC6ED 67.73%, #90C8ED 73.89%, #92C9EE 80.05%, #93CAEE 86.2%, #93CAEE 92.36%)',
        filter: isMobile ? 'blur(100px)' : isTablet ? 'blur(110px)' : 'blur(125px)',
        top,
        left,
        right,
        bottom,
        transform,
        zIndex,
        pointerEvents: 'none',
    };

    return <Container style={baseGlow} />;
};

export default Glow;
