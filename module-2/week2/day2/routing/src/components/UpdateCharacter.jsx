import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const UpdateCharacter = ({ chars, setChars }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  //create a variable with the useNavigate
  //   and call the useNavigate to create an instance of it
  const nav = useNavigate();
  const { characterId } = useParams();
  useEffect(() => {
    const foundCharacter = chars.find((oneChar) => {
      if (oneChar.id == characterId) {
        return true;
      }
    });
    console.log("inside the update form", foundCharacter);
    setName(foundCharacter.name);
    setImage(foundCharacter.image);
    setGender(foundCharacter.gender);
    setSpecies(foundCharacter.species);
  }, [chars, characterId]);

  function handleSubmit(e) {
    e.preventDefault();
    const updatedChar = {
      id: characterId,
      name: name,
      image,
      gender,
      species,
    };
    const updatedArr = chars.map((oneChar) => {
      if (oneChar.id == characterId) {
        return updatedChar;
      } else {
        return oneChar;
      }
    });
    setChars(updatedArr);

    //call the variable that you crated and put a string of where you want to go to
    nav(`/`);
  }

  return (
    <div>
      <h2>Update Character</h2>
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
        <button>Update</button>
      </form>
    </div>
  );
};
export default UpdateCharacter;
