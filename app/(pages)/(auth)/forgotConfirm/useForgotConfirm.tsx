import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { showToast } from "@/app/constants/toastify";

const useForgotConfirm = () => {
  const router = useRouter();
  const { email } = router.query;

  const [password, setPassword] = useState("");

  const handleForgotPassword = async () => {
    try {
      const response = await axios.put("/api/forgot", {
        userEmail: email,
        password,
      });
      console.log("User password updated:", response.data);
      showToast("Forgot Password Successful", "success");

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
