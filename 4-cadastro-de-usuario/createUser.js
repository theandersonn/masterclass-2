const createUser = (request) => {
  if (!request.body.name) {
    return {
      status: 400,
      body: new Error('Parametro ausente: name')
    }
  }

  if (!request.body.email) {
    return {
      status: 400,
      body: new Error('Parametro ausente: email')
    }
  }
};

module.exports = { createUser };