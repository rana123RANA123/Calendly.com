"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useRouter } from "next/navigation";
import emailjs from "emailjs-com";
import { SecondFormData } from "@/app/constants/types";
import { useSession } from "next-auth/react";
import { showToast } from "@/app/constants/toastify";

const useScheduleEvent = () => {
  const [formData, setFormData] = useState<SecondFormData>({
    name: "",
    email: "",
    additionalInfo: "",
    date: null,
    time: null,
    timeZone: null,
    ownerEmail: null,
    ownerName: null,
  });

  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionss = useSession();

  useEffect(() => {
    if (searchParams) {
      const date = searchParams.get("date");
      const time = searchParams.get("time");
      const timeZone = searchParams.get("timeZone");
      const ownerEmail = searchParams.get("ownerEmail");
      const ownerName = searchParams.get("ownerName");

      setFormData((prev) => ({
        ...prev,
        date,
        time,
        timeZone,
        ownerEmail,
        ownerName,
      }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/getEventsData", formData);
      console.log("Form data uploaded successfully:", response.data);
      showToast("ScheduleEvent Request Send Successfull", "success");

      handleSendEmailToOwner();
      handleSendEmailToUser();
    } catch (error) {
      console.error("Error handling form submission:", error);
      showToast("Error in ScheduleEvent Request Send", "error");
    }
  };

  const handleSendEmailToOwner = async () => {
    try {
      const serviceId = "service_20ro8tt";
      const templateId = "template_szfvbdm";
      const userId = "G7wOKA2XXop3K0YlX";

      const templateParams = {
        from_name: "Calendly with MR.LAZY",
        to_name: formData.name,
        message: formData.additionalInfo,
        user_email: formData.ownerEmail,
        admin_name: formData.ownerEmail,
        ownerName: formData.ownerName,
        reply_to: formData.email,

        name: formData.name,
        email: formData.email,
        time: formData.time,
        date: formData.date,
        timeZone: formData.timeZone,
        additionalInfo: formData.additionalInfo,
      };

      emailjs.init(userId);

      await emailjs.send(serviceId, templateId, templateParams);

      console.log("Email sent to owner successfully!");
    } catch (error) {
      console.error("Error sending to owner email:", error);
    }
  };

  const handleSendEmailToUser = async () => {
    try {
      const serviceId = "service_wru5tsd";
      const templateId = "template_plmeesk";
      const userId = "G7wOKA2XXop3K0YlX";

      const templateParams = {
        from_name: "Calendly with MR.LAZY",
        to_name: formData.email,
        message: formData.additionalInfo,
        user_email: formData.email,
        admin_name: formData.email,
        reply_to: formData.email,
        ownerName: formData.ownerName,

        name: formData.name,
        email: formData.email,
        time: formData.time,
        date: formData.date,
        timeZone: formData.timeZone,
        additionalInfo: formData.additionalInfo,
      };

      emailjs.init(userId);

      await emailjs.send(serviceId, templateId, templateParams);

      console.log("Email sent to user successfully!");
    } catch (error) {
      console.error("Error sending to user email:", error);
    }
  };

  const handleBack = () => {
    router.back();
  };
  return {
    handleBack,
    formData,
    handleChange,
    handleSubmit,
    sessionss,
  };
};

export default useScheduleEvent;
