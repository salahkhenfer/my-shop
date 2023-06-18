import React, { useEffect, useState } from "react";
import logo from "../image/login-logo.png";
import "../components/style/login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={logo}></img>
      </Link>
      <div className="login-container">
        <form>
          <h1>Sign In</h1>
          <h5>Email</h5>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <h5>password</h5>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <button className="login-signInBtn" onClick={handleSignIn}>
            Sign In
          </button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </form>
        <button className="login-registerBtn " onClick={handleRegister}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
