const { cartoon_service } = require("../services");

const create_cartoon = async (req, res) => {
    try {
        const new_cartoon = await cartoon_service.create_cartoon_S(req.body);
        res.status(200).json({
            success: true,
            data: new_cartoon,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_cartoon = async (req, res) => {
    try {
        const cartoon_list = await cartoon_service.get_cartoon_S(req.body);

        res.status(200).json({
            success: true,
            data: cartoon_list,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_cartoon = async (req, res) => {
    try {
        const id = req.body.id;
        const result = await cartoon_service.delete_cartoon_S(id);

        console.log(result);

        res.status(200).json({
            id: id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_cartoon = async (req, res) => {
    try {
        const id = req.params.cartoon_id;
        const data = req.body;

        // Service
        const result = await cartoon_service.update_cartoon_S(id, data);

        if (!result) {
            throw new Error("not updatee");
        }

        res.status(200).json({
            success: true,
            message: "update data..",
            data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    create_cartoon,
    get_cartoon,
    delete_cartoon,
    update_cartoon,
};
