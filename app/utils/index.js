const {
    createJWT,
    isTokenValid,
  } = require('./jwt');

  const {
    createTokenUser,
    createTokenCustomer,
  } = require('./createTokenUser');
  
  module.exports = {
    createJWT,
    isTokenValid,
    createTokenUser,
    createTokenCustomer,
  };