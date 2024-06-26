const { Movie } = require("../model");

const create_movie_S = (data) => {
    return Movie.create(data);
};


module.exports = {
    create_movie_S
}