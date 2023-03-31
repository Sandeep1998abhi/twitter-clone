import React from "react";
import db from "../Firebase/firebase";
import Home from "./home";

export default function LogOut() {
  const logout = () => {
    db.auth().signOut();
  };

  return (
    <div>
      <Home />
      <button onClick={logout}>Logout</button>
    </div>
  );
}
