const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connectToDB = cb => {
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    db.dropDatabase();
    console.log('DB is connected!');
    cb();
  });
};

module.exports = connectToDB;
