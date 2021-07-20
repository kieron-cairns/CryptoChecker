import React, { Children, FunctionComponent } from "react";
import LayoutDesktop from "../components/LayoutDesktop";
import {useRouter} from 'next/router';

const Test = props => {

  //Test function to return dashboard page content

  return(
      <div>
      <h1>Lol Cats On Tour</h1>
      </div>
  )
}


export const getStaticProps = async () => {

  //Does not work with this json url
  // const res = await fetch('https://jsonplaceholder.typicode.com/users')

  //This fetch will get the coins for bitcoin, ethereum and xrp. These will be displayed in the sidebar.
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20ripple&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  const data = await res.json();
  
  //return the data
  return {
    props: {coin: data}
  }
}


const App = ({ coin }) => {
  //return the main layout for the dashboard 
  return(
  <div> 
    <LayoutDesktop
      //below h1 will be shown if the user navigates to the dashboard url
      children={<h1>Welcome to the main dashboard</h1>}
      //pass the api retrival json to the main sidebar 
      apilist={coin} 
    />
  </div>
  )
}

export default App;