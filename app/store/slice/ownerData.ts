import { createSlice } from "@reduxjs/toolkit";

const ownerSlice = createSlice({
  name: "ownerAvailability",
  initialState: {
    userData: null,
    ownerAvailability: null,
    loading: false,
    error: null,
  },
  reducers: {
    setOwnerAvailability: (state, action) => {
      state.ownerAvailability = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setOwnerAvailability, setLoading, setError } =
  ownerSlice.actions;

export default ownerSlice.reducer;
