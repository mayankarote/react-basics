import React from "react";
import ReactDOM from "react-dom";
import "./Forms.css";
// import { ButtonContainer } from "./Button";
// import { Button } from "bootstrap";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input["name"] = "";
      input["email"] = "";
      input["phone"] = "";
      input["addres"] = "";
      this.setState({ input: input });

      alert("Demo Form is submited");
    }
  }
  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter your name.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["phone"]) {
      isValid = false;
      errors["phone"] = "Please enter your phone number.";
    }

    if (typeof input["phone"] !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(input["phone"])) {
        isValid = false;
        errors["phone"] = "Please enter only number.";
      } else if (input["phone"].length != 10) {
        isValid = false;
        errors["phone"] = "Please enter valid phone number.";
      }
    }

    // if (!input["address"]) {
    //   isValid = false;
    //   errors["addres"] = "Please enter your address.";
    // }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
      <div className="card">
        <h1 className="form_title">React Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form">
            <label for="name">Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.input.name}
              onChange={this.handleChange}
              className="form_input"
              placeholder="Enter name"
              id="name"
            />

            <div className="text-danger">{this.state.errors.name}</div>
          </div>

          <div className="form">
            <label for="email">Email Address:</label>
            <input
              type="text"
              name="email"
              value={this.state.input.email}
              onChange={this.handleChange}
              className="form_input"
              placeholder="Enter email"
              id="email"
            />

            <div className="text-danger">{this.state.errors.email}</div>
          </div>

          <div className="form">
            <label for="Phone">Phone:</label>
            <input
              type="text"
              name="phone"
              value={this.state.input.phone}
              onChange={this.handleChange}
              className="form_input"
              placeholder="Enter phone"
              id="email"
            />

            <div className="text-danger">{this.state.errors.phone}</div>
          </div>

          <div class="form">
            <label for="addres">addres:</label>
            <textarea
              name="addres"
              value={this.state.input.addres}
              onChange={this.handleChange}
              placeholder="Enter addres"
              className="form_input"
            />
            <div className="text-danger">{this.state.errors.addres}</div>
          </div>
          <button type="submit" value="Submit" className="form_button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
