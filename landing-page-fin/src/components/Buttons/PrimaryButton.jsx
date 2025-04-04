// Button Component
import {Button as MuiButton, styled, useMediaQuery} from '@mui/material';
import {theme} from "../../constants/theme.js";

const StyledButton = styled(MuiButton)(({ theme }) => ({
    padding: '12px 24px',
    borderRadius: '4px',
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '16px',
    boxShadow: 'none',
    '&:hover': {
        boxShadow: 'none',
        backgroundColor: '#3a75e6',
    },
}));

export const PrimaryButton = ({ children, ...props }) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <StyledButton
            fullWidth
            variant="contained"
            color="primary"
            disableElevation
            sx={{
                padding: isMobile ? '10px 16px' : isTablet ? '12px 20px' : '14px 24px',
                fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px',
                borderRadius: isMobile ? '3px' : '4px',
            }}
            {...props}
        >
            {children}
        </StyledButton>
    );
};

export default PrimaryButton;