import './App.css'
import ComplianceSignupForm from "./pages/ComplianceSignupForm.jsx";
import ComplianceGuideFeatures from "./pages/ComplianceGuideFeatures.jsx";
import {ThemeProvider} from "@mui/material";
import {theme} from "./constants/theme.js";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <ComplianceSignupForm/>
      <ComplianceGuideFeatures/>
    </ThemeProvider>
  )
}

export default App
