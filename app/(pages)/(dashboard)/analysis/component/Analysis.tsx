"use client";
import Sidebar from "@/app/(components)/sidebar/Sidebar";
import React from "react";
import AnalysisBox from "@/app/(components)/analysisBox/AnalysisBox";
import GraphCart from "@/app/(components)/graphCart/GraphCart";
import useAnalysis from "./useAnalysis";

export default function Analysis() {
  const { isSidebarOpen, past, pending, toggleSidebar, totall, upcoming } =
    useAnalysis();

  return (
    <>
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <div
          className={`flex flex-col flex-1 px-5 ${
            isSidebarOpen ? "lg:ml-[17%] md:ml-[25%] ml:[35%]" : "ml-[7%]"
          }`}
        >
          <div>
            <div className="my-8">
              <p className="font-bold text-[25px] ml-28 leading-7">Analysis</p>
            </div>
            <div className="flex gap-4 justify-center">
              <AnalysisBox boxName="Total" total={totall} />
              <AnalysisBox boxName="Upcoming" total={upcoming} />
              <AnalysisBox boxName="pending" total={pending} />
              <AnalysisBox boxName="Past" total={past} />
            </div>

            <div className="mt-16 ml-10">
              <GraphCart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
