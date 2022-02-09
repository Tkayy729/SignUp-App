const express = require("express");
const app = express();
const routerUrls = require("./routes/routes");
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, ()=>console.log("DATABASE CONNECTED"))

app.use(express.json());
app.use(cors());
app.use("/app", routerUrls )
app.listen(5000, () => {
  console.log("listening on port 5000");
});



