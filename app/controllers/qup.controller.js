const { Qups, Games } = require('../models/qup.models');

// Create and Save a new profile
exports.create = (req, res) => {
    // Validate request
    if (!req.body.username) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Profile
    const qup = new Qups({
        username: req.body.username,
        game: req.body.game,
        kd: req.body.kd,
        playStyle: req.body.playStyle,
        discord: req.body.discord ? req.body.discord : false
    });

    // Save Profile in the database
    qup.save(qup)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Profile."
            });
        });
};

// Retrieve all profiles from the database for profiles.
exports.findAll = (req, res) => {
    const game = req.query.game;
    var condition = game ? { game: { $regex: new RegExp(game), $options: "i" } } : {};

    Qups.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving profiles."
            });
        });
};

//find all games
exports.findAllGames = (req, res) => {

    Games.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving games."
            });
        });
};

// Find a single profile with an id
exports.findOne = (req, res) => {

};

// Update a profile by the id in the request
exports.update = (req, res) => {

};

// Delete a profile with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all profiles from the database.
exports.deleteAll = (req, res) => {

};

// Find all published profiles
exports.findAllPublished = (req, res) => {

};