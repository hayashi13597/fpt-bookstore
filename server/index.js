const express = require("express");
require("dotenv").config();
const cors = require("cors");

const authApi = require("./routes/auth");
const orderApi = require("./routes/orderApi");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('./public'));

authApi(app);
orderApi(app);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
