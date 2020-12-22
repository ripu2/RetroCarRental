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
                  <p>A gesture of goodwill towards are rich history of cars.</p>
                </div>
                <div className="ContactUs">
                  <h4> Contact Us</h4>

                  <span>
                    <i class="phone icon"></i>
                    +918959642452
                  </span>
                  <br></br>
                  <span>
                    <i class="envelope open outline icon"></i>
                    abccars@rental.com
                  </span>
                </div>
              </div>
              <div class="four wide column">
                <h4 className="info">Information</h4>
                <span>
                  <a href="#">About Us</a> <br></br>
                  <a href="#">More Search</a> <br></br>
                  <a href="#">Testonomials</a>
                  <br></br>
                  <a href="#">Events</a>
                </span>
              </div>
              <div class="four wide column">
                <h4 className="helfulLink">Helpfull Links</h4>
                <span>
                  <a href="#Services">Services</a> <br></br>
                  <a href="#">Support</a> <br></br>
                  <a href="#">Terms and condition </a>
                  <br></br>
                  <a href="#">Privacy Policy</a>
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
                <i class="facebook f icon btn fb-btn big" id="fb"></i>
                <i class="google plus g icon btn g-btn big" id="gp"></i>
                <i class="twitter icon btn tw-btn big" id="tw"></i>
                <i class="instagram icon btn ig-btn big" id="ig"></i>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Documentation;
