import React from "react";
import { NavLink } from "react-router-dom";
import img2 from "./img/b.jpg";
const About = () => {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto d-flex flex-row" id='harsh' >
              <div className="Home-info">
                <h1 className="bold">
                  Welcome to About Page
                </h1>
                <p> click here to know about us</p>
                <button type="button" class="btn btn-outline-primary">
                  <NavLink to="/" className="nav-link">
                    Contact us..
                  </NavLink>
                </button>
              </div>
              <div className='Home-img'>
                <img className="w-50 h-50" id='hi2' src={img2} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
