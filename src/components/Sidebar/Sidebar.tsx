"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

function Sidebar() {
  //   const;
  return (
    <aside className="sm:relative sm:w-full absolute bg-background border-l border w-5/6 top-0 h-screen sm:left-0 -left-full">
      <div className="head py-5 px-5 flex sm:hidden  justify-between border border-b   ">
        <Link href={"/"} className="inline-block">
          <h1 className="text-2xl font-bold">Quick It</h1>
        </Link>
        <button>
          <Menu />
        </button>
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
