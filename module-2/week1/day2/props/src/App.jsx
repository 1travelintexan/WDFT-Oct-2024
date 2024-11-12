import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  // this is js land ...
  const name = "Ragnar";
  const arrayOfPets = [
    {
      name: "Buddy",
      age: 12,
      owner: "Joshua",
      image:
        "https://media.istockphoto.com/id/146908210/photo/dog.webp?a=1&b=1&s=612x612&w=0&k=20&c=M5l51DYulGyzNl7sxM3-XtMPZwSdBt_yMvpQ2rOgh0M=",
    },
    {
      name: "Diego",
      age: 5,
      owner: "Robert",
      image:
        "https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Shashi",
      age: 12,
      owner: "Eddi",
      image:
        "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYW4lMjBzaG9ydCUyMGhhaXIlMjBjYXR8ZW58MHx8MHx8fDA%3D",
    },
  ];
  return (
    <>
      <Navbar onePet={arrayOfPets[0]} />
      <Navbar onePet={arrayOfPets[1]} />
      <Navbar onePet={arrayOfPets[2]} />
      <h1>Props Day</h1>
      <Footer petName={name} />
    </>
  );
}

export default App;
