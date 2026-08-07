import React from "react";
import Container from "../Container/Container";

function Footer() {
  return (
    <footer className="py-8 bg-neutral-50 dark:bg-neutral-900 mt-12">
      <Container>
        <div className="text-center text-sm text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} BYP - Crafted with React, Vite & Tailwind CSS.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
