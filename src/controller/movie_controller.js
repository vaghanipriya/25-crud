const { movie_service } = require("../services");

const create_movie = async (req, res) => {
    try {
        //   services
        const data = req.body;
        const new_movie = await movie_service.create_movie_S(data);
        res.status(200).json({
            success: true,
            data: new_movie,
        });
    } catch (error) {
        //  err

        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_movie = async (req, res) => {
    try {
        //    services
        const get_movie = await movie_service.get_movie_S();
        res.status(200).json({
            success: true,
            data: get_movie,
        });
    } catch (error) {
        //  err

        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delate_movie = async (req, res) => {
    try {
        //    services
        const id = req.params.delete_id;
        const delete_movie = await movie_service.delate_movie_S(id);
        res.status(200).json({
            success: true,
            data: delete_movie,
        });
    } catch (error) {
        //  err

        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_movie = async (req, res) => {
    try {
        //    services
        const id = req.params.update_id;
        const data = req.body;
        const update_movie = await movie_service.update_movie_S(id, data);
        res.status(200).json({
            success: true,
            data: update_movie,
        });
    } catch (error) {
        //  err

        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    create_movie,
    get_movie,
    delate_movie,
    update_movie,
};
