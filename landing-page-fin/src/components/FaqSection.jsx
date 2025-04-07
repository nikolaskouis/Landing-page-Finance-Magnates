import React from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';

const faqs = [
    {
        question: 'How often is the Compliance Industry Report available?',
        answer:
            'The report is published monthly, providing regular updates to help businesses stay ahead of compliance changes.',
    },
    {
        question: 'How can I access the Monthly Compliance Industry Report?',
        answer:
            'Simply fill out the form on this page to get the report delivered straight to your inbox.',
    },
    {
        question: 'How is the data in the report gathered?',
        answer:
            'The report uses trusted sources like global regulators, industry news, expert analysis, and input from compliance professionals.',
    },
];

const FaqSection = () => {
    return (
        <Box sx={{ bgcolor: '#121212', color: '#fff', py: 10, px: { xs: 3, md: 8 } }}>
            <Typography
                variant="h4"
                fontWeight="bold"
                sx={{
                    mb: 6,
                    textAlign: { xs: 'center', md: 'left' },
                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                }}
            >
                Frequently Asked Questions
            </Typography>

            <Grid container spacing={4}>
                {faqs.map((faq, index) => (
                    <Grid item  size={{ xs:12, sm: 6, md:4 }} key={index}>
                        <Typography
                            variant="h6"
                            fontWeight={600}
                            sx={{ mb: 1, lineHeight: 1.4 }}
                        >
                            {faq.question}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                lineHeight: 1.7,
                                fontSize: '1rem',
                            }}
                        >
                            {faq.answer}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default FaqSection;
