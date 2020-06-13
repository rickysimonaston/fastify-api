// require the fastify framework and instantiate it
const fastify = require('fastify')({
  logger: true,
});
// Import swagger
const swagger = require('./config/swagger');
// Register swagger
fastify.register(require('fastify-swagger'), swagger.options);

// Declare a route
const routes = require('./routes');
routes.forEach((route, index) => {
  fastify.route(route);
});
// Run the server
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.swagger();
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();

// Require Mongoose
const mongoose = require('mongoose');
// Connect to DB
mongoose
  .connect('mongodb://localhost/mycargarage')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));
