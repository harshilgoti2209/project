import React from "react";
import {NavLink} from 'react-router-dom';
const Card = (props) => {
  return (
    <>
      <div class="card my-2 mx-2" style={{ width: "20rem", height:'30rem' }}>
        <img src={props.link} class="card-img-top rounded-sm " alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">
            {props.con}
          </p>
          <NavLink to="/" class="btn btn-primary">
            Go somewhere
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Card;
