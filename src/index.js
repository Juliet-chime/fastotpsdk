
"use strict";

const {cache} = require('./utils/configs')
const {CLIENT_API_KEY} = require('./utils/constant')

const FastOtp = function({ clientApiKey }) {
    if (!clientApiKey)
      throw Error("clientApiKey are required params");
  
    if (!(this instanceof FastOtp)) {
      return new FastOtp({ clientApiKey });
    }
    cache.set(CLIENT_API_KEY,clientApiKey)
    this.generate = require("./controllers/generateOtp");
    this.get = require("./controllers/getOtp");
    this.validate = require("./controllers/validateOtp");
  };

module.exports = FastOtp;
module.exports.FastOtp = FastOtp;
module.exports.default = FastOtp;