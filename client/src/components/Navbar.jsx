import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <img
          className="rounded mx-auto"
          src={require("../assets/profile.jpg")}
          alt=""
          style={{ height: "50px", width: "50px" }}
        />
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="">
              Chirps<span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="">
              Users
            </a>
            <a className="nav-item nav-link" href="">
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
