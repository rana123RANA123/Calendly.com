import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import axios from "axios";
import { UserData, UserState } from "@/app/constants/types";

const initialState: UserState = {
  userData: null,
  loading: false,
  error: null,
};

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    try {
      const response = await axios.get("/api/register");
      const result: UserData = response.data;
      return result;
    } catch (error) {
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
        state.error = null;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

export default userSlice.reducer;
