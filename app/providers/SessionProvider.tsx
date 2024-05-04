"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { AuthProviderProps } from "../constants/types";

export default function AuthProvider({ children }: AuthProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
