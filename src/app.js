const express = require("express");
const path = require('path');
require("./db/conn");
const hbs = require('hbs');
const User = require("./models/usermsg");
const app = express();
const port = process.env.PORT || 8000;


// setting the path 
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")
// console.log(path.join(__dirname, "../public"))



// middleware
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.use(express.urlencoded({extended:false}))

// routing 
app.get("/", (req, res) => {
    res.render("index");
})


app.post("/contact", async(req, res) => {
    try {
        // res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render('index');

    } catch (error) {
        res.status(500).send(error);
    }
})

app.listen(port, ()=> {
    console.log(`Listening to the port ${port}`);
});