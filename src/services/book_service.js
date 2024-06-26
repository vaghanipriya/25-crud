const { Book } = require("../model");

const create_book_S = (data) => {
    return Book.create(data);
};

const get_book_S = () => {
    return Book.find();
};

const delate_book_S = (id) => {
    return Book.findByIdAndDelete(id);
};

const update_book_S = (id,data) => {
    return Book.findByIdAndUpdate(id,data)
}

module.exports = {
    create_book_S,
    get_book_S,
    delate_book_S,
    update_book_S
};
