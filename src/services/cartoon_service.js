const { Cartoon } = require("../model");

const create_cartoon_S = (data) => {
    return Cartoon.create(data);
};

const get_cartoon_S = () => {
    return Cartoon.find();
};

const delete_cartoon_S = (id) => {
    return Cartoon.findByIdAndDelete(id);
};

const update_cartoon_S = (id, data) => {
    return Cartoon.findByIdAndUpdate(id, data);
};

module.exports = {
    create_cartoon_S,
    get_cartoon_S,
    delete_cartoon_S,
    update_cartoon_S
};
