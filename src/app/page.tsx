"use client";

import Image from "next/image";
import Sidebar from "@/app/components/Sidebar";
import { CircleUserRound, User } from "lucide-react";
import React from "react";

export default function Home() {
  const [bankStatus, setBankStatus] = React.useState(false);

  const handleBankStatus = () => {
    setBankStatus(!bankStatus);
  };

  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <div className="bg-gray-300 w-full flex justify-right items-right py-4 px-5">
          <User className="bg-green-400 text-white rounded-full" />
        </div>
        <div className="p-4 shadow-md rounded-xl bg-gray-100 h-full">
          <div className="flex flex-col gap-2 bg-white p-4 rounded-xl justify-center">
            <div className="flex w-full justify-center items-center gap-2">
              <hr className="text-green-500 w-1/3" />
              <div className="text-center">Partner Onboarding</div>
              <hr className="text-green-500 w-1/3" />
            </div>
            <div className="bg-black/5 flex flex-col gap-2 rounded">
              <div className="flex w-full justify-center items-center gap-2 mt03">
                <hr className="text-green-500 w-1/3" />
                <div className="text-center">Fund Withdraw Option</div>
                <hr className="text-green-500 w-1/3" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 bg-white py-2 px-3 rounded m-2 w-fit">
                  <input type="checkbox" onClick={handleBankStatus} />
                  <div className="text-sm text-gray-400">Bank</div>
                </div>
                {bankStatus && (
                  <div className="grid grid-cols-4 gap-2 py-2 px-3 rounded m-2 w-full">
                    <div className="flex flex-col gap-1">
                      <div className="text-sm text-gray-400">Bank</div>
                      <select className="border-2 border-gray-300 bg-white/70 rounded-md p-2 focus:outline-none  ">
                        <option value="cbe">CBE</option>
                        <option value="dashen">Dashen</option>
                        <option value="birhan">birhan</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-sm text-gray-400">Select Branch</div>
                      <select className="border-2 border-gray-300 bg-white/70 rounded-md p-2 focus:outline-none">
                        <option value="mexico">Mexico</option>
                        <option value="bole">Bole</option>
                        <option value="megenagna">Megenagna</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-sm text-gray-400">Account Name</div>
                      <input
                        type="text"
                        className="border-2 border-gray-300 bg-white/70 rounded-md p-2 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-sm text-gray-400">
                        Account Number
                      </div>
                      <input
                        type="text"
                        className="border-2 border-gray-300 bg-white/70 rounded-md p-2 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-sm text-gray-400">
                        Proof of Bank Account
                      </div>
                      <input
                        type="file"
                        className="border-2 border-gray-300 bg-white/70 rounded-md p-2 focus:outline-none text-sm"
                      />
                    </div>
                  </div>
                )}
                <div className="flex gap-2 py-2 justify-end px-3">
                  <button className="bg-green-500 text-white text-sm py-1 px-3 rounded">
                    Back
                  </button>
                  <button className="bg-green-500 text-white text-sm py-1 px-3 rounded">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
