import React from "react";
import Container from "../Container/Container";

const sampleProjects = [
  { id: 1, title: "Portfolio Site", desc: "This site — built with React + Vite." },
  { id: 2, title: "Todo App", desc: "A simple todo app showcasing state management." },
];

function Projects() {
  return (
    <section id="projects" className="py-16 bg-neutral-50 dark:bg-neutral-950">
      <Container>
        <h3 className="text-2xl font-bold mb-6">Projects</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {sampleProjects.map((p) => (
            <article key={p.id} className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
              <h4 className="text-lg font-semibold">{p.title}</h4>
              <p className="text-neutral-600 dark:text-neutral-300 mt-2">{p.desc}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
