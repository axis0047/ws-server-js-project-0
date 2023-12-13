import express from "express";
import { wss } from "./init.js";
import { clients } from "./init.js";

// routes
import mainRoute from "./routes/main.route.js";
import json from "body-parser/lib/types/json.js";

const app = express();
app.use(express.json());

const server = app.listen(4001, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(
        "Websocket event broadcaster REST API listening on http://%s:%s",
        host,
        port
    );
});

// routes
app.use("/", mainRoute);

// websocket listening mode
wss.on("connection", function connection(ws) {
    console.log("Websocket client connected");

    ws.on("message", function incoming(message) {
        console.log("received: %s", message);

        const { realyId } = JSON.parse(message);
        console.log(realyId);
        clients.saveClient([realyId], ws);
        // console.log(clients.clientList);
    });

    ws.on("close", function close() {
        clients.removeClient(ws);
        console.log("Websocket client disconnected");
        // console.log(clients.getClients());
    });

    ws.send("connected");
});
