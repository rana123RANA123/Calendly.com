"use client";
import TimeSlot from "@/app/(components)/timeSlot/TimeSlot";
import Image from "next/image";
import Link from "next/link";
import NewCalendar from "@/app/(components)/newCalendar/NewCalendar";
import MenuHeader from "@/app/(components)/menuHeader/MenuHeader";
import { BeatLoader } from "react-spinners";
import useSeleteDate from "./component/useSeleteDate";
import TimezoneDropdown from "@/app/(components)/timeZone/TimezoneSelector";
import { clock, sticker2, tool } from "@/app/constants/images";

const page = ({ params }: any) => {
  const {
    handleDateChange,
    handleTimeSlotClick,
    handleTimeZoneChange,
    selectedDateTime,
    userData,
    sessionss,
    ownerData,
    decodedValue,
    availabilityDataLoading,
    filteredTimeSlots,
  } = useSeleteDate({ params });

  return (
    <>
      {!availabilityDataLoading ? (
        <div className="flex justify-center mt-[20%] items-center">
          <BeatLoader color="#0069FF" size={20} />
        </div>
      ) : (
        <div>
          <div>
            <MenuHeader />
          </div>

          <div>
            <div className="flex justify-center items-center mt-14">
              <div className="h-[800px] mb-6 shadow-2xl border-[1px] border-grey w-[1060px] flex justify-center">
                <div className="w-[30%] border-[1px] px-7 py-7">
                  <div>
                    <div className="mt-6">
                      <p className="text-[14px] font-medium">
                        {ownerData ? ownerData?.fullName : decodedValue}
                      </p>
                    </div>
                    <div className="">
                      <p className="text-[22px] font-bold">
                        30 Minutes Meeting
                      </p>
                    </div>
                    <div className="mt-4 flex gap-2 items-center">
                      <div>
                        <Image src={clock} className="h-4 w-4" alt="clock" />
                      </div>
                      <div>
                        <p className="text-[14px] font-medium">30 Min</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[70%] px-8 py-6 ">
                  <div className="flex justify-end">
                    <Image
                      src={sticker2}
                      className="h-15 w-15 absolute"
                      style={{ right: "230px", top: "115px" }}
                      alt="tick"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-[18px]">
                      Select a Date & Time
                    </p>
                    <div className="flex">
                      <div>
                        <div className="w-[374px] h-[372px]">
                          <NewCalendar
                            selectedDate={
                              selectedDateTime.date
                                ? new Date(selectedDateTime.date)
                                : undefined
                            }
                            onDateChange={handleDateChange}
                          />
                        </div>
                        <div className="py-2 mt-4">
                          <p className="font-bold text-[18px]">Time zone</p>
                        </div>
                        <div>
                          <TimezoneDropdown onChange={handleTimeZoneChange} />
                        </div>
                        <div className="mt-3">
                          <button className="h-[44px] gap-2 border-gray-400 text-center flex items-center justify-center rounded-[32px] px-4 border-[1px] text-[14px] font-bold ">
                            <Image src={tool} alt="Took" />
                            Troubleshoot
                          </button>
                        </div>
                      </div>
                      <div className="w-[275px] h-[640px] ml-4 ">
                        <div>
                          <p>Wednesday, March 27</p>
                        </div>
                        <div className="mt-8 h-[570px] pb-4 overflow-auto scrollbar-hide">
                          {filteredTimeSlots.map(({ time, label }) => (
                            <TimeSlot
                              key={label}
                              time={time}
                              onClick={() => handleTimeSlotClick(label)}
                            />
                          ))}
                        </div>
                        <div className="w-[220px] h-[65px] flex gap-2 mx-3 mt-6">
                          <div className="w-[110px] cursor-pointer h-[65px] bg-gray-600 rounded-[8px] flex justify-center items-center">
                            <p className="font-semibold text-[17px] text-white">
                              11:00am
                            </p>
                          </div>
                          {selectedDateTime.date &&
                          selectedDateTime.time &&
                          selectedDateTime.timeZone &&
                          selectedDateTime.decodedValue ? (
                            <Link
                              href={{
                                pathname: "/scheduleEvents",
                                query: {
                                  date: selectedDateTime.date,
                                  time: selectedDateTime.time,
                                  timeZone: selectedDateTime.timeZone,
                                  ownerEmail: selectedDateTime.decodedValue,
                                  ownerName: ownerData
                                    ? ownerData?.fullName
                                    : sessionss.data?.user.name,
                                },
                              }}
                              className="w-[110px] cursor-pointer h-[65px] flex
                            justify-center rounded-[8px] items-center bg-[#0069FF] "
                            >
                              <p className="font-semibold text-white text-[17px]">
                                Next
                              </p>
                            </Link>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
