const bodyParser = require("body-parser");
const morgan = require("morgan")
const express = require("express")
const app = express()
const mongoose = require("mongoose")
    // Routes:
const userRoutes = require("./routes/users")

require("dotenv").config()


mongoose.Promise = global.Promise;

const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD}@cluster0.0mmnm.mongodb.net/${process.env.DATA_BASE_NAME}?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Base de datos conectada"))
    .catch((err) => console.log("Error al intentar conectar a la base de datos..", err))

// settings
app.set("port", process.env.PORT || 8000);

// Middleware
app.use(morgan("dev"))
app.use(bodyParser.json())

// Routes
app.use("/users", userRoutes)



// static files

// Error handlers

//start server
app.listen(app.get("port"), () => {
    console.log("server on port", app.get("port"));
})