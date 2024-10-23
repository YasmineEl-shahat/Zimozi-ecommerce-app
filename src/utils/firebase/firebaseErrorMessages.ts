const firebaseErrorMessages: { [key: string]: string } = {
  "auth/user-not-found": "No account found with this email.",
  "auth/email-already-in-use": "This email is already registered.",
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/invalid-credential": "Incorrect email or password. Please try again.",
  "auth/weak-password": "Password should be at least 6 characters.",
  "auth/network-request-failed": "Network error. Please try again.",
  "auth/too-many-requests": "Too many login attempts. Please try again later.",
};

export const getFirebaseErrorMessage = (code: string): string => {
  return firebaseErrorMessages[code] || "An unexpected error occurred.";
};
