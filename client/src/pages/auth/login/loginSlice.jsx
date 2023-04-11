import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as Toastify from "@/components/Toastify/Toast";

const loginSlice = createSlice({
  name: "auth",
  initialState: {
    status: "idle",
    authLoading: true,
    isAuthenticated: false,
    token: "",
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message = action.payload?.message;
        state.token = action.payload?.accessToken;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });
      const { success, message, accessToken } = res.data;
      if (!success) {
        throw new Error(message);
      }
      localStorage.setItem("token", accessToken);
      return { message, accessToken }, Toastify.successNotify(message);
    } catch (error) {
      return Promise.reject(
        error.response.data.message,
        Toastify.errorNotify(error.response.data.message)
      );
    }
  }
);

export default loginSlice;
