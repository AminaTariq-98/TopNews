import React, { Component } from 'react'
import "./Navbar.css"
import logo from "../images/logo1.PNG"
import { Link } from "react-router-dom";

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark" >
        <div className="container" style={{marginLeft: "70px"}}>
          <Link className="navbar-brand d-md-none d-xs-block py-3" to="/" >
            <img src={logo} height="40" alt="Company Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link mx-2 active" aria-current="page" to="/">NewMonkey</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/Home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/Business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/Entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/General">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/Health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/Science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-1" to="/sport">Sport</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/Technology">Technology</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 btn rounded-0 btn-danger" to="/">Watch Online</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
