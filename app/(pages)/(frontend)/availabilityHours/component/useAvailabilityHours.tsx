"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { fetchAvailabilityData } from "@/app/store/slice/availabilityData";
import { useAppDispatch } from "@/app/store/store";
import { showToast } from "@/app/constants/toastify";
const useAvailabilityHours = () => {
  const { data: sessions } = useSession();
  const dispatch = useAppDispatch();
  const [selectedHour1, setSelectedHour1] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedHour2, setSelectedHour2] = useState<string | null>(null);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const handleCheckboxChange = (label: string, checked: boolean) => {
    setSelectedDays((prev) => {
      if (checked) {
        return [...prev, label];
      } else {
        return prev.filter((day) => day !== label);
      }
    });
  };

  useEffect(() => {
    dispatch(fetchAvailabilityData());
  }, [dispatch]);

  const handleAvailability = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/getAvailability", {
        selectedDays,
        selectedHour1,
        selectedHour2,
        email: sessions?.user.email,
      });
      showToast("Availability Hours Added Successfull", "success");

      window.location.assign("/sidebar");
      setLoading(false);
    } catch (error) {
      console.error("Error handling form submission:", error);
      showToast("Error in Availability Hours Added", "error");

      setLoading(false);
    }
    setLoading(false);
  };

  return {
    setSelectedHour1,
    setSelectedHour2,
    handleCheckboxChange,
    handleAvailability,
    loading,
  };
};

export default useAvailabilityHours;
