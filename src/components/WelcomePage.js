import React from "react";
import { Link } from "react-router-dom";
import image from "../img/talentica.PNG";

const WelcomePage = () => {
  return (
    <div className="container">
      <br />
      <br />
      <div className="card text-center">
        <div className="card-header">Welcome to Talentica Software</div>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-footer">
          <Link to="/visitorInfo">
            <button className="btn btn-info btn-lg btn-block" name="action">
              Proceed
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default WelcomePage;
