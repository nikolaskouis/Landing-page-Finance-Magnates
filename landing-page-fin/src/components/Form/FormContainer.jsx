import {Box, styled} from "@mui/material";

export const FormContainer = styled(Box)(({ theme }) => ({
    backgroundColor: 'rgb(26,27,33)',
    border: "1px solid",
    borderImage: "linear-gradient(90deg, #F6F361, #A363FF) 1",
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    color: '#fff',
    zIndex: 3,

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