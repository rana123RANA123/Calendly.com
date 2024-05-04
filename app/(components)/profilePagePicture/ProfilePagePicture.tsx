"use client";
import { useAppSelector } from "@/app/store/store";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { showToast } from "@/app/constants/toastify";
import { downArrow } from "@/app/constants/images";

export default function ProfilePagePicture() {
  const userData = useAppSelector((state) => state.user.userData);
  const router = useRouter();
  const sessionss = useSession();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleGoProfile = () => {
    router.push("/profile");
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div
        onClick={handleGoProfile}
        className="h-[37px] w-[37px] text-center flex items-center cursor-pointer justify-center rounded-[32px] border-[1px] bg-gray-400 text-[14px] font-semibold "
      >
        {userData?.image ? (
          <>
            {userData?.image && (
              <div className="w-full h-full relative">
                <Image
                  src={userData?.image.toString()}
                  className="absolute inset-0 w-full h-full rounded-full"
                  layout="fill"
                  objectFit="cover"
                  alt="Uploaded"
                />
              </div>
            )}
          </>
        ) : (
          <>
            {sessionss.data?.user.image && (
              <div className="w-full h-full relative">
                <Image
                  src={sessionss.data.user.image.toString()}
                  className="absolute inset-0 w-full h-full rounded-full"
                  layout="fill"
                  objectFit="cover"
                  alt="Uploaded"
                />
              </div>
            )}
          </>
        )}
      </div>

      <div className="relative">
        <div onClick={toggleDropdown}>
          <Image
            src={downArrow}
            className="h-3 w-3 cursor-pointer"
            alt="Dropdown Toggle"
          />
        </div>

        {isDropdownOpen && (
          <div className="absolute w-[130px] flex justify-center gap-2 h-[160px] flex-col p-2 top-8 right-0 bg-white border border-gray-200 rounded shadow">
            <Link
              href={"/profile"}
              className=" border-b-stone-300 text-[15px] rounded-sm hover:bg-gray-100"
            >
              Profile
            </Link>
            <Link
              href={"/sidebar"}
              className=" border-b-stone-300 text-[15px] rounded-sm hover:bg-gray-100"
            >
              Dashboard
            </Link>
            <Link
              href={"/availabilityHours"}
              className=" border-b-stone-300 text-[15px] rounded-sm hover:bg-gray-100"
            >
              Availability
            </Link>
            <Link
              href={"/resetPassword"}
              className=" border-b-stone-300 text-[15px] rounded-sm hover:bg-gray-100"
            >
              Reset Password
            </Link>
            <button
              onClick={() => {
                signOut();
                router.push("/login");
                showToast("User Logout Successfull", "success");
              }}
              className=" border-b-stone-300 flex items-start rounded-sm text-red-400 text-[15px] hover:bg-red-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
