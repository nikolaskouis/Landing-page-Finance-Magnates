import React from 'react';
import {
    Box,
} from '@mui/material';

import Layer_1 from '../../assets/Images/Layer_1.png';
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
                <img src={Layer_1} alt="fMintelligence" width="180" />
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