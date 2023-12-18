"use client";

import { useEffect, useState } from "react";
import { BiEdit, BiTrash,BiSad } from "react-icons/bi";

export default function Task() {
  //Task state
  const [task, setTask] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("task")) || [];
    return storedTasks;
  });
  const [isDone, setIsDone] = useState(false);
  const [title, setTitle] = useState("");

  const id = Date.now();

  //Edit state
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  //set default value state in localstorage
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingTaskId !== null) {
      setTask((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editingTaskId ? { ...task, title: editedTitle } : task
        )
      );
      setEditingTaskId(null);
    } else {
      const newTask = { id: id, title: title, isDone: isDone };
      setTask((prevTasks) => [...prevTasks, newTask]);
    }

    // const newTask = { id: id, title: title, isDone: isDone };
    // setTask((prevTasks) => [...prevTasks, newTask]);

    // localStorage.setItem("task", JSON.stringify([...task, newTask]));

    setTitle("");
    setIsDone(false);
    setEditedTitle("");
  };

  const handleDelete = (id) => {
    setTask((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleEdit = (id) => {
    const taskToEdit = task.find((task) => task.id === id);
    if (taskToEdit) {
      setEditingTaskId(id);
      setEditedTitle(taskToEdit.title);
    }
  };

  const checked = (id) => {
    setTask((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      })
    );
  };

  return (
    <div className="px-4 w-full max-w-sm">
      <h1 className="text-md font-medium mb-4">
        Tasks <span className="text-lg">{task.length}</span>
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-9 gap-2 items-center justify-center"
      >
        {/* <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        /> */}
        <input
          type="text"
          value={editingTaskId !== null ? editedTitle : title}
          onChange={(e) =>
            editingTaskId !== null
              ? setEditedTitle(e.target.value)
              : setTitle(e.target.value)
          }
          className="py-2 px-4 w-full rounded-xl border dark:border-neutral-300 col-span-6"
          placeholder="Title of task ..."
          required
        />
        <button
          type="submit"
          className="py-2 px-4 w-full rounded-xl border  bg-teal-400 dark:bg-teal-600 dark:border-neutral-300 col-span-3 text-medium"
        >
          {editingTaskId !== null ? "Update" : "Add"}
        </button>
      </form>

      {task.length === 0 ? (
        <div className="w-full flex justify-center items-center flex-col mt-12">
          <BiSad size={64} />
          No Data
        </div>
      ) : (
        <div className="mt-4">
          {task.map((task) => {
            return (
              <div
                key={task.id}
                className="flex justify-between items-center px-4 py-3 rounded-xl bg-neutral-200 dark:bg-neutral-800 mb-2"
              >
                <input
                  type="checkbox"
                  onChange={() => checked(task.id)}
                  className="w-4 h-4 rounded"
                />
                <h1
                  className={`${
                    task.isDone ? "line-through decoration-2" : ""
                  } w-48   truncate px-2`}
                >
                  {task.title}
                </h1>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleEdit(task.id)}
                    className="p-1 rounded-md bg-blue-400"
                  >
                    <BiEdit size={24} />
                  </button>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="p-1 rounded-md bg-red-400"
                  >
                    <BiTrash size={24} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
