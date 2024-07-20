const { StatusCodes } = require('http-status-codes');
const { signupCustomer, activateCustomer, signinCustomer } = require('../../../services/mongoose/customers');

const signup = async (req, res, next) => {
  try {
    const result = await signupCustomer(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const activate = async (req, res, next) => {
  try {
    const result = await activateCustomer(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const signin = async (req, res, next) => {
  try {
    const result = await signinCustomer(req);

    res.status(StatusCodes.OK).json({
      data: { token: result },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { signup, activate, signin };