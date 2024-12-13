import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const SingleImage = () => {
  const { user } = useContext(AuthContext);

  function handleSingleImage(e) {
    e.preventDefault();
    const image = e.target.image.files[0];
    const myFormData = new FormData();
    myFormData.append("imageUrl", image);
    axios
      .post(`http://localhost:5005/auth/upload/${user._id}`, myFormData)
      .then((res) => console.log("success, here is the response", res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>Single Image</h1>
      <form onSubmit={handleSingleImage}>
        <label>
          Profile Image:
          <input type="file" name="image" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
