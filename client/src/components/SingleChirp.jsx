import React, { Component } from "react";
import { Link } from "react-router-dom";

class SingleChirp extends Component {
  render() {
    let chirpList = this.props.list.map((chirp, index) => {
      return (
        <div
          className="card col-md-3 text-center mb-2"
          key={index}
          style={{ width: "18rem" }}
        >
          <p className="card-text">{chirp.message}</p>
          <Link to={`/${chirp.id}`} className="btn btn-primary mb-2">
            View Chirp
          </Link>
        </div>
      );
    });
    return <div className="row">{chirpList}</div>;
  }
}

export default SingleChirp;
