const mongoose = require("mongoose");

const connectdb = () => {
    mongoose
        .connect("mongodb+srv://vaghanipriya23:vFs5yTgCF8sr9qw7@netflix.x9becpq.mongodb.net/")
        .then((res) => {
            if (res) {
                console.log("database successfuly");
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

module.exports = connectdb;
