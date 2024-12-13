import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import MyOutlet from "./components/MyOutlet";
import { SingleImage } from "./pages/SingleImage";
import MultipleImages from "./pages/MultipleImages";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* route for the profile image  */}
        <Route path="/profile-image" element={<SingleImage />} />
        <Route path="/multiple-images" element={<MultipleImages />} />
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
