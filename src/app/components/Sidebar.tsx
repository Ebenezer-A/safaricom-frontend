import { Columns3, Command, LayoutDashboard } from "lucide-react";
import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="bg-slate-900 h-full">
      <div className="py-3 px-5 text-white font-semibold border-b-2 border-gray-200">
        OP-PARTNER MANAGMENT
      </div>
      <div className="flex flex-col gap-4 m-10">
        <div className="text-gray-400 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <LayoutDashboard size={20} />
            Dashboard
          </div>
          <div className="flex items-center gap-2">
            <Command size={20} />
            Onboarding
          </div>
          <div className="flex items-center gap-2">
            <Columns3 size={20} />
            View
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
