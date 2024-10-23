import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

interface ShippingInfo {
  name: string;
  address: string;
  city: string;
  zip: string;
}

interface ShippingFormProps {
  onSubmit: (data: ShippingInfo) => void;
}

const ShippingForm: React.FC<ShippingFormProps> = ({ onSubmit }) => {
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    name: "",
    address: "",
    city: "",
    zip: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(shippingInfo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="start">
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="name"
            label="Full Name"
            value={shippingInfo.name}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="address"
            label="Address"
            value={shippingInfo.address}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="city"
            label="City"
            value={shippingInfo.city}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="zip"
            label="ZIP Code"
            value={shippingInfo.zip}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Continue to Payment
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ShippingForm;
