import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/components/commons/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </>
    </ApolloSetting>
  );
}

export default MyApp;
