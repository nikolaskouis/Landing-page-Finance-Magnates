import {Box, useMediaQuery} from '@mui/material';
import { Container, Grid } from '@mui/material';
import {theme} from "../constants/theme.js";
import Glow from "../components/Effects/Glow.jsx";
import ArticleContainer from "../components/Article/ArticleContainer.jsx";
import FormComponent from "../components/Form/FormComponent.jsx";

export const ComplianceSignupForm = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <Container sx={{py: isMobile ? 4 : isTablet ? 6 : 8}} maxWidth={isMobile ? "xs" : "lg"} >
            <Grid
                container
                spacing={isMobile ? 2 : isTablet ? 3 : 4}
                direction="row"
            >
                <Grid item xs={12} md={6}>
                    <Box sx={{ height: '100%' }}>
                        <ArticleContainer />
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box sx={{ position: 'relative', overflow: 'hidden', height: '100%', width: '50%' }}>
                        <Glow />
                        <FormComponent />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ComplianceSignupForm;