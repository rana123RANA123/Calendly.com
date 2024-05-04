"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { FormData } from "@/app/constants/types";

const useCalendarInvitation = () => {
  const searchParams = useSearchParams();

  const session = useSession();

  const [formData, setFormData] = useState<FormData>({
    date: null,
    time: null,
    timeZone: null,
    ownerEmail: null,
  });

  useEffect(() => {
    if (searchParams) {
      const date = searchParams.get("date");
      const time = searchParams.get("time");
      const timeZone = searchParams.get("timeZone");
      const ownerEmail = searchParams.get("ownerEmail");

      setFormData((prev) => ({
        ...prev,
        date,
        time,
        timeZone,
        ownerEmail,
      }));
    }
  }, [searchParams]);

  return {
    session,
    formData,
  };
};

export default useCalendarInvitation;
