"use client";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { useSession } from "next-auth/react";
import { timeSlotsBig } from "@/app/(components)/profileData/ProfileData";
import {
  AvailabilityData,
  SelectedDateTimeFirst,
  UserData,
} from "@/app/constants/types";
import axios from "axios";
import { setOwnerAvailability } from "@/app/store/slice/ownerData";

const useSeleteDate = ({ params }: any) => {
  const decodedValue = decodeURIComponent(params?.seleteDate || "");
  const [newOwnerData, setNewOwnerData] = useState<any>();
  const dispatch = useAppDispatch();

  const availabilityDataLoading: AvailabilityData | null = useAppSelector(
    (state) => state.ownerAvailability.ownerAvailability
  );

  const userData = useAppSelector((state) => state.user.userData);
  const [ownerData, setOwnerData] = useState<UserData>();
  const sessionss = useSession();

  const [selectedDateTime, setSelectedDateTime] =
    useState<SelectedDateTimeFirst>({
      date: null,
      time: null,
      timeZone: null,
      decodedValue: decodedValue,
    });

  const email = decodedValue;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/goNext", { email });
        setOwnerData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/goNextAvailability", {
          email,
        });
        dispatch(setOwnerAvailability(response.data));
        setNewOwnerData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, [dispatch, email]);

  const reversedOwnerData = newOwnerData ? [...newOwnerData].reverse() : [];
  const firstOwnerData =
    reversedOwnerData && reversedOwnerData.length > 0
      ? reversedOwnerData[0]
      : undefined;

  const one = firstOwnerData?.selectedHour1;
  const two = firstOwnerData?.selectedHour2;

  let selectedHour1 = one;
  let selectedHour2 = two;

  const selectedTime1 = convertTo24Hour(selectedHour1);
  const selectedTime2 = convertTo24Hour(selectedHour2);

  function convertTo24Hour(time: any) {
    if (typeof time === "string" && time.match(/\d+:\d+\s*[ap]m/i)) {
      const [hour, minute, period]: any = time.match(/\d+|\D+/g);
      let hourInt = parseInt(hour);
      if (period.toLowerCase() === "pm" && hourInt !== 12) {
        hourInt += 12;
      } else if (period.toLowerCase() === "am" && hourInt === 12) {
        hourInt = 0;
      }
      return `${hourInt}:${minute}`;
    }
    return "00:00";
  }

  const filteredTimeSlots = timeSlotsBig.filter((slot) => {
    const slotTime = convertTo24Hour(slot.time);
    return slotTime >= selectedTime1 && slotTime <= selectedTime2;
  });

  const handleDateChange = (date: Date) => {
    const formattedDate = format(date, "EEEE, d MMMM yyyy");
    setSelectedDateTime((prev) => ({ ...prev, date: formattedDate }));
  };

  const handleTimeSlotClick = (time: string) => {
    setSelectedDateTime((prev) => ({ ...prev, time }));
  };

  const handleTimeZoneChange = (value: string | null) => {
    setSelectedDateTime((prev) => ({ ...prev, timeZone: value }));
  };

  return {
    userData,
    selectedDateTime,
    handleDateChange,
    handleTimeZoneChange,
    handleTimeSlotClick,
    sessionss,
    filteredTimeSlots,
    decodedValue,
    availabilityDataLoading,
    ownerData,
  };
};

export default useSeleteDate;
``;
