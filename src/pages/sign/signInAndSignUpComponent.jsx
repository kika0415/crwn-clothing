import React from "react";

import "./signInAndSignUpComponent.scss";

import SignIn from "../../components/signIn/signInComponent";
import SignUp from "../../components/signUp/signUpComponent";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
