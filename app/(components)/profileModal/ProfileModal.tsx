"use client";
import Toast, { showToast } from "@/app/constants/toastify";
import { Modal } from "antd";
import { useSession } from "next-auth/react";
import React from "react";

export interface Modalll {
  isModalOpen: boolean;
  handleCancel: () => void;
}

export default function ProfileModal({ isModalOpen, handleCancel }: Modalll) {
  const { data: sessions } = useSession();

  const handleOk = () => {
    const textarea = document.createElement("textarea");
    textarea.value = `http://localhost:3000/goNext/${sessions?.user.email}`;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  return (
    <Modal
      title=""
      open={isModalOpen}
      onCancel={handleCancel}
      onOk={handleOk}
      okText="Copy"
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <p>
              <span className="font-bold" style={{ fontSize: "27px" }}>
                Invite User Link :-{" "}
              </span>{" "}
            </p>
          </div>
          <div className=" mt-6 w-[470px] flex items-center h-12 rounded-md border-[1px] border-gray-400 ">
            <span className="font-medium px-3" style={{ fontSize: "15px" }}>
              {`http://localhost:3000/goNext/${sessions?.user.email}`}
            </span>{" "}
          </div>
        </div>
      </div>
    </Modal>
  );
}
