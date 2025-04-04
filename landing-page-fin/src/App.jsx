import './App.css'
import ComplianceSignupForm from "./pages/ComplianceSignupForm.jsx";
import ComplianceGuideFeatures from "./pages/ComplianceGuideFeatures.jsx";
import {Container, ThemeProvider} from "@mui/material";
import {theme} from "./constants/theme.js";
import Navigation from "./components/Header/Navigation.jsx";

function App() {

  return (
    <ThemeProvider theme={theme}>
        <Container sx={{ py: 2 }}>
            <Navigation/>
            <ComplianceSignupForm/>
            <ComplianceGuideFeatures/>
        </Container>
    </ThemeProvider>
  )
}

export default App
