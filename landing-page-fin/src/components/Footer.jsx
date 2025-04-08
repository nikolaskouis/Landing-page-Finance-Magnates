import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    IconButton,
    Stack,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import UnionLogo from '../assets/Images/Union.png';
import Layer_1 from '../assets/Images/Layer_1.png';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <Box sx={{ bgcolor: '#111', color: 'white', py: 6 }}>
            <Container maxWidth="lg">
                {/* Desktop View - Image 3 */}
                {isDesktop && (
                    <>
                        <Grid container spacing={4}>
                            {/* Left Column: Logos */}
                            <Grid item size={{xs: 2}}>
                                <Stack spacing={4}>
                                    <Box>
                                        <img src={UnionLogo} alt="fMintelligence" width="180" />
                                    </Box>
                                    <Box>
                                        <img src={Layer_1} alt="Finance Magnates" width="180" />
                                    </Box>
                                </Stack>
                            </Grid>

                            {/* Middle Column: Description and Icons */}
                            <Grid item sx={{px: 5}} size={{xs: 8}}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        mb: 2,
                                        fontSize: '18px',
                                        lineHeight: 1.8,
                                        color: theme.palette.text.secondary
                                    }}
                                >
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

                            {/* Right Column: Links */}
                            <Grid item size={{xs: 2}}>
                                <Stack spacing={1}>
                                    {['Finance Magnates', 'Latest News', 'Directory', 'Events', 'Contact Us'].map((text) => (
                                        <Link
                                            key={text}
                                            href="#"
                                            underline="hover"
                                            color={theme.palette.text.secondary}
                                            sx={{ fontSize: '14px' }}
                                        >
                                            {text}
                                        </Link>
                                    ))}
                                </Stack>
                            </Grid>
                        </Grid>

                        {/* Bottom Bar */}
                        <Grid container spacing={2} justifyContent="space-between" alignItems="center" sx={{ mt: 6 }}>
                            <Grid item xs={6}>
                                <Typography variant="body2" color={theme.palette.text.secondary}>
                                    © 2024 "Finance Magnates CY Ltd." All rights reserved.
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Stack direction="row" spacing={3} justifyContent="flex-end" flexWrap="wrap">
                                    {['Cookie Policy', 'Privacy Policy', 'Terms and Conditions', 'Manage Cookies'].map((text) => (
                                        <Link
                                            key={text}
                                            href="#"
                                            underline="hover"
                                            color={theme.palette.text.secondary}
                                            sx={{ fontSize: '12px' }}
                                        >
                                            {text}
                                        </Link>
                                    ))}
                                </Stack>
                            </Grid>
                        </Grid>
                    </>
                )}

                {/* Tablet View - Image 2 */}
                {isTablet && (
                    <>
                        <Grid container >
                            {/* Left Column: Logo, Description and Icons */}
                            <Grid item size={{xs: 8, sm: 8}} >
                                <Stack spacing={4}>
                                    <Box sx={{py: 3.5}}>
                                        <img src={Layer_1} alt="fMintelligence" width="180" />
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: '18px',
                                            lineHeight: 1.8,
                                            color: theme.palette.text.secondary
                                        }}
                                    >
                                        Finance Magnates Intelligence, part of Finance Magnates, delivers specialized research and insights on the financial markets. Offering Quarterly, Annual, and custom reports tailored to specific business needs, it covers key aspects such as trading volumes, market trends, regulations, and more
                                    </Typography>
                                    <Stack direction="row" spacing={2}>
                                        <IconButton color="inherit"><TwitterIcon /></IconButton>
                                        <IconButton color="inherit"><TelegramIcon /></IconButton>
                                        <IconButton color="inherit"><YouTubeIcon /></IconButton>
                                        <IconButton color="inherit"><FacebookIcon /></IconButton>
                                        <IconButton color="inherit"><LinkedInIcon /></IconButton>
                                        <IconButton color="inherit"><RssFeedIcon /></IconButton>
                                    </Stack>
                                </Stack>
                            </Grid>

                            {/* Right Column: Logo and Links */}
                            <Grid item size={{xs: 4, sm: 4}}>
                                <Stack spacing={4}>
                                    <Box>
                                        <img src={UnionLogo} alt="Finance Magnates" width="180" />
                                    </Box>
                                    <Stack spacing={1}>
                                        {['Finance Magnates', 'Latest News', 'Directory', 'Events', 'Contact Us'].map((text) => (
                                            <Link
                                                key={text}
                                                href="#"
                                                underline="hover"
                                                color={theme.palette.text.secondary}
                                                sx={{ fontSize: '14px' }}
                                            >
                                                {text}
                                            </Link>
                                        ))}
                                    </Stack>
                                </Stack>
                            </Grid>
                        </Grid>

                        {/* Bottom Bar */}
                        <Grid container spacing={2} justifyContent="space-between" alignItems="center" sx={{ mt: 6 }}>
                            <Grid item size={{xs: 12}}>
                                <Typography variant="body2" color={theme.palette.text.secondary}>
                                    © 2024 "Finance Magnates CY Ltd." All rights reserved.
                                </Typography>
                            </Grid>
                            <Grid item size={{xs: 12}}>
                                <Stack direction="row" spacing={3} flexWrap="wrap">
                                    {['Cookie Policy', 'Privacy Policy', 'Terms and Conditions', 'Manage Cookies'].map((text) => (
                                        <Link
                                            key={text}
                                            href="#"
                                            underline="hover"
                                            color={theme.palette.text.secondary}
                                            sx={{ fontSize: '12px' }}
                                        >
                                            {text}
                                        </Link>
                                    ))}
                                </Stack>
                            </Grid>
                        </Grid>
                    </>
                )}

                {/* Mobile View - Image 1 */}
                {isMobile && (
                    <>
                        <Stack spacing={4}>
                            {/* Logos */}
                            <Box>
                                <img src={Layer_1} alt="fMintelligence" width="180" />
                            </Box>
                            <Box>
                                <img src={UnionLogo} alt="Finance Magnates" width="180" />
                            </Box>

                            {/* Description */}
                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 2,
                                    fontSize: '18px',
                                    lineHeight: 1.8,
                                    color: theme.palette.text.secondary
                                }}
                            >
                                Finance Magnates Intelligence, part of Finance Magnates, delivers specialized research and insights on the financial markets. Offering Quarterly, Annual, and custom reports tailored to specific business needs, it covers key aspects such as trading volumes, market trends, regulations, and more
                            </Typography>

                            {/* Social Icons */}
                            <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
                                <IconButton color="inherit"><TwitterIcon /></IconButton>
                                <IconButton color="inherit"><TelegramIcon /></IconButton>
                                <IconButton color="inherit"><YouTubeIcon /></IconButton>
                                <IconButton color="inherit"><FacebookIcon /></IconButton>
                                <IconButton color="inherit"><LinkedInIcon /></IconButton>
                                <IconButton color="inherit"><RssFeedIcon /></IconButton>
                            </Stack>

                            {/* Links */}
                            <Stack spacing={1}>
                                {['Finance Magnates', 'Latest News', 'Directory', 'Events', 'Contact Us'].map((text) => (
                                    <Link
                                        key={text}
                                        href="#"
                                        underline="hover"
                                        color={theme.palette.text.secondary}
                                        sx={{ fontSize: '14px' }}
                                    >
                                        {text}
                                    </Link>
                                ))}
                            </Stack>
                        </Stack>

                        {/* Bottom Bar */}
                        <Stack spacing={2} sx={{ mt: 6 }}>
                            <Typography
                                variant="body2"
                                color={theme.palette.text.secondary}
                                sx={{ fontSize: '14px' }}
                            >
                                © 2024 "Finance Magnates CY Ltd." All rights reserved.
                            </Typography>

                            <Stack
                                direction="row"
                                spacing={3}
                                flexWrap="wrap" // Allows wrapping on small screens
                                useFlexGap
                            >
                                {['Cookie Policy', 'Privacy Policy', 'Terms and Conditions', 'Manage Cookies'].map((text) => (
                                    <Link
                                        key={text}
                                        href="#"
                                        underline="hover"
                                        color={theme.palette.text.secondary}
                                        sx={{ fontSize: '12px' }}
                                    >
                                        {text}
                                    </Link>
                                ))}
                            </Stack>
                        </Stack>

                    </>
                )}
            </Container>
        </Box>
    );
};

export default Footer;