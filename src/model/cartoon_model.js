const mongoose = require("mongoose");

const cartoon_Schema = mongoose.Schema(
    {
        cartoon_name: {
            type: String,
            trim: true,
        },
        cartoon_rating: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);
const cartoon = mongoose.model("cartoon", cartoon_Schema);
module.exports = cartoon;
