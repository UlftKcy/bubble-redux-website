import "./App.css";
import AppRouter from "./router/AppRouter";
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
  palette: {
    primary: {
      light: "#524D65",
      main: "#19124f",
      dark: "#333333",
    },
    secondary: {
      main: "#F2F2F6",
    },
    typography: {
      fontFamily: { fontFamily: ["Inter, sans-serif"].join(",") },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <AppRouter />
        <ToastContainer />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
