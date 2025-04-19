import ThemeToggler from "@/components/ThemeToggler";
import TodoForm from "@/components/TodoForm";
import React from "react";

function HomePage() {
  return (
    <section className="home">
      <ThemeToggler />
      <TodoForm />
    </section>
  );
}

export default HomePage;
