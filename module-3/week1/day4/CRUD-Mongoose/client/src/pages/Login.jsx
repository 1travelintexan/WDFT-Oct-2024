import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  //get the store token function from the context
  const { storeToken, authenticateUser } = useContext(AuthContext);
  const nav = useNavigate();
  function handleLogin(e) {
    //first thing is to stop the page from reloading
    e.preventDefault();
    //then create a variable for the user that you want to create
    const userToLogin = {
      email,
      password,
    };
    axios
      .post("http://localhost:5005/auth/login", userToLogin)
      .then((res) => {
        console.log(res.data);
        //call the store token function in the successful post req
        storeToken(res.data.authToken);
        //after you put the token into the local storage, you can valid it
        return authenticateUser();
      })
      .then(() => {
        nav("/home");
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data.errorMessage);
      });
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
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
        <button>Login</button>
      </form>
      <p style={{ color: "red" }}>{errorMessage}</p>
      <p>New Here?</p>
      <Link to="/">Signup</Link>
    </div>
  );
};
export default Login;
