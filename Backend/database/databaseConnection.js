//will use this file to refactor database connection in index
const mongoose = require("mongoose");

const startDbConnection = (URI) => {
  return mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("Database Connected"));
};

module.exports = { startDbConnection };
