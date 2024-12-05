![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Express Mongoose Recipes

<details>
  <summary>
    <h2>Learning Goals</h2>
  </summary>

  This exercise allows you to practice and apply the concepts and techniques taught in class. 

  Upon completion of this exercise, you will be able to:


  - Use Mongoose in a Node.js project to connect to a MongoDB database and perform CRUD operations
- Create Mongoose Schemas and Models for your MongoDB collections
- Implement server routes in Express.js to handle `GET`, `POST`, `PUT`, and `DELETE` HTTP requests
- Create dynamic routes in Express.js using route parameters

  <br>

  <hr>
</details>

## Introduction

![thai_style_chicken_noodle_soup_pieces_recipe_web](https://user-images.githubusercontent.com/23629340/38369283-ac1bda62-38e7-11e8-9c9b-d9df623f1bc3.jpg)

We've learned how to use Mongoose to create Schemas and Models and how to use it to interact with our MongoDB database. In the following exercise, we will practice creating an Express.js server that hosts a database full of awesome recipes.

<br>



## Requirements

- Fork this repo
- Clone this repo



## Submission

- Upon completion, run the following commands:

  ```shell
  git add .
  git commit -m "Completed lab"
  git push origin master
  ```

- Create a Pull Request and submit your assignment.



## Instructions

### Iteration 0 | Initial setup

To help you get started quickly, the project comes with the basic setup and all the required files and folders. The `app.js` already includes a basic server setup and middleware.



To run the application, the first thing you have to do is install all of its dependencies. Run the following command:

```shell
npm install
```



We will use Mongoose to integrate a MongoDB database with our server. Run the following command to install it:

```shell
npm install mongoose
```



And finally, run the app using the following command:

```shell
npm run dev
```

<br>



<hr>

### Iteration 1 | Connect to MongoDB

In order to access and manipulate the data stored in the MongoDB database, we must first establish a connection to the database.


1. Import `mongoose` in the `app.js` file:
```js
const mongoose = require("mongoose");
```
<br>

2. Set up a `mongoose` connection in the `app.js` file:

```js
// app.js
//...

const MONGODB_URI = "mongodb://127.0.0.1:27017/express-mongoose-recipes-dev";

mongoose
  .connect(MONGODB_URI)
  .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch((err) => console.error("Error connecting to mongo", err));

// ...
```

<br>



<hr>

### Iteration 2 - Recipe Model

Create a `Recipe` model inside of the file `/models/Recipe.model.js`. The schema should have the following fields:

- **title** - Type `String`. It should be *required* and *unique*.
- **instructions** - Type `String`. It should be *required*.
- **level** - Type `String`. It can be one of the following values: _Easy Peasy_ - _Amateur Chef_ - _UltraPro Chef_ (use the [`enum`](https://mongoosejs.com/docs/api/schemanumberoptions.html#SchemaNumberOptions.prototype.enum) validator :wink:).
- **ingredients** - Type `Array` of `String`s - represented as `[ String ]`.
- **image** - Type `String`. Default value: _"https://images.media-allrecipes.com/images/75131.jpg"_.
- **duration** - Type `Number`. The minimum value should be 0.
- **isArchived** - Type `Boolean`. The default value should be `false`.
- **created** - Type `Date`. By default, today.

<br>

**Note:** Remember to export the model from the file and require it in `app.js` to be able to use it.

<br>



<details>

  <summary><b>Solution</b></summary>

  ```js
  // models/Recipe.model.js

  const mongoose = require("mongoose");
  const Schema = mongoose.Schema;

  // CREATE A SCHEMA
  const recipeSchema = new Schema({
    title: { type: String, required: true, unique: true },
    instructions: { type: String, required: true },
    level: { type: String, enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"] },
    ingredients: { type: [String] },
    image: { type: String, default: "https://images.media-allrecipes.com/images/75131.jpg" },
    duration: { type: Number, min: 0 },
    isArchived: { type: Boolean, default: false },
    created: { type: Date, default: Date.now }
  });

  // CREATE A MODEL
  const Recipe = mongoose.model("Recipe", recipeSchema);

  // EXPORT THE MODEL
  module.exports = Recipe;
  ```


  <br>

  <hr>
</details>

<br>



<hr>

### Iteration 3 | Create a Recipe

Now that you have established the database connection and created the models, it's time to create the routes. We will start with the routes for the recepies collection.

Create a new route `POST` `/recipes` that, upon request, *creates* a new recipe document in the database. See the instructions below on how to construct this route:



<details>
  <summary><b>See Instructions</b></summary>

  <br>



**HTTP Request**

- Method: **`POST`**
- Route: **`/recipes`**



**HTTP Response:**

- Status code: **`201`** (Created) if the document is successfully created.
- Content-Type: JSON



**Error Response:**

- Status code: **`500`** (Internal Server Error) in case of an error.



  <br>




</details>



<details>


  <summary><b>Solution</b></summary>

  <p align="center">
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-express-mongoose-recipes-v2/01-lab-mongoose-recipes-solution-post-recipes-req-body.png" alt="iteration solution code snippet" width="750">
  </p>


  <br>

  <hr>


</details>

<br>



<br>



<hr>

### Iteration 4 | Get All Recipes

Create a new route `GET` `/recipes` that, upon request, *retrieves* all the recipe documents from the database. See instructions below for more details:



<details>
  <summary><b>See Instructions</b></summary>

  <br>



**HTTP Request:**

- Method: **`GET`**

- Route: **`/recipes`**

  

**HTTP Response:**

- Status code: **`200`** (OK)

- Content-Type: JSON

  

**Error response:**

- Status code: **`500`** (Internal Server Error) in case of an error.



  <br>



</details>



<details>


  <summary><b>Solution</b></summary>

  <p align="center">
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-express-mongoose-recipes-v2/02-lab-mongoose-recipes-solution-get-all-recipes.png" alt="iteration solution code snippet" width="750">
  </p>


  <br>

  <hr>


</details>

<br>



<br>





<hr>

### Iteration 5 | Get a Single Recipe

Create a new route `GET` `/recipes/:id` that, upon request, *retrieves* a specified recipe document by its `_id` from the database. You can find the instructions for the route below:





<details>
  <summary><b>See Instructions</b></summary>

  <br>



**HTTP Request:**

- Method: **`GET`**
- Route: **`/recipes/:id`**



**HTTP Response:**

- Status code: **`200`** (OK)
- Content-Type: JSON



**Error response:**

- Status code: **`500`** (Internal Server Error) in case of an error.



  <br>



</details>



<details>


  <summary><b>Solution</b></summary>

  <p align="center">
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-express-mongoose-recipes-v2/03-lab-mongoose-recipes-solution-get-single-recipe.png" alt="iteration solution code snippet" width="750">
  </p>


  <br>

  <hr>


</details>

<br>



<br>



<hr>

### Iteration 6 | Update a Single Recipe

Create a new route `PUT` `/recipes/:id` that, upon request, *updates* a specified recipe document in the database. See the instructions below on how to construct this route:





<details>
  <summary><b>See Instructions</b></summary>

  <br>



**HTTP Request:**

- Method: **`PUT`**
- Route: **`/recipes/:id`**



**HTTP Response:**

- Status code: **`200`** (OK)

- Content-Type: JSON

  

**Error Response:**

- Status code: **`500`** (Internal Server Error) in case of an error.



  <br>



</details>





<details>


  <summary><b>Solution</b></summary>

  <p align="center">
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-express-mongoose-recipes-v2/04-lab-mongoose-recipes-solution-update-single-recipe.png" alt="iteration solution code snippet" width="750">
  </p>


  <br>

  <hr>


</details>

<br>



<br>



<hr>

### Iteration 7 | Delete a Single Recipe

Create a new route `DELETE` `/recipes/:id` that, upon request, *deletes* a specified recipe document by its `_id` from the database. See the instructions below on how to construct this route:





<details>
  <summary><b>See Instructions</b></summary>

  <br>



**HTTP Request:**

- Method: **`DELETE`**
- Route: **`/recipes/:id`**



**HTTP Response:**

- Status code: **`204`** (No Content) if the document is successfully deleted.



**Error Response:**

- Status code: **`500`** (Internal Server Error) in case of an error.





  <br>




</details>



<details>


  <summary><b>Solution</b></summary>

  <p align="center">
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-express-mongoose-recipes-v2/05-lab-mongoose-recipes-solution-update-single-recipe.png" alt="iteration solution code snippet" width="750">
  </p>


  <br>

  <hr>


</details>

<br>



<br>


<!--

<hr>

### Bonus: Iteration 8 | User Model

Create a `User` model inside of the file `/models/User.model.js`. The schema should have the following fields:

- **email** - Type String.  It should be *required* and *unique*.
- **firstName** - Type `String`. It should be *required* and have a minimum length of 2.
- **lastName** - Type `String`. It should be *required* and have a minimum length of 2.
- **password** - Type `String`.  It should be *required* and have minimum length of 8.
- **image** - Type `String`.  Default value: _"https://xsgames.co/randomusers/assets/avatars/pixel/44.jpg"_.
- **favorites** - Type `Array` of `ObjectId`s referencing the documents from the `Recipes` model <br> (represented as `[ mongoose.ObjectId ]`). Default value: `[]`

<br>

**Note:** Remember to export the model from the file and require it in `app.js` to be able to use it.

<br>



<details>


  <summary><b>Solution</b></summary>

  ```js
  // models/User.model.js

  const mongoose = require("mongoose");
  const Schema = mongoose.Schema;

  // CREATE A SCHEMA
  const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true, minlength: 2 },
    lastName: { type: String, required: true, minlength: 2 },
    password: { type: String, required: true, minlength: 8 },
    image: { type: String, default: "https://xsgames.co/randomusers/assets/avatars/pixel/44.jpg" },
    favorites: { type: [ Schema.Types.ObjectId ], ref: "Recipe", default: [] }
  });

  // CREATE A MODEL
  const User = mongoose.model("User", userSchema);

  // EXPORT THE MODEL
  module.exports = User;
  ```


  <br>

  <hr>


</details>

<br>





<hr>

### Bonus: Iteration 9 | Create a Single User

Create a new route `POST` `/users` that, upon request, *creates* a new user document in the database. See instructions below for more details:



<details>
  <summary><b>See Instructions</b></summary>

  <br>



**HTTP Request:**

- Method: **`POST`**

- Route: **`/users`**

  

**HTTP Response:**

- Status code: **`201`** (Created) if the document is successfully created.
- Content-Type: JSON



**Error Response:**

- Status code: **`500`** (Internal Server Error) in case of an error.



  <br>




</details>

<details>


  <summary><b>Solution</b></summary>

  <p align="center">
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-express-mongoose-recipes-v2/06-lab-mongoose-recipes-solution-create-single-user.png" alt="iteration solution code snippet" width="750">
  </p>


  <br>

  <hr>


</details>

<br>



<br>



<hr>

### Bonus: Iteration 10 | Get a Single User

Create a new route `GET` `/users/:id` that, upon request, *retrieves* a specified user document by its `_id` from the database.



<details>
  <summary><b>See Instructions</b></summary>

  <br>



**HTTP Request:**

- Method: **`GET`**

- Route: **`/users/:id`**

  

**HTTP Response:**

- Status code: **`200`** (OK)

- Content-Type: JSON

  

**Error Response:**

- Status code: **`500`** (Internal Server Error) in case of an error.



  <br>



</details>



<details>


  <summary><b>Solution</b></summary>

  <p align="center">
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-express-mongoose-recipes-v2/07-lab-mongoose-recipes-solution-get-single-user.png" alt="iteration solution code snippet" width="750">
  </p>


  <br>

  <hr>


</details>

<br>



<br>



<hr>

### Bonus: Iteration 11 | Update a Single User

In this iteration, your task is to extend the functionality of the API and provide a way to store favorite recipes for each user.

Create a route `PUT` `/users/:id` that will, upon request, ***update* the specified user document and add a *recipe id* to the `favorites`** array:



  <br>



<details>
  <summary><b>See Instructions</b></summary>

  <br>



**HTTP Request:**

- Method: **`PUT`**
- Route: **`/users/:id`**



**HTTP Response:**

- Status code: **`200`** (OK)
- Content-Type: JSON



**Error Response:**

- Status code: **`500`** (Internal Server Error) in case of an error.



  <br>



</details>



<br>



**Hint:**

To push the *recipe id* to the array of `favorites`, use the following syntax:

```js
User.findByIdUpdate(
  <USER_ID>,
  { $push: { favorites: <RECIPE_ID>  } },
  { new: true }
)
```

*The MongoDB [`$push`](https://www.mongodb.com/docs/v6.0/reference/operator/update/push/#mongodb-update-up.-push) operator appends a specified value to an array.*

*The `<USER_ID>` and `<RECIPE_ID>` are just placeholders that you should replace with the document `_id`.*



<br>



<details>


  <summary><b>Solution</b></summary>

  <p align="center">
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-express-mongoose-recipes-v2/08-lab-mongoose-recipes-solution-update-single-user.png" alt="iteration solution code snippet" width="750">
  </p>


  <br>

  <hr>


</details>

<br>





<hr>

### Bonus: Iteration 12 | Populate Favorites

Update the route `GET` `/users/:id` so that it *retrieves* the specified user document **with the populated `favorites` field**:



  <br>



<details>
  <summary><b>See Instructions</b></summary>

  <br>



**HTTP Request:**

- Method: **`GET`**
- Route: **`/users/:id`**



**HTTP Response:**

- Status code: **`200`** (OK)
- Content-Type: JSON



**Error Response:**

- Status code: **`500`** (Internal Server Error) in case of an error.



  <br>



</details>



<details>


  <summary><b>Solution</b></summary>

  <p align="center">
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-express-mongoose-recipes-v2/09-lab-mongoose-recipes-solution-populate-user-favorites.png" alt="iteration solution code snippet" width="750">
  </p>


  <br>

  <hr>


</details>

<br>



<br>



<hr>




-->

Happy coding! :heart:

<br>



## FAQs


<details>
  <summary>I am stuck and don't know how to solve the problem or where to start. What should I do?</summary>


  <br>

  If you are stuck in your code and don't know how to solve the problem or where to start, you should take a step back and try to form a clear question about the specific issue you are facing. This will help you narrow down the problem and come up with potential solutions.

  For example, is it a concept that you don't understand, or are you receiving an error message that you don't know how to fix? It is usually helpful to try to state the problem as clearly as possible, including any error messages you are receiving. This can help you communicate the issue to others and potentially get help from classmates or online resources. 

  Once you have a clear understanding of the problem, you will be able to start working toward the solution.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I got the error: "Cannot find module" Node.js". How can I resolve it?</summary>


  <br>

  The error "Cannot find module" in a Node.js application means that the module you are trying to import or use does not exist in your project or cannot be found by Node.js.

  There are a few things you can try to resolve the issue:



1. **Dependencies are not installed**: Make sure that all dependencies are installed.
   To do this, run the command `npm install` in the root folder of your project.
      This will install all of the dependencies listed in the project's `package.json` file, and ensure that all of the modules that your Node'js application requires are available.
2. **Module is not installed**: Make sure that the *package* you are trying to use is listed in the project's `package.json` and that it is installed.
   To do this, run the command `npm install <package_name>`, replacing the `<package_name>` with the name of the package.
      This will add the package to the list of dependencies in the `package.json` file, and install it in the project.
3. **Module is not imported:** Make sure that you've imported the module/package correctly and that the `require` statement is spelled correctly and available in the correct place in your code.
4. **Wrong file path:** If you are importing another file as a module, make sure that the file you are trying to require is located in the correct folder and that you are using the correct file path.
5. **Wrong module/package name:** Check the spelling of the package name you are trying to import.



  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I got the error "Error: listen EADDRINUSE: Address already in use". How do I fix it?</summary>


  <br>

  This error means that the port is taken by another process that is still running on that port. 
  To fix the issue, you need to kill the process using the port and then run the command again. Here's how to do it:

  #### On Mac/Linux

  To kill the process running on port `3000`, run the following command in the terminal:

  ```bash
sudo kill -9 $(lsof -t -i:3000)   
  ```

  **Important:** Replace the above example port *3000* with the port number of the process you are trying to kill.

  <br>

  #### On Windows

  ##### 1. Using the Task Manager

  To kill the running process on Windows using the Task Manager do the following:

1. Open the **Task Manager** by pressing: **<kbd>Ctrl</kbd>** + **<kbd>Shift</kbd>** + **<kbd>Esc</kbd>** 
2. Find the Node process you want to terminate.
3. Right-click and select **End Task**

  <br>

  ##### 2. Using Command Prompt

  To kill the running process on Windows using the Command Prompt do the following:

1. Open the windows **Start** menu
2. Search for **CMD** in the search bar
3. In the search results, right-click on **Command Prompt** and select **Run as administrator**. This will open the Command Prompt terminal.
4. In the Command Prompt terminal, run the following command to find the process ID:

   ```bash
   netstat -ano|findstr "PID :3000"
   ```

   > If the process happens to be running on another port, simply replace `3000` with the number the port number the process is running on.

   This will return the process id (PID). You should then run the following command using the process id (PID) you got in the previous step to terminate the process:

   ```bash
   taskkill /PID 12345 /f
   ```

   **Important:** Replace the above example PID *12345*, with the process id (PID) you got in the previous step.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I got the error "Port is already in use". How do I fix it?</summary>


  <br>

  This error means that the port is taken by another process that is still running on that port. 
  To fix the issue, you need to kill the process using the port and then run the command again. Here's how to do it:

  #### On Mac/Linux

  To kill the process running on port `3000`, run the following command in the terminal:

  ```bash
sudo kill -9 $(lsof -t -i:3000)   
  ```

  **Important:** Replace the above example port *3000* with the port number of the process you are trying to kill.

  <br>

  #### On Windows

  ##### 1. Using the Task Manager

  To kill the running process on Windows using the Task Manager do the following:

1. Open the **Task Manager** by pressing: **<kbd>Ctrl</kbd>** + **<kbd>Shift</kbd>** + **<kbd>Esc</kbd>** 
2. Find the Node process you want to terminate.
3. Right-click and select **End Task**

  <br>

  ##### 2. Using Command Prompt

  To kill the running process on Windows using the Command Prompt do the following:

1. Open the windows **Start** menu
2. Search for **CMD** in the search bar
3. In the search results, right-click on **Command Prompt** and select **Run as administrator**. This will open the Command Prompt terminal.
4. In the Command Prompt terminal, run the following command to find the process ID:

   ```bash
   netstat -ano|findstr "PID :3000"
   ```

   > If the process happens to be running on another port, simply replace `3000` with the number the port number the process is running on.

   This will return the process id (PID). You should then run the following command using the process id (PID) you got in the previous step to terminate the process:

   ```bash
   taskkill /PID 12345 /f
   ```

  **Important:** Replace the above example PID *12345*, with the process id (PID) you got in the previous step.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I got the error: "Error: connect ECONNREFUSED ::1:27017". What should I do?</summary>


  <br>

  This error means that the Node.js application is unable to connect to a MongoDB instance running on the local (same) machine.



There are a few things you should look at to troubleshoot this:

**1. Check the database connection string**: Check that the connection string is correct. The database connection string should be in the format:

   ```python
mongodb://127.0.0.1:27017/databaseName
   ```



**2. Verify that MongoDB is running on your machine**: Check that MongoDB is running on your machine. If it is not running, restart the service according to the following instructions:

<br>



**On Mac:**

Check if MongoDB is running on your machine, by running the command:

   ```bash
brew services list
   ```



You should see the service `mongodb-community` listed as `started`. If not, run the following command to start it:

   ```bash
brew services start mongodb-community
   ```

<br>



**On Ubuntu:**
   You can start the [`mongod`](https://www.mongodb.com/docs/manual/reference/program/mongod/#mongodb-binary-bin.mongod) process by issuing the following command:

   ```bash
sudo systemctl start mongod
   ```



If you receive an error similar to the following when starting [`mongod`:](https://www.mongodb.com/docs/manual/reference/program/mongod/#mongodb-binary-bin.mongod)

   > ```
   > Failed to start mongod.service: Unit mongod.service not found.
   > ```



Run the following command first:

   ```bash
sudo systemctl daemon-reload
   ```

Then run the start command above again.

<br>



**On Windows:**

To open the *MongoDB* process on Windows, you will need to do these steps:

   - Go to your *Program Files* in your *C:* drive - the local disk

   - In *Program Files* go to the *MongoDB* folder

   - Inside the *MongoDB* folder, follow this path `Server/4.4/bin`. The version number on your system (`4.4`) may be slightly different for the newer installations.

   - Double-click on the file named **mongod.exe**.


 ![](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/prework/installations/win-installations-bootcamp-mongo-03.png)
     

   <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>Why is my database empty even though I am able to connect?</summary>


  <br>

  It is normal for the database to be empty if you have not inserted any data into it. If you want to confirm that your connection to the database is working correctly, you can try inserting a simple document into a collection and then querying the collection or checking the database to see if the document was added.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I get the error "MongoDB is not running on the provided host and port" when trying to connect with MongoDB Compass. What should I do?</summary>


  <br>

  If you are trying to connect to a MongoDB instance running locally, you should first check that MongoDB is running on your machine. If it is not running, restart the service according to the following instructions:

   **On Mac:**

  Check if MongoDB is running on your machine, by running the command:

  ```bash
brew services list
  ```

  You should see the service `mongodb-community` listed as `started`. If not, run the following command to start it:

  ```bash
brew services start mongodb-community
  ```

   <br>

  **On Ubuntu:**

  You can start the [`mongod`](https://www.mongodb.com/docs/manual/reference/program/mongod/#mongodb-binary-bin.mongod) process by issuing the following command:

  ```bash
sudo systemctl start mongod
  ```

  If you receive an error similar to the following when starting [`mongod`:](https://www.mongodb.com/docs/manual/reference/program/mongod/#mongodb-binary-bin.mongod)

  > ```
  > Failed to start mongod.service: Unit mongod.service not found.
  > ```

  Run the following command first:

  ```bash
sudo systemctl daemon-reload
  ```

  Then run the start command above again.


   <br>

   **On Windows:**

   To open the *MongoDB* process on Windows, you will need to do these steps:

   - Go to your *Program Files* in your *C:* drive - the local disk
   - In *Program Files* go to the *MongoDB* folder
   - Inside the *MongoDB* folder, follow this path `Server/4.4/bin`. The version number on your system (`4.4`) may be slightly different for the newer installations.
   - Double-click on the file named **mongod.exe**.

 <br>
     

 ![](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/prework/installations/win-installations-bootcamp-mongo-03.png)
     

   <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>How to create a Mongoose model?</summary>


  <br>

  The mongoose model serves as a blueprint for creating and managing documents within MongoDB collections. The mongoose model is an overlay on top of one MongoDB collection, that we use to query and interact with that database collection.

  Here is an example of creating a `User` model to manage documents in the `users` collection:

  ```js
  // IMPORT MONGOOSE
  const mongoose = require("mongoose");

  // CREATE A SCHEMA - defines the shape of the documents
  const userSchema = new mongoose.Schema({ 
    firstName: String,
    lastName: String 
  });

  // CREATE THE MODEL
  const User = mongoose.model("User", schema);

  // EXPORT THE MODEL
  module.exports = User;
  ```

  <br>

  In the above example, we created and exported a `User` model, so that it can be imported and used anywhere in the application for managing the database collection `users`.

Let's break down the above example and the steps in creating a mongoose model:

1. **Import mongoose:** The first step is to import the `mongoose` library.

2. **Create a schema:**  The next step is to create a schema, which defines the shape of the documents that will be stored in the `users` collection. In the above example, the schema has two fields `firstName` and `lastName` which are both strings.

3. **Create the model**: The last step is to create the model. This is doe using the method `mongoose.model()` , which takes two arguments: the name of the model, in this case `'User'` and the schema it should use.
   Mongoose automatically pluralizes and converts to lowercase the provided model name and uses it as the name of the collection. In this case, the string `'User'` is automatically converted into a collection name -> `users`.

4. **Export the model:** After the model is created, it needs to be exported so it can be used in other parts of the application.

   <br>

   [Back to top](#faqs)

</details>

<details>
  <summary>How do I resolve the Mongoose error "ValidationError: Path ... is required."?</summary>


  <br>

  This error occurs when you try to save a document to the database without a value for a field that is marked as required in the model.
  To fix this error, make sure that you are providing a value for all required fields when creating or updating a document. You can verify that you are providing the correct values by using the console.log to inspect the data before saving it to the database.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>When I try to run the app, I get an error "command not found: nodemon"</summary>


  <br>

  Make sure you have `nodemon` installed globally:


  ```bash
npm install -g nodemon
  ```

  This will install nodemon globally on your system, making it available to all of your projects.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I am unable to push changes to the repository. What should I do?</summary>


  <br>

  There are a couple of possible reasons why you may be unable to *push* changes to a Git repository:

1. **You have not committed your changes:** Before you can push your changes to the repository, you need to commit them using the `git commit` command. Make sure you have committed your changes and try pushing again. To do this, run the following terminal commands from the project folder:

   ```shell
   git add .
   git commit -m "Your commit message"
   git push
   ```

   <br>

   

  2. **You do not have permission to push to the repository:** If you have cloned the repository directly from the main Ironhack repository without making a *Fork* first, you do not have write access to the repository.
     To check which remote repository you have cloned, run the following terminal command from the project folder:
     
     ```shell
     git remote -v
     ```
     
     

  If the link shown is the same as the main Ironhack repository, you will need to fork the repository to your GitHub account first, and then clone your fork to your local machine to be able to push the changes.

  **Note:** You may want to make a copy of the code you have locally, to avoid losing it in the process.

  <br>

  [Back to top](#faqs)

</details>
