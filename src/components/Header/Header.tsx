"use client";

import Link from "next/link";
import React from "react";
import ThemeToggler from "../ThemeToggler";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useSidebarStore } from "../Sidebar/store/useSidebar.store";

function Header() {
  const openSidebar = useSidebarStore((state) => state.open);

  return (
    <header className="bg-background py-4 border-b ">
      <div className="container mx-auto">
        <div className="flex items-center px-5 sm:px-0">
          <div className="logo-box mr-auto flex gap-4 items-center">
            <Button
              variant={"outline"}
              className="cursor-pointer sm:hidden block"
              onClick={() => openSidebar()}
            >
              <Menu />
            </Button>
            <Link href={"/home"} className="inline-block">
              <h1 className="text-2xl font-bold">Quick It</h1>
            </Link>
          </div>
          <div className="auth-box ">
            <ul className="flex [&>li>a]:p-2  [&>li>a]:inline-block">
              <li>
                <Link href={"/login"}>Login</Link>
              </li>
              <li>
                <Link href={"/register"}>Register</Link>
              </li>
            </ul>
          </div>
          <div className="theme-box ml-4">
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
