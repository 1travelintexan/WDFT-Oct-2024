import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about?test=blah&test2=peppPizza">About</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
      <NavLink to="/add-character">Add Character</NavLink>
    </nav>
  );
};
export default Navbar;
