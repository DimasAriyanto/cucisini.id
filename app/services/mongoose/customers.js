const Customer = require('../../api/v1/customers/model');

const {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} = require('../../errors');

const { createTokenCustomer, createJWT } = require('../../utils');

const { otpMail } = require('../mail');

const signupCustomer = async (req) => {
  const { firstName, lastName, email, password } = req.body;

  // jika email dan status tidak aktif
  let result = await Customer.findOne({
    email,
    status: 'tidak aktif',
  });

  if (result) {
    result.firstName = firstName;
    result.lastName = lastName;
    result.email = email;
    result.password = password;
    result.otp = Math.floor(Math.random() * 9999);
    await result.save();
  } else {
    result = await Customer.create({
      firstName,
      lastName,
      email,
      password,
      otp: Math.floor(Math.random() * 9999),
    });
  }
  await otpMail(email, result);

  return result;
};

const activateCustomer = async (req) => {
  const { otp, email } = req.body;
  const check = await Customer.findOne({
    email,
  });

  if (!check) throw new NotFoundError('Customer belum terdaftar');

  if (check && check.otp !== otp) throw new BadRequestError('Kode otp salah');

  const result = await Customer.findByIdAndUpdate(
    check._id,
    {
      status: 'aktif',
    },
    { new: true }
  );

  return result;
};

const signinCustomer = async (req) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError('Please provide email and password');
  }

  const result = await Customer.findOne({ email: email });

  console.log(result);

  if (!result) {
    throw new UnauthorizedError('Invalid Credentials');
  }

  if (result.status === 'tidak aktif') {
    throw new UnauthorizedError('Akun anda belum aktif');
  }

  const isPasswordCorrect = await result.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new UnauthorizedError('Invalid Credentials');
  }

  const token = createJWT({ payload: createTokenCustomer(result) });

  return token;
};

module.exports = {
  signinCustomer,
  activateCustomer,
  signupCustomer,
};