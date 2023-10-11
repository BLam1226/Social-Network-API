// Desc: This file is the main router for the application. It will route to the api routes and send a 404 error if the route is not found.
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("404 Error");
});

module.exports = router;
