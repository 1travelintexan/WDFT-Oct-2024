import { useParams } from "react-router-dom";

const PetDetail = ({ pets }) => {
  const { petId } = useParams();
  //useParams is a tool that goes to the url and grabs all parameters (things after :)
  // the syntax is ( ) to call it and store them in a variable

  const foundPet = pets.find((onePet) => onePet.id == petId);

  return (
    <div>
      {" "}
      <h2>{foundPet.name}'s PetDetail</h2>
      <h2>Age: {foundPet.age}</h2>
      {foundPet.type === "dog" ? <h1>🐶</h1> : <h6>😾</h6>}
    </div>
  );
};
export default PetDetail;
