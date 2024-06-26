const express = require("express");

const cartoonRoute = require("./cartoon_routes");
const bookRoutes = require("./book_routes")

const  router = express();

router.use("/cartoon", cartoonRoute);
router.use("/book",bookRoutes)

module.exports = router;
