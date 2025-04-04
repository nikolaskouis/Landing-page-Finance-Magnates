// TextField Component
import React from 'react';
import { TextField, styled } from '@mui/material';

//Custom TextField for the input textfields
const StyledTextField = styled(TextField)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    '& .MuiOutlinedInput-root': {
        backgroundColor: 'transparent',
        color: '#fff',
        borderRadius: '4px',
        '& fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.3)',
        },
        '&:hover fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.5)',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#fff',
        },
        // Responsive height adjustments
        [theme.breakpoints.down('sm')]: { // Mobile
            height: '50px',
            fontSize: '14px',
        },
        [theme.breakpoints.between('sm', 'md')]: { // Tablet
            height: '56px',
            fontSize: '15px',
        },
        [theme.breakpoints.up('md')]: { // Desktop
            height: '60px',
            fontSize: '16px',
        },
    },
    '& .MuiInputLabel-root': {
        color: 'rgba(255, 255, 255, 0.7)',
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
        },
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#fff',
    },
}));

export const FormTextField = ({ label, placeholder, type = 'text', ...props }) => {
    return (
        <StyledTextField
            fullWidth
            label={label}
            placeholder={placeholder}
            type={type}
            variant="outlined"
            InputLabelProps={{
                shrink: true,
            }}
            {...props}
        />
    );
};

export default FormTextField;