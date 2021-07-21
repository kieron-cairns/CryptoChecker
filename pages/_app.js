import LayoutDesktop from "../components/LayoutDesktop";
import "../styles/globals.css";
import "../styles/semantic.min.css";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        //set default fetcher
        fetcher: (resource, init) =>
          fetch("https://api.coingecko.com/api/v3" + resource, init).then(
            (res) => res.json()
          ),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
