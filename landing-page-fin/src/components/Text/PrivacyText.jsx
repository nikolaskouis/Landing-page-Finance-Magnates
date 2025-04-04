// Privacy Policy Text Component
import {Link, Typography} from "@mui/material";

export const PrivacyText = ({ policyLink, termsLink, textSize = 14 }) => {
    return (
        <>
            <Typography variant="body2" color="rgba(255, 255, 255, 0.7)" sx={{ mt: 2, fontSize: textSize }}>
                By submitting this form, you agree to our{' '}
                <Link href={policyLink} color="inherit" sx={{ fontWeight: 600, textDecoration: 'underline' }}>
                    Privacy Policy
                </Link>
                .
            </Typography>
            <Typography variant="body2" color="rgba(255, 255, 255, 0.7)" sx={{ mt: 1, fontSize: textSize }}>
                This site is protected by reCAPTCHA and the Google Privacy Policy and{' '}
                <Link href={termsLink} color="inherit" sx={{ fontWeight: 600, textDecoration: 'underline' }}>
                    Terms of Service
                </Link>{' '}
                apply.
            </Typography>
        </>
    );
};

export default PrivacyText;