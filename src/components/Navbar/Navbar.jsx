import React, { useState } from 'react';
import Container from '../Container/Container';
import Button from '../Button/Button';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#workflow', label: 'Workflow' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/70 dark:bg-black/60 border-b border-neutral-200 dark:border-neutral-800">
      <Container>
        <div className="flex items-center justify-between py-4">
          <a href="#" className="font-bold text-lg">BYP</a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:underline">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            <div className="hidden md:block">
              <Button
                as="a"
                href="/CV_Bryan_YP.pdf"
                download="CV_Bryan_YP.pdf"
                variant="primary"
              >
                Download CV
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={isMenuOpen}
              className="md:hidden p-2 rounded bg-neutral-100 dark:bg-neutral-800"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col gap-1 pb-5 text-sm text-neutral-700 dark:text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-2 py-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900"
              >
                {link.label}
              </a>
            ))}

            <div className="flex items-center gap-3 mt-2 px-2">
              <ThemeToggle />
              <div className="flex-1">
                <Button
                  as="a"
                  href="/CV_Bryan_YP.pdf"
                  download="CV_Bryan_YP.pdf"
                  variant="primary"
                  className="w-full justify-center"
                >
                  Download CV
                </Button>
              </div>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}

export default Navbar;
