"use client";
import React from "react";
import { useAppSelector } from "@/app/store/store";
import { useSession } from "next-auth/react";
import ProfilePagePicture from "../profilePagePicture/ProfilePagePicture";

export default function SidebarTopMenu() {
  const userData = useAppSelector((state) => state.user.userData);
  const sessionss = useSession();

  return (
    <div className="flex h-[60px] justify-between">
      <div></div>
      <div className="flex items-center gap-3">
        <ProfilePagePicture />
        <></>
      </div>
    </div>
  );
}
