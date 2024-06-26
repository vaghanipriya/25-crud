const express = require("express");

const cartoonRoute = require("./cartoon_routes");
const bookRoutes = require("./book_routes");
const movieRoutes = require("./movie_routes")

const  router = express();

router.use("/cartoon", cartoonRoute);
router.use("/book",bookRoutes)
router.use("/movie",movieRoutes)

module.exports = router;
