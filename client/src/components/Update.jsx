import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Update extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      id: ""
    };
  }
  handleInput(value) {
    this.setState({ message: value });
  }
  componentDidMount() {
    fetch(`/api/chirps/${this.props.match.params.id}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ message: data.message, id: data.id });
      });
  }

  handleUpdate() {
    let bodyObj = {
      message: this.state.message,
      id: this.state.id
    };
    fetch(`/api/chirps/${this.props.match.params.id}`, {
      method: "PUT",
      body: JSON.stringify(bodyObj),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }).then(this.props.history.replace(`/${this.state.id}`));
  }
  render() {
    return (
      <div className="card text-center">
        <div className="card-header">Chirp Detail</div>
        <div className="card-body">
          <h5 className="card-title">Message: </h5>
          <input
            value={`${this.state.message}`}
            onChange={e => {
              this.handleInput(e.target.value);
            }}
          />
          <button
            className="btn btn-primary mx-2"
            onClick={() => {
              this.handleUpdate();
            }}
          >
            Submit Change
          </button>
          <Link
            className="btn btn-primary mx-2"
            to={`/${this.props.match.params.id}`}
          >
            Back
          </Link>
        </div>
      </div>
    );
  }
}
