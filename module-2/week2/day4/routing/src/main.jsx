import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from "react";
import { ThemeWrapper } from "./contexts/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeWrapper>
      <Router>
        <App />
      </Router>
    </ThemeWrapper>
  </StrictMode>
);
