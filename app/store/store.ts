import { configureStore } from "@reduxjs/toolkit";
import fetchScheduleEventsSliceReducer from "./slice/scheduleEventsData";
import fetchAvailabilityDataSliceReducer from "./slice/availabilityData";
import ownerSliceReducer from "./slice/ownerData";
import userReducer from "./slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
  reducer: {
    user: userReducer,
    fetchScheduleEvents: fetchScheduleEventsSliceReducer,
    ownerSlice: fetchScheduleEventsSliceReducer,
    fetchAvailabilityData: fetchAvailabilityDataSliceReducer,
    ownerAvailability: ownerSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
