import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);
  return (
    <nav>
      {user && user.username}s Navbar
      <button onClick={handleLogout}>Logout</button>
      <Link to="/profile-image">Change Profile Image</Link>
      <Link to="/multiple-images">Add Images</Link>
    </nav>
  );
};
export default Navbar;
