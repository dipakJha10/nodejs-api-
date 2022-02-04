const util = require("../utils/functions");
const axios = require("axios");

exports.handler = async (event) => {
  let result = await util.insertEmail(event.entity);
 // console.log("here is result",result)
  return result;
};

