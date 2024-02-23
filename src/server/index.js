import Fastify from 'fastify';

import { registerHandlers } from './handlers';

const SERVER_PORT = 3001;

const server = Fastify({
    logger: false,
});

registerHandlers(server);

server.listen({ port: SERVER_PORT }, (err, address) => {
    if (err) throw err;
    console.log('Server started, port: ', SERVER_PORT);
});
