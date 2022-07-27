const createUser = (request) => {
  const requiredFields = ['name', 'email', 'password'];
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