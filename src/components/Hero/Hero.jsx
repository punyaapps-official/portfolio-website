import React from "react";
import Container from "../Container/Container";

function Hero() {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold mb-4">Hi, I'm Bryan — a frontend developer.</h2>
          <p className="text-slate-300">I build accessible, fast, and delightful web experiences.</p>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
