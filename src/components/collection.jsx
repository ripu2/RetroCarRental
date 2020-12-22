import React from "react";
import "../Styles/collection.scss";
import Container from "react-bootstrap/Container";
class Collections extends React.Component {
  render(props) {
    return (
      <>
        <div class="card collection">
          <div class="image">
            <img src={this.props.url} />
          </div>
          <div class="content">
            <div class="header">{this.props.name}</div>
            <div class="meta">
              <a>Friends</a>
            </div>
            <div class="description">{this.props.des}</div>
          </div>
          <div class="extra content">
            <span class="right floated">{this.props.reg}</span>
            <span>{this.props.distance}</span>
          </div>
        </div>
      </>
    );
  }
}

export default Collections;
