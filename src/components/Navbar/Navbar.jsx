import React from 'react';
import Container from '../Container/Container';
import Button from '../Button/Button';
import { Menu } from 'lucide-react';

function Navbar() {
  return (
    <header className="backdrop-blur-sm bg-slate-950/60 border-b border-slate-800">
      <Container>
        <div className="flex items-center justify-between py-4">
          <a href="#" className="font-bold text-lg">BYP</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#workflow" className="hover:underline">Workflow</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button as="a" href="/CV_Bryan_YP.pdf" download="CV_Bryan_YP.pdf" variant="primary">
              Download CV
            </Button>
            <button className="md:hidden p-2 rounded bg-slate-800">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
