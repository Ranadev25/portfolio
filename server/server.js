const app = require("./app");
const cannectDb = require("./database/dbCannect");
const port = process.env.PORT || 5280;

app.listen(port, async () => {
  console.log(`server is running at http://localhost:${port}`);
  await cannectDb();
});
