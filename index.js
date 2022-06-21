const express = require("express");
const cors = require('cors')
require('dotenv').config();
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const routes = require("./routes/flightRoute");
const mongoose = require('mongoose');

const app = express();

app.use(json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

const url = process.env.DB;
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

const db = mongoose.connection;
db.on("error", (err)=>{
    console.log("error connecting to database "+err)
});
db.once("open", function () {
  console.log("Connected successfully");
});

app.use("/", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
