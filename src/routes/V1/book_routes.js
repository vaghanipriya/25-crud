const express = require("express");
const { book_controller } = require("../../controller");

const router = express.Router();

router.post(
    "/create-book",
    // controller
    book_controller.create_book
);

router.get(
    "/get-book",
    // controller
    book_controller.get_book
);
router.delete(
    "/delete-book",
    // controller
    book_controller.delate_book
);

router.put(
    "/update-book/:book_id",
    // controller
    book_controller.update_book
);


module.exports = router;
