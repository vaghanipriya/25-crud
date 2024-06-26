const express = require("express");
const { cartoon_controller } = require("../../controller");

const router = express.Router();

router.post(
    "/create-cartoon",
    // callback- controller
    cartoon_controller.create_cartoon
);

router.get(
    "/get-cartoon",
    // callback- controller
    cartoon_controller.get_cartoon
);

router.delete(
    "/delete-cartoon",
    // callback- controller
    cartoon_controller.delete_cartoon
);

router.put(
    "/update-cartoon/:cartoon_id",
    // callback- controller
    cartoon_controller.update_cartoon

);

module.exports = router;
