import {Box, Typography, useMediaQuery} from "@mui/material";
import {theme} from "../../theme/theme.js";

const FeatureItem = ({ title, description }) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    //TODO: add tablet mode here later

    return (
        <Box sx={{ mb: { xs: 4, md: 5 } }}>
            <Typography
                variant="h6"
                component="h3"
                sx={{
                    color: 'white',
                    mb: 1.5,
                    fontSize: isMobile ? '18px' : '20px',
                    fontWeight: 600,
                }}
            >
                {title}
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: isMobile ? '14px' : '16px',
                    lineHeight: 1.6,
                }}
            >
                {description}
            </Typography>
        </Box>
    );
};

export default FeatureItem;