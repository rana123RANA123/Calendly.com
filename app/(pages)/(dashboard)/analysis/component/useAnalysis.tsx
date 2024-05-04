"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { fetchScheduleEvents } from "@/app/store/slice/scheduleEventsData";
import { EventAnalysis, SelectedDateTimeAnalysis } from "@/app/constants/types";

const useAnalysis = () => {
  const [totall, setTotall] = useState<number>(0);
  const [upcoming, setUpcoming] = useState<number>(0);
  const [past, setPast] = useState<number>(0);

  const dispatch = useAppDispatch();

  const [events, setEvents] = useState<EventAnalysis[]>([]);
  const scheduleEvents = useAppSelector(
    (state) => state.fetchScheduleEvents.data
  );

  useEffect(() => {
    dispatch(fetchScheduleEvents());
  }, [dispatch]);

  useEffect(() => {
    if (scheduleEvents) {
      if (Array.isArray(scheduleEvents)) {
        const convertedEvents: any = scheduleEvents.map(
          (event: SelectedDateTimeAnalysis) => {
            return {
              id: event.id || "",
              name: event.name || "",
              email: event.email || "",
              additionInfo: event.additionInfo || "",
              date: event.date || "",
              time: event.time || "",
              timeZone: event.timeZone || "",
              createdAt: event.createdAt || "",
            };
          }
        );
        setEvents(convertedEvents);
      } else {
        console.error("scheduleEvents is not an array:", scheduleEvents);
      }
    }
  }, [scheduleEvents]);

  useEffect(() => {
    setTotall(events.length);
    setUpcoming(
      events.filter((event) => new Date(event.date) > new Date()).length
    );
    setPast(events.filter((event) => new Date(event.date) < new Date()).length);
  }, [events]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const pending = 0;

  return {
    isSidebarOpen,
    past,
    pending,
    upcoming,
    totall,
    toggleSidebar,
  };
};

export default useAnalysis;
