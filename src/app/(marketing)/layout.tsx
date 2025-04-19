import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="app_layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MarketingLayout;
