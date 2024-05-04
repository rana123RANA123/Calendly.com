"use client";
import Image from "next/image";
import React from "react";
import tick from "../../../../../public/vectors/check.png";
import tab from "../../../../../public/vectors/newTab.png";
import person from "../../../../../public/vectors/person.png";
import calendar from "../../../../../public/vectors/diary.png";
import world from "../../../../../public/vectors/globe.png";
import sticker from "../../../../../public/vectors/sticker.png";
import useCalendarInvitation from "./useCalendarInvitation";

export default function CalendarInvitation() {
  const { formData, session } = useCalendarInvitation();
  return (
    <div>
      <div className="flex justify-center items-center mt-14">
        <div className="h-[550px] shadow-2xl border-[1px] border-grey w-[70%]">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className=" h-[100%] w-[100%] pl-36 mt-10">
                <div>
                  <div className="text-center flex items-center justify-center gap-2">
                    <div className="">
                      <Image src={tick} className="h-5 w-5" alt="tick" />
                    </div>
                    <p className="text-[19px] font-semibold ">
                      You are scheduled
                    </p>
                  </div>
                </div>
                <div>
                  <div className="text-center mt-3">
                    <p className=" ">
                      A calendar invitation has been send to your email address.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <button className="h-[37px] border-[grey] text-center flex items-center justify-center rounded-[32px] px-4 border-[1px] text-[12px] font-bold ">
                    Open Invitation
                    <Image src={tab} className="h-6 w-6" alt="Tab" />
                  </button>
                </div>
                <div className="flex justify-center">
                  <div className="w-[480px] h-[160px] mt-5 border-[1px] border-grey rounded-[8px]">
                    <div className="py-3 px-5">
                      <div>
                        <p className="text-[18px] font-bold">
                          30 Minutes Meeting
                        </p>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <div>
                          <Image
                            src={person}
                            className="w-4 h-4"
                            alt="Person"
                          />
                        </div>
                        <div>
                          <p className="text-[17px] font-semibold text-gray-500">
                            {session.data?.user?.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <div>
                          <Image
                            src={calendar}
                            className="w-4 h-4"
                            alt="Person"
                          />
                        </div>
                        <div>
                          <p className="text-[17px] font-semibold text-gray-500">
                            {formData.time ? formData.time : "undefine"},{" "}
                            {formData.date ? formData.date : "undefine"},
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <div>
                          <Image src={world} className="w-4 h-4" alt="Person" />
                        </div>
                        <div>
                          <p className="text-[17px] font-semibold text-gray-500">
                            {formData.timeZone ? formData.timeZone : "undefine"}
                            ,
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <Image src={sticker} className="h-15 w-15" alt="tick" />
              </div>
            </div>
            <div className="text-cyan-600 mt-44 ml-7">Cooking settings</div>
          </div>
        </div>
      </div>
    </div>
  );
}
