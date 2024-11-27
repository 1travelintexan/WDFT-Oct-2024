import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UserDetailPage = () => {
  const [oneUser, setOneUser] = useState({});
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //get request with fetch
    // fetch(`https://dummyjson.com/users/${userId}`, { method: "GET" })
    //   .then((res) => res.json())
    //   .then((data) => setOneUser(data))
    //   .catch((err) => console.log(err));

    //************************** */
    //get request with axios
    axios(`https://dummyjson.com/users/${userId}`)
      .then((response) => setOneUser(response.data))
      .catch((err) => console.log(err));
  }, [userId]);

  async function handleDelete(userId) {
    console.log("delete clicked", userId);
    try {
      const { data } = await axios.delete(
        `https://dummyjson.com/users/${userId}`
      );
      console.log(data.firstName, " was deleted ", data.isDeleted);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2>{oneUser.username}'s Profile Page</h2>
      <img
        src={oneUser.image}
        alt={oneUser.firstName}
        style={{ height: "40vh" }}
      />
      <h4>Age: {oneUser.age}</h4>
      <h4>Uni: {oneUser.university}</h4>
      <button
        onClick={() => {
          handleDelete(oneUser.id);
        }}
      >
        Delete
      </button>
      <Link to={`/user/update/${oneUser.id}`}>
        <button>Update</button>
      </Link>
    </div>
  );
};
export default UserDetailPage;
