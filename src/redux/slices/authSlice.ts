import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    logoutSuccess(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
    authFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    clearAuthError: (state) => {
      state.error = null;
    },
    updateUserProfile(state, action: PayloadAction<User>) {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const {
  loginSuccess,
  logoutSuccess,
  authFailure,
  clearAuthError,
  updateUserProfile,
} = authSlice.actions;
export default authSlice.reducer;
