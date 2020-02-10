import { AuthContextProvider } from "contexts/AuthContext";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/globalStyles";
import theme from "styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
