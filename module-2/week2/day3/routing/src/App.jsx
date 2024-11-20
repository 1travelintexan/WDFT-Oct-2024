import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import UserDetailPage from "./pages/UserDetailPage";
import AddUserPage from "./pages/AddUserPage";
import Navbar from "./components/Navbar";
import UpdateUser from "./pages/UpdateUser";

function App() {
  return (
    <>
      <Navbar />
      <h1>Axios Day</h1>
      <main>
        <Routes>
          <Route path="/" element={<UserListPage />} />
          <Route path="/user/detail/:userId" element={<UserDetailPage />} />
          <Route path="/user/update/:userId" element={<UpdateUser />} />
          <Route path="/add-user" element={<AddUserPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
