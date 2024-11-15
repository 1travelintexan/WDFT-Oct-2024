import { Link } from "react-router-dom";
import AddPetPage from "./AddPetPage";
import { useState } from "react";

const PetListPage = ({ pets, setPets }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <h2>All Pets:</h2>
      {pets.map((onePet) => (
        <h4 key={onePet.id}>
          Pet Name:
          <Link to={`/one-pet/detail/${onePet.id}`}>{onePet.name}</Link>
        </h4>
      ))}

      {/* here is a button to toggle if the form is shown or not */}
      <button onClick={() => setShowForm(!showForm)}>Show Form</button>
      {showForm && <AddPetPage pets={pets} setPets={setPets} />}
    </div>
  );
};
export default PetListPage;
