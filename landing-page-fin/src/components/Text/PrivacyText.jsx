// Privacy Policy Text Component
import {Box, Link, Typography} from "@mui/material";

export const PrivacyText = ({ policyLink, termsLink, textSize = 18 }) => {
    return (
        <Box sx={{textAlign: "left" }}>
            <Typography variant="body2" color="#A3A5A6" sx={{ mt: 2, fontSize: textSize }}>
                By submitting this form, you agree to our{' '}
                <Link href={policyLink} color="inherit" sx={{ fontWeight: 600, textDecoration: 'underline' }}>
                    Privacy Policy
                </Link>
                .
            </Typography>
            <Typography variant="body2" color="#A3A5A6" sx={{ mt: 1, fontSize: textSize - 4 }}>
                This site is protected by reCAPTCHA and the Google Privacy Policy and{' '}
                <Link href={termsLink} color="inherit" sx={{ fontWeight: 600, textDecoration: 'underline' }}>
                    Terms of Service
                </Link>{' '}
                apply.
            </Typography>
        </Box>
    );
};

export default PrivacyText;