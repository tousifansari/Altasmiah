const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use('/assets', express.static(__dirname + '/assets'));


app.use(require("./allRoutes/AllRouter"));


const port = process.env.PORT || 3000;

app.listen(port, ()=>
{
    console.log("server running", port);
})