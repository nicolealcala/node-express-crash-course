# Node.js and Express.js Crash Course

<br/>

This project is created as part of **The Odin Project** Node.js curriculum. It serves as my _learning project_, where I build a simple web server in two versions: (1) using only **core Node.js modules** and (2) using **Express.js** framework. The Server responds with basic HTML pages and demonstrates how a minimal backend works under the hood.

<br/>

## 🚀 Project Overview

#### A. Understanding the fundamental concepts behind how servers work in Node.js. It includes:

- Creating a basic HTTP server using the built-in `http` module.
- Handling incoming requests and send back different HTML responses.
- Learning how routing works at a low level.
- Understanding how Node.js interacts with the browser.

#### B. Understanding Express.js. This includes:

- Creating an express app using the `express` module.
- Handling incoming requests and send back static and dynamic HTML responses with `EJS` view engine.
- Understand how Express.js simplifies and enhances Node.js web server creation and request handling.

<br/>

## 📂 Project Structure

```
project-folder/
│
├── express/
│ ├── app-static.js # Express app responding with static HTML pages
│ ├── app.js # Express app responding with dynamic HTML pages using EJS view engine
├── models/
│ ├── blog.js
├── public/
│ ├── script.js
│ └── styles.css
├── utils/
│ ├── files.js # Utility functions for working with files using the `fs` module
├── views/
│ ├── dynamic/
│ │ ├── 404.ejs
│ │ ├── about.ejs
│ │ ├── create.ejs
│ └──── index.ejs
│ ├── static/
│ │ ├── 404.html
│ │ ├── about.html
│ │ ├── contact.html
│ └──── index.html
├── package-lock.json
├── package.json
├── README.md
└── server.js # Web server built with pure Node.js
```

<br/>

## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com)
- [EJS](https://ejs.co/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- HTML5

<br/>

## ▶️ How to Run the Project

**1.** Make sure Node.js is installed:

```
node -v
```

**2.** Clone or download this project.

**3.** Navigate into the project directory:

```
cd project-folder
```

**4.** Run the server

1.  To run the pure Node.js web server, enter the following command:

    ```
    node server.js
    ```

2.  To run the Express app, run the following:

    ```
    cd express
    node app-static
    ```

    **or**

    ```
    cd express
    node app
    ```

    _Note:_ `app` serves dinamic HTML pages, while `app-static` serves constant, static HTML pages.

**5.** Open your broswer and visit

```
http://localhost:3000
```

<br/>

---

<br/>

## ✨ Future Improvements

- Add more routes and content.
- Add styling to static and dynamic pages.

<br/>

## 📜 Acknowledgements

Huge thanks to **The Odin Project** and **Net Ninja** for providing a guided and beginner-friendly learning path for aspiring developers.

_Really_ helpful resourcees:

- [Node.js Tutorial for Beginners: Learn Node in 1 Hour](https://youtu.be/TlB_eWDSMt4?si=qDiHGoT2yVyPEFpZ)
- [Node.js Crash Course](https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU)

<br/>

---

<br/>

Happy coding! 👩‍💻🎉
