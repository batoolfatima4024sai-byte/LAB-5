
import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter.js";

function App() {
  const [message, setMessage] = useState("");

  return (
    <div className="container">
      <div className="contacts">
        <h2>Contacts</h2>
        <p>Ali</p>
        <p>Ahmed</p>
        <p>Fatima</p>
        <p>Ayesha</p>
      </div>

      <div className="signup">
        <h1>Sign Up</h1>

        
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />

        <div className="options">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>

          <a
            href="#forgot"
            onClick={(e) => {
              e.preventDefault();
              setMessage("Password reset requested.");
            }}
          >
            Forgot Password?
          </a>
        </div>

        <button
          onClick={() => setMessage("Sign-up successful!")}
        >
          Sign Up
        </button>

        <h3>{message}</h3>
        <Counter />
      </div>
    </div>
  );
}

export default App;