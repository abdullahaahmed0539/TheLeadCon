const app = require("./app");
require("dotenv").config();

//Starting up server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.clear();
  console.log(`Running on port ${PORT}.`);
});
