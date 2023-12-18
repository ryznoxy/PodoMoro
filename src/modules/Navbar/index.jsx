import SettingButton from "@/commons/components/SettingButton";
import React from "react";
import { BiLeaf } from "react-icons/bi";

const Navbar = ({ setOpenSetting }) => {
  return (
    <div className="flex justify-between p-2  items-center rounded bg-neutral-200 dark:bg-neutral-800 mt-4">
      <div className="text-2xl font-bold flex items-center gap-2 text-teal-500 dark:text-teal-300">
        <h1>
          <BiLeaf />
        </h1>
        <h1>PodoMoro</h1>
      </div>
      <div>
        <SettingButton onClick={() => setOpenSetting((value) => !value)} />
      </div>
    </div>
  );
};
export default React.memo(Navbar);
