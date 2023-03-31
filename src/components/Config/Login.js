import React, { useState } from "react";
import db from "../Firebase/firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    db.auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signup = (e) => {
    e.preventDefault();
    db.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
    console.log(email, password);
  };

  return (
    <div>
      <form>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
          value={email}
        ></input>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={password}
        ></input>
        <button onClick={login}>Login</button>
        <button onClick={signup}>Signup</button>
      </form>
    </div>
  );
}
