import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CharacterDetail = ({ chars }) => {
  const [oneChar, setOneChar] = useState({});
  const { characterId } = useParams();
  console.log("the params", characterId);
  useEffect(() => {
    console.log("detail page mounted");
    const getOneSpecificChar = async () => {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/${characterId}`
        );
        const parsed = await res.json();
        console.log("the one char", parsed);
        setOneChar(parsed);
      } catch (error) {
        console.log(error);
      }
    };
    const foundCharacter = chars.find((oneChar) => {
      if (oneChar.id == characterId) {
        return true;
      }
    });
    setOneChar(foundCharacter);
    // getOneSpecificChar();
  }, [chars, characterId]);

  return (
    <div>
      <h2>{oneChar.name} Page</h2>
      <img src={oneChar.image} alt={oneChar.name} />
      <h3>Name: {oneChar.name}</h3>
      <h3>Gender: {oneChar.gender}</h3>
      <h3>Species: {oneChar.species}</h3>
      <Link to={`/character/update/${oneChar.id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};
export default CharacterDetail;
