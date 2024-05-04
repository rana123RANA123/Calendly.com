"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { showToast } from "@/app/constants/toastify";
const useLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    email: session?.user.email,
    fullName: "",
    userName: "",
    password: "",
    image: session?.user.image,
    welcomeMessage: "Empty",
    language: "Empty",
    timeFormat: "Empty",
    dateFormat: "Empty",
    country: "Empty",
    timeZone: "Empty",
  });

  const [show, setShow] = useState(false);

  const click = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (session) {
      router.push("/sidebar");
    }
  }, [session, router]);

  const login = async () => {
    setLoading(true);

    const login = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (login?.ok) {
      showToast("User Login Successfull", "success");
      window.location.assign("/sidebar");
      setLoading(false);
    } else if (login?.error) {
      console.log("error in login function");
      showToast("Error in User Login", "error");
      setLoading(false);
    }

    setLoading(false);
  };

  const handleSignIn = async () => {
    await signIn("google");
    // setLoading(true);
    // try {
    //   await axios.post("/api/register", formData);
    // } catch (err) {
    //   console.log(err);
    // } finally {
    //   setLoading(false);
    // }
  };
  return {
    session,
    email,
    setEmail,
    show,
    password,
    setPassword,
    click,
    loading,
    login,
    handleSignIn,
  };
};

export default useLogin;
