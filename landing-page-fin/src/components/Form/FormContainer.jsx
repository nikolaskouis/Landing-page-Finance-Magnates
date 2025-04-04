import {Box, styled} from "@mui/material";

export const FormContainer = styled(Box)(({ theme }) => ({
    backgroundColor: 'rgba(20, 20, 20, 0.7)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    color: '#fff',

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