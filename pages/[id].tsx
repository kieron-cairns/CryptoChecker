import LayoutDesktop from "../components/LayoutDesktop";
import Link from 'next/link'


export const getStaticPaths = async () => {

  //Does not work with this json url
  // const res = await fetch('https://jsonplaceholder.typicode.com/users')

  //fetch the coins from the api
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20ripple&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  const data = await res.json();
  //return the id of each coin that has been retrived
  const paths = data.map(coin => {
    return {
      params: {id: coin.id}
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id; 

  //Does not work with this json url
  // const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id )
  
  //Get info for each coin with passed the passed id
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=' + id + '%2C%20&order=market_cap_desc&per_page=100&page=1&sparkline=false/')
  const data = await res.json();

  //This fetch will get the coins for bitcoin, ethereum and xrp. These will be displayed in the sidebar.
  const res2 = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20ripple&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  const data2 = await res2.json();


  console.log(data2)

  //return the siidebar attributes and the selected page attributes
  return {
    props: {coin: data, coin2: data2}
 
  }
}

const Details = ({ coin, coin2 }) => {
  console.log(coin[0].name)  
  return(
     
      <div>
        <LayoutDesktop
        //Pass the name of the coin to the header of the page (here a function can be used to display further information for the page )
        children={<div><h1>{coin[0].name} Page</h1></div>}
        apilist={coin2}
        />
      </div>

  




      // <LayoutDesktop
      
      // children={<div><h1>Coin Page</h1><h2>
      //   {coin[0].name}</h2></div>}

      //   tester={coin2}

      // />
    )
}

export default Details;