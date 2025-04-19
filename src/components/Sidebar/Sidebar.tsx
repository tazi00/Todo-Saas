"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useSidebarStore } from "./store/useSidebar.store";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

function Sidebar() {
  const isSidebarOpen = useSidebarStore((state) => state.isOpen);
  const closeSidebar = useSidebarStore((state) => state.close);

  console.log(isSidebarOpen);

  useEffect(() => {
    const handleResize = () => {
      closeSidebar(); // close on any resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [closeSidebar]);
  return (
    <aside
      className={cn(
        "sm:relative sm:w-full absolute bg-background border-l border w-5/6 top-0 h-screen sm:left-0 transition-all duration-300 ease-in-out transform",
        isSidebarOpen ? "left-0 opacity-100" : "-left-full "
      )}
    >
      <div className="head py-5 px-5 flex sm:hidden  justify-between border border-b   ">
        <Link href={"/"} className="inline-block">
          <h1 className="text-2xl font-bold">Quick It</h1>
        </Link>
        <Button variant={"outline"} onClick={closeSidebar}>
          <Menu />
        </Button>
      </div>

      <ul className="[&>li]:px-5 [&>li]:py-3 mt-6">
        <li>
          <Link href={"/"}>Dashboard</Link>
        </li>
        <li>
          <Link href={"/"}>Todos</Link>
        </li>
        <li>
          <Link href={"/"}>Settings</Link>
        </li>
        <li>
          <Link href={"/"}>Help</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
