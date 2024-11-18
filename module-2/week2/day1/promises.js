function sayHello(callback) {
  console.log("hello");
  callback();
}
function sayGoodbye() {
  console.log("bye");
}
// setTimeout(() => {
//   sayHello(sayGoodbye);
// }, 500);

const morningRoutine = ["wake up", "make coffee", "walk Ragnar", "Go to work"];

function doTheRoutine(index, callback, errorFunction) {
  const theStep = morningRoutine[index];
  if (!theStep) {
    errorFunction(`step ${index} not defined!!!`);
  } else {
    setTimeout(() => {
      callback(theStep);
    }, Math.random() * 1000);
  }
}
// actually invoking the function with three arguments, the step index/successful callback/and an error callback
doTheRoutine(
  0,
  (step1) => {
    console.log(step1);
    doTheRoutine(
      1,
      (step2) => {
        console.log(step2);
        doTheRoutine(
          2,
          (step3) => {
            console.log(step3);
            doTheRoutine(
              3,
              (step4) => {
                console.log(step4);
                doTheRoutine(
                  100,
                  (step100) => {
                    console.log(step100);
                  },
                  (theError) => {
                    console.log(theError);
                  }
                );
              },
              (theError) => {
                console.log(theError);
              }
            );
          },
          (theError) => {
            console.log(theError);
          }
        );
      },
      (theError) => {
        console.log(theError);
      }
    );
  },
  (theError) => {
    console.log(theError);
  }
);

//**************Promises ***********/
// creating a promise
const myPromise1 = new Promise((resolve, reject) => {
  if (2 + 2 === 4) {
    resolve("That is correct, nice work");
  } else {
    reject("2 + 3 does not equal 4, try again");
  }
});
const myPromise2 = new Promise((resolve, reject) => {
  if (2 + 2 === 4) {
    resolve("That is correct, nice work in the second promise");
  } else {
    reject("2 + 3 does not equal 4, try again");
  }
});
//consuming the promise
myPromise1
  // if the promise is fulfilled it will go into the .then block
  .then((response1) => {
    console.log(response1);
    return myPromise2;
  })
  .then((response2) => {
    console.log(response2);
  })
  //if the promise fails then it goes to the .catch block
  .catch((err) => {
    console.log("there was problem with myPromise", err);
  })
  .finally(() => {
    console.log("this always happens... in the finally");
  });

//fetch call to handle a promise
fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    console.log("the response", response);
    return response.json();
  })
  .then((data) => {
    console.log(
      "the data",
      data.results.map((character) => character.name)
    );
  })
  .catch((err) => console.log(err));
// async function with the fuction keyword
// async function handleMyPromises() {
// async function with the arrow syntax
const handleMyPromises = async () => {
  try {
    const response1 = await myPromise1;
    console.log(response1);
    const response2 = await myPromise2;
    console.log(response2);
  } catch (error) {
    console.log(error);
  }
};
// handleMyPromises();

//****************Promise all method ***********/
// the .all method on the Promise class expects an array of promises
// it will fulfill all of them and if one fails then they all fail
async function handleAllPromises() {
  try {
    //returns an array of all of the promises that are resolved
    const allResponses = await Promise.all([myPromise1]);
    console.log("everything was good", allResponses);
    //if any promise fails, then it will go to the catch block
  } catch (error) {
    console.log(error);
  }
}
handleAllPromises();
