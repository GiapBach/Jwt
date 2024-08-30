const express = require("express");
const path = require("path");

const app = express();
const PORT = 3013;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.render("form");
});

app.listen(PORT, () => console.log("Server started on port:", PORT));
