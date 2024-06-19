const { CLIENT_API_KEY, BASE_URL } = require("./constant");
const { cache } = require("./configs");
const { default: axios } = require("axios");

module.exports = {
  makeRequest: async ({
    path,
    method = "POST",
    headers = {},
    data = null,
    params = null,
  }) => {

    const config = {};

    const clientApiKey = cache.get(CLIENT_API_KEY);
    if (!!clientApiKey) {
      let header = {
        ...headers,
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": clientApiKey,
      };
      config.headers = header;
    }

    if (data) config.data = data;
    if (params) config.params = params;

    try{
      const response = await axios.request({
        url: `${BASE_URL}/${path}`,
        method,
        ...config,
      });
      return response;
    } catch(error){
     throw error.response
    }


  },
};
