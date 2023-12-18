import { ThemeSwitcherTodoList } from "@/commons/components/ThemeSwitcherTodoList";
import Link from "next/link";
import React from "react";
import { BiLeaf } from "react-icons/bi";

export default function Page() {
  return (
    <div>
      <div className="flex justify-between p-2  items-center rounded bg-neutral-200 dark:bg-neutral-800 mt-4">
        <div className="text-2xl font-bold flex items-center gap-2 text-teal-500 dark:text-teal-300">
          <h1>
            <BiLeaf />
          </h1>
          <h1>PodoMoro</h1>
        </div>
        <ThemeSwitcherTodoList />
      </div>

      <div className="w-11/12 mx-auto mt-10 text-black dark:text-white p-5 mb-24">
        <div>
          <h1 className="text-md sm:text-lg font-medium">
            <span className="border-b-4 border-red-400 ">What</span> is Pomodoro
            Technique?
          </h1>
          <p className="mt-5 tracking-wide opacity-70 text-sm ">
            The Pomodoro Technique is a proven time management approach for
            enhancing productivity and focus. I have designed a simple
            application that implements this method, assisting users in
            structuring work and break times. The application features time
            tracking, notifications, and statistics to help users monitor their
            progress.
          </p>
        </div>
        <div className="mt-5">
          <h1 className="text-md sm:text-lg font-medium">
            <span className="border-b-4 border-red-400 ">What</span> is Todo
            List Application
          </h1>
          <p className="mt-5 tracking-wide opacity-70 text-sm">
            In addition to the Pomodoro Technique, I have developed a task list
            application designed to make daily task management more efficient
            and organized. The application allows users to create task lists,
            set deadlines, and track their progress. With an intuitive
            interface, the application makes it easy for users to organize and
            complete tasks quickly.
          </p>

          <p className="mt-5 tracking-wide opacity-70 text-sm items-center flex gap-1 ">
            Made with{" "}
            <span className="text-red-400 animate-pulse text-2xl">♥</span> by{" "}
            <Link href="https://github.com/ryznoxy">Reza</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
