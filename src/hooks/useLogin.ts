import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth, googleProvider } from "../utils/firebase/firebaseConfig.ts";
import { getFirebaseErrorMessage } from "../utils/firebase/firebaseErrorMessages.ts";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import {
  loginSuccess,
  authFailure,
  clearAuthError,
} from "../redux/slices/authSlice.ts";
import { RootState } from "../redux/store";
import { useFormik } from "formik";
import { loginSchema } from "../utils/schemas/loginSchema.ts";

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state: RootState) => state.auth);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(clearAuthError());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const userCredential: UserCredential = await signInWithEmailAndPassword(
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

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
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
  };

  return { formik, error, handleGoogleLogin, loading };
};
