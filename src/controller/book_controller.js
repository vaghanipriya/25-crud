const { book_service } = require("../services");

const create_book = async (req, res) => {
    try {
        //   services
        const data = req.body;
        const new_book = await book_service.create_book_S(data);
        res.status(200).json({
            success: true,
            data: new_book,
        });
    } catch (error) {
        //   error

        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_book = async (req, res) => {
    try {
        // services
        const data = req.body;
        const get_book = await book_service.create_book_S(data);
        res.status(200).json({
            success: true,
            data: get_book,
        });
    } catch (error) {
        //    error
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    create_book,
    get_book,
};
