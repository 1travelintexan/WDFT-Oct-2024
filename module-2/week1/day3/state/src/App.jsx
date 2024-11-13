import { useState } from "react";
import "./App.css";

function App() {
  const petsArray = [
    {
      id: 1,
      type: "dog",
      name: "Ragnar",
      age: 3,
      image:
        "https://images.unsplash.com/photo-1455103493930-a116f655b6c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl0YnVsbHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      type: "cat",
      name: "Diego",
      age: 5,
      image:
        "https://plus.unsplash.com/premium_photo-1667030474693-6d0632f97029?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      type: "cat",
      name: "Shashi",
      age: 8,
      image:
        "https://plus.unsplash.com/premium_photo-1677545183884-421157b2da02?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      type: "kid",
      name: "Charlie",
      age: 4,
      image:
        "https://images.unsplash.com/photo-1591161555818-7b9debeccc07?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fDQlMjB5ZWFyJTIwb2xkJTIwYmFieXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  //create a useState for react
  const [count, setCount] = useState(100);
  const [pets, setPets] = useState(petsArray);
  //function to add to the count state(variable)
  function handleIncrementCount() {
    console.log("clicked");
    setCount(count + 1);
  }
  function handleDelete(thePetId) {
    console.log("pet deleted", thePetId);
    const filteredPets = pets.filter((onePet) => onePet.id !== thePetId);
    console.log("filtered pets", filteredPets);
    setPets(filteredPets);
  }
  return (
    <>
      <h1>State Day </h1>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrementCount}>add to Count</button>
      <button onClick={() => setCount(count - 1)}>subtract from Count</button>
      <h2>Pets List:</h2>
      {pets.map((currentPet) => {
        return (
          <div key={currentPet.id} className="pet-card">
            <img
              src={currentPet.image}
              alt={currentPet.name}
              style={{ height: "100px" }}
            />
            <h4>Name: {currentPet.name}</h4>
            <h4>Age: {currentPet.age}</h4>
            <h4>
              Type:{" "}
              {currentPet.type === "dog"
                ? "🐶"
                : currentPet.type === "cat"
                ? "😿"
                : "🐒"}
            </h4>
            <button
              onClick={() => {
                handleDelete(currentPet.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;
