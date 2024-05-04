"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { fetchScheduleEvents } from "@/app/store/slice/scheduleEventsData";
import { useSession } from "next-auth/react";
import { fetchUserData } from "@/app/store/slice/userSlice";
import { EventSidebar, SelectedDateTimeSideBar } from "@/app/constants/types";
import { showToast } from "@/app/constants/toastify";

const useSidebar = () => {
  const dispatch = useAppDispatch();
  const [newDate, setNewDate] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState<EventSidebar[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [filteredEvents, setFilteredEvents] = useState<EventSidebar[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("upcoming");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const sliceLoading = useAppSelector(
    (state) => state.fetchScheduleEvents.loading
  );
  const [selectedEvent, setSelectedEvent] = useState<EventSidebar | null>(null);
  const scheduleEvents = useAppSelector(
    (state) => state.fetchScheduleEvents.data
  );

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(fetchScheduleEvents());
  }, [dispatch]);

  useEffect(() => {
    if (scheduleEvents) {
      if (Array.isArray(scheduleEvents)) {
        const convertedEvents: EventSidebar[] = scheduleEvents.map(
          (event: SelectedDateTimeSideBar) => {
            return {
              id: event.id || "",
              name: event.name || "",
              email: event.email || "",
              additionalInfo: event.additionalInfo || "",
              date: event.date || "",
              ownerEmail: event.ownerEmail || "",
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

  const handleImageClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
    setShowCalendar(false);
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "2-digit",
      year: "numeric",
    });
    setNewDate(formattedDate);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    filterEventsByCategory(selectedCategory);
  }, [selectedCategory, events, startDate, endDate]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    filterEventsByCategory(selectedCategory);
  }, [selectedCategory, events]);

  const filterEventsByCategory = (category: string) => {
    switch (category) {
      case "upcoming":
        setFilteredEvents(
          events.filter((event) => new Date(event.date) > new Date())
        );
        break;
      case "past":
        setFilteredEvents(
          events.filter((event) => new Date(event.date) < new Date())
        );
        break;
      case "pending":
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        setFilteredEvents(
          events.filter((event) => {
            const eventDate = new Date(event.date);
            eventDate.setHours(0, 0, 0, 0);
            return eventDate.getTime() === today.getTime();
          })
        );
        break;
      case "dateRange":
        if (startDate && endDate) {
          setFilteredEvents(
            events.filter(
              (event) =>
                new Date(event.date) >= startDate &&
                new Date(event.date) <= endDate
            )
          );
        } else {
          setFilteredEvents(events);
        }
        break;
      default:
        setFilteredEvents(events);
        break;
    }
  };

  const uniqueDates = Array.from(
    new Set(filteredEvents.map((event) => event.date))
  );

  return {
    isSidebarOpen,
    toggleSidebar,
    selectedCategory,
    setSelectedCategory,
    handleImageClick,
    showCalendar,
    handleDateChange,
    selectedDate,
    uniqueDates,
    filteredEvents,
    setSelectedEvent,
    setIsModalOpen,
    handleCancel,
    handleOk,
    selectedEvent,
    isModalOpen,
    sliceLoading,
  };
};

export default useSidebar;
