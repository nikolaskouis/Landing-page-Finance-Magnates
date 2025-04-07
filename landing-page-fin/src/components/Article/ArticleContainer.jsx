import {Box, Typography, useMediaQuery} from "@mui/material";
import {theme} from "../../theme/theme.js";

const ArticleContainer = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <Box sx={{
            pr: { md: 4 },
            mb: { xs: 3, md: 0 },
            textAlign: isMobile ? 'center' : 'left'
        }}>
            <Typography
                variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
                component="h1"
                sx={{
                    fontWeight: 700,
                    mb: isMobile ? 1.5 : 2,
                    lineHeight: 1.2
                }}
            >
                Stay Informed.<br />
                Stay Compliant.
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    mb: isMobile ? 2 : isTablet ? 2.5 : 3,
                    fontSize: isMobile ? 14 : isTablet ? 15 : 16,
                }}
            >
                Sign up to access the latest Insights on Regulatory Highlights,
                Recent Developments, and Future Outlook—all in one monthly report.
            </Typography>
        </Box>
    );
}

export default ArticleContainer;