import React from "react";
import Navbar from "./Navbar"

const Header = () => {
  return (
    <div className="banner">
      <Navbar/>
      <div className="banner-content">
        <div className="container">
          <div className="banner__text">
          <h3>Pizza Delivary</h3>
          <h1>Maestro Pizzini</h1>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document 
            used
          </p>
          <div className="banner__btn">
            <a href="" className="btn btn-smart">DELIVERY NOW</a>

          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
