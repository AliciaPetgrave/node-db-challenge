const server = require('./api/server');

const PORT = process.env.PORT || 5005;

server.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});