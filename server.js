const express = require("express");
const cors = require("cors");
const { clientOrigins, serverPort } = require("./app/config/env.dev");

const app = express();

app.use(cors({ origin: clientOrigins }));

const db = require("./app/models")

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Server.js is running" });
});



require("./app/routes/qup.routes")(app);

app.listen(serverPort, () => {
    console.log(`Server is running on port ${serverPort}.`);
});



