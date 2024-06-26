const { Book } = require("../model");

const create_book_S = (data) => {
    return Book.create(data);
};

const get_book_S = () => {
   return Book.find()
}

module.exports = {
    create_book_S,
    get_book_S
};
