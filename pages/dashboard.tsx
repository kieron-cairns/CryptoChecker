import React from "react";
import LayoutDesktop from "../components/LayoutDesktop";


const App = ({ children }) => (
  
  <div>
  
    <LayoutDesktop/>

    {children}
  
  </div>
);


export default App;