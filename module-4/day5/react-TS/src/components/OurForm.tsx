import { useState } from "react";
import axios from "axios";
export function OurForm() {
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");

  const [message, setMessage] = useState("");

  const url = "https://ih-crud-api.herokuapp.com/characters";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCharacter = {
      name,
      occupation,
      weapon: "TypeScript",
    };
    axios
      .post(url, newCharacter)
      .then((response) => {
        setMessage(
          `Success! A new character with the id ${response.data.id} was created`
        );
      })
      .catch(() => {
        setMessage("Error creating character...");
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Chewbacca"
          />
        </label>

        <label>
          Occupation:
          <input
            value={occupation}
            onChange={(e) => {
              setOccupation(e.target.value);
            }}
            placeholder="Co-Pilot"
          />
        </label>

        <button>Submit</button>
      </form>

      <h3>{message}</h3>
    </>
  );
}
