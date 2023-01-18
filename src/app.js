const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = 8000;

//We need Static website path for this we can getting from the using one line of code 

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

// ROuting
app.get("/", (req,res) => {
    res.render("index");
})

app.get("/about", (req,res) => {
    res.render("about");
})

app.get("/weather", (req,res) => {
    res.render("weather");
})

app.get("*", (req,res) => {
    res.render("404error",{
        errorMsg: "Oops Page Not Found"
    })
})

app.listen(port, () => {
    console.log(`Perfectly Working Our Port at ${port}`);
})