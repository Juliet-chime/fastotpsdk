const { makeRequest } = require("../utils/api");

module.exports = {
  generateOtp: async ({ type, identifier, email, validity, token_length }) => {
    const data = {
      type,
      identifier,
      delivery: {
        email,
      },
      validity,
      token_length,
    };
    const response = makeRequest({
      path: "generate",
      method: "POST",
      data: data,
    });
    return response;
  },
};
