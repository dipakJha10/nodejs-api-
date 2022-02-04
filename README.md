# nodejs-api-

Steps to start the application:-

Need to install the lambda-node module to run the application in local

steps to install, run the following commands in local command line:-
npm i -g node-lambda

node-lambda setup  --  this is not required as setup is already have been done

node-lambda run    --  from lambda folder location


# in lambda folder location there is a file which is event.json that is used to send parameters
as we are not able to practically create enpoint without Amazon API Gateway


# We have used mongocloud for the backend db services

#Application overview

This endpoint or lambda function will be triggered from REACT layer and this endpoint will store email data i mongodb. AFter succesfully saving the data in db it will trigger notification lambda
module automatically.

