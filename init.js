import { WebSocketServer } from "ws";

import { Clients } from "./Clients.js";


export const wss = new WebSocketServer({ port: 4000 });
export const clients = new Clients();
