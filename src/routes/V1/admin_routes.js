const express = require("express");
const { admin_controller } = require("../../controller");

const router = express.Router();

router.post(
    "/create-admin",
    // callback = controller
    admin_controller.create_admin
);
router.get(
    "/get-admin",
    // callback = controller
    admin_controller.get_admin
);

router.delete(
    "/delete-admin/:delete_id",
    // callback = controller
    admin_controller.delete_admin
);

router.put(
    "/update-admin/:update_id",
    // callback = controller
   admin_controller.update_admin
);

module.exports = router;
