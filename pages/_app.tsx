import type { AppProps } from "next/app";
import GlobalStyle from "../src/styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
