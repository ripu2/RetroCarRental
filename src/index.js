import React from "react";
import ReactDom from "react-dom";
import "./Styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navBar";
import Box from "./components/box";
class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Box />
      </>
    );
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
