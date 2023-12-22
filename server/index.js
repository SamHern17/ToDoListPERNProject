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
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newToDo = await pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *", [description]);
        res.json(newToDo.rows[0]);
    } catch (err){
        console.error(err.message);
    }
});

//update a todo

//delete a todo

app.listen(port, () => {
    console.log(`App is running on port ${port}.`);
});