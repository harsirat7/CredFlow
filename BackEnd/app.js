const config = require("./config");
const express = require("express");
const app = express();
const router = require("./router");


app.use(express.urlencoded({ extended: false }));



app.use("/", router);

app.listen(port, () => {
    console.log(`Server Running at ${config.app.url}:${config.app.portNumber}`);
});