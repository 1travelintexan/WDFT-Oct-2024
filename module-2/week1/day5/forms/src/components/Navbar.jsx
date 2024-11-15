import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <section>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add-pet">Create a Pet</NavLink>
        <NavLink to="/petlist">All Pets</NavLink>
      </section>
      <h1>Navbar</h1>
      <span></span>
    </nav>
  );
};
export default Navbar;
