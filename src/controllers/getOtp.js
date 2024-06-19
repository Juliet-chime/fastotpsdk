const { makeRequest } = require("../utils/api");

module.exports = {
  getOtp: async ({ id }) => {
    // const data = {
    //   token,
    //   identifier,
    // };
    const response = makeRequest({
      path: `${id}`,
      method: "GET",
    });
    return response;
  },
};
