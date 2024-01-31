import { createSlice } from "@reduxjs/toolkit";

const loadUserFromLocalStorage = () => {
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : null;
};

const saveUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const initialState = {
  user: loadUserFromLocalStorage(), // it will be an object containing user's info
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      saveUserToLocalStorage(action.payload);
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('user')
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
