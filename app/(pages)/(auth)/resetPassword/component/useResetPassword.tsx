"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { fetchUserData } from "@/app/store/slice/userSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import { showToast } from "@/app/constants/toastify";
const useResetPassword = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const userData = useAppSelector((state) => state.user.userData);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const [show, setShow] = useState(false);

  const click = () => {
    setShow(!show);
  };
  const [show2, setShow2] = useState(false);

  const click2 = () => {
    setShow2(!show2);
  };
  const [show3, setShow3] = useState(false);

  const click3 = () => {
    setShow3(!show3);
  };

  const [formData, setFormData] = useState({
    password: "",
    newPassword1: "",
    newPassword2: "",
    hashPasswordd: userData?.hashedPassword,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleResetPassword = async () => {
    try {
      const response = await axios.put("/api/resetPassword", formData);
      console.log("User password updated:", response.data);
      showToast("Password Reset Successfull", "success");

      router.push("/profile");
    } catch (error) {
      console.error("Error updating user password:", error);
      showToast("Error in Reset Password", "error");
    }
  };
  return {
    show,
    formData,
    handleChange,
    click,
    show2,
    show3,
    click3,
    click2,
    handleResetPassword,
  };
};

export default useResetPassword;
