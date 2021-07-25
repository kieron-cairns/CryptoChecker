import "../styles/globals.css";
import "../styles/semantic.min.css";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }) {
  return (
    
    //Global Config for SWR - referenced from https://swr.vercel.app/docs/global-configuration
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
