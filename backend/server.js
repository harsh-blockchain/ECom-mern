const app = require("./app");
require("dotenv").config({ path: "./config/config.env" });
const connectDatabase = require("./database");

//connecting database

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}.`);
});
