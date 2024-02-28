const { handler, ADMIN_SUCCESS_RESPONSE, INCORRECT_LOGIN_OR_PASSWORD_RESPONSE, BAD_REQUEST_RESPONSE, USER_SUCCESS_RESPONSE } = require('./post-auth-handler');

describe('POST /auth handler', () => {
    it('Auth successfully as admin (200)', () => {
        expect(handler({ login: 'admin', password: 'Admin123' })).toEqual(ADMIN_SUCCESS_RESPONSE);
    });

    it('Auth successfully as user (200)', () => {
        expect(handler({ login: 'user', password: 'User1234' })).toEqual(USER_SUCCESS_RESPONSE);
    });

    it('Incorrect login or password (422)', () => {
        expect(handler({ login: 'admin', password: 'Admin1234' })).toEqual(INCORRECT_LOGIN_OR_PASSWORD_RESPONSE);
    });

    it('Bad request (400)', () => {
        expect(handler({ login: 'admin' })).toEqual(BAD_REQUEST_RESPONSE);
    });
});
