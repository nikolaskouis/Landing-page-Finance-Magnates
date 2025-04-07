import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import Slider from "react-slick";

const experts = [
    {
        name: 'Sylwester Majewski',
        image: '../../public/Images/People/Adam Button (1) 1.png',
        description: `A graduate of the Warsaw School of Economics, Sylwester received an MA specializing in finance and banking. As Finance Magnates’ research associate and STA certified analyst, he leaves no stone unturned. Sylwester is the previous minority partner of an NFA registered US forex broker, and since 2003, has participated in many forex projects.`,
    },
    {
        name: 'Ramzi Ahmad',
        image: '../../public/Images/People/Adam Button 2.png',
        description: `With over 16 years of experience in data-driven marketing within the financial industry, Ramzi Ahmad has developed expertise across Fintech, Crypto, Payments, and Online Trading markets. He has led teams to improve efficiency and drive growth for dozens of financial brands through actionable data insights. Ramzi continues to advance his skills through courses at institutions like Harvard and Cambridge, ensuring the highest standards of data accuracy.`,
    },
    {
        name: 'Damian Chmiel',
        image: '../../public/Images/People/Eamonn Sheridan web.png',
        description: `Damian’s adventure with the financial markets began at the Cracow University of Economics, where he obtained his MA in finance and accounting. Starting from the retail trader perspective, he collaborated with brokerage houses and financial portals in Poland as an independent editor and content manager. His adventure in Finance Magnates began in 2016 where he develops as a business intelligence analyst.`,
    },
    {
        name: 'Sylwester Majewski',
        image: '../../public/Images/People/Adam Button (1) 1.png',
        description: `A graduate of the Warsaw School of Economics, Sylwester received an MA specializing in finance and banking. As Finance Magnates’ research associate and STA certified analyst, he leaves no stone unturned. Sylwester is the previous minority partner of an NFA registered US forex broker, and since 2003, has participated in many forex projects.`,
    },
    {
        name: 'Damian Chmiel',
        image: '../../public/Images/People/Eamonn Sheridan web.png',
        description: `Damian’s adventure with the financial markets began at the Cracow University of Economics, where he obtained his MA in finance and accounting. Starting from the retail trader perspective, he collaborated with brokerage houses and financial portals in Poland as an independent editor and content manager. His adventure in Finance Magnates began in 2016 where he develops as a business intelligence analyst.`,
    },
];

const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024, // tablet
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 600, // mobile
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const IndustryExpertsSection = () => {
    return (
        <Box sx={{ bgcolor: '#1a1b21', color: '#fff', py: 10, px: { xs: 3, md: 8 } }}>
            <Typography
                variant="h4"
                fontWeight="bold"
                sx={{
                    mb: 2,
                    textAlign: { xs: 'center', md: 'left' },
                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                }}
            >
                Prepared by industry experts
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    mb: 6,
                    textAlign: { xs: 'center', md: 'left' },
                    color: 'rgba(255, 255, 255, 0.7)',
                }}
            >
                Meet our Team behind our intelligence insights.
            </Typography>

            <Slider {...settings}>

                {experts.map((expert, index) => (
                    <Grid item  size={{ xs:12, sm: 6, md:4 }} key={index}>
                        <Card
                            sx={{
                                bgcolor: '#0a0b0d',
                                //padding: "32px",
                                height: "748px",
                                width: "378px",
                                borderRadius: "15px",
                                border: "0.1em solid",
                                borderColor: "rgba(255,255,255,0.43)",
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={expert.image}
                                alt={expert.name}
                                sx={{
                                    objectFit: 'cover',
                                    filter: 'grayscale(100%)',
                                    borderRadius: "15px",
                                    padding: "24px",
                                    width: 'auto',
                                }}
                            />
                            <CardContent sx={{ flexGrow: 1, p: "0 32px" }}>
                                <Typography
                                    variant="h6"
                                    fontWeight="bold"
                                    gutterBottom

                                    sx={{ color: '#fff', fontSize: "24px" }}
                                >
                                    {expert.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.7)',
                                        lineHeight: 1.6,
                                        paddingTop: '10px',
                                        fontSize: '16px',
                                    }}
                                >
                                    {expert.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}

            </Slider>
        </Box>
    );
};

export default IndustryExpertsSection;
