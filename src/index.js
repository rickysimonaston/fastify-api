// require the fastify framework and instantiate it
const fastify = require('fastify')({
  logger: true,
});

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

// Run the server
const start = async () => {
  try {
    await fastify.log.info(
      `Server listening on ${fastify.server.address().port}`
    );
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
