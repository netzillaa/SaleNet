import Header from "../Header.js";
import Footer from "../Footer.js";
import RegisterSteps from "../RegisterSteps.js";
import Container from "@material-ui/core/Container";
import React, { useState } from "react";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        password,
        email,
      }),
    });
    const sentData = await response.json();
    console.log(sentData);
  }
  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={registerUser}>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <br></br>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}
