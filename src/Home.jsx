import React from "react";
import { NavLink } from "react-router-dom";
import img from "./img/a.jpg";
const Home = () => {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto d-flex flex-row">
              <div className="Home-info">
                <h1 className="bold">
                  Grow Your business with
                  <span className="brand-name">Harshil Goti</span>
                </h1>
                <p> We are group of talented people</p>
                <button type="button" class="btn btn-outline-primary">
                  <NavLink to="/service" className="nav-link">
                    Explore us..
                  </NavLink>
                </button>
              </div>
              <div className='Home-img'>
                <img className="w-75 h-75" id='hi' src={img} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
