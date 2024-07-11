const express = require("express");
const cors = require("cors");

const uploadRoute = require("./routes/uploadRoute");
const updateRoute = require("./routes/updateRoute");
const deleteRoute = require("./routes/deleteRoute");
const fetchRoute = require("./routes/fetchRoute");

const app = express();
const PORT = 9000;

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
//upload, delete, updatem, fetch

app.use("/upload", uploadRoute);
app.use("/update", updateRoute);
app.use("/delete", deleteRoute);
app.use("/fetch", fetchRoute);
