const webSocketServer = require("ws").Server;
const wss = new webSocketServer({ port: 3000 });

wss.on("connection", function(ws) {

  ws.on("message", function(message) {
    if (message === "exit") {
      ws.close();
    } else {
      wss.clients.forEach(function(client) {
        client.send(message);
      });
    }
  });

  ws.send("Welcome to cyber chat");

});

console.log("websocket running on port 3000");
