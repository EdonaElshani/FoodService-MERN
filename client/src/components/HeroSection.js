import React from "react";
import Food1 from "./Images/Food1.jpg";
import Food2 from "./Images/Food2.png";
import Food3 from "./Images/Food3.jpg";
import Food4 from "./Images/Food4.png";

export const HeroSection = () => {
  return (
    <div className="container">
      <h2 className="testimonial-header">
        Eat <b>Healthy</b> and <b>Delicious</b> Food
      </h2>
      <div className="container-fluid p-0 mb-5 carousel-Section">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={Food1} alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <p className="fs-4 display-4  mb-3 animated slideInDown">
                        Herb Soft Scrambled Eggs on Toast
                      </p>
                      <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                        170 calories, 16 grams carbohydrate
                      </p>
                      <a
                        className="btn btn-success py-2 px-3 animated slideInDown"
                        href=""
                      >
                        Order Now
                        <div className="d-inline-flex btn-sm-square  text-white rounded-circle ms-2">
                          <i className="fa fa-arrow-right"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={Food2} alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h3p className="display-4 fs-4 text-white mb-3 animated slideInDown">
                        Turkey Tacos
                      </h3p>
                      <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                        430 calories, 43 grams carbohydrate
                      </p>
                      <a
                        className="btn btn-success py-2 px-3 animated slideInDown"
                        href=""
                      >
                        Order Now
                        <div className="d-inline-flex btn-sm-square  text-white rounded-circle ms-2">
                          <i className="fa fa-arrow-right"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={Food3} alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <p className="display-4 fs-4 text-white mb-3 animated slideInDown">
                        Pecan-Crusted Chicken Breast
                      </p>
                      <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                        480 calories, 38 grams carbohydrate
                      </p>
                      <a
                        className="btn btn-success py-2 px-3 animated slideInDown"
                        href=""
                      >
                        Order Now
                        <div className="d-inline-flex btn-sm-square  text-white rounded-circle ms-2">
                          <i className="fa fa-arrow-right"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={Food4} alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <p className="display-4 fs-4 text-white mb-3 animated slideInDown">
                        Chicken and Roasted Red Pepper Lettuce Cups
                      </p>
                      <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                        610 calories, 51 grams carbohydrate
                      </p>
                      <a
                        className="btn btn-success py-2 px-3 animated slideInDown"
                        href=""
                      >
                        Order Now
                        <div className="d-inline-flex btn-sm-square  text-white rounded-circle ms-2">
                          <i className="fa fa-arrow-right"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};
