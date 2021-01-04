import React from "react";
import ReactDOM from "react-dom";
import { Container, Header, List } from "semantic-ui-react";

import pkg from "semantic-ui-react/package.json";
import LayoutDesktop from "../components/LayoutDesktop";


const App = ({ children }) => (
  
  <div>
  
    <LayoutDesktop/>

    {children}
  
  </div>
);

if (typeof window !== 'undefined') {
  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
  document.head.appendChild(styleLink);
}



export default App;