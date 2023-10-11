// mongoose connection
const mongoose = require("mongoose");

// connect to mongoDB database using mongoose connect method and pass in the database url and options
mongoose.connect("mongodb://127.0.0.1:27017/socialNetworkDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
