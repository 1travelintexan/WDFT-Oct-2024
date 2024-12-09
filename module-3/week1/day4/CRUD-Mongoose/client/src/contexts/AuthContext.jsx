import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthContextWrapper = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const nav = useNavigate();
  //***************functions **********/
  function storeToken(token) {
    localStorage.setItem("authToken", token);
  }
  async function authenticateUser() {
    //first is get the token from local storage
    const theToken = localStorage.getItem("authToken");
    if (theToken) {
      try {
        //then there is a token, so validate
        const { data } = await axios.get("http://localhost:5005/auth/verify", {
          headers: {
            authorization: `Bearer ${theToken}`,
          },
        });
        console.log("successful validation!", data);
        setIsLoading(false);
        setIsLoggedIn(true);
        setUser(data.currentUser);
      } catch (error) {
        console.log("error on the authenticate user", error);
        setIsLoading(false);
        setIsLoggedIn(false);
        setUser(null);
      }
    } else {
      //there is no token so reject
      console.log("there is no token in the local storage");
      setIsLoading(false);
      setIsLoggedIn(false);
      setUser(null);
    }
  }
  function handleLogout() {
    //first we remove the token from localstorage
    localStorage.removeItem("authToken");
    //navigate to the login after removing the token
    nav("/login");
  }

  //useEffect to validate the token on every refresh
  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        storeToken,
        authenticateUser,
        user,
        isLoading,
        isLoggedIn,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextWrapper };
