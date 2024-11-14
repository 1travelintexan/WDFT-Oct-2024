import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h2>404 Not Found Page </h2>
      <p>You have wandered too far....</p>
      <Link to="/"> Go Back Home</Link>
    </div>
  );
};
