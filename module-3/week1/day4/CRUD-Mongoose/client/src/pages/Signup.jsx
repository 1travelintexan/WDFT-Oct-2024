import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  function handleSignup(e) {
    //first thing is to stop the page from reloading
    e.preventDefault();
    //then create a variable for the user that you want to create
    const userToSignup = {
      username: name,
      email,
      password,
    };
    axios
      .post("http://localhost:5005/auth/signup", userToSignup)
      .then((res) => {
        console.log(res.data);
        nav("/login");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSignup}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password :
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Sign up</button>
      </form>
      <p>Already have an account?</p>
      <Link to="/login">Login</Link>
    </div>
  );
};
export default Signup;
