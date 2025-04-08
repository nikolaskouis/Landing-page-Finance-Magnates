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
                display: 'flex',
                alignItems: 'center',
                position: 'relative',

            }}
        >
            <Container
                maxWidth={false}
                sx={{paddingTop: "100px"}}
                //disableGutters
            >
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-evenly"
                    spacing={0}
                    //sx={{ maxWidth: 1200, mx: 'auto' }}
                >
                    {/* LEFT SIDE – Title + Description */}
                    <Grid item maxWidth="636px" zIndex={2}>
                        <Typography
                            variant="h2"
                            sx={{
                                p: (isMobile) ? '2rem' : '1rem',
                                fontSize: (isMobile) ? '2.5rem' : '4rem',
                            }}
                        >
                            Stay Informed.<br />Stay Compliant.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                p: (isMobile) ? '2rem' : '1rem',
                            }}
                        >
                            Sign up to access the latest Insights on Regulatory Highlights, Recent Developments, and Future Outlook—all in one monthly report.
                        </Typography>
                    </Grid>
                    <Glow transform="translate(30%, -55%)" zIndex={0} />
                    <Glow transform="translate(80%, 90%)" zIndex={0} />
                    {/* RIGHT SIDE – Form */}
                    <Grid>
                        {/* Form box */}
                        <Box
                            sx={{
                                p: 4,
                                px: 0,
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