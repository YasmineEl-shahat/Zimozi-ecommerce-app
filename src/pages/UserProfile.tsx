import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store.ts";
import { updateUserProfile } from "../redux/slices/authSlice.ts";

const UserProfile: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const [profileData, setProfileData] = useState({
    email: user?.email || "",
    displayName: user?.displayName || "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      await dispatch(
        updateUserProfile({
          ...profileData,
          uid: user?.uid || "",
          photoURL: user?.photoURL || "",
        })
      );
      alert("Profile updated successfully!");
    } catch (error) {
      setError("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <CircularProgress />
  ) : error ? (
    <Alert severity="error">{error}</Alert>
  ) : (
    <div>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          value={profileData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Display Name"
          name="displayName"
          value={profileData.displayName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Update Profile"}
        </Button>
      </form>
    </div>
  );
};

export default UserProfile;
