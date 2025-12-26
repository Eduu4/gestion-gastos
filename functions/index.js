const functions = require("firebase-functions");

exports.webhook = functions.https.onRequest((request, response) => {
  if (request.method === "GET") {
    if (request.query["hub.verify_token"] === "RASHELL2005!") {
      response.send(request.query["hub.challenge"]);
    } else {
      response.send("Error, wrong validation token");
    }
  } else if (request.method === "POST") {
    console.log("Webhook event received!", request.body);
    response.sendStatus(200);
  }
});
