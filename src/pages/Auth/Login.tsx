import React from "react";
import LoginForm from "../../components/Auth/LoginForm.tsx";
import AuthLayout from "../../components/Auth/Layout/AuthLayout.tsx";

const Login: React.FC = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
