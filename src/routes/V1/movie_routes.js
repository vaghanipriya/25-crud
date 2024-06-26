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
    movie_controller.get_movie
);

router.delete(
    "/delete-movie/:delete_id",
    // callback- controller
     movie_controller.delate_movie
);

router.put(
    "/update-movie/:update_id",
    // callback- controller
    movie_controller.update_movie
);


module.exports = router