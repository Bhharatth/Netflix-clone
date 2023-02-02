import React, { useRef } from "react";
import { initializeApp } from 'firebase/app';
import { getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { firebaseConfig } from '../firebaseConfig.js';
import { useEffect, useState } from "react";

import "./SignUpScreen.css";


function SignUpScreen() {
  initializeApp(firebaseConfig);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth();

  const Register = (e) => {

    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(
        (authUser) => {
          console.log(authUser)
        })
        .catch( error => console.log(error));
    }
  

  
   
  


  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email" type="Email" />
        <input value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" type="password" />
        <button type="submit" onClick={Register}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen_grey">New to Netflix?</span>
          <span className="signupScreen_link" onClick={Register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}


export default SignUpScreen;
