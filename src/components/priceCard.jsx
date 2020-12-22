import React from "react";
import Card from "react-bootstrap/Card";
import "../Styles/box.scss";
class PriceCard extends React.Component {
  render() {
    return (
      <div id="Pricing">
        <h1 className="pricingTag">Our Pricings</h1>
        <div className="ui cards">
          <div className="card">
            <div className="content">
              <div className="header">
                <h1>Hourly Package</h1>
              </div>
              <div className="meta">Friend</div>
              <div className="description">
                <ul>
                  <li>
                    <h3 style={{ lineHeight: "1.5em" }}>
                      <b>$3</b> per hour
                    </h3>
                  </li>
                  <li>
                    <h3 style={{ lineHeight: "1.5em" }}>
                      <b>250 km</b> free, afterwards $2 per kilometer
                    </h3>
                  </li>
                  <li>
                    <h3 style={{ lineHeight: "1.5em" }}>
                      <b>$1</b> discount for booking between 13 to 23 hours
                    </h3>
                  </li>
                </ul>
                <small>*Fuel price not included</small>
                <br></br>
                <small>Terms and condition apply*</small>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="header">
                <h1>24 hours Plan</h1>
              </div>
              <div className="meta">Friend</div>
              <div className="description">
                <ul>
                  <li>
                    <h3 style={{ lineHeight: "1.5em" }}>
                      <b>$50</b> per day
                    </h3>
                  </li>
                  <li>
                    <h3 style={{ lineHeight: "1.5em" }}>
                      No capping on distance,
                      <b> Unlimited</b> Kilometers
                    </h3>
                  </li>
                  <li>
                    <h3 style={{ lineHeight: "1.5em" }}>
                      <b>$5</b> discount on a trip more that 7 days
                    </h3>
                  </li>
                </ul>
                <small style={{ textAlign: "center" }}>
                  *Fuel price not included
                </small>
                <br></br>
                <small>Terms and condition apply*</small>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="header">
                <h1>Special Package</h1>
              </div>
              <div className="meta">Friend</div>
              <div className="description">
                <ul>
                  <li>
                    <h3 style={{ lineHeight: "1.5em" }}>
                      <b>$6</b> per km
                    </h3>
                  </li>
                  <li>
                    <h3 style={{ lineHeight: "1.5em" }}>
                      No capping on distance,
                      <b> Unlimited</b> Kilometers
                    </h3>
                  </li>
                  <li>
                    <h3 style={{ lineHeight: "1.5em" }}>
                      Fuel Price Included for whole journey
                    </h3>
                  </li>
                </ul>

                <small>Terms and condition apply*</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PriceCard;
