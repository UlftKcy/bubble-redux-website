import "./App.css";
import AppRouter from "./router/AppRouter";
import { createTheme,ThemeProvider } from "@material-ui/core";

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
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
