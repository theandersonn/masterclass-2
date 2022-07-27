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

  it('Deve retornar 400 se a confirmação de senha não for declarada', () => {
    const request = {
      body: {
        name: 'John Doe',
        email: 'johndoe@mail.com',
        password: '123',
        // passwordConfirmation: '123'
      }
    };
  
    const response = createUser(request);
  
    expect(response.status).toBe(400);
    expect(response.body).toEqual(new Error('Parametro ausente: passwordConfirmation'));
  });

  it('Deve retornar 400 se a senha não for igual a confirmação', () => {
    const request = {
      body: {
        name: 'John Doe',
        email: 'johndoe@mail.com',
        password: '123',
        passwordConfirmation: '123456'
      }
    };
  
    const response = createUser(request);
  
    expect(response.status).toBe(400);
    expect(response.body.password).toEqual(response.body.passwordConfirmation);
    expect(response.body).toEqual(new Error('A senha e a confirmação não conferem'));
  });

  it('Deve retornar 200 se todos os valores forem válidos', () => {
    const request = {
      body: {
        name: 'John Doe',
        email: 'johndoe@mail.com',
        password: '123',
        passwordConfirmation: '123'
      }
    };
  
    const response = createUser(request);
  
    expect(response.status).toBe(200);
    expect(response.body).toEqual(response.body);
  });
});