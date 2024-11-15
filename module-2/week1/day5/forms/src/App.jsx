import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PetListPage from "./pages/PetListPage";
import PetDetailPage from "./pages/PetDetailPage";
import AddPetPage from "./pages/AddPetPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [pets, setPets] = useState([
    {
      id: 1,
      name: "Ragnar",
      type: "dog",
      age: 3,
    },
    {
      id: 2,
      name: "Shashi",
      type: "cat",
      age: 5,
    },
    {
      id: 3,
      name: "Diego",
      type: "cat",
      age: 6,
    },
  ]);
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage pets={pets} />} />
          <Route
            path="/petlist"
            element={<PetListPage pets={pets} setPets={setPets} />}
          />
          <Route
            path="/one-pet/detail/:petId"
            element={<PetDetailPage pets={pets} />}
          />
          <Route
            path="/add-pet"
            element={<AddPetPage setPets={setPets} pets={pets} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
