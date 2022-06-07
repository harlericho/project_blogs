const app = require("./config/app");

app.listen(app.get("port"), (err) => {
  if (err) throw err;
  console.log("Server running on http://localhost:" + app.get("port"));
});
