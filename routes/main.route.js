import express from "express";
import {
    mainController,
    mainControllerPost,
} from "../controller/main.controller.js";
import { switchRelays } from "../controller/relays.controller.js";

const router = express.Router();

router.get("/", mainController);
router.post("/", mainControllerPost);
router.post("/relayswitch", switchRelays);

export default router;
