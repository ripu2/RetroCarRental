import React from "react";
import ReactDom from "react-dom";
import "./Styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navBar";
import Box from "./components/box";
import Collection from "./components/collection";
import Documentation from "./components/documentation";
import Car from "./cars";
class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Box />
        <h1>Our Collection</h1>
        <div class="ui container">
          <div class="ui link cards">
            {Car.map(({ url, name, distance, des, reg }) => {
              return (
                <Collection
                  name={name}
                  distance={distance}
                  des={des}
                  reg={reg}
                  url={url}
                />
              );
            })}
          </div>
        </div>
        <Documentation />
      </>
    );
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
