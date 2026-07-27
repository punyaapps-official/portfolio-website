import React from "react";
import Container from "../Container/Container";

function Header() {
  return (
    <header className="py-6 bg-slate-900">
      <Container>
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold">BYP</a>
          <nav className="space-x-6">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="/CV_Bryan_YP.pdf" download="CV_Bryan_YP.pdf" className="hover:underline">Download CV</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
