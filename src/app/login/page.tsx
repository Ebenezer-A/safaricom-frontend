"use client";

import { loginRequest } from "@/lib/api";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, SquareAsterisk } from "lucide-react";

interface LoginPayload {
  email: string;
  password: string;
}

const page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginPayload>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await loginRequest(formData);
      router.push("/");
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-green-600 flex justify-between items-center py-3 px-5">
        <div className="text-white text-2xl">M-Pesa</div>
        <div className="flex justify-end w-1/4 items-center gap-4 px-3 text-white">
          <div>Apply</div>
          <div>Recommended</div>
          <button className="bg-white text-green-600 py-2 px-3 rounded">
            Login
          </button>
        </div>
      </div>
      <div className="bg-gray-200 w-full h-full">
        <div className="flex ml-12 pt-20 h-full w-1/2">
          <div>
            <div className="flex flex-col mb-7">
              <h1 className="font-semibold text-2xl">
                M-PESA Acquisition Portal
              </h1>
              <p className="mt-2">
                Welcome to M-PESA world of convineince! THis portal provides an
                efficient way to access and magage your detail.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label id="email" className="text-sm text-gray-400">
                  Email Address
                </label>
                <div className="w-full relative">
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-2 border-gray-300 focus:outline-0 focus:border-green-600 rounded-xl px-10 py-2 w-full"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="text-gray-400" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label id="password" className="text-sm text-gray-400">
                  Password
                </label>
                <div className="w-full relative">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border-2 border-gray-300 focus:outline-0 w-full focus:border-green-600 rounded-xl px-10 py-2"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SquareAsterisk className="text-gray-400" />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white rounded-l w-full py-2 hover:bg-green-700"
              >
                Login
              </button>
            </form>
            <div className="text-green-600 text-right mt-8">
              Forgot password?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
