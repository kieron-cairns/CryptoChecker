import React from "react";
import ReactDOM from "react-dom";
import { Container, Header, List } from "semantic-ui-react";

import pkg from "semantic-ui-react/package.json";
import LayoutDesktop from "../components/LayoutDesktop";

const App = ({ children }) => (
  <div>
  <Container style={{ margin: 20 }}>
    <Header as="h3">
      This example is powered by Semantic UI React {pkg.version} 😊
    </Header>
    <List bulleted>
      <List.Item
        as="a"
        content="💌 Official documentation"
        href="https://react.semantic-ui.com/"
        target="_blank"
      />
      <List.Item
        as="a"
        content="💡 StackOverflow"
        href="https://stackoverflow.com/questions/tagged/semantic-ui-react?sort=frequent"
        target="_blank"
      />
    </List>

    {children}
  </Container>
  
  <LayoutDesktop></LayoutDesktop>
  </div>
);

//Here brother, you will get docuemnt is not deifned error, things are different in next.js so i'm figuring this out first 
// In next.js I do not think we render like this 

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
// const styleLink = document.createElement("link");
// styleLink.rel = "stylesheet";
// styleLink.href =
//   "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
// document.head.appendChild(styleLink);

// ReactDOM.render(
//   <App>
//     <LayoutDesktop />
//   </App>,
//   // document.getElementById("root")
// );

export default App;