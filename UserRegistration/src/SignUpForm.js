import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import "./style.css";

const SignUpForm = ({
  history,
  onSubmit,
  onChange,
  errors,
  user
}) => {
  return (
    <div className="loginBox">
      <h1>Healthcare Provider Registration Request Form</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

      <form onSubmit={onSubmit}>
        <TextField
          name="firstname"
          floatingLabelText="First Name"
          value={user.firstname}
          onChange={onChange}
          errorText={errors.firstname}
        />
        <TextField
          name="lastname"
          floatingLabelText="Last Name"
          value={user.lastname}
          onChange={onChange}
          errorText={errors.lastname}
        />
        <br />
        <TextField
          name="npinumber"
          floatingLabelText="NPI Number"
          value={user.npinumber}
          onChange={onChange}
          errorText={errors.npinumber}
        />
        <TextField
          name="address"
          floatingLabelText="Business Address"
          value={user.address}
          onChange={onChange}
          errorText={errors.address}
        />
        <br />
        <TextField
          name="phone"
          floatingLabelText="Telephone Number"
          value={user.phone}
          onChange={onChange}
          errorText={errors.phone}
        />
        <TextField
          name="email"
          floatingLabelText="Email"
          value={user.email}
          onChange={onChange}
          errorText={errors.email}
        />
        <br />
        <RaisedButton
          className="signUpSubmit"
          primary={true}
          type="submit"
          label="submit"
        />
      </form>
    </div>
  );
};

export default SignUpForm;
