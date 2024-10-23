import React from "react";
import RegisterForm from "../../components/Auth/RegisterForm.tsx";
import AuthLayout from "../../components/Auth/Layout/AuthLayout.tsx";

const Register: React.FC = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
