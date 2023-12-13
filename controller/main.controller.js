import { wss } from "../init.js";
import { clients } from "../init.js";

export const mainController = (req, res) => {
    console.log("Event: main event (/get) ");
    wss.clients.forEach(function each(client) {
        client.send("From Server (/get)");
    });
    res.sendStatus(200);
};

export const mainControllerPost = (req, res) => {
    let message = req.body.message;
    console.log("Event: main event (/post) :", message);
    wss.clients.forEach(function each(client) {
        client.send(message);
    });
    res.sendStatus(200);
};
