const { PORT } = require('./common/config');
const app = require('./app');
const connectToDB = require('./db');

const logs = require('./common/log');

process.on('unhandledRejection', reason => {
  logs.error(`Unhandled Rejection at promice by reason: ${reason}`);
});

process.on('uncaughtException', err => {
  logs.error(`Uncaught Exception ${err}`);
});
connectToDB(() => {
  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
});
