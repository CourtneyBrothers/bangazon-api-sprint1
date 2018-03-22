const express = require("express");
require("dotenv").config();
const app = express();
const routes = require("./routes/");

console.log('Hello from Slothful Sheep');


// middleware
app.use('/api/v1/', routes);


// error handling
app.use( (req, res, next) => {
    let error = new Error("Not found");
    error.status = 404;
    next(error)
});

app.use( (error, req, res, next) => {
    res.status ( error.status || 500 );
    res.json({
        message: "Error error error!",
        error: error.message
    })
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

