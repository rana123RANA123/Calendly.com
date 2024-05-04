"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { showToast } from "@/app/constants/toastify";

const useForgotConfirm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [formData, setFormData] = useState<any | "">();

  useEffect(() => {
    if (searchParams) {
      const email = searchParams.get("email");
      setFormData(email);
    }
  }, [searchParams]);

  const userEmail = formData;

  const [password, setPassword] = useState("");

  const handleForgotPassword = async () => {
    try {
      const response = await axios.put("/api/forgot", {
        userEmail,
        password,
      });
      console.log("User password updated:", response.data);
      showToast("Forgot Password Successfull", "success");

      router.push("/login");
    } catch (error) {
      console.error("Error updating user password:", error);
      showToast("Please Enter Your Data Correctly", "error");
    }
  };
  return {
    handleForgotPassword,
    password,
    setPassword,
  };
};

export default useForgotConfirm;
