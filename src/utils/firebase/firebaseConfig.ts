// Import the needed functions from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { apiKey } from "../../config.ts";

//  Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "zimozi-ecommerce-app.firebaseapp.com",
  projectId: "zimozi-ecommerce-app",
  storageBucket: "zimozi-ecommerce-app.appspot.com",
  messagingSenderId: "91282957385",
  appId: "1:91282957385:web:71eb28773335ebeec68b98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
