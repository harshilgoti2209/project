import React, { useState } from "react";
import one from "./img/one.png";
import two from "./img/two.png";
import three from "./img/three.png";
import four from "./img/four.png";
import five from "./img/five.png";
import six from "./img/six.png";
let imag = [one, two, three, four, five, six];
const Pig = () => {
  let [current, u0] = useState(0);
  let [score1, u1] = useState(0);
  let [score2, u2] = useState(0);
  let [live1, u3] = useState(0);
  let [live2, u4] = useState(0);
  let [im, u5] = useState(imag[0]);

  let onClk = () => {
    let ran = Math.floor(Math.random() * 6 + 1);
    u5(imag[ran - 1]);
    if (ran == 1) {
      u3(0);
      u4(0);
      let cx = document.getElementById(`${current}`);
      let cy = document.getElementById(`${1 - current}`);
      cx.classList.add("active");
      cy.classList.remove("active");
      u0(1 - current);
    } else if (current == 0) u3(live1 + ran);
    else u4(live2 + ran);
  };
  const ngame = () => {
    if (current == 1) {
      let cx = document.getElementById(`${current}`);
      let cy = document.getElementById(`${1 - current}`);
      cx.classList.add("active");
      cy.classList.remove("active");
    }
    u0(0);
    u1(0);
    u2(0);
    u3(0);
    u4(0);
    u5(imag[0]);
  };
  const add = () => {
    if (current == 0) {
      if (score1 + live1 >= 100) {
        alert(`${current + 1} is won`);
        ngame();
        return;
      }
      u1(score1 + live1);
      u3(0);
      let cx = document.getElementById(`${current}`);
      let cy = document.getElementById(`${1 - current}`);
      cx.classList.add("active");
      cy.classList.remove("active");
      u0(1 - current);
    } else {
      if (score2 + live2 >= 100) {
        alert(`${current + 1} is won`);
        ngame();
        return;
      }
      u2(score2 + live2);
      u4(0);
      let cx = document.getElementById(`${current}`);
      let cy = document.getElementById(`${1 - current}`);
      cx.classList.add("active");
      cy.classList.remove("active");
      u0(1 - current);
    }
  };
  return (
    <>
      <div className="page col-11 mx-auto my-1">
      <h1 className='text-center'> Do your score 100+ (1 will erase your score)</h1>
        <div className="button-group">
          <div className="cc">
            <img src={im} alt="..." height="30px" />
          </div>
          <button className="dd btn" onClick={onClk}>
            Roll Dice
          </button>
          <button className="dd btn" onClick={add}>
            Hold
          </button>
          <button className="dd btn" onClick={ngame}>
            new Game
          </button>
        </div>

        <div className="player">
          <div className="player-1">
            <h1 className="player-1-1">
              Player:1
              <svg
                id="0"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-check-circle-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                />
              </svg>
            </h1>
            <h2 className="player-1-2">{score1}</h2>
          </div>
          <div className="player-2">
            <h6 className="player-2-1">current</h6>
            <h4 className="player-2-2">{live1}</h4>
          </div>
        </div>
        <div className="player">
          <div className="player-1">
            <h1 className="player-1-1">
              Player:2
              <svg
                id="1"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="active bi bi-check-circle-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                />
              </svg>
            </h1>
            <h2 className="player-1-2">{score2}</h2>
          </div>
          <div className="player-2">
            <h6 className="player-2-1">current</h6>
            <h4 className="player-2-2">{live2}</h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default Pig;
