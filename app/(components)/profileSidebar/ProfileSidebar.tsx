import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { showToast } from "@/app/constants/toastify";
import {
  backArrow2,
  brading,
  downArrow2,
  help,
  link2,
  logo,
  logout,
  person,
  preference,
  setting,
  sync,
} from "@/app/constants/images";

const ProfileSidebar = () => {
  const router = useRouter();
  return (
    <div className="w-[20%] flex flex-col justify-between px-2 py-4 h-[1100px] border-gray-300 border-[1px]">
      <div>
        <div>
          <Image src={logo} className="h-[40px] w-[150px]" alt="" />
        </div>
        <div className="flex items-center gap-2 mt-10">
          <Link href={"/sidebar"} className="flex items-center gap-2">
            <div>
              <Image
                src={backArrow2}
                className="w-4 cursor-pointer h-4"
                alt=""
              />
            </div>
            <div>
              <p className="text-[#0069FF] cursor-pointer font-medium text-[18px]">
                Back to home
              </p>
            </div>
          </Link>
        </div>

        <div className="mt-4 ">
          <p className=" font-bold text-[19px]">Account settings</p>
        </div>

        <div className="flex flex-row items-center  gap-5 mt-4 py-2 cursor-pointer pl-4 bg-[#F2F8FF] hover:bg-[#F2F8FF]">
          <div>
            <Image src={person} className="w-6 h-6" alt="" />
          </div>
          <div>
            <p className="text-[#0069FF] font-medium text-[18px]">Profile</p>
          </div>
        </div>
        <div className="flex gap-5 mt-3 py-2 cursor-pointer pl-4 hover:bg-[#F2F8FF]">
          <div>
            <Image src={brading} className="w-6 h-6" alt="" />
          </div>
          <div>
            <p className=" font-medium text-[18px]">Branding</p>
          </div>
        </div>
        <div className="flex gap-5 mt-3 py-2 cursor-pointer pl-4 hover:bg-[#F2F8FF]">
          <div>
            <Image src={link2} className="w-6 h-6" alt="" />
          </div>
          <div>
            <p className=" font-medium text-[18px]">My Link</p>
          </div>
        </div>
        <div className="flex gap-5 mt-3 py-2 cursor-pointer pl-4 hover:bg-[#F2F8FF]">
          <div>
            <Image src={preference} className="w-6 h-6" alt="" />
          </div>
          <div>
            <p className=" font-medium text-[18px]">Login preferences</p>
          </div>
        </div>
        <div className="flex gap-5 mt-3 py-2 cursor-pointer pl-4 hover:bg-[#F2F8FF]">
          <div>
            <Image src={setting} className="w-6 h-6" alt="" />
          </div>
          <div>
            <p className=" font-medium text-[18px]">Cookie settings</p>
          </div>
        </div>
        <div className="flex items-center gap-5 mt-3 py-2 cursor-pointer pl-4 hover:bg-[#F2F8FF]">
          <div>
            <Image src={sync} className="w-6 h-6" alt="" />
          </div>
          <div>
            <p className="font-medium text-xl">Calendar sync</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-5 mt-3 pl-4 py-2 cursor-pointer hover:bg-[#F2F8FF]">
          <div>
            <Image src={help} className="w-6 h-6" alt="" />
          </div>
          <div>
            <p className="font-medium text-xl">Help</p>
          </div>
          <div>
            <Image src={downArrow2} className="w-3 mt-1 h-3" alt="" />
          </div>
        </div>
        <div
          onClick={() => {
            signOut();
            router.push("/login");
            showToast("User Logout Successfull", "success");
          }}
          className="flex items-center gap-5 mt-3 pl-4 py-2 cursor-pointer hover:bg-[#F2F8FF]"
        >
          <div>
            <Image src={logout} className="w-6 h-6" alt="" />
          </div>
          <div>
            <p className="font-medium text-xl">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
