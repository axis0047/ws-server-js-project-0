import { clients, wss } from "../init.js";

import axios from "axios";
import _ from "lodash";

export const switchRelays = async (req, res) => {
    let notFoundRelays = [];
    let foundRelays = [];

    try {
        const { switchingScheme } = req.body;

        if (_.isEmpty(switchingScheme)) {
            throw new Error("Cannot Switch. Empty body");
        }

        try {
            Object.entries(switchingScheme).forEach(([key, value]) => {
                // console.log(clients.clientList);
                if (clients.clientList.hasOwnProperty(key)) {
                    let relay = clients.clientList[key];
                    relay.send(JSON.stringify(value));
                    foundRelays.push({ [key]: value });
                } else {
                    notFoundRelays.push({ [key]: value });
                }
            });
            res.status(200).json({ foundRelays, notFoundRelays });
        } catch (error) {
            console.log(error);
            throw new Error(error.message);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
