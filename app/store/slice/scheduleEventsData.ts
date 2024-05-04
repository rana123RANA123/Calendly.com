import {
  ScheduleEventsSliceState,
  SelectedDateTime,
} from "@/app/constants/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: ScheduleEventsSliceState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchScheduleEvents = createAsyncThunk(
  "scheduleEventsData/fetchScheduleEvents",
  async () => {
    try {
      const response = await axios.get("/api/getEventsData");
      const result: SelectedDateTime = response.data;
      return result;
    } catch (error) {
      throw error;
    }
  }
);

const fetchScheduleEventsSlice = createSlice({
  name: "scheduleEventsData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchScheduleEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchScheduleEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchScheduleEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

export default fetchScheduleEventsSlice.reducer;
