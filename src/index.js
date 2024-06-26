const experss = require("express");
const connectdb = require("./db/dbConnection");
const router  = require("./routes/V1");

const app = experss();

app.listen(9000, () => {
    console.log("hello....!!");
});

app.use(experss.json());


app.use("/V1",router)

connectdb();
