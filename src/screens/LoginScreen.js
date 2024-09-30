import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginscreen">
      <div className="loginscreen__background">
        <img
          className="loginscreen__logo"
          src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="NETFLIX"
        />
        <button onClick={() => setSignIn(true)} className="loginscreen__button">
          Sign In
        </button>
        <div className="loginscreen__gradient" />
      </div>
      <div className="loginscreen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch?Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginscreen__input">
              <form>
                <input type="email" placeholder="Email address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginscreen__getstarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
