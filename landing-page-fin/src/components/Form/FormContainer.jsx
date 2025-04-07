import {Box, styled} from "@mui/material";

export const FormContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    zIndex: 3,
    borderRadius: '24px !important',
    padding: theme.spacing(4),
    backgroundColor: 'rgb(26,27,33)',
    color: '#fff',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',

    // Pseudo-element for gradient border
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: '1.5px',
        borderRadius: '25px',
        background: 'linear-gradient(90deg, rgba(246, 243, 97, 0.6), rgba(163, 99, 255, 0.8))',
        WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        pointerEvents: 'none',
        zIndex: -1,
    },

    // Responsive styling for different breakpoints
    [theme.breakpoints.down('sm')]: { // Mobile
        borderRadius: '6px',
        padding: theme.spacing(2.5),
        margin: theme.spacing(1),
    },
    [theme.breakpoints.between('sm', 'md')]: { // Tablet
        borderRadius: '8px',
        padding: theme.spacing(3),
        margin: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: { // Desktop
        borderRadius: '8px',
        padding: theme.spacing(4),
    },
}));