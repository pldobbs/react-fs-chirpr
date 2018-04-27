import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chirpMessage: "",
      chirpId: ""
    };
  }

  componentDidMount() {
    fetch("/api/chirps")
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log("the next id is ", data.nextid);
        this.setState({ chirpMessage: "", chirpId: data.nextid });
      });
  }
  handleInput(value) {
    this.setState({ chirpMessage: value });
  }
  handleSubmit() {
    let bodyObj = {
      message: this.state.chirpMessage,
      id: this.state.chirpId
    };
    fetch("/api/chirps", {
      method: "POST",
      body: JSON.stringify(bodyObj),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(response => console.log("Success:", response))
      .catch(error => console.error("Error:", error));
  }
  render() {
    return (
      <form>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Chirp Away!"
            onChange={event => {
              this.handleInput(event.target.value);
            }}
          />
        </div>
        <div className="form-group mx-auto">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={() => {
              this.handleSubmit();
            }}
          >
            Post Chirp
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
