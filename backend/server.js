const express = require("express"); //import express which is a web application framework for Node.js
const cors = require("cors"); //cross origin resource sharing for connecting frontend and backend

const app = express(); //create an express application and store it in app
app.use(express.json());
app.use(cors()); //use the cors middleware to allow cross origin requests from the frontend

app.get("/", (req, res) => {
    res.send("Backend is running!"); //send a response to the client
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); //start the server on port 5001 and log a message to the console
