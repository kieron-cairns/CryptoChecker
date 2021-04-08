import React from "react";
import LayoutDesktop from "../components/LayoutDesktop";
import {useRouter} from 'next/router';

const Test = props => {

  // const router = useRouter();

  // const { test } = router.query;

  return(
    <div>
      <h1>Lol Cats On Tour</h1>
    </div>
  )
}

const App = () => (
  
  <div>
  
    <LayoutDesktop><Test></Test></LayoutDesktop>
  
  </div>
);

// const TestApp = () => {

//   <LayoutDesktop> <Test></Test> </LayoutDesktop>

// }

export default App;