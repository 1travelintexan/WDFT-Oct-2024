import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import { NotFound } from "./components/NotFound";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import PetDetail from "./components/PetDetail";
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
      <Routes>
        <Route path="/" element={<HomePage pets={pets} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:petId" element={<PetDetail pets={pets} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <h1>Footer</h1>
    </>
  );
}

export default App;
