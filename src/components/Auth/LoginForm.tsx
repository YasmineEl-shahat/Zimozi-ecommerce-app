import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Alert,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import {
  Email,
  Google,
  Lock,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useLogin } from "../../hooks/useLogin.ts";
import {
  StyledBox,
  StyledTextField,
  StyledButton,
} from "./Layout/AuthLayout.styles.ts";

const LoginForm: React.FC = () => {
  const { formik, error, handleGoogleLogin, loading } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Trigger animation when component mounts
  }, []);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <StyledBox className={`fade-in ${animate ? "fade-in" : ""}`}>
      <Typography
        variant="h5"
        gutterBottom
        align="center"
        sx={{ fontWeight: 700, mb: 3 }}
      >
        Welcome Back
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
        <StyledButton
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          sx={{ mt: 2, mb: 2 }}
          disabled={loading}
          aria-busy={loading}
          aria-label="Log in button"
        >
          {loading ? <CircularProgress size={24} /> : "Log In"}
        </StyledButton>
        <StyledButton
          variant="outlined"
          fullWidth
          onClick={handleGoogleLogin}
          size="large"
          startIcon={<Google aria-hidden="true" />} // Mark icon as hidden for screen readers
          disabled={loading}
          aria-busy={loading}
          aria-label="Continue with Google"
        >
          Continue with Google
        </StyledButton>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Don't have an account? <Link to="/auth/register">Create one</Link>
        </Typography>
      </form>
    </StyledBox>
  );
};

export default LoginForm;
