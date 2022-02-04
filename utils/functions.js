const db = require("../db/connection");
const dbServices = require("../models/model");
const subscriptionServices = dbServices.subscriptions;
const axios = require("axios");

const insertEmail = async (entity) => {
  try {
    let response;
    let result = await subscriptionServices
      .create(entity);
    if (result.email) {
      let notificationResult = await sendNotifications(entity);
      response = notificationResult;

    } else {
      response = {
        err: result,
        type: "DB connection"
      }
    }
    return response;

  } catch (error) {
    return error;
  }

}

const sendNotifications = async (entity) => {
  let response={};
  return await axios
    .post(
     process.env.NOTIFICATION_TRIGGER,
      entity
    ).then((result) => {
       response.data=result.response.data;
       response.status=result.response.status;
       response.statusText=result.response.statusText;
       return response;
       
    }).catch((error) => {
      response.data=error.response.data;
      response.status=error.response.status;
      response.statusText=error.response.statusText;
      return response;
    })

}

module.exports = {
  insertEmail,
};
