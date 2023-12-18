import { ThemeSwitcherTodoList } from "@/commons/components/ThemeSwitcherTodoList";
import React from "react";
import { BiLeaf } from "react-icons/bi";
import Task from "./Task";

export default function TodoList() {
  return (
    <div className="w-full">
      <div className="flex justify-between p-2  items-center rounded bg-neutral-200 dark:bg-neutral-800 mt-4">
        <div className="text-2xl font-bold flex items-center gap-2 text-teal-500 dark:text-teal-300">
          <h1>
            <BiLeaf />
          </h1>
          <h1>PodoMoro</h1>
        </div>
        <ThemeSwitcherTodoList />
      </div>
      <div className="w-full flex justify-center items-center flex-col mt-12">
        <h1 className="text-2xl font-bold">Todo List</h1>
        <div className="mt-4 w-full mx-auto flex justify-center items-center mb-24">
          <Task></Task>
        </div>
      </div>
    </div>
  );
}
