import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUserPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);

  //first create a variable for the nav
  const nav = useNavigate();
  //arrow syntax
  const handleAddUser = async (e) => {
    //function keyword syntax
    // async function handleAddUser(e) {
    e.preventDefault();
    const newUser = {
      firstName,
      lastName,
      age,
    };
    //post request with fetch with .then and .catch
    // fetch("https://dummyjson.com/users/add", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(newUser),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("response to the post", data);
    //   })
    //   .catch((err) => console.log(err));
    //POST request with fetch and async and await
    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();
      console.log(data);
      setAge(0);
      setFirstName("");
      setLastName("");
    } catch (error) {
      console.log(error);
    }

    //**************************** */
    //POST request with axios and .then and .catch
    axios
      .post("https://dummyjson.com/users/add", newUser)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
    //POST request with axios and async and await
    // try {
    //   const { data } = await axios.post(
    //     "https://dummyjson.com/users/add",
    //     newUser
    //   );
    //   console.log(data);
    //   setAge(0);
    //   setFirstName("");
    //   setLastName("");
    // } catch (error) {
    //   console.log(error);
    // }

    //navigate to the homepage after you create the user
    nav("/");
  };

  return (
    <div>
      <h2>Create a User</h2>
      <form onSubmit={handleAddUser}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
        </label>

        <button>Add</button>
      </form>
    </div>
  );
};
export default AddUserPage;
