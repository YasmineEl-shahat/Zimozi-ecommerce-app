import React, { useState } from "react";
import { Box, Typography, Stepper, Step, StepLabel } from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ShippingForm from "./ShippingForm.tsx";
import PaymentForm from "./PaymentForm.tsx";
import OrderSummary from "./OrderSummary.tsx";
import { publishKey } from "../../config.ts";

// Initialize Stripe
const stripePromise = loadStripe(publishKey);

interface ShippingInfo {
  name: string;
  address: string;
  city: string;
  zip: string;
}

const Checkout: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo | null>(null);
  const cart = [
    { id: 1, title: "Product 1", price: 50 },
    { id: 2, title: "Product 2", price: 100 },
  ]; // Replace with real cart data

  const handleShippingSubmit = (data: any) => {
    setShippingInfo(data);
    setActiveStep(1);
  };

  const handlePaymentSuccess = () => {
    setActiveStep(2);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>

      <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
        <Step>
          <StepLabel>Shipping</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
        <Step>
          <StepLabel>Order Summary</StepLabel>
        </Step>
      </Stepper>

      {activeStep === 0 && <ShippingForm onSubmit={handleShippingSubmit} />}
      {activeStep === 1 && (
        <Elements stripe={stripePromise}>
          <PaymentForm onPaymentSuccess={handlePaymentSuccess} />
        </Elements>
      )}
      {activeStep === 2 && (
        <OrderSummary cart={cart} shippingInfo={shippingInfo!} />
      )}
    </Box>
  );
};

export default Checkout;
