import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { FormData } from "@/app/constants/types";

const useCalendarInvitation = () => {
  const router = useRouter();
  const { date, time, timeZone, ownerEmail } = router.query;

  const session = useSession();

  const [formData, setFormData] = useState<FormData>({
    date: null,
    time: null,
    timeZone: null,
    ownerEmail: null,
  });

  useEffect(() => {
    if (date && time && timeZone && ownerEmail) {
      setFormData({
        date: Array.isArray(date) ? date.join(",") : date,
        time: Array.isArray(time) ? time.join(",") : time,
        timeZone: Array.isArray(timeZone) ? timeZone.join(",") : timeZone,
        ownerEmail: Array.isArray(ownerEmail)
          ? ownerEmail.join(",")
          : ownerEmail,
      });
    }
  }, [date, time, timeZone, ownerEmail]);

  return {
    session,
    formData,
  };
};

export default useCalendarInvitation;
