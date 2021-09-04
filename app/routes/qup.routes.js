module.exports = app => {
    const qup = require("../controllers/qup.controller.js");
    const { checkJwt } = require("../authz/check-jwt.js");

    var router = require("express").Router();

    // Create a new Profile
    router.post("/", qup.create);

    // Retrieve all Profiles

    //ADD THE JWT BACK IN AFTER TESTING
    //router.get("/", checkJwt, qup.findAll);

    router.get("/", qup.findAll);

    router.get("/games", qup.findAllGames)

    app.use('/api/qup', router);
};