import React, { useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()



  initializeApp(firebaseConfig);
  const auth = getAuth();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        console.log(userAuth);

        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
        
      } else {
        // User is signed out
        // ...
        dispatch(logout)
      }
    });
    
    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
