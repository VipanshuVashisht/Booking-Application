import React from "react";
import { createRoot } from "react-dom/client";import App from "./App";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { DarkModeContextProvider } from "./context/darkModeContext.jsx";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
