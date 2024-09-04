const express = require("express");
const { insertUser } = require("./Postgresql/Insertion");
const app = express();

app.use(express.json());  // Ensure this middleware is declared before using routes

app.get("/", (req, res) => {
    res.send("Hello World");

    // Call the insertUser function
    insertUser('John Doe', 'john.doe@example.com', "demo@123", '1231231', '12312313');
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
