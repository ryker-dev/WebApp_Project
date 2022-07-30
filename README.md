# Web Applications project
This project was made for the Web Applications course. A lot of the code was taken from weekly assignments previously coded by me. Lecture materials were used for help.

# Usage
Copy the repository or download and extract the files. Run *npm install* to download dependencies.
```
git clone https://github.com/ryker-dev/WebApp_Project.git
npm install
```

The project can be served locally with the command `npm start`  
For development it is recommended to use `npm run dev` which uses nodemon to automatically update the server to reflect changes when a file is saved.  

To enter the webpage connect to `http://localhost:1234/` or to `http://localhost:PORT` with the respective port assigned in *.env*

# Documentation

## Backend
Backend has been created with Express and served on port 1234 unless otherwise specified by a *PORT* variable in a */.env* file.

The folder */routes* contains the *GET* requests to load and render pages.
The folder */api* contains *GET* and *POST* requests. The api files are used to: login, register, and both fetch and create comments and threads. **These files do not render pages but provide data!**

Authentication is done with JWT tokens with an expiration of 30 minutes. **The secret for the server should be placed in a /.env file with the name SECRET!**
```
SECRET=mysecret1234
```
To check if your secret is secure use https://jwt.io/

## Databse
Database is MongoDB with mongoose. Models can be found in the */models* folder. Database stores users, comments, and posts.

## Front-end
__Does not use frontside frameworks.__ Pages are made with PUG templates.  
Materialize used for presentation and responsive design. Application will adapt to mobile screens.

# Mandatory requirements
- [X] Backend with Node.js
- [X] Backend does not use other languages apart from JS
- [X] Utilizes a database
- [X] Users can register and login
- [X] Uses JWT
- [X] Only authenticated users can post and comment
- [X] Non-authenticated users can see posts and comments
- [X] A page containing all posts with possibility to open individual posts
- [X] Responsive design
- [X] Has documentation describing the technology choices, installation, and user manual

# Extra features
- [X] Highlighting library with *highlightjs*
