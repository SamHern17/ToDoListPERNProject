const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

const port = 5000;

//middleware
app.use(cors());

app.use(express.json()) // allows us to access the req.body

//ROUTES//

//get all todos

//get a todo

//create a todo

//update a todo

//delete a todo

app.listen(port, () => {
    console.log(`App is running on port ${port}.`);
});