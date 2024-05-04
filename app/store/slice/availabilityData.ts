import { AvailabilityData, AvailabilityliceState } from "@/app/constants/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: AvailabilityliceState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchAvailabilityData = createAsyncThunk(
  "scheduleEventsData/fetchScheduleEvents",
  async () => {
    try {
      const response = await axios.get("/api/getAvailability");
      const result: AvailabilityData = response.data;
      return result;
    } catch (error) {
      throw error;
    }
  }
);

const fetchScheduleEventsSlice = createSlice({
  name: "availabilityData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAvailabilityData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAvailabilityData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchAvailabilityData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

export default fetchScheduleEventsSlice.reducer;
