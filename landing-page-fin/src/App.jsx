import './App.css'
import ComplianceSignupForm from "./pages/ComplianceSignupForm.jsx";
import ComplianceGuideFeatures from "./pages/ComplianceGuideFeatures.jsx";
import {Container, ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme.js";
import Navigation from "./components/Header/Navigation.jsx";

function App() {

  return (
    <ThemeProvider theme={theme}>
        <Container fullWidth sx={{ py: 2, minWidth: "100%" }}>
            <Navigation/>
            <ComplianceSignupForm/>
        </Container>
    </ThemeProvider>
  )
}

export default App
