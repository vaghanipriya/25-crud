const { admin_services } = require("../services");

const create_admin = async (req, res) => {
    try {
        //    services

        const data = req.body;
        const create_admin = await admin_services.create_admin_S(data);
        res.status(200).json({
            success: true,
            data: create_admin,
        });
    } catch (error) {
        //  err
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_admin = async (req, res) => {
    try {
        //    services
        const get_admin = await admin_services.get_admin_S();
        res.status(200).json({
            success: true,
            data: get_admin,
        });
    } catch (error) {
        //  err
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_admin = async (req, res) => {
    try {
        //  services

        const id = req.params.delete_id;
        const delete_data_ = await admin_services.delete_admin_S(id);

        res.status(200).json({
            success: true,
            data: delete_data_,
        });
    } catch (error) {
        //   error
        res.status(400).json({
            success: false,
            messsage: error.message,
        });
    }
};


const update_admin = async (req, res) => {
    try {
        //  services

        const id = req.params.update_id;
        const data = req.body;
        const update_data_ = await admin_services.update_admin_S(id,data);

        res.status(200).json({
            success: true,
            data: update_data_,
        });
    } catch (error) {
        //   error
        res.status(400).json({
            success: false,
            messsage: error.message,
        });
    }
};

module.exports = {
    create_admin,
    get_admin,
    delete_admin,
    update_admin
};
