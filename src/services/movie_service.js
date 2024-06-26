const { Movie } = require("../model");

const create_movie_S = (data) => {
    return Movie.create(data);
};

const get_movie_S = () => {
    return Movie.find();
};

const delate_movie_S = (id) => {
    return Movie.findByIdAndDelete(id);
};

const update_movie_S = (id,data) => {
    return Movie.findByIdAndUpdate(id,data);
};



module.exports = {
    create_movie_S,
    get_movie_S,
    delate_movie_S,
    update_movie_S
};
