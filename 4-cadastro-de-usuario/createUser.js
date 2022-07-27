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
};

module.exports = { createUser };