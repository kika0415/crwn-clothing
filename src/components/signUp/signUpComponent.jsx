import React from "react";

import "./signUpComponent.scss";

import FormInput from "../formInput/formInputComponent";
import CustomButton from "../customButton/customButtonComponent";
import { auth, createUserProfileDocument } from "../../firebase/firebaseUtils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  submitHandler = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    console.log(displayName);
    if (password !== confirmPassword) {
      alert(`passwords don't match`);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, displayName);
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  changelHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.submitHandler}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.changelHandler}
            label="DisplayName"
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.changelHandler}
            label="Email"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.changelHandler}
            label="Password"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.changelHandler}
            label="Confirm Password"
            required
          ></FormInput>

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
