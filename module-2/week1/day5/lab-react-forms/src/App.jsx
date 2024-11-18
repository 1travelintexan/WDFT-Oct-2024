import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  //************multiple states for each input **********/
  // const [fullName, setFullName] = useState("");
  // const [image, setImage] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");
  // const [program, setProgram] = useState("");
  // const [graduationYear, setGraduationYear] = useState(2024);
  // const [graduated, setGraduated] = useState(false);

  //************one state object for all inputs *********/
  const [student, setStudent] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 2024,
    graduated: false,
  });

  //function to handle the change of each input on the one state ex
  function handleChange(event) {
    const typed = event.target.value;
    const inputName = event.target.name;
    console.log("something changed", typed, "the input name", inputName);
    //this sets the new student object
    setStudent({ ...student, [inputName]: typed });
  }

  //function that is called when we submit the form
  function handleAddStudent(event) {
    //first always stop the page from reloading with event.preventDefault()
    event.preventDefault();
    //next construct a new object that is the shape of the data that you want add
    // const newStudent = {
    //   fullName,
    //   image,
    //   phone,
    //   email,
    //   program,
    //   graduationYear,
    //   graduated,
    // };
    // console.log("Student Added!", newStudent);
    // //after constructing the object, then spread it into the array
    // setStudents([newStudent, ...students]);
    // //after you add the item to the array
    // //Clear the form
    // setFullName("");
    // setEmail("");
    // setGraduated(false);
    // setImage("");
    // setGraduationYear(2024);
    // setPhone("");
    // setProgram("");

    //this adds the new student object to the array with the one state ex
    setStudents([student, ...students]);
    //clears the form with the one state ex:
    setStudent({
      fullName: "",
      image: "",
      phone: "",
      email: "",
      program: "",
      graduationYear: 2024,
      graduated: false,
    });
  }

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleAddStudent}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={student.fullName}
              //one single ex
              onChange={handleChange}
              //multipe states ex
              // onChange={(e) => {
              //   setFullName(e.target.value);
              // }}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={student.image}
              onChange={handleChange}
              // onChange={(e) => {
              //   setImage(e.target.value);
              // }}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={student.phone}
              onChange={handleChange}
              // onChange={(e) => {
              //   setPhone(e.target.value);
              // }}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={student.email}
              onChange={handleChange}
              // onChange={(e) => {
              //   setEmail(e.target.value);
              // }}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              onChange={handleChange}
              // onChange={(e) => {
              //   setProgram(e.target.value);
              // }}
            >
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={student.graduationYear}
              onChange={handleChange}
              // onChange={(e) => {
              //   setGraduationYear(e.target.value);
              // }}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={student.graduated}
              onChange={handleChange}
              // onChange={(e) => {
              //   setGraduated(e.target.checked);
              // }}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
      {/* FORM END */}

      {/* TABLE/LIST HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
