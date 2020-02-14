import { StatusContextProvider } from "contexts/StatusContext";
import { ThemeProvider } from "styled-components";
import PageTemplate from "components/PageTemplate";
import GlobalStyles from "styles/globalStyles";
import theme from "styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <StatusContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <PageTemplate>
          <Component {...pageProps} />
        </PageTemplate>
      </ThemeProvider>
    </StatusContextProvider>
  );
}

export default MyApp;
