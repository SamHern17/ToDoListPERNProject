const express = require("express");
const app = express();
const cors = require("cors");

const port = 5000;

//middleware
app.use(cors());

app.use(express.json()) // allows us to access the req.body

app.listen(port, () => {
    console.log(`App is running on port ${port}.`);
});