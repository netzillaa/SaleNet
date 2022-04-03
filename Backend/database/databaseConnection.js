const mongoose = require("mongoose");

const startDbConnection = (URI) => {
  return mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAnyModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = { startDbConnection };
