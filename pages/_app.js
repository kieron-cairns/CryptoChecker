import "../styles/globals.css";
import "../styles/semantic.min.css";
import { SWRConfig } from "swr";

var cool = 'Test';

function MyApp({ Component, pageProps }) {
  return (
    
    //Global Config for SWR - referenced from https://swr.vercel.app/docs/global-configuration
    //The global configuration consists of the first part of the url for the API call. 
    //the config can be called as a component in different areas of our application, along with the 
    //second part of the url.
    
    
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
