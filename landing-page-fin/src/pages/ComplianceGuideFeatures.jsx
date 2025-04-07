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
            backgroundColor: '#121418',
            minHeight: '100vh',
            py: { xs: 4, sm: 6, md: 8 },
        }}>
            <Container sx={{paddingLeft: 0, paddingRight: 0}} maxWidth="lg">
                {/* Main Heading and Description */}
                <Box sx={{ mb: { xs: 5, md: 7 } }}>
                    <Typography
                        variant={isMobile ? "h4" : "h3"}
                        component="h1"
                        sx={{
                            color: 'white',
                            mb: 2,
                            fontWeight: 700,
                        }}
                    >
                        Your Monthly Compliance Guide
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontSize: isMobile ? '15px' : '16px',
                            maxWidth: '900px',
                            lineHeight: 1.6,
                        }}
                    >
                        The Finance Magnates Compliance Industry Report provides an overview of key regulatory changes to help businesses navigate compliance challenges
                    </Typography>
                </Box>

                {/* Features Grid */}
                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid item key={index} xs={12} md={6} lg={4}>
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
                        fullWidth={isMobile}
                        size={isMobile ? "medium" : "large"}
                    >
                        Get Free Report
                    </ReportButton>
                </Box>
            </Container>
        </Box>
    );
};

export default ComplianceGuideFeatures;