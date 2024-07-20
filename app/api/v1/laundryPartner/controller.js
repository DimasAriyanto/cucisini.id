const { StatusCodes } = require('http-status-codes');
const { createLaundryPartner } = require('../../../services/mongoose/user');

const createCMSLaundryPartner = async (req, res, next) => {
  try {
    const result = await createLaundryPartner(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createCMSLaundryPartner
};