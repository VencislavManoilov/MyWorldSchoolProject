const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get("/", function(req, res) {
    res.status(200);
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.get("/my", function(req, res) {
    res.status(200);
    if(req.query.what == "family" || req.query.what == "city" || req.query.what == "school" || req.query.what == "interests" || req.query.what == "friends") {
        res.sendFile(path.join(__dirname, "public", "my" + req.query.what, "my" + req.query.what + ".html"));
    } else {
        res.status(404);
        res.sendFile(path.join(__dirname, "public", "404 not found", "404.html"));
    }
})

app.listen(PORT, function() {
    console.log("Listening: " + PORT);
})

app.get("/test", function(req, res) {
    res.status(200);
    res.send("Ninja");
})