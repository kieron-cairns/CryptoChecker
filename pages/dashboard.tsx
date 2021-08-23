import React, { useEffect } from "react";
import LayoutDesktop from "../components/LayoutDesktop";
import useSWR, {mutate} from "swr"

const App = (initialData) => {
  
  //useSWR - code referenced from https://codesandbox.io/s/swr-0n32d?from-embed
  const { data: allCoins } = useSWR("/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20ripple&order=market_cap_desc&per_page=100&page=1&sparkline=false", {
    initialData: initialData.coins,
  });


  const { data: coinPrices } = useSWR("/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20ripple&order=market_cap_desc&per_page=100&page=1&sparkline=false", {
    initialData: initialData.coins,
  });

  useEffect(() => {
    if (allCoins) {
      //force allCoins to cache. (without revalidating)
      mutate(
        "/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20ripple&order=market_cap_desc&per_page=100&page=1&sparkline=false", allCoins, false
      );

      //cache coins separately. (without revalidating)
      allCoins.forEach(coin => {
        mutate(
          "/coins/markets?vs_currency=usd&ids=" + coin.id + "%2C%20&order=market_cap_desc&per_page=100&page=1&sparkline=false/", [coin], false
        );
      });
    }
  }, [allCoins, mutate])

  useEffect(() => {
    if (coinPrices) {
      //force allCoins to cache. (without revalidating)
      mutate(
        "/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20ripple&order=market_cap_desc&per_page=100&page=1&sparkline=false", coinPrices, false
      );

      //cache coins separately. (without revalidating)
      coinPrices.forEach(coin2 => {
        mutate(
          "/coins/" + coin2.id + "/market_chart/range?vs_currency=usd&from=1625228223&to=1627910223", [coin2], false
        );
      });
    }
  }, [coinPrices, mutate])
  
 //show loading state if allCoins is undefined
  if (!allCoins && !coinPrices) return <div>Loading...</div>
  return(
    <div> 
      <LayoutDesktop
        //below h1 will be shown if the user navigates to the dashboard url
        children={<h1>Welcome to the main dashboard</h1>}
        //pass the api retrival json to the main sidebar 
        apilist={allCoins} 
      />
    </div>
  )
}

App.getInitials = async ({req}) => {

  //run only on initial page load
  // if (!req) return {};

  // const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20ripple&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  // const data = await res.json();

  // return {coins: data}
}

export default App;