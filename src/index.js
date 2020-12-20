import React from "react";
import ReactDom from "react-dom";
import "./Styles/index.scss";
class App extends React.Component {
  render() {
    return (
      <>
        <h1>Hanhi</h1>
        <h2>kyabhat</h2>
      </>
    );
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
