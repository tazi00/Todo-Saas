import React from "react";

function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="auth_layout grid place-content-center h-screen ">
      {children}
    </div>
  );
}

export default AuthLayout;
