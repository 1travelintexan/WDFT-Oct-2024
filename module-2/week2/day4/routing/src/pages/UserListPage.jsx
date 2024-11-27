import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserListPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getAllUsers() {
      try {
        const { data } = await axios.get("https://dummyjson.com/users");
        console.log(data.users);
        setUsers(data.users);
      } catch (error) {
        console.log(error);
      }
    }
    getAllUsers();
  }, []);

  return (
    <div>
      {users.map((oneUser) => {
        return (
          <Link to={`/user/detail/${oneUser.id}`} key={oneUser.id}>
            <div className="user-card">
              <img src={oneUser.image} alt={oneUser.firstName} />
              <h4>
                {oneUser.firstName} {oneUser.lastName}
              </h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default UserListPage;
