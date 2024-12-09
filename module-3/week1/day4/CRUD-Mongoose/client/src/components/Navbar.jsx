import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);
  return (
    <nav>
      {user && user.username}'s Navbar
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};
export default Navbar;
