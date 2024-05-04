"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ScheduleInputField from "@/app/(components)/scheduleInputField/ScheduleInputField";
import TextArea from "@/app/(components)/textArea/TextArea";
import useScheduleEvent from "./useScheduleEvent";
import {
  backArrow,
  clock2,
  diary,
  global,
  sticker3,
} from "@/app/constants/images";

export default function ScheduleEvent() {
  const { formData, handleBack, handleChange, handleSubmit, sessionss } =
    useScheduleEvent();

  return (
    <div>
      <div className="flex justify-center items-center mt-14">
        <div className="h-[700px] mb-6 shadow-2xl border-[1px] border-grey w-[80%] flex justify-center">
          <div className="w-[30%] border-[1px] px-7 py-7">
            <div>
              <div>
                <div
                  onClick={handleBack}
                  className="h-10 w-10 cursor-pointer border-[1px] flex items-center justify-center rounded-full"
                >
                  <Image src={backArrow} className="h-6 w-6" alt="Back Arrow" />
                </div>
              </div>
              <div className="mt-6">
                <p className="text-[14px] font-medium">{formData.ownerName}</p>
              </div>
              <div className="">
                <p className="text-[22px] font-bold">30 Minutes Meeting</p>
              </div>
              <div className="mt-4 flex gap-1 items-center">
                <div>
                  <Image src={clock2} className="h-4 w-4" alt="" />
                </div>
                <div>
                  <p className="text-[14px] font-medium">30 Min</p>
                </div>
              </div>
              <div className="mt-4 flex gap-1 items-center">
                <div>
                  <Image src={diary} className="h-4 w-4" alt="" />
                </div>
                <div>
                  <p className="text-[14px] font-medium">
                    {formData.time ? formData.time : "undefine"},{" "}
                    {formData.date ? formData.date : "undefine"},{" "}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex gap-1 items-center">
                <div>
                  <Image src={global} className="h-4 w-4" alt="" />
                </div>
                <div>
                  <p className="text-[14px] font-medium">
                    {formData.timeZone ? formData.timeZone : "undefine"},{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-[380px]">
              <div className="flex justify-between">
                <p className="font-medium text-[15px] text-[#0069FF]">
                  Cookie settings
                </p>
                <p className="font-medium text-[15px] ">Report abuse</p>
              </div>
            </div>
          </div>

          <div className="w-[70%] flex justify-between">
            <div>
              <div className=" px-8 py-6 ">
                <div>
                  <p className="font-bold text-[18px]">Enter Details</p>
                </div>
                <div className="mt-3">
                  <p className="font-semibold text-[15px]">Name *</p>
                </div>
                <div className="mt-1">
                  <ScheduleInputField
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-2">
                  <p className="font-semibold text-[15px]">Email *</p>
                </div>
                <div className="mt-2">
                  <ScheduleInputField
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-4 h-[50px] w-[420px]">
                  <p className="font-semibold text-[15px]">
                    Please share anything that will help prepare for our
                    meeting.
                  </p>
                </div>
                <div className="mt-3">
                  <TextArea
                    rows={3}
                    cols={6}
                    placeholder=""
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-4 h-[50px] w-[430px]">
                  <p className="font-normal text-[14px]">
                    By proceeding, you confirm that you have read and agree to{" "}
                    <span className="font-bold text-[#0069FF]">
                      Calendly's Term of Use{" "}
                    </span>{" "}
                    and{" "}
                    <span className="font-bold text-[#0069FF]">
                      Privacy Notice.
                    </span>
                  </p>
                </div>
                <div className="mt-3" onClick={handleSubmit}>
                  <Link
                    className="h-[44px] w-[150px] bg-[#0069FF] text-white border-bg-[#0069FF] text-center flex items-center justify-center rounded-[32px] px-4 border-[1px] text-[14px] font-bold "
                    href={{
                      pathname: "/calendarInvitation",
                      query: {
                        date: formData.date,
                        time: formData.time,
                        timeZone: formData.timeZone,
                        ownerEmail: formData.ownerEmail,
                      },
                    }}
                  >
                    Schedule Event
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Image
                src={sticker3}
                className="h-15 w-15"
                style={{}}
                alt="tick"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
