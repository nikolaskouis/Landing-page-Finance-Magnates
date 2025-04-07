import { Typography, useMediaQuery } from "@mui/material";
import FormTextField from "./FormTextField.jsx";
import PrimaryButton from "../Buttons/PrimaryButton.jsx";
import PrivacyText from "../Text/PrivacyText.jsx";
import { FormContainer } from "./FormContainer.jsx";
import { theme } from "../../theme/theme.js";

const FormComponent = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const labelStyle = {
        fontSize: isMobile ? 14 : 16,
        fontWeight: 500,
        mb: 0,
        mt: 0,
    };

    return (
        <FormContainer>
            <Typography
                variant={isMobile ? "h6" : "h5"}
                component="h2"
                sx={{
                    mb: isMobile ? 2 : 3,
                    textAlign: isMobile ? 'center' : 'left'
                }}
            >
                Get your free compliance guide
            </Typography>

            <Typography sx={labelStyle}>First name</Typography>
            <FormTextField
                placeholder="John"
                fullWidth
                margin="dense"
                size={isMobile ? "small" : "medium"}
            />

            <Typography sx={labelStyle}>Last name</Typography>
            <FormTextField
                placeholder="Doe"
                fullWidth
                margin="dense"
                size={isMobile ? "small" : "medium"}
            />

            <Typography sx={labelStyle}>Email address</Typography>
            <FormTextField
                placeholder="you@company.com"
                type="email"
                fullWidth
                margin="dense"
                size={isMobile ? "small" : "medium"}
            />

            <Typography sx={labelStyle}>Company</Typography>
            <FormTextField
                placeholder="Enter company name"
                fullWidth
                margin="dense"
                size={isMobile ? "small" : "medium"}
            />

            <PrimaryButton
                type="submit"
                sx={{
                    mt: 3,
                    width: '100%'
                }}
            >
                Get Free Report
            </PrimaryButton>

            <PrivacyText
                policyLink="/privacy-policy"
                termsLink="/terms-of-service"
                textSize={isMobile ? 12 : 18}
                sx={{ mt: 2 }}
            />
        </FormContainer>
    );
}

export default FormComponent;
