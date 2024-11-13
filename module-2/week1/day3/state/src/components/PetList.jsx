const PetList = ({ pets }) => {
  return (
    <div>
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
    </div>
  );
};
export default PetList;
