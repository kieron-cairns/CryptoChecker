import LayoutDesktop from "../components/LayoutDesktop";
import useSWR from "swr";
import { useRouter } from 'next/router'


const Details = (initialData) => {
  const router = useRouter()
  const { id } = router.query


  //useSWR - code referenced from https://codesandbox.io/s/swr-0n32d?from-embed
  const { data: coin,  } = useSWR("/coins/markets?vs_currency=usd&ids=" + id + "%2C%20&order=market_cap_desc&per_page=100&page=1&sparkline=false/", {
    initialData: initialData.currentCoin,
    refreshInterval: 1000 * 60 // refresh every 60 seconds
  });

    //useSWR - code referenced from https://codesandbox.io/s/swr-0n32d?from-embed
  const { data: allCoins, } = useSWR("/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20ripple&order=market_cap_desc&per_page=100&page=1&sparkline=false", {
    initialData: initialData.allCoins,
  });

  console.log("COIN", coin);
  
  //Show loading state if coin API list or allCoins API list are not defined
  if (!coin || !allCoins) return <div>Loading...</div>

  return(
     
      <div>
        <LayoutDesktop
        //Pass the API list to LayoutDesktop as child
        apilist={allCoins}
        >
          {/* Pass the name of the coin to the header of the page (here a function can be used to display further information for the page ) */}
          <div>
            <h1>{coin[0].name} Page</h1>
            {/* Data output example */}
            <h3>Current price: {coin[0].current_price}</h3>
            <h3>Last updated: {coin[0].last_updated}</h3>

          </div>
        </LayoutDesktop>
      </div>
    )
}

Details.getInitialProps = async ({req, query}) => {  
  //run only on initial page load
  if (!req) return {};

  const {id} = query; 

  //Does not work with this json url
  // const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id )

  //This fetch will get the coins for bitcoin, ethereum and xrp. These will be displayed in the sidebar.
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20ripple&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  const allCoins = await res.json();

  //find selected coin from allCoins
  const currentCoin = [allCoins.find(coin => coin.id === id)]

  //return the siidebar attributes and the selected page attributes
  return {currentCoin, allCoins}
}

export default Details;