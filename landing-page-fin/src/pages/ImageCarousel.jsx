import React from "react";
import Slider from "react-slick";
import {Box, useTheme} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imagePaths = [
    "/Images/Carousel/Frame 13037.png",
    "/Images/Carousel/Frame 13043.png",
    "/Images/Carousel/q4_2.png",
];

const ImageCarousel = () => {
    const theme = useTheme();

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: theme.breakpoints.values.lg, // tablet
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: theme.breakpoints.values.md, // tablet
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: theme.breakpoints.values.sm, // mobile
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Box sx={{ margin: "0 auto" }}>
            <Slider {...settings}>
                {imagePaths.map((path, index) => (
                    <Box
                        key={index}
                        sx={{
                            px: 2,
                        }}
                    >
                        <Box
                            component="img"
                            src={path}
                            alt={`carousel-${index}`}
                            sx={{
                                width: "100%",
                                height: "414px", // Set fixed height
                                borderRadius: 2,
                                boxShadow: 3,
                            }}
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default ImageCarousel;
