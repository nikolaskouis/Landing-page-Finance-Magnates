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
                padding: "2rem 4rem",
                zIndex: 999,
            }}
        >
            <Box
            >
                <img src="../../public/Images/Layer_1.png" alt="fMintelligence" width="180" />
            </Box>
        </Box>
    );
};

const Navigation = () => {

    return (
        <FmIntelligenceLogo />
    );
};

export default Navigation;