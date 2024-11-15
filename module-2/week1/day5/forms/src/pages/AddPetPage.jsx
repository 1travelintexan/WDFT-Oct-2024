import { useState } from "react";
import Confetti from "react-confetti";
import { v4 as uuidv4 } from "uuid";

const AddPetPage = ({ setPets, pets }) => {
  //create a state for each input on your form and make the value attribute of each input equal to the state
  //make sure to set the state onChange of each respectively
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petAge, setPetAge] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  function handlePetName(event) {
    console.log("pet name changed", event.target.value);
    setPetName(event.target.value);
  }
  function handleAddPet(event) {
    //first thing we do when we submit a form in React is stop it from reloading...
    //the way to do that is using the .preventDefault()
    event.preventDefault();
    const petToAdd = {
      //you need the orginal pet array to set the id this way
      //BETTER is to use the UUID package
      // id: pets.length + 1,
      id: uuidv4(),
      name: petName,
      age: petAge,
      type: petType,
    };
    console.log("pet added", petToAdd);
    //oneliner to update the array, but doesnt handle the id
    setPets((prev) => [...prev, petToAdd]);
    //after you add the pet, then clear the form
    setPetName("");
    setPetAge(0);
    setPetType("");

    //change the show confetti state to true for it to fall
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  }
  return (
    <div>
      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <h2>Add your pet to the list:</h2>
      {/* the form tag should have all of your inputs and a button to submit the form  */}
      {/* on the form opening tag, there should be a onSubmit attribute  */}
      <form onSubmit={handleAddPet}>
        <label>
          Pet Name:
          <input
            type="text"
            value={petName}
            onChange={handlePetName}
            placeholder="Enter Pet Name"
            required
          />
        </label>
        {/* select example  */}
        <label>
          {" "}
          Pet Type:
          <select
            onChange={(event) => {
              setPetType(event.target.value);
            }}
          >
            <option value=""></option>
            <option value="other">Something Weird 🐍</option>
            <option value="dog">Doggo 🐶</option>
            <option value="cat">Meow Meow 😾</option>
          </select>
        </label>
        {/* pet type input example */}
        {/* <label>
          Pet Type:
          <input
            type="text"
            value={petType}
            onChange={(event) => setPetType(event.target.value)}
          />
        </label> */}
        <label>
          Pet Age:
          <input
            type="number"
            min={0}
            value={petAge}
            onChange={(event) => setPetAge(event.target.value)}
          />
        </label>
        <button>Create Pet</button>
      </form>
    </div>
  );
};
export default AddPetPage;
