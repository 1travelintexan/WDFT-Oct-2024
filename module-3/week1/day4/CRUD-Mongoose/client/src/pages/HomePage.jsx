import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";

const HomePage = () => {
  //test to get the value from the context
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await axios.get(
          `http://localhost:5005/auth/user/${user._id}`
        );
        console.log(
          "user from context",
          user,
          "user after get route",
          userData.data
        );
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, [user._id]);
  return <div>HomePage</div>;
};
export default HomePage;
