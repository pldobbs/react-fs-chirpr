import React, { Component } from "react";
import Form from "./Form";
import SingleChirp from "./SingleChirp";

class ChirpsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chirpList: []
    };
  }

  componentDidMount() {
    fetch("/api/chirps")
      .then(res => {
        return res.json();
      })
      .then(data => {
        let arr = Object.values(data);
        arr.pop();
        arr.reverse();
        return arr;
      })
      .then(chirps => {
        this.setState({ chirpList: chirps });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 py-2 mx-auto">
            <Form />
          </div>
          <SingleChirp list={this.state.chirpList} />
        </div>
      </div>
    );
  }
}

export default ChirpsList;
