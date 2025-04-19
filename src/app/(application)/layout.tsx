import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";

function Applayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="app_layout">
      <Header />
      <div className="grid sm:grid-cols-[200px_1fr] grid-cols-1 ">
        <Sidebar />
        <main className="p-5">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Applayout;
