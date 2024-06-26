const express = require("express");
const { book_controller } = require("../../controller");

const router = express.Router();


router.post(
    "/create-book",
    // controller
    book_controller.create_book
)

router.get(
    "/get-book",
    // controller
     book_controller.get_book
)

module.exports = router