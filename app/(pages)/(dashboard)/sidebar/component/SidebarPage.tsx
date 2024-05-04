"use client";
import Sidebar from "@/app/(components)/sidebar/Sidebar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { colors } from "@/app/(components)/profileData/ProfileData";
import Modall from "@/app/(components)/modal/Modal";
import SidebarTopMenu from "@/app/(components)/sidebarTopMenu/SidebarTopMenu";
import SidebarSecondMenu from "@/app/(components)/sidebarSecondMenu/SidebarSecondMenu";
import useSidebar from "./useSidebar";
import SelectCategory from "@/app/(components)/selectCategory/SelectCategory";
import ExportFilter from "@/app/(components)/exportFilter/ExportFilter";
import { BeatLoader } from "react-spinners";
import { rightSmall } from "@/app/constants/images";

export default function SidebarPage() {
  const {
    filteredEvents,
    handleCancel,
    handleDateChange,
    handleImageClick,
    handleOk,
    isSidebarOpen,
    selectedCategory,
    selectedDate,
    selectedEvent,
    setIsModalOpen,
    setSelectedCategory,
    setSelectedEvent,
    showCalendar,
    toggleSidebar,
    uniqueDates,
    isModalOpen,
    sliceLoading,
  } = useSidebar();
  return (
    <>
      {sliceLoading ? (
        <div className="flex justify-center mt-[20%] items-center">
          <BeatLoader color="#0069FF" size={20} />
        </div>
      ) : (
        <>
          <div className="flex">
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
            <div
              className={`flex flex-col flex-1 ${
                isSidebarOpen ? "lg:ml-[17%] md:ml-[25%] ml:[35%]" : "ml-[5%]"
              }`}
            >
              <div className="w-[100%]  px-6">
                <SidebarTopMenu />
                <div>
                  <SidebarSecondMenu />

                  <div className="mt-4">
                    <div className="h-[277px]">
                      <div className="h-[64px] rounded-t-[6px] flex justify-between border-[1px] border-gray-300 items-center px-8">
                        <div>
                          <SelectCategory
                            handleImageClick={handleImageClick}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                          />
                        </div>
                        <div>
                          <ExportFilter />
                        </div>
                      </div>
                      {uniqueDates.map((date, index) => (
                        <div key={index}>
                          <div className="h-[58px] px-8 border-[1px] border-t-0 border-gray-300 flex items-center">
                            <p className="font-semibold text-[15px]">{date}</p>
                          </div>
                          {filteredEvents
                            .filter((event) => event.date === date)
                            .map((event, index) => (
                              <div
                                key={index}
                                className="h-[96px] border-[1px] border-gray-300 border-t-0 px-8"
                              >
                                <div className="flex items-center justify-between">
                                  <div className="h-[48px] flex mt-6 gap-3 w-[310px]">
                                    <>
                                      <div
                                        className={`h-[30px] text-white w-[30px] text-center flex items-center justify-center rounded-full border-[1px] ${
                                          colors[index % colors.length]
                                        } text-[14px] font-semibold`}
                                      >
                                        {event.name.charAt(0).toUpperCase()}
                                      </div>
                                    </>
                                    <div>
                                      <p className="font-normal text-[13px]">
                                        {event.time}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="h-[48px] mt-6 w-[310px]">
                                    <div className="h-[48px] gap-3 w-[310px]">
                                      <div className="">
                                        <p className="font-semibold text-[14px]">
                                          test
                                        </p>
                                      </div>
                                      <div>
                                        <p className="font-normal text-[14px]">
                                          Event type{" "}
                                          <span className="font-semibold">
                                            30 Minute Meeting
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className=" h-[48px] mt-6 w-[310px]">
                                    <div className="h-[48px] gap-3 w-[310px]">
                                      <div className="">
                                        <p className="font-normal flex gap-2 text-[14px]">
                                          <span className="px-2 border-r-2  border-black">
                                            1 host
                                          </span>
                                          <span>non-hosts</span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className=" h-[48px] cursor-pointer flex items-center mt-6 w-[68px]"
                                    onClick={() => {
                                      setSelectedEvent(event);
                                      setIsModalOpen(true);
                                    }}
                                  >
                                    <div className="flex gap-2">
                                      <div>
                                        <Image
                                          src={rightSmall}
                                          className="h-[16px] w-[16px]"
                                          alt=""
                                        />
                                      </div>
                                      <div>
                                        <p className="font-normal text-[14px] text-gray-500">
                                          Details
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      ))}

                      <div className="h-[58px] rounded-b-[6px] border-[1px] border-t-0 text-gray-500 border-gray-300 justify-center flex items-center">
                        <p className="font-normal text-[15px]">
                          You've reached the end of the list
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modall
            handleCancel={handleCancel}
            handleOk={handleOk}
            selectedEventAdditionalInfo={selectedEvent?.additionalInfo ?? ""}
            selectedEventDate={selectedEvent?.date ?? ""}
            selectedEventName={selectedEvent?.name ?? ""}
            selectedEventEmail={selectedEvent?.email ?? ""}
            selectedEventTime={selectedEvent?.time ?? ""}
            selectedEventTimeZone={selectedEvent?.timeZone ?? ""}
            isModalOpen={isModalOpen}
          />
        </>
      )}
    </>
  );
}
