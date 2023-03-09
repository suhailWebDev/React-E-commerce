import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ myData }) => {
  const { name } = myData;
  return (
    <>
      <div className="container-fluid hero">
        <div className="row p-lg-5">
          <div className="col-lg-6 p-5 lh-lg m-lg-2">
            <p className="text-light fs-2">Welcome to</p>
            <h1 className="hero-heading text-light">
              <span className="stop">Stop</span> & Shop {name}
            </h1>
            <p className="text-light fs-4 fw-bold">
              Stop & Shop offers a seamless,fun and reliable shopping experience
              to millions of users.Start Shopping Now
            </p>
            <Link to="/about">
              <button className="btn" id="btn-shop">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
