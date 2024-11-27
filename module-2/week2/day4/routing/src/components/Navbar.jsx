import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/add-user">Create a User</NavLink>
    </nav>
  );
};
export default Navbar;
