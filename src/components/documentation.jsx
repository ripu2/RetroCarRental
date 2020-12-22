import React from "react";
import "../Styles/doucumentation.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
class Documentation extends React.Component {
  render() {
    return (
      <>
        <div className="contain">
          <div className="footerData">
            <div class="ui grid">
              <div class="four wide column">
                <div className="logo">
                  <h3>Your Logo Goes Here</h3>
                </div>
                <div className="about">
                  <h4>About us</h4>
                  <p>A gesture of goodwill towards are rich history of cars</p>
                </div>
                <div className="Contact Us">
                  <h4> Contact Us</h4>
                  <span></span>
                </div>
              </div>
              <div class="four wide column">
                <h4>Information</h4>
                <span>
                  About Us <br></br>
                  More Search <br></br>
                  Testonmials <br></br>
                  Events
                </span>
              </div>
              <div class="four wide column">
                <h4>Helpfull Links</h4>
                <span>
                  Services <br></br>
                  Support <br></br>
                  Terms and condition <br></br>
                  Privacy Policy
                </span>
              </div>
              <div className="four wide column">
                <div class="ui form">
                  <div class="field">
                    <label>User Input</label>
                    <input type="text" />
                  </div>
                  <button class="ui button">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <Container>
            <Row>
              <Col md={{ span: 3, offset: 3 }}>
                <i class="facebook f icon"></i>
                <i class="google plus g icon"></i>
                <i class="twitter icon"></i>
                <i class="instagram icon"></i>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Documentation;
