import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});


                                        // FINISH THIS!!!!
// setup proper contact form handling
//app.get("/submit", (req, res) => {
//    res.render
//});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});