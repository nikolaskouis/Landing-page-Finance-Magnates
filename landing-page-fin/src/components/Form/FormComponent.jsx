import {Typography, useMediaQuery} from "@mui/material";
import FormTextField from "./FormTextField.jsx";
import PrimaryButton from "../Buttons/PrimaryButton.jsx";
import PrivacyText from "../Text/PrivacyText.jsx";
import {FormContainer} from "./FormContainer.jsx";
import {theme} from "../../theme/theme.js";
import Glow from "../Effects/Glow.jsx";

const FormComponent = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

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

            <FormTextField
                label="First name"
                placeholder="John"
                fullWidth
                margin="normal"
                size={isMobile ? "small" : "medium"}
            />

            <FormTextField
                label="Last name"
                placeholder="Doe"
                fullWidth
                margin="normal"
                size={isMobile ? "small" : "medium"}
            />

            <FormTextField
                label="Email Address"
                placeholder="you@company.com"
                type="email"
                fullWidth
                margin="normal"
                size={isMobile ? "small" : "medium"}
            />

            <FormTextField
                label="Company"
                placeholder="Enter company name"
                fullWidth
                margin="normal"
                size={isMobile ? "small" : "medium"}
            />

            <PrimaryButton
                type="submit"
                sx={{
                    mt: 1,
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