import React from 'react';
import { Box, Typography, Container, Grid, useMediaQuery } from '@mui/material';
import  {theme} from "../theme/theme.js";
import FeatureItem from "../components/Items/FeatureItem.jsx";
import {ReportButton} from "../components/Buttons/ReportButton.jsx";

// Complete Compliance Guide Features Page
export const ComplianceGuideFeatures = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // TODO: fix later

    const features = [
        {
            title: "Regulatory Updates",
            description: "Explore the latest changes from major regulators so you can adjust your operations confidently."
        },
        {
            title: "Key Announcements",
            description: "Keep up with important notices and advisories that may impact your business."
        },
        {
            title: "Fines, Penalties & Seizures",
            description: "Explore enforcement actions, including fines, to understand risks and stay ahead of compliance challenges"
        },
        {
            title: "Scam Alerts",
            description: "Protect your company by staying aware of frauds and scams making waves in the industry."
        },
        {
            title: "Compliance Experts Insights",
            description: "Gain valuable perspectives from industry compliance experts from leading firms"
        },
        {
            title: "Domestic Insurance News",
            description: "Track shifts in domestic insurance regulations to keep your business compliant"
        }
    ];

    return (
        <Box sx={{
            backgroundColor: theme.palette.background.paper,
            py: { xs: 4, sm: 6, md: 10 },
            padding: "10px",
            width: "100%",
            zIndex: "1",
            position: "relative",
        }}>
            <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, md: 8 } }}>
                {/* Main Heading and Description */}
                <Box sx={{ mb: { xs: 5, md: 7 } }}>
                    <Typography
                        variant={isMobile ? "h4" : "h3"}
                        component="h1"
                        sx={{
                            mb: 2,
                            fontWeight: 700,
                        }}
                    >
                        Your Monthly Compliance Guide
                    </Typography>
                    <Typography
                        variant="body2"
                    >
                        The Finance Magnates Compliance Industry Report provides an overview of key regulatory changes to help businesses navigate compliance challenges
                    </Typography>
                </Box>

                {/* Features Grid */}
                <Grid container rowSpacing={5} columnSpacing={5}>
                    {features.map((feature, index) => (
                        <Grid item size={{ xs: 12, sm: 4, md: 4 }} key={index}>
                            <FeatureItem
                                title={feature.title}
                                description={feature.description}
                            />
                        </Grid>
                    ))}
                </Grid>

                {/* CTA Button */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: isMobile ? 'center' : 'flex-start',
                    mt: { xs: 3, md: 5 }
                }}>
                    <ReportButton
                        variant="contained"
                        fullWidth

                        size={isMobile ? "medium" : "large"}
                        sx={{
                            mt: { xs: 3, md: 5 },
                            px: isMobile ? 2 : 4,
                        }}
                    >
                        Get Free Report
                    </ReportButton>
                </Box>
            </Container>
        </Box>
    );
};

export default ComplianceGuideFeatures;