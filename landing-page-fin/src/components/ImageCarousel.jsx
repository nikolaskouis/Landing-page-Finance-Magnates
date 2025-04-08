import React from "react";
import Slider from "react-slick";
import {Box} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imagePaths = [
    "src/assets/Images/Carousel/Frame 13037.png",
    "src/assets/Images/Carousel/Frame 13043.png",
    "src/assets/Images/Carousel/q4_2.png",
];

const ImageCarousel = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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
                                height: 414, // Set fixed height
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
