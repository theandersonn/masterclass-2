const createUser = (request) => {
  return {
    status: 400,
    body: new Error('Parametro ausente: name')
  }
};

module.exports = { createUser };