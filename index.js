// Desc: Main entry point for the server
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

// Desc: Set up port and app
const PORT = 3001;
const app = express();

// Desc: Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Desc: Start server after DB connection
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
