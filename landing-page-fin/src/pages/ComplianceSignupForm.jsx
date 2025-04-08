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
                    <Grid item size={{ xs:12, sm: 12, md:6 }} maxWidth="636px">
                        <Typography
                            variant="h2"
                            sx={{
                                mb: 2,
                            }}
                        >
                            Stay Informed.<br />Stay Compliant.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                mb: 4,
                            }}
                        >
                            Sign up to access the latest Insights on Regulatory Highlights, Recent Developments, and Future Outlook—all in one monthly report.
                        </Typography>
                    </Grid>

                    {/* RIGHT SIDE – Form */}
                    <Grid>
                        <Glow transform="translate(-20%, 10%)" zIndex={0} />
                        <Glow transform="translate(50%, 150%)" zIndex={0} />

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