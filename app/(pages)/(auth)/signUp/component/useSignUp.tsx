"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { showToast } from "@/app/constants/toastify";

const useSignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    userName: "",
    password: "",
    image:
      "https://res.cloudinary.com/dqwzzzyby/image/upload/v1714204006/cloudinary_images/ed6oycbgtth4u1vibsbk.png",
    welcomeMessage: "Empty",
    language: "Empty",
    timeFormat: "Empty",
    dateFormat: "Empty",
    country: "Empty",
    timeZone: "Empty",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const click = () => {
    setShow(!show);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axios.post("/api/register", formData);
      showToast("SignUp Successfull", "success");

      router.push("/login");
      setLoading(false);
    } catch (err) {
      console.log(err);
      showToast("Error in SignUp", "error");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    show,
    click,
    loading,
    handleSubmit,
  };
};

export default useSignUp;
