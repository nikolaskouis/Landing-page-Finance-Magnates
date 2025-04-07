import './App.css'
import ComplianceSignupForm from "./pages/ComplianceSignupForm.jsx";
import ComplianceGuideFeatures from "./pages/ComplianceGuideFeatures.jsx";
import {Container, ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme.js";
import Navigation from "./components/Header/Navigation.jsx";
import ImageCarousel from "./components/ImageCarousel.jsx";
import FaqSection from "./components/FaqSection.jsx";
import IndustryExpertsSection from "./components/IndustryExpertsSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <ThemeProvider theme={theme}>
        <Container fullWidth sx={{ py: 2, minWidth: "100%" }}>
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
