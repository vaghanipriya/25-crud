const mongoose = require("mongoose");

const movie_Schema = mongoose.Schema(
    {
        movie_name: {
            type: String,
            trim: true,
        },
        movie_rating: {
            type: String,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const movie = mongoose.model("movie", movie_Schema);

module.exports = movie;
