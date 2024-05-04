import React, { useState, useEffect } from "react";
import {
  format,
  startOfWeek,
  getDay,
  addDays,
  addMonths,
  subMonths,
  startOfMonth,
  isToday,
} from "date-fns";

import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { fetchAvailabilityData } from "@/app/store/slice/availabilityData";
import { CalendarProps } from "@/app/constants/types";
import { leftt, rightt } from "@/app/constants/images";

const NewCalendar: React.FC<CalendarProps> = ({
  selectedDate,
  onDateChange,
}) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selected, setSelected] = useState<Date | null>(null);
  const dispatch = useAppDispatch();
  const availabilityData: any = useAppSelector(
    (state) => state.ownerAvailability.ownerAvailability
  );

  useEffect(() => {
    dispatch(fetchAvailabilityData());
  }, [dispatch]);

  useEffect(() => {
    setCurrentDate(selectedDate || new Date());
  }, [selectedDate]);

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => {
    const today = new Date();
    const firstDayOfCurrentMonth = startOfMonth(currentDate);
    if (firstDayOfCurrentMonth > today) {
      setCurrentDate(subMonths(currentDate, 1));
    } else {
      console.error("Cannot move to previous month from today's date.");
    }
  };
  const selectDate = (date: Date) => {
    const today = new Date();
    if (date >= today) {
      if (Array.isArray(availabilityData) && availabilityData.length > 0) {
        const lastAvailableData = availabilityData[availabilityData.length - 1];
        const selectedDayIndex = date.getDay();
        const selectedDay = [
          "Sundays",
          "Mondays",
          "Tuesdays",
          "Wednesdays",
          "Thursdays",
          "Fridays",
          "Saturdays",
        ][selectedDayIndex];
        const allowedDays = lastAvailableData?.selectedDays || [];

        if (allowedDays.includes(selectedDay)) {
          setCurrentDate(date);
          setSelected(date);
          onDateChange?.(date);
          return;
        } else {
          console.error("Selected day is not allowed. Date:", date);
        }
      } else {
        console.error("Availability data is empty or not an array.");
      }
    } else {
      console.error("Selected date cannot be before today's date.");
    }
  };

  const isDateAllowed = (date: Date): boolean => {
    if (Array.isArray(availabilityData) && availabilityData.length > 0) {
      const lastAvailableData = availabilityData[availabilityData.length - 1];
      const allowedDays = lastAvailableData.selectedDays || [];
      const selectedDayIndex = date.getDay();
      const selectedDay = [
        "Sundays",
        "Mondays",
        "Tuesdays",
        "Wednesdays",
        "Thursdays",
        "Fridays",
        "Saturdays",
      ][selectedDayIndex];
      return allowedDays.includes(selectedDay);
    }
    return false;
  };

  const firstDayOfMonth = startOfWeek(startOfMonth(currentDate), {
    weekStartsOn: 1,
  });

  const days: Date[] = [];
  for (let i = 0; i < 35; i++) {
    const date = addDays(firstDayOfMonth, i);
    days.push(date);
  }

  return (
    <div className="calendar w-[380px] h-96">
      <div className="calendar-header flex justify-evenly items-center py-2 px-4">
        <button
          onClick={prevMonth}
          className="btn btn-sm rounded-full p-2 hover:bg-[#b7ccea]"
        >
          <Image src={leftt} alt="Previous Month" />
        </button>
        <span className="text-xl font-bold">
          {format(currentDate, "MMMM yyyy")}
        </span>
        <button
          onClick={nextMonth}
          className="btn btn-sm rounded-full p-2 bg-[#b7ccea]"
        >
          <Image src={rightt} alt="Next Month" />
        </button>
      </div>
      <div className="calendar-grid grid grid-cols-7 gap-1 px-4 py-2">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className="text-center text-xs font-bold">
            {day}
          </div>
        ))}
        {days.map((day) => (
          <div
            key={day.toString()}
            className={`calendar-day flex cursor-pointer justify-center items-center p-3 rounded-full hover:bg-[#c5d7f0] ${
              getDay(day) === 0 || getDay(day) === 6
            } ${
              day.toDateString() === selected?.toDateString()
                ? "bg-[#0069FF] text-white font-bold"
                : ""
            } ${!isDateAllowed(day) ? "text-[#c7cbd2]" : ""} ${
              isToday(day) ? "items-center justify-center flex flex-col" : ""
            } ${day < new Date() ? "text-gray-400" : ""}`}
            onClick={() => selectDate(day)}
          >
            {format(day, "d")}
            {isToday(day) && (
              <div className="dot bg-black w-1 rounded-full h-1" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCalendar;
