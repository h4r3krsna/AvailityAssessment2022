import React, { Component } from "react";
import SignUpForm from "./SignUpForm.js";
const FormValidators = require("./validate");
const validateSignUpForm = FormValidators.validateSignUpForm;

class SignUpContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        firstname: "",
        lastname: "",
        npinumber: "",
        address: "",
        phone: "",
        email: ""
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  confirmSignupRequest() {
    alert(`${this.state.user.firstname} ${this.state.user.lastname}, thank you. Your request will be processed.`)
  }

  validateForm(event) {
    event.preventDefault();
    var payload = validateSignUpForm(this.state.user);
    if (payload.success) {
      this.setState({
        errors: {}
      });
      this.confirmSignupRequest();
    } else {
      const errors = payload.errors;
      this.setState({
        errors
      });
    }
  }

  render() {
    return (
      <div>
        <SignUpForm
          onSubmit={this.validateForm}
          onChange={this.handleChange}
          errors={this.state.errors}
          user={this.state.user}
        />
      </div>
    );
  }
}

module.exports = SignUpContainer;
