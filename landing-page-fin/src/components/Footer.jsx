import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    IconButton,
    Stack,
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RssFeedIcon from '@mui/icons-material/RssFeed';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#111', color: 'white', py: 6 }}>
            <Container maxWidth="lg" sx={{paddingTop: 4}}>
                <Grid container spacing={4}>
                    {/* Left Side: Logos */}
                    <Grid item xs={12} md={3}>
                        <Box>
                            <img src="../../public/Images/Layer_1.png" alt="fMintelligence" width="180" />
                        </Box>
                        <Box sx={{ mt: 8 }}>
                            <img src="../../public/Images/Union.png" alt="Finance Magnates" width="180" />
                        </Box>
                    </Grid>

                    {/* Middle: Description + Icons */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="body1" sx={{ mb: 2, fontSize: '18px', lineHeight: 1.8, width: '800px', color: "#A3A5A6" }}>
                            Finance Magnates Intelligence, part of Finance Magnates, delivers specialized research and insights on the financial markets. Offering Quarterly, Annual, and custom reports tailored to specific business needs, it covers key aspects such as trading volumes, market trends, regulations, and more
                        </Typography>
                        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                            <IconButton color="inherit"><TwitterIcon /></IconButton>
                            <IconButton color="inherit"><TelegramIcon /></IconButton>
                            <IconButton color="inherit"><YouTubeIcon /></IconButton>
                            <IconButton color="inherit"><FacebookIcon /></IconButton>
                            <IconButton color="inherit"><LinkedInIcon /></IconButton>
                            <IconButton color="inherit"><RssFeedIcon /></IconButton>
                        </Stack>
                    </Grid>

                    {/* Right Side: Links */}
                    <Grid item xs={12} md={3}>
                        <Stack spacing={1}>
                            {['Finance Magnates', 'Latest News', 'Directory', 'Events', 'Contact Us'].map((text) => (
                                <Link key={text} href="#" underline="hover" sx={{mt: "2px !important"}} color="#A3A5A6">
                                    {text}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>

                {/* Bottom Bar */}
                <Grid container justifyContent="space-between" alignItems="center" sx={{ mt: 4 }}>
                    <Grid item>
                        <Typography variant="body2" color="#A3A5A6">
                            © 2024 "Finance Magnates CY Ltd." All rights reserved.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Stack direction="row" spacing={3}>
                            {['Cookie Policy', 'Privacy Policy', 'Terms and Conditions', 'Manage Cookies'].map((text) => (
                                <Link key={text} href="#" underline="hover" color="#A3A5A6" sx={{ fontSize: '12px' }}>
                                    {text}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
