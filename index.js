import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const posts = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

// NEEDS TO READ THE POST AND HAVE IT APPEAR ON THE PAGE BELOW THE WRITING AREA
app.post("/posts", (req, res) => {
    //const { postTitle, postBody } = req.body;
    const postTitle = req.body["postTitle"];
    const postBody = req.body["postBody"];
    posts.unshift({             // unshift makes the latest post go to the top
        newPostTitle: postTitle,
        newPostBody: postBody,
        createdAt: new Date()
    });    
    res.redirect("/");

    // EDITING AND DELETING POSTS REQUIRE EVEN LISTENERS --------------------------------------------    <<<<<<<<<<<<<<<<<
});

app.post("/submit", (req, res) => {
    const contactResponse = "Thanks " + req.body["name"] + "! We will email you shortly at " + req.body["email"] + " and respond to your message.";
    res.render("contact.ejs", { emailSent: contactResponse});
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});