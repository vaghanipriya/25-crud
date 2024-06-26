const mongoose = require("mongoose");

const book_Schema = mongoose.Schema(
    {
        book_name: {
            type: String,
            trim: true,
        },

        book_author: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const book = mongoose.model("/book", book_Schema);

module.exports = book;
