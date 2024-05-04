"use client";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { signOut, useSession } from "next-auth/react";
import { fetchUserData } from "@/app/store/slice/userSlice";
import { FormData3 } from "@/app/constants/types";
import { showToast } from "@/app/constants/toastify";
import moment from "moment-timezone";

const useProfile = () => {
  const { data: sessions } = useSession();
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.user.userData);
  const [mainLoading, setMainLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const sliceLoading = useAppSelector((state) => state.user.loading);
  const [currentTime, setCurrentTime] = useState(new Date());

  const timezones = moment.tz.names();

  const handleDeleteAccount = async () => {
    setLoading2(true);
    try {
      const response = await axios.delete("/api/register", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("User account deleted successfully");
        showToast("Account Delete Successfull", "success");
        setLoading2(false);
        signOut();
      } else {
        console.error("Error:", response.data);
        showToast("Error in Account Delete", "error");
        setLoading2(false);
      }
    } catch (error: any) {
      console.error("Error:", error.message);
      showToast("Error in Account Delete", "error");
      setLoading2(false);
    } finally {
      setLoading2(false);
    }
  };

  const [formData, setFormData] = useState<FormData3>({
    fullName: "",
    country: "country",
    welcomeMessage: "",
    language: "language",
    dateFormat: "dateFormat",
    timeFormat: "timeFormat",
    timeZone: "timeZone",
    image: "",
  });

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleUpload = (info: any) => {
    const url = info.info.secure_url;
    setImageUrl(url);
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: url,
    }));
    console.log("Uploaded image URL:", url);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const UpdateProfile = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.put("/api/register", formData);
      console.log("response update profile", response);
      showToast("Profile Updated Successfull", "success");
      dispatch(fetchUserData());
      setLoading(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      showToast("Error in Profile Update", "error");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("formData", formData);
  }, [formData]);

  return {
    setIsModalOpen,
    sessions,
    formData,
    handleClick,
    fileInputRef,
    handleChange,
    setFormData,
    currentTime,
    UpdateProfile,
    handleDeleteAccount,
    isModalOpen,
    handleCancel,
    timezones,
    userData,
    setImageUrl,
    imageUrl,
    handleUpload,
    loading,
    setLoading,
    loading2,
    setLoading2,
    mainLoading,
    setMainLoading,
    sliceLoading,
  };
};

export default useProfile;
