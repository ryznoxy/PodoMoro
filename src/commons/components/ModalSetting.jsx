import React from "react";
import { IoClose } from "react-icons/io5";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function ModalSetting({
  pomodoroRef,
  shortBreakRef,
  longBreakRef,
  openSetting,
  setOpenSetting,
  updateTimeDefaultValue,
}) {
  const inputs = [
    {
      value: "pomodoro",
      ref: pomodoroRef,
      defaultValue: 25,
    },
    {
      value: "shortBreak",
      ref: shortBreakRef,
      defaultValue: 5,
    },
    {
      value: "longBreak",
      ref: longBreakRef,
      defaultValue: 10,
    },
  ];

  return (
    <>
      <div
        className={`absolute h-full w-full left-0 top-0 bg-black bg-opacity-25 ${
          openSetting ? "" : "hidden"
        }`}
        onClick={() => setOpenSetting(false)}
      ></div>
      <div
        className={`max-w-xl bg-white absolute sm:w-96 w-11/12 left-1/2 top-1/2 p-5 rounded text-black ${
          openSetting ? "" : "hidden"
        }`}
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="text-neutral-600 flex justify-between items-center">
          <h1 className="uppercase font-bold tracking-wider">Time Setting</h1>
          <IoClose
            className="cursor-pointer "
            size={24}
            onClick={() => setOpenSetting(false)}
          />
        </div>
        <div className="h-1 w-full bg-neutral-200 my-3"></div>
        <div className="flex gap-5 ">
          {inputs.map((input, i) => {
            return (
              <div key={i}>
                <h1 className="text-gray-400 capitalize">{input.value}</h1>
                <input
                  defaultValue={input.defaultValue}
                  min={1}
                  className="w-full bg-gray-300 bg-opacity-30 py-2 rounded outline-none text-center "
                  type={"number"}
                  ref={input.ref}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-5">
          <ThemeSwitcher />
        </div>
        <button
          onClick={updateTimeDefaultValue}
          className="bg-green-500 uppercase w-full mt-5 text-white rounded py-2 "
        >
          Save
        </button>
      </div>
    </>
  );
}
