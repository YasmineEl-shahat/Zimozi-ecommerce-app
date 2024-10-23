import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button, Box } from "@mui/material";
import axios from "axios";

interface PaymentFormProps {
  onPaymentSuccess: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement)!;

    // Step 1: Create a payment intent and get the clientSecret
    const { data } = await axios.post("/createPaymentIntent");

    const clientSecret = data.client_secret;

    // Step 2: Confirm the card payment using the clientSecret
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
        },
      }
    );

    if (error) {
      console.log(error);
      console.error(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      onPaymentSuccess();
    }
  };

  return (
    <form onSubmit={handlePayment}>
      <Box sx={{ mb: 2 }}>
        <CardElement />
      </Box>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!stripe}
      >
        Pay Now
      </Button>
    </form>
  );
};

export default PaymentForm;
