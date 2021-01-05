import React from "react";

import "./signInComponent.scss";

import FormInput from "../formInput/formInputComponent";
import CustomButton from "../customButton/customButtonComponent";
import { auth, signInWithGoogle } from "../../firebase/firebaseUtils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  submitHandler = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.state = {
        email: "",
        password: "",
      };
    } catch (error) {
      console.log(error);
    }
  };

  changelHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.submitHandler}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.changelHandler}
            label="Email"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.changelHandler}
            label="Password"
            required
          ></FormInput>

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
