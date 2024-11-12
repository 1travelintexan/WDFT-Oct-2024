import discordImg from "../assets/discord-logo-white.png";
import hamburgerImg from "../assets/menu-icon.png";
const Navbar = () => {
  return (
    <nav>
      <img src={discordImg} alt="discord" />
      <img src={hamburgerImg} alt="hamburger" />
    </nav>
  );
};
export default Navbar;
