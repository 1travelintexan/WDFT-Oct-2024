import { useState } from "react";
import { useParams } from "react-router-dom";

const PetDetailPage = ({ pets }) => {
  const { petId } = useParams();
  const foundPet = pets.find((onePet) => onePet.id == petId);

  return (
    <div>
      <h1>{foundPet.name}'s Page!</h1>
      <h4>
        Type:{" "}
        {foundPet.type === "dog" ? "🐶" : foundPet.type == "cat" ? "😾" : "🐍"}
      </h4>
      <h4>Age: {foundPet.age}</h4>
    </div>
  );
};
export default PetDetailPage;
