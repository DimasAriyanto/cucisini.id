const Users = require('../../api/v1/users/model');
const LaundryPartner = require('../../api/v1/laundryPartner/model');
const { BadRequestError } = require('../../errors');

const createLaundryPartner = async (req) => {
  const { name, email, password, confirmPassword, nameLaundryPartner, address, contact, portofolio } = req.body;

  if (password !== confirmPassword) {
    throw new BadRequestError('Password dan Konfirmasi password tidak cocok');
  }

  const result = await LaundryPartner.create({
    name: nameLaundryPartner,
    address,
    contact,
    portofolio,
  });

  const users = await Users.create({
    name,
    email,
    password,
    laundryPartner: result._id,
  });

  return users;
};

module.exports = { createLaundryPartner };