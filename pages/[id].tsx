import LayoutDesktop from "../components/LayoutDesktop";
import useSWR from "swr";
import { useRouter } from 'next/router'

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

const Details = (initialData) => {
  const router = useRouter()
  const { id } = router.query

  //Each data retreival is chached and retireved via the client side.

  //useSWR - code referenced from https://codesandbox.io/s/swr-0n32d?from-embed
  //the below function will get the data for the id of the provided coin. This will be used for each individual coin page
  //that will dispay the relevant data
  
  const { data: coin,  } = useSWR("/coins/markets?vs_currency=usd&ids=" + id + "%2C%20&order=market_cap_desc&per_page=100&page=1&sparkline=false/", {
    initialData: initialData.currentCoin,
    refreshInterval: 1000 * 60 // refresh every 60 seconds
  });

    //useSWR - code referenced from https://codesandbox.io/s/swr-0n32d?from-embed
    //the below function will get the data for all coins, and will be dashboard sidebar.
  const { data: allCoins, } = useSWR("/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20ripple&order=market_cap_desc&per_page=100&page=1&sparkline=false", {
    initialData: initialData.allCoins,
  });

  const { data: coinPrices } = useSWR("/coins/" + id + "/market_chart/range?vs_currency=usd&from=1625228223&to=1627910223", {
    initialData: initialData.coinPrices,
  });

  console.log("COIN",  timeConverter(coinPrices.prices[0][0]));

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

//Run API on page load and cache the data
Details.getInitialProps = async ({req, query}) => {  
  //run only on initial page load
  if (!req) return {};

  const {id} = query; 

  //This fetch will get the coins for bitcoin, ethereum and xrp. These will be displayed in the sidebar.
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20ripple&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  const allCoins = await res.json();

  const res2 = await fetch('https://api.coingecko.com/api/v3/coins/' + id + '/market_chart/range?vs_currency=usd&from=1625224105&to=1627906105')
  const coinPrices = await res2.json();

  //find selected coin from allCoins
  const currentCoin = [allCoins.find(coin => coin.id === id)]

  // console.log("OPIO" , allCoins2);

  //return the siidebar attributes and the selected page attributes
  return {currentCoin, allCoins, coinPrices}
}

export default Details;