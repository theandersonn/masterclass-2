const { createUser } = require('./createUser');

describe('SignUp Controller', () => {
  it('Deve retornar 400 se o nome não for declarado', () => {
    const request = {
      body: {
        // name: 'John Doe',
        email: 'johndoe@mail.com',
        password: '123',
        passwordConfirmation: '123'
      }
    };

    const response = createUser(request);

    expect(response.status).toBe(400);
    expect(response.body).toEqual(new Error('Parametro ausente: name'));
  });

  it('Deve retornar 400 se o email não for declarado', () => {
    const request = {
      body: {
        name: 'John Doe',
        // email: 'johndoe@mail.com',
        password: '123',
        passwordConfirmation: '123'
      }
    };

    const response = createUser(request);

    expect(response.status).toBe(400);
    expect(response.body).toEqual(new Error('Parametro ausente: email'));
  });

  it('Deve retornar 400 se a senha não for declarada', () => {
    const request = {
      body: {
        name: 'John Doe',
        email: 'johndoe@mail.com',
        // password: '123',
        passwordConfirmation: '123'
      }
    };

    const response = createUser(request);

    expect(response.status).toBe(400);
    expect(response.body).toEqual(new Error('Parametro ausente: password'));
  });
});