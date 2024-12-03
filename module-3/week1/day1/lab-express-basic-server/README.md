# LAB | Express Basic Server

<details>
  <summary>
    <h2>Learning Goals</h2>
  </summary>

  This exercise allows you to practice and apply the concepts and techniques taught in class. 

  Upon completion of this exercise, you will be able to:


  - Set up a Node.js project and initialize `package.json`
  - Install Express.js in a Node.js project using `npm`
  - Use the `require()` syntax to import modules and packages
  - Create a simple HTTP server using Express.js
  - Set up middleware in Express.js to perform additional request processing such as logging, serving static files, etc.
  - Implement server routes that handle `GET` HTTP requests

  <br>

  <hr>

</details>

## Introduction

In this lab, we're diving into practical application with ExpressJS. You'll be setting up a basic server to host a personal blog with a projects showcase section - something that every developer needs. In each iteration, we will guide you in setting up the app and defining routes, resulting in a fully functional server and a personal blog website. Let's get started!

<p align="center">
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-express-basic-server/00-lab-express-basic-site-overview.png" alt="Example - Finished LAB" width="700" />
</p>


<br>

## Setup
- Fork this repo
- Clone this repo
- Open the LAB and start

```shell
cd lab-express-basic-server
```

<br>

## Submission
- Upon completion, run the following commands:

```shell
git add .
git commit -m "done"
git push origin master
```

- Create a Pull Request and submit your assignment

<br>

## Instructions

Try your best to solve each iteration on your own before checking the solution. Nevertheless, if you find yourself stuck, feel free to check the provided solution as a reference to help you solve the iteration.

<br>

### Iteration 0 | Set up the project
To set up the project, follow the below steps.

<br>

**1. Install dependencies:**
- Run `npm init -y` to create a package.json file.
- Run `npm install express` to install the Express package.
- Run `npm install morgan` to install the Morgan package.

<br>

**2. Organize the project files:**
- In the root of the project, create a `views/` folder that will hold your .html files.
- Move the provided HTML files `home.html`, `blog.html`, and `not-found.html` into the `views/` folder.

<br>

- In the root of the project, create a `public/` folder that will hold other static files, such as your CSS stylesheets, JavaScript and images.
- Move the provided CSS files `styles.css` and `profile.png` into the `public/` folder.

<br>


### Iteration 1 | Create Express Server
Next, you should create an Express server in `app.js` and set up basic middleware. To do this, while in `app.js` file do the following:

- Import the `express` package using `require()`
- Import the `morgan` package using `require()`
- Set up the Express server to listen on port `5005`
- Set up the following middleware that you will need for your Express server:
  - `express.static()` to serve static files from the `public` folder, such as CSS stylesheets and images for HTML pages<br>
  - `express.json()` to parse incoming requests with JSON payloads
  - `morgan` logger for logging the incoming requests

<br>

<details>

  <summary><b>Solution</b></summary>

  <p align="center">
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-express-basic-server/01-lab-express-basic-server-setup.png" alt="01-lab-express-basic-server-setup.png" width="700">
  </p>

  <br>

  <hr>

</details>

<br>


### Iteration 2 | Set Up Nodemon and Start the Server

Once you have set up the Express server, the next step is to start the server and make sure that it is running correctly.
You could start the server with *`node app.js`* but this is will require you to manually restart the server every time you make changes to the code.

A better solution is to run the server using [`nodemon`](https://www.npmjs.com/package/nodemon), which automatically restarts every time you make changes to the code. To set up `nodemon`, follow the below steps:

<br>

**1. Install `nodemon` globally:**
- Run `npm install nodemon --global` to install Nodemon globally on your machine.

<br>

**2. Add `nodemon` as dev dependency:**
- Run `npm install nodemon --save-dev` to add Nodemon as a dev dependency in the current project.
- Update the `package.json` -> `"scripts"` section to include a `"dev"` script that uses nodemon to run the server:

  ```json
  "scripts": {
    "dev": "nodemon app.js"
  },
  ```
  <br>


**3. Start the server**
- To start the server using the newly created alias, run the following command:

  ```bash
  npm run dev
  ```

<br>


### Iteration 3 | Create Home Route

Create a route handler for **`GET`** **`/`** that responds back with the provided HTML file `home.html`.

<br>

To test the route, navigate to [`localhost:5005/`](http://localhost:5005/) in your browser. <br>If everything is set up correctly, you should see the *home page* in the browser.


<br>

<details>

  <summary><b>Solution</b></summary>

  <p align="center">
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-express-basic-server/02-lab-express-basic-server-home-page-route.png" alt="home page response" width="750" />
  </p>

  <br>

  <hr>

</details>

<br>


### Iteration 4 | Create Blog Route

Create a route handler for **`GET`** **`/blog`** that responds back with the provided HTML file `blog.html`.

<br>

To test the route, navigate to [`localhost:5005/blog`](http://localhost:5005/blog) in your browser. <br>If everything is set up correctly, you should see the *blog page* rendered in the browser.

<br>

<details>

  <summary><b>Solution</b></summary>


  <p align="center">
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-express-basic-server/03-lab-express-basic-server-blog-page-route.png" alt="" width="750" />
  </p>

  <br>

  <hr>

</details>

<br>


### Iteration 5 | JSON Data for Projects

Create a route **`GET`** **`/api/projects`** that responds back with the JSON data from the file `data/projects.json`.
<br>The purpose of this route is to provide the JSON data for the `home.html` page, which requests and renders it in the ***My Projects*** section as a list.

You will need to import the file `data/projects.json` in `app.js`.

<br>

To test the route, navigate to [`localhost:5005/api/projects`](http://localhost:5005/api/projects) in your browser. <br>If you set up the route correctly, you should see the *JSON data with projects* sent in the response.

<br>

<details>

  <summary><b>Solution</b></summary>

  <p align="center">
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-express-basic-server/04-lab-express-basic-server-projects-route.png" alt="" width="750" />
  </p>

  <br>

  <hr>

</details>

<br>

### Iteration 6 | JSON Data for Articles
Create a route **`GET`** **`/api/articles`** that responds back with the JSON data from the file `data/articles.json`.
<br>The purpose of this route is to provide the JSON data for the `blog.html` page, which requests it to render the articles list.

You will need to import the file `data/articles.json` in `app.js`.

<br>

To test the route, navigate to [`localhost:5005/api/articles`](http://localhost:5005/api/articles) in your browser. <br>If you set up the route correctly, you should see the *JSON data with articles* sent in the response.

<br>

<details>

  <summary><b>Solution</b></summary>

  <p align="center">
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-express-basic-server/05-lab-express-basic-server-api-articles-route.png" alt="articles route" width="750" />
  </p>

  <br>

  <hr>

</details>

<br>

### Bonus: Iteration 7 | Create a 404 Route
Create a route handler for **`GET`** **`*`** that responds back with the provided HTML file `views/not-found.html`.

**Note:** This route handler should be placed after all the other route handlers as a catch-all for any other routes that are not defined.


<br>

<details>

  <summary><b>Solution</b></summary>

  <p align="center">
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-express-basic-server/06-lab-express-basic-server-404-route.png" alt="" width="750" />
  </p>

  <br>

  <hr>

</details>

<br>


### Bonus: Iteration 8 | Customize the Home Page

Update the `home.html` page and add your personal information, including your name, photo, short bio, and links to your GitHub and LinkedIn profiles.
Additionally, you can update the static JSON data for the projects section to include your own projects.

<br>

Happy coding! 💙

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
  <summary>When I try to run the app, I get an error "command not found: nodemon"</summary>

  <br>
  Make sure you have <code>nodemon</code> installed on your machine:

  ```bash
  npm install -g nodemon
  ```

  This will install nodemon globally on your system, making it available to all of your projects.

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
  <summary>My links are not working properly. Should I use a relative or an absolute path?</summary>

  <br>

  When linking to other pages within your Express app, as a general rule you should use relative paths that start with a forward slash `/`.

  This way you ensure that the links will work correctly both in your development environment and when the app is deployed.

  For example, instead of linking to a page with an absolute path like this:

  ```html
  <a href="http://yourdomain.com/contact"> Contact </a>
  ```

  You should use a relative path starting with a forward slash `/` like this:

  ```html
  <a href="/contact"> Contact </a>
  ```

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I got the error "Error: listen EADDRINUSE: Address already in use". How do I fix it?</summary>

  <br>
  
  This error means that the port is taken by another process that is still running on that port. 

  To fix the issue, you need to kill the process using the port and then run the command again. Here's how to do it:

  <br>

  #### On Mac/Linux

  To kill the process running on port `3000`, run the following command in the terminal:

  ```bash
  sudo kill -9 $(lsof -t -i:3000)   
  ```

  > **Important:** Replace the above example port *3000* with the port number of the process you are trying to kill.

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

  <br>

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
  <summary>I got the error "Refused to apply style ... ('text/html') is not a supported stylesheet MIME type". What should I do?</summary>

  <br>

  This error most commonly occurs when the browser attempts to load a resource (i.e., stylesheet) but the server instead returns an HTML page. For example, if there is an issue with the file path and the server is unable to serve the file, it may return a 404 HTML page.

  There are a few things you should look at to troubleshoot this:

  1. **Try accessing the file directly:** To verify that the server is returning an HTML page instead of the requested file, copy the file path and try to access the file directly from a new browser tab.

  2. **Check the file path**: Make sure that the file path used is correct and that the file actually exists in that location. If there is a typo or error in the file path, the server will not be able to find the file.

  3. **Check the static files middleware configuration**: Check that your `express.static` middleware, which serves static files, is correctly configured and that the right folder path and name are specified. If this middleware is not set up correctly, the server will not send the images when requested.
   
  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I am getting an error: "not defined". How do I fix it?</summary>

  <br>

  The "ReferenceError: variable is not defined" error in JavaScript occurs when you try to access a variable or a function that has not been defined yet or is out of scope. 
  To fix the issue, check that you have defined the variable or function that you are trying to use and double-check the spelling to make sure you are using the correct name.
  In case the variable or a function is defined in another file, make sure that the file has been imported or loaded correctly.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I am unable to push changes to the repository. What should I do?</summary>

  <br>
  
  There are a couple of possible reasons why you may be unable to *push* changes to a Git repository:

   1. **You have not committed your changes:** Before you can push your changes to the repository, you need to commit them using the `git commit` command. Make sure you have committed your changes and try pushing again. To do this, run the following terminal commands from the project folder:

   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

   2. **You do not have permission to push to the repository:** If you have cloned the repository directly from the main Ironhack repository without making a *Fork* first, you do not have write access to the repository.
      To check which remote repository you have cloned, run the following terminal command from the project folder:

    ```bash
    git remote -v
    ```

  If the link shown is the same as the main Ironhack repository, you will need to fork the repository to your GitHub account first, and then clone your fork to your local machine to be able to push the changes.

  Note: You may want to make a copy of the code you have locally, to avoid losing it in the process.

  <br>

  [Back to top](#faqs)

</details>


