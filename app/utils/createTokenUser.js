const createTokenUser = (user) => {
    return {
      name: user.name,
      userId: user._id,
      email: user.email,
      laundryPartner: user.laundryPartner,
    };
  };
  
  const createTokenCustomer = (customer) => {
    return {
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      customerId: customer._id,
    };
  };
  
  module.exports = { createTokenUser, createTokenCustomer };