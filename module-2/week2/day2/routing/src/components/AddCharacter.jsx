import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const AddCharacter = ({ chars, setChars }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  //create a variable with the useNavigate
  //   and call the useNavigate to create an instance of it
  const nav = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const newChar = {
      id: uuidv4(),
      name: name,
      image,
      gender,
      species,
    };
    console.log(newChar);
    setChars([newChar, ...chars]);
    //call the variable that you crated and put a string of where you want to go to
    nav(`/`);
  }
  return (
    <div>
      <h2>Add Character Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            value={image}
            onChange={(event) => {
              setImage(event.target.value);
            }}
          />
        </label>
        <label>
          Gender:
          <input
            type="text"
            value={gender}
            onChange={(event) => {
              setGender(event.target.value);
            }}
          />
        </label>
        <label>
          Species:
          <input
            type="text"
            value={species}
            onChange={(event) => {
              setSpecies(event.target.value);
            }}
          />
        </label>
        <button>Add </button>
      </form>
    </div>
  );
};
export default AddCharacter;
