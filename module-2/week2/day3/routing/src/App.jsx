import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import UserDetailPage from "./pages/UserDetailPage";
import AddUserPage from "./pages/AddUserPage";
import UpdateUser from "./pages/UpdateUser";
import MyOutlet from "./components/MyOutlet";
import Spinner from "react-bootstrap/Spinner";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Spinner animation="grow" variant="info" />;
  }
  return (
    <>
      <main>
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
