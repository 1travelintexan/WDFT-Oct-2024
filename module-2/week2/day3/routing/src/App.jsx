import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import UserDetailPage from "./pages/UserDetailPage";
import AddUserPage from "./pages/AddUserPage";
import UpdateUser from "./pages/UpdateUser";
import MyOutlet from "./components/MyOutlet";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState();
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
    formData.append("upload_present", "IronhackWD");
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
      <main>
        <form onSubmit={handleAddImage}>
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <button>Add Image</button>
        </form>
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
