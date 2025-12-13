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

// NEEDS TO READ THE POST AND HAVE IT APPEAR ON THE PAGE BELOW THE WRITING AREA
app.post("/submitpost", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    const contactResponse = "Thanks " + req.body["name"] + "! We will email you shortly at " + req.body["email"] + " and respond to your message.";
    res.render("contact.ejs", { emailSent: contactResponse});
    sconsole.log(req.body);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});