const { book_service } = require("../services");

const create_book = async (req, res) => {
    try {
        //   services
        const data = req.body;
        const new_book = await book_service.create_book_S(data);
        res.status(200).json({
            success: true,
            data:new_book,
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

        const get_book = await book_service.get_book_S();
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

const delate_book = async (req, res) => {
    try {
        //  services
        const id = req.body.id;
        const result = await book_service.delate_book_S(id);

        console.log(result);

        res.status(200).json({
            id: id,
        });
    } catch (error) {
        //    error
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_book = async (req, res) => {
    try {
        //   services
        const id = req.params.book_id;
        const data = req.body;

        // Service
        const result = await book_service.update_book_S(id, data);

        if (!result) {
            throw new Error("not updatee");
        }

        res.status(200).json({
            success: true,
            message: "update data..",
            data,
        });
    } catch (error) {
        //  error

        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    create_book,
    get_book,
    delate_book,
    update_book,
};
