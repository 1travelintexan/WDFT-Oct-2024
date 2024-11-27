import Navbar from "./Navbar";
const MyOutlet = ({ children }) => {
  return (
    <div>
      <Navbar />
      <h1>Axios Day</h1>
      {children}
      <footer>Hi I am a footer</footer>
    </div>
  );
};
export default MyOutlet;
