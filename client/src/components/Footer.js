import React from "react";

const Footer = () => {
  return (
    <div className="container pt-4">
      <footer className="text-center text-lg-start bg-light text-muted">
        
        <section className="pt-1">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
               Company name
                </h6>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Menu</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Brekfast
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Lunch
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Dinner
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Dessert
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                <ion-icon name="location-outline"></ion-icon> New York, NY 10012, US
                </p>
                <p>
                <ion-icon name="mail-outline"></ion-icon> 
                  info@example.com
                </p>
                <p>
                <ion-icon name="call-outline"></ion-icon> + 01 234 567 88
                </p>
                <p>
                <ion-icon name="call-outline"></ion-icon> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-4"
        >
          © 2022 Copyright
        </div>
      </footer>
    </div>
  );
};

export default Footer;
