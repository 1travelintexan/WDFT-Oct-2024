import { Link } from "react-router-dom";

const HomePage = ({ pets }) => {
  return (
    <div>
      <h2>HomePage</h2>
      <Link to="/about">
        <button>About Page</button>
      </Link>
      {pets.map((onePet) => (
        <div key={onePet.id}>
          <Link to={`/details/${onePet.id}`}>
            <h3>{onePet.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default HomePage;
