"use client";
import { NavList } from "@/commons/constants/NavList";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavbarGlobals() {
  const router = usePathname();

  return (
    <div className=" fixed bottom-4 left-0 right-0 px-4">
      <div className="max-w-md  border p-2 rounded-full mx-auto bg-neutral-300 dark:bg-neutral-800">
        <div className="flex items-center justify-center">
          {NavList.map((nav) => (
            <Link
              key={nav.title}
              href={nav.path}
              className={`w-full cursor-pointer flex items-center gap-2 justify-center capitalize rounded-full px-4 py-3 text-black dark:text-white ${
                router === nav.path ? "bg-neutral-700 text-white" : ""
              } `}
            >
              {nav.icon}
              {nav.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
