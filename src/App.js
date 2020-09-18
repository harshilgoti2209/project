import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Nav from "./Nav";
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import About from "./About";
import Pig from "./Pig";
import { Switch, Route, Redirect } from "react-router-dom";
let App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/service" component={Service}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/pig" component={Pig}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
      <footer className='bg-dark text-center  text-light' >@2020 Copyright Harshil Goti A</footer>
    </>
  );
};
export default App;
