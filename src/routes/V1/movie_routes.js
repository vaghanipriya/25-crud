const express = require("express");
const { movie_controller } = require("../../controller");

const router = express.Router();

router.post(
    "/create-movie",
    // callback- controller
    movie_controller.create_movie
);

router.get(
    "/get-movie",
    // callback- controller
    
);


module.exports = router