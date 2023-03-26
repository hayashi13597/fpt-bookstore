const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const authRouter = require("./routes/auth");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fptbookstore.8ydbthz.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("MongonDB connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
