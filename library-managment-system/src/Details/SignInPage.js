// src/pages/SignInPage.js
import React from "react";
import LoginForm from "../Components/LoginForm";
import "../style.css";

const SignInPage = ({ onSignIn }) => {
  return (
    <div>
      <LoginForm onSignIn={onSignIn} />
    </div>
  );
};

export default SignInPage;
