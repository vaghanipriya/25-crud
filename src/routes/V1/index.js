const express = require("express");

const cartoonRoute = require("./cartoon_routes");
const bookRoutes = require("./book_routes");
const movieRoutes = require("./movie_routes")
const adminRoutes = require("./admin_routes")

const  router = express();

router.use("/cartoon", cartoonRoute);
router.use("/book",bookRoutes)
router.use("/movie",movieRoutes)
router.use("/admin",adminRoutes)

module.exports = router;
