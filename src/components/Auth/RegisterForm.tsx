import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Alert,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { useRegister } from "../../hooks/useRegister.ts";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  StyledBox,
  StyledTextField,
  StyledButton,
} from "./Layout/AuthLayout.styles.ts";

const RegisterForm: React.FC = () => {
  const { formik, error, loading } = useRegister();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Trigger animation when component mounts
  }, []);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <StyledBox className={`fade-in ${animate ? "fade-in" : ""}`}>
      <Typography
        variant="h5"
        gutterBottom
        align="center"
        sx={{ fontWeight: 700, mb: 3 }}
      >
        Register
      </Typography>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <form onSubmit={formik.handleSubmit}>
        <StyledTextField
          label="Email"
          placeholder="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          aria-label="Email address"
          {...formik.getFieldProps("email")}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Email color="action" fontSize="small" />
                </InputAdornment>
              ),
            },
          }}
        />
        <StyledTextField
          label="Password"
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          aria-label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          {...formik.getFieldProps("password")}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Lock color="action" fontSize="small" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={togglePasswordVisibility}
                    edge="end"
                    size="small"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />

        <StyledTextField
          label="Confirm Password"
          placeholder="Confirm your password"
          type={showConfirmPassword ? "text" : "password"}
          variant="outlined"
          fullWidth
          margin="normal"
          aria-label="Confirm password"
          {...formik.getFieldProps("confirmPassword")}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Lock color="action" fontSize="small" aria-hidden="true" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                    onClick={toggleConfirmPasswordVisibility}
                    edge="end"
                    size="small"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        <StyledButton
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          sx={{ mt: 2 }}
          disabled={loading}
          aria-busy={loading} // ARIA attribute to indicate loading state
          aria-label="Register button"
        >
          {loading ? <CircularProgress size={24} /> : "Register"}
        </StyledButton>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </form>
    </StyledBox>
  );
};

export default RegisterForm;
