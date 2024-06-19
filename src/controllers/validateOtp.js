const { makeRequest } = require("../utils/api");

module.exports = {
  validateOtp: async ({ token, identifier }) => {
    const data = {
      token,
      identifier,
    };
    const response = makeRequest({
      path: "validate",
      method: "POST",
      data: data,
    });
    return response;
  },
};
