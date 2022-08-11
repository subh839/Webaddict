
//MVC structure 
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();
// cors req
app.use(cors());
app.use(express.json());
//connecting mongodb
const CONNECTION_URL ='mongodb+srv://shubha:shubha1234@cluster0.ezibl.mongodb.net/?retryWrites=true&w=majority';
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion is Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server is getting started on port 5000");
});
