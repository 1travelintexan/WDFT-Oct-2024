const Navbar = ({ onePet }) => {
  //second way to create a variable
  //   const petName = props.petName;
  //third way is to destructure the props
  //   const { petName } = props;

  return (
    <nav>
      <h6>{onePet.name}'s Navbar</h6>
      <img src={onePet.image} alt={onePet.name} style={{ height: "100px" }} />
    </nav>
  );
};
export default Navbar;
