const webSocketServer = require("ws"); Server;
const wss = new webSocketServer({ port: 3000 });

wss.on("connection", function(ws) {

  ws.send("Welcome to cyber chat");

});
