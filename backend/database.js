const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/config.env" });
mongoose.set("strictQuery", true);

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(
        "Database connected successfully : `${data.connection.host}`"
      );
    });
};

module.exports = connectDatabase;
