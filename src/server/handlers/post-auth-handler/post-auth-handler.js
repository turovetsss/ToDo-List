export const ADMIN_SUCCESS_RESPONSE = {
    code: 200,
    body: { status: 'success' },
    headers: { Authorization: 'Bearer fake-admin-token' },
};

export const USER_SUCCESS_RESPONSE = {
    code: 200,
    body: { status: 'success' },
    headers: { Authorization: 'Bearer fake-user-token' },
};

export const INCORRECT_LOGIN_OR_PASSWORD_RESPONSE = {
    code: 422,
    body: { status: 'error', message: 'Incorrect login or password' },
};

export const BAD_REQUEST_RESPONSE = {
    code: 400,
    body: { status: 'error', message: 'Bad request' },
};

export const handler = body => {
    const { login, password } = body;

    if (login && password) {
        if (login === 'admin' && password === 'Admin123') {
            return ADMIN_SUCCESS_RESPONSE;
        }

        if (login === 'user' && password === 'User1234') {
            return USER_SUCCESS_RESPONSE;
        }

        return INCORRECT_LOGIN_OR_PASSWORD_RESPONSE;
    }

    return BAD_REQUEST_RESPONSE;
};

export const registerPostAuthHandler = server => {
    server.post('/auth', (request, reply) => {
        const { body, code, headers } = handler(request.body);

        if (headers) {
            for (const key in headers) {
                console.log('key', key);
                reply.header(key, headers[key]);
            }
        }

        reply.code(code).send(body);
    });
};
