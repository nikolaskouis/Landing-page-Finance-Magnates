import {Box, Typography, useMediaQuery} from "@mui/material";
import {theme} from "../../theme/theme.js";

const FeatureItem = ({ title, description }) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box>
            <Typography
                variant="h6"
                component="h3"
                sx={{
                    mb: 1.5,
                }}
            >
                {title}
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    fontSize: isMobile ? '14px' : '16px',
                }}
            >
                {description}
            </Typography>
        </Box>
    );
};

export default FeatureItem;