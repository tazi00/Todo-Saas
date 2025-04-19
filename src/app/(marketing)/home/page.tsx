import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <section className="w-full h-[90vh] flex items-center justify-center text-center px-6 sm:px-10 md:px-20 bg-background">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-foreground">
          Supercharge Your Workflow with{" "}
          <span className="text-primary bg-emerald-500 px-4 rounded-2xl rotate-6 inline-block ">
            Quick It
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground">
          Ouick It helps you manage tasks, track progress, and boost
          productivity — all in one powerful platform.
        </p>
        <div className="mt-8">
          <Link
            className="bg-foreground text-background px-5 py-3 rounded-xl"
            href={"/"}
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
