import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SingleView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chirp: {}
    };
  }

  componentDidMount() {
    fetch(`/api/chirps/${this.props.match.params.id}`)
      .then(res => {
        return res.json();
      })
      .then(chirp => {
        this.setState({ chirp });
      });
  }
  handleDelete() {
    fetch(`/api/chirps/${this.props.match.params.id}`, {
      method: "DELETE"
    }).then(this.props.history.replace("/"));
  }
  render() {
    return (
      <div className="card text-center">
        <div className="card-header">Chirp Detail</div>
        <div className="card-body">
          <h5 className="card-title">Message: </h5>
          <p className="card-text">{this.state.chirp.message}</p>
          <Link className="btn btn-primary mx-2" to="/">
            Home
          </Link>
          <Link
            className="btn btn-primary mx-2"
            to={`/update/${this.state.chirp.id}`}
          >
            Update
          </Link>
          <button
            className="btn btn-danger mx-2"
            onClick={() => {
              this.handleDelete();
            }}
          >
            Delete Chirp
          </button>
        </div>
      </div>
    );
  }
}
