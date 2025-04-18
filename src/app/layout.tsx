import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins", // Define a CSS variable
});

export const metadata: Metadata = {
  title: "Todo-saas",
  description: "A Fully Features Todo-Saas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="app_layout">
            <Header />
            <div className="grid sm:grid-cols-[200px_1fr] grid-cols-1 ">
              <Sidebar />
              <main className="p-5">content</main>
            </div>
            <Footer />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
