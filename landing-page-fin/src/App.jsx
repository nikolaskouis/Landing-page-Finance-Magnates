import './App.css'
import ComplianceSignupForm from "./pages/ComplianceSignupForm.jsx";
import ComplianceGuideFeatures from "./pages/ComplianceGuideFeatures.jsx";
import {Container, ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme.js";
import Navigation from "./components/Header/Navigation.jsx";
import ImageCarousel from "./pages/ImageCarousel.jsx";
import FaqSection from "./pages/FaqSection.jsx";
import IndustryExpertsSection from "./pages/IndustryExpertsSection.jsx";
import Footer from "./pages/Footer.jsx";

function App() {

  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth={false} disableGutters sx={{ py: 2 }}>
            <Navigation/>
            <ComplianceSignupForm/>
            <ComplianceGuideFeatures/>
            <ImageCarousel/>
            <FaqSection/>
            <IndustryExpertsSection/>
            <Footer/>
        </Container>
    </ThemeProvider>
  )
}

export default App
