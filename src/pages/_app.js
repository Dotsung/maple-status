import { AuthContextProvider } from "contexts/AuthContext";
import { ThemeProvider } from "styled-components";
import PageTemplate from "components/PageTemplate";
import GlobalStyles from "styles/globalStyles";
import theme from "styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <PageTemplate>
          <Component {...pageProps} />
        </PageTemplate>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
