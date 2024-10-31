// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];
console.log(randomContact);
addRow(randomContact);
// const exampleRow = document.createElement("tr");
// exampleRow.innerHTML = `
//   <td>
//     <img src="${randomContact.pictureUrl}" />
//   </td>
//   <td> ${randomContact.name} </td>
//   <td> ${randomContact.popularity.toFixed(2)} </td>
//   <td>
//     <button class="btn-delete">Delete</button>
//   </td>
//   <td>
//     <button class="btn-like">
//       <img src="./images/icon.png" alt="like" />
//     </button>
//   </td>
// `;

// tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
// console.log("first three", threeContacts);
// for (let i = 0; i < threeContacts.length; i++) {
//   const currentContact = threeContacts[i];
//   const oneRow = document.createElement("tr");
//   oneRow.innerHTML = `
//   <td>
//     <img src="${currentContact.pictureUrl}" />
//   </td>
//   <td> ${currentContact.name} </td>
//   <td> ${currentContact.popularity.toFixed(2)} </td>
//   <td>
//     <button class="btn-delete">Delete</button>
//   </td>
//   <td>
//     <button class="btn-like">
//       <img src="./images/icon.png" alt="like" />
//     </button>
//   </td>
// `;

//   tableBody.appendChild(oneRow);
// }

//with forEach()
threeContacts.forEach((contact) => {
  addRow(contact);
});
//make a function to create a row and add event listeners
function addRow(oneContact) {
  const oneRow = document.createElement("tr");
  oneRow.innerHTML = `
  <td>
    <img src="${oneContact.pictureUrl}" />
  </td>
  <td> ${oneContact.name} </td>
  <td> ${oneContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like ">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  tableBody.appendChild(oneRow);
  //delete button iteration
  const deleteBtn = oneRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    console.log("delete clicked");
    //this removes from the DOM (visually)
    oneRow.remove();
    //this adds the one we removed back to the array to have a chance at a random add later
    contacts.push(oneContact);
    console.log("contacts after push", contacts);
  });
  //like button iteration
  const likeBtn = oneRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    console.log("like clicked");
    likeBtn.classList.toggle("selected");
  });
}

//bonus Iteration
buttonAddRandom.addEventListener("click", () => {
  console.log("add random");
  //grab random index
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const removedPersonArr = contacts.splice(randomIndex, 1);
  const randomPerson = removedPersonArr[0];
  console.log(removedPersonArr, randomPerson);
  addRow(randomPerson);
});
