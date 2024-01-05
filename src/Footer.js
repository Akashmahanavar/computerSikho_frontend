import React from "react";
import "./footer.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <div className="main-footer" >
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h2>Get in Touch</h2>
            <u1 className="list-unstyled">
              <li>SM VITA</li>
              <li>Gulmohar Road, MHADA Colony, Vile Parle West,</li>
              <li>Mumbai, Maharashtra 400049</li>
              <ui className="list-unstyled">
              <li>022-123456789</li>
              <li>023-123456789</li>
              <li>023-123456789</li>
            </ui>
            </u1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Visit Us</h4>
            <a href="https://goo.gl/maps/dWuVgXzebSEzDp4R6" target="_blank">
                <img src="MAP.png" height={200}/></a>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Email Id's</h4>
            <ui className="list-unstyled">
              <li>vita.in@gmail.com</li>
              <li>Vita@gmail.com</li>
              <li>placement@gmail.com</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} SM VITA  | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;