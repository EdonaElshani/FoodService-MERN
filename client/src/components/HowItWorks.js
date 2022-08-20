import React from "react";
import "../App.css";

const HowItWorks = () => {
  return (
    <div className="container py-4" id="howItWorks">
      <h2 className="testimonial-header">How it Works</h2>
      <div className="d-flex gap-5 justify-content-center">
        <div className="card card-One text-center">
          <div className="card-body">
              <ion-icon name="bag-outline"></ion-icon> 
            <p className="card-text">1.Select food
            </p>
            <p className="card-text ">
              Lorem ipsum dolor sit amet, consectetur adipiscing eli.
            </p>
          </div>
        </div>
        <div className="card card-Two">
          <div className="card-body text-center">
        <ion-icon name="card-outline"></ion-icon>
            <p className="card-text">2. Pay with Card</p>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing eli.
            </p>
          </div>
        </div>
        <div className="card card-Three">
          <div className="card-body text-center">
          <ion-icon name="car-outline"></ion-icon>
            <p className="card-text">3. Pickup Delivery</p>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing eli.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
