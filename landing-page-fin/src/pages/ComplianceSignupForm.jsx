// src/pages/ComplianceSignupForm.jsx
import React from 'react';
import {Box, Container, Grid, Typography, useMediaQuery} from '@mui/material';
import { theme } from '../theme/theme.js';
import Glow from "../components/Effects/Glow.jsx";
import FormComponent from "../components/Form/FormComponent.jsx";

const ComplianceSignupForm = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <Box
            sx={{
                //py: isMobile ? 4 : isTablet ? 6 : 10,
                //px: isMobile ? 2 : 4,
                background: "#000",
                display: 'flex',
                alignItems: 'center',
                position: 'relative',

            }}
        >
            <Container
                maxWidth={false}
                //disableGutters
            >
            <Grid
                container
                spacing={isMobile ? 4 : 8}
                alignItems="center"
                justifyContent="space-evenly"
                // sx={{ maxWidth: 1200, mx: 'auto' }}
            >
                {/* LEFT SIDE – Title + Description */}
                <Grid item xs={12} md={6} maxWidth="636px">
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 600,
                            fontSize: isMobile ? '3rem' : '4rem',
                            mb: 2,
                            color: '#fff',
                            lineHeight: 1.2,
                            textAlign: 'left',
                        }}
                    >
                        Stay Informed.<br />Stay Compliant.
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            mb: 4,
                            color: '#fff',
                            fontSize: '1.5rem',
                            lineHeight: 1.6,
                            textAlign: 'left',
                        }}
                    >
                        Sign up to access the latest Insights on Regulatory Highlights, Recent Developments, and Future Outlook—all in one monthly report.
                    </Typography>
                </Grid>

                {/* RIGHT SIDE – Form */}
                <Grid item xs={12} md={6}>
                    <Glow />
                    <Box
                        sx={{
                            p: 4,
                            borderRadius: 2,
                            maxWidth: 576,
                            mx: isMobile ? 'auto' : 'inherit',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >

                        <FormComponent />

                    </Box>

                </Grid>
            </Grid>
            </Container>
        </Box>
    );
};

export default ComplianceSignupForm;