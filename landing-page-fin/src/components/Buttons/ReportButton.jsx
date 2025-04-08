import {Button, styled} from "@mui/material";

export const ReportButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#1967ff',
    color: 'white',
    padding: '14px 24px',
    borderRadius: '4px',
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '16px',
    '&:hover': {
        backgroundColor: '#3a75e6',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '10px 16px',
        fontSize: '14px',
    },
}));
