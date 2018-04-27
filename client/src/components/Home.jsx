import React, { Component } from "react";
import Navbar from "./Navbar";
import ChirpsList from "./ChirpsList";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <ChirpsList />
      </div>
    );
  }
}

export default Home;
