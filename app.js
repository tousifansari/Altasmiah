const express = require("express");
const app = express();
const path = require("path");

// View engine setup
app.set("view engine", "ejs");
app.set('Views', '/Views'); // Ensure 'views' folder exists and contains your EJS files
// Static files
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(require("./allRoutes/AllRouter"));
// console.log('Views path:', app.get('views'));

const port = process.env.PORT || 10000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
