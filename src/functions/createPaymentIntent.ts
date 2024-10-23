import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import Stripe from "stripe";
import { secretKey } from "../config.ts";

admin.initializeApp();
const stripe = new Stripe(secretKey, {
  apiVersion: "2024-09-30.acacia",
});

export const createPaymentIntent = functions.https.onRequest(
  async (req, res) => {
    const { amount, currency } = req.body;

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
      });
      res.status(200).send(paymentIntent);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
);
