import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const [userToUpdate, setUserToUpdate] = useState({});
  const { userId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    //get request with axios
    axios(`https://dummyjson.com/users/${userId}`)
      .then((response) => setUserToUpdate(response.data))
      .catch((err) => console.log(err));
  }, [userId]);

  function handleChange(event) {
    const whatWasTyped = event.target.value;
    const inputThatIsUsed = event.target.name;
    console.log(whatWasTyped, inputThatIsUsed);
    setUserToUpdate({ ...userToUpdate, [inputThatIsUsed]: whatWasTyped });
  }
  async function handleUpdateUser(e) {
    e.preventDefault();
    //with .then and .catch (axios)
    // axios
    //   .put(`https://dummyjson.com/users/${userId}`, userToUpdate)
    //   .then((res) => {
    //     console.log(res.data);
    //     navigate("/");
    //   })
    //   .catch((err) => console.log(err));

    //********async and await with axios  */
    try {
      const { data } = await axios.put(
        `https://dummyjson.com/users/${userId}`,
        userToUpdate
      );
      console.log(data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleUpdateUser}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={userToUpdate.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={userToUpdate.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={userToUpdate.age}
            onChange={handleChange}
          />
        </label>
        <button>Update</button>
      </form>
    </div>
  );
};
export default UpdateUser;
