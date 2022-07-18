const express = require("express");
const app = express();

//connect db
// require('./db/db');

app.get("/", (req, res) => res.send("Server is up and running"));

const PORT = process.env.PORT || 5099;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));