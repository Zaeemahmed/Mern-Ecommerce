const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");

const app = express();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.lzpcy.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("CONNECTED"))
  .catch((err) => console.log(err));

//mongodb+srv://admin:<password>@cluster0.pmn5n.mongodb.net/<dbname>?retryWrites=true&w=majority

app.use(express.json());
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.status(200).json({
    text: "hello",
  });
});
app.listen(process.env.PORT, () => {
  console.log("server has started running");
});
