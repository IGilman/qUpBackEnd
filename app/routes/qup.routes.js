module.exports = app => {
    const qup = require("../controllers/qup.controller.js");
    const { checkJwt } = require("../authz/check-jwt.js");

    var router = require("express").Router();

    // Create a new Profile
    router.post("/", qup.create);

    // Retrieve all Profiles
    router.get("/", checkJwt, qup.findAll);

    app.use('/api/qup', router);
};