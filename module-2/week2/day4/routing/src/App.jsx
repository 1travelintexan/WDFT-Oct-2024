import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import UserDetailPage from "./pages/UserDetailPage";
import AddUserPage from "./pages/AddUserPage";
import UpdateUser from "./pages/UpdateUser";
import MyOutlet from "./components/MyOutlet";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState();
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  //functions
  function handleAddImage(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "IronhackWD");
    axios
      .post("https://api.cloudinary.com/v1_1/dxurcuyga/image/upload", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  if (loading) {
    return <Spinner animation="grow" variant="info" />;
  }
  return (
    <>
      <main className={darkTheme ? "dark" : ""}>
        <form onSubmit={handleAddImage}>
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <button>Add Image</button>
        </form>
        <button onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme ? "Light Theme" : "Dark Theme"}
        </button>
        <Routes>
          <Route path="/" element={<UserListPage />} />
          <Route
            path="/user/detail/:userId"
            element={
              <MyOutlet>
                <UserDetailPage />
              </MyOutlet>
            }
          />
          <Route path="/user/update/:userId" element={<UpdateUser />} />
          <Route
            path="/add-user"
            element={
              <MyOutlet>
                <AddUserPage />
              </MyOutlet>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
