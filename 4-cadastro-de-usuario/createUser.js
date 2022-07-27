const createUser = (request) => {
  const requiredFields = ['name', 'email', 'password', 'passwordConfirmation'];
  for (const field of requiredFields) {
    if (!request.body[field]) {
      return {
        status: 400,
        body: new Error(`Parametro ausente: ${field}`)
      }
    }
  }

  if (request.body.password !== request.body.passwordConfirmation) {
    return {
      status: 400,
      body: new Error('A senha e a confirmação não conferem')
    }
  }

  return {
    status: 200,
    body: request.body
  }
};

module.exports = { createUser };