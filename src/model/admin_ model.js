const mongoose = require("mongoose");

const admin_Schema = mongoose.Schema(
    {
        // key
        admin_name: {
            type: String,
            trim: true,
        },
        admin_number: {
            type: Number,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const admin = mongoose.model("admin", admin_Schema);

module.exports = admin;
