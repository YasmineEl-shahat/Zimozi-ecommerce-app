import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase/firebaseConfig.ts";
import { getFirebaseErrorMessage } from "../utils/firebase/firebaseErrorMessages.ts";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import {
  loginSuccess,
  authFailure,
  clearAuthError,
} from "../redux/slices/authSlice.ts";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { registerSchema } from "../utils/schemas/registerSchema.ts";

export const useRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state: RootState) => state.auth);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(clearAuthError());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: { email: "", password: "", confirmPassword: "" },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        dispatch(loginSuccess(userCredential.user));
        navigate("/");
      } catch (error: any) {
        if (error instanceof FirebaseError) {
          const message = getFirebaseErrorMessage(error.code);
          dispatch(authFailure(message));
        }
      } finally {
        setLoading(false);
      }
    },
  });

  return { formik, error, loading };
};
