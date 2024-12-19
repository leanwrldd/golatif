'use client'
import { useState } from "react";
import Navbar from "/app/Components/Navbar.js";

const handleLogin = async (e, username, password) => {
  e.preventDefault();

  const res = await fetch("/api/validateuser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (res.ok) {
    alert("Login successful!");
    window.location.href = "/";
  } else {
    alert("Invalid credentials. Please try again.");
    console.log("Username:", username, "Password:", password); // Log to console for debugging
  }
};

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Navbar />
      <div>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button onClick={(e) => handleLogin(e, username, password)}>
          Login
        </button>
      </div>
    </div>
  );
}
