import React from "react";
import Container from "../Container/Container";

function Footer() {
  return (
    <footer className="py-8 bg-slate-900 mt-12">
      <Container>
        <div className="text-center text-sm text-slate-400">
          © {new Date().getFullYear()} BYP - Crafted with React, Vite & Tailwind CSS.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
