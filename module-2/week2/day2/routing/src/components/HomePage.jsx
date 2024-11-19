import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const HomePage = ({ chars, setChars }) => {
  //useEffect with an empty array will always run only ONCE :)
  useEffect(() => {
    console.log("mounting in the Homepage");
    //fetch is the tool to ask the internet for data
    const getChars = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const theData = await response.json();
        console.log(theData);
        setChars(theData.results);
      } catch (error) {
        console.log(error);
      }
    };
    // getChars();
    //with the .then and .catch
    // fetch("https://rickandmortyapi.com/api/character")
    //   .then((respose) => {
    //     return respose.json();
    //   })
    //   .then((parsed) => {
    //     console.log(parsed.results);
    //     setChars(parsed.results);
    //   })
    //   .catch((err) => console.log(err));
    return () => {
      //inside the return is where you would stop timers from running or get rid of event listeners
      console.log("Home page unmounted");
    };
  }, []);

  function handleDelete(charId) {
    const filteredChars = chars.filter((char) => {
      if (char.id !== charId) {
        return true;
      }
    });
    console.log("clicked", charId, filteredChars);
    setChars(filteredChars);
  }

  return (
    <div>
      <h1>HomePage</h1>
      {chars &&
        chars.map((oneChar) => {
          return (
            <div key={oneChar.id} className="char-card">
              <img src={oneChar.image} alt={oneChar.name} />
              <Link to={`/character-details/${oneChar.id}`}>
                <h4>{oneChar.name}</h4>
              </Link>
              <button onClick={() => handleDelete(oneChar.id)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
};
export default HomePage;
