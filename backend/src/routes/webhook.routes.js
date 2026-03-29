import express from "express";
import {
  handleUltravoxWebhook,
  handleTwilioTwiML,
  handleTwilioStatus,
} from "../controllers/webhook.controller.js";

const router = express.Router();

router.post("/ultravox", handleUltravoxWebhook);

// Twilio Routes - Support both POST and GET
router.post("/twilio/twiml", handleTwilioTwiML);
router.get("/twilio/twiml", handleTwilioTwiML);
router.post("/twilio/status", handleTwilioStatus);
router.get("/twilio/status", handleTwilioStatus);

export default router;
