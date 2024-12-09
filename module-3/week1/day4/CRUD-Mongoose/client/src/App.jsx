import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import MyOutlet from "./components/MyOutlet";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <MyOutlet>
                <HomePage />
              </MyOutlet>
            </ProtectedRoute>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
