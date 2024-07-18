const express = require("express");
const cors = require("cors");

const uploadRoute = require("./routes/uploadRoute");
const updateRoute = require("./routes/updateRoute");
const deleteRoute = require("./routes/deleteRoute");
const fetchRoute = require("./routes/fetchRoute");
const { default: mongoose } = require("mongoose");

const app = express();
const PORT = 9000;

// Connect to mongodb
mongoose
  .connect(
    "mongodb+srv://hkumar05022002:harsh2004@cluster0.f4snkvx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("Error in connecting to MongoDB", err));

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
//upload, delete, update, fetch

app.use("/upload", uploadRoute);
app.use("/update", updateRoute);
app.use("/delete", deleteRoute);
app.use("/fetch", fetchRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
