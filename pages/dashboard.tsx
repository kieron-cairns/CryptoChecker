import React, { Children, FunctionComponent, useEffect } from "react";
import LayoutDesktop from "../components/LayoutDesktop";
import {useRouter} from 'next/router';
import useSWR, {mutate} from "swr"

const Test = props => {

  //Test function to return dashboard page content

  return(
      <div>
        <h1>Lol Cats On Tour</h1>
      </div>
  )
}



const App = (initialData) => {
  
  const { data: allCoins } = useSWR("/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20ripple&order=market_cap_desc&per_page=100&page=1&sparkline=false", {
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

  //show loading state if allCoins is undefined
  if (!allCoins) return <div>Loading...</div>

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
  if (!req) return {};

  //Does not work with this json url
  // const res = await fetch('https://jsonplaceholder.typicode.com/users')

  //This fetch will get the coins for bitcoin, ethereum and xrp. These will be displayed in the sidebar.
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20ripple&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  const data = await res.json();

  return {coins: data}
}

export default App;