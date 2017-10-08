var restify = require('restify');
var builder = require('botbuilder');
// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
console.log('%s listening to %s', server.name, server.url);
});
// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
appId: b56b69cc-3adb-443d-9a15-c29372905933,
appPassword: oUbEeatpFk7Xfg2988PaesJ
});
// Listen for messages from users
server.post('http://irona9.azurewebsites.net', connector.listen());
// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, function (session) {
session.send("You said: %s", session.message.text);
});
