import { registerPostAuthHandler } from './post-auth-handler';

export const registerHandlers = server => {
    registerPostAuthHandler(server);
};
