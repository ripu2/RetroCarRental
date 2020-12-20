import React from "react";
import ReactDom from "react-dom";
import "./Styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navBar";
class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <h2>kyabhat</h2>
      </>
    );
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
