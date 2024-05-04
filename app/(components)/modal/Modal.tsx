import { Modal } from "antd";
import React from "react";

export interface Modalll {
  handleOk: () => void;
  isModalOpen: boolean;
  selectedEventEmail?: string;
  selectedEventAdditionalInfo?: string;
  selectedEventDate?: string;
  selectedEventName?: string;
  selectedEventTime?: string;
  selectedEventTimeZone?: string;
  handleCancel: () => void;
}

export default function Modall({
  isModalOpen,
  handleCancel,
  handleOk,
  selectedEventEmail,
  selectedEventAdditionalInfo,
  selectedEventDate,
  selectedEventName,
  selectedEventTime,
  selectedEventTimeZone,
}: Modalll) {
  return (
    <Modal title="" open={isModalOpen} onCancel={handleCancel} onOk={handleOk}>
      <div className="container">
        <div className="row">
          <div className="col">
            <p>
              <span className="font-semibold" style={{ fontSize: "17px" }}>
                Name :{" "}
              </span>{" "}
              <span style={{ fontSize: "17px" }} className="ml-[90px]">
                {" "}
                {selectedEventName}
              </span>
            </p>
            <p>
              <span className="font-semibold" style={{ fontSize: "17px" }}>
                Email :{" "}
              </span>{" "}
              <span style={{ fontSize: "17px" }} className="ml-24">
                {selectedEventEmail}
              </span>
            </p>

            <p>
              <span className="font-semibold" style={{ fontSize: "17px" }}>
                Time :{" "}
              </span>{" "}
              <span style={{ fontSize: "17px" }} className="ml-[98px]">
                {selectedEventTime}
              </span>
            </p>
            <p>
              <span className="font-semibold" style={{ fontSize: "17px" }}>
                Date :{" "}
              </span>{" "}
              <span style={{ fontSize: "17px" }} className="ml-[102px]">
                {" "}
                {selectedEventDate}
              </span>
            </p>
            <p>
              <span className="font-semibold" style={{ fontSize: "17px" }}>
                Time Zone :{" "}
              </span>{" "}
              <span style={{ fontSize: "17px" }} className="ml-[58px]">
                {" "}
                {selectedEventTimeZone}
              </span>
            </p>
            <p>
              <span className="font-semibold" style={{ fontSize: "17px" }}>
                Additional Info :{" "}
              </span>{" "}
              <span style={{ fontSize: "17px" }} className="ml-[24px]">
                {selectedEventAdditionalInfo}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
