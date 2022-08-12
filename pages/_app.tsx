import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { DefaultLayout } from "../Layouts";
import { NavigationContextProvider } from "../action/navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavigationContextProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </NavigationContextProvider>
  );
}

export default MyApp;
