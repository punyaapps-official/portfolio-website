import React from "react";
import {
  Mail,
  Phone,
  Download,
  ArrowRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import Container from "../../components/Container/Container";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-black"
    >
      <Container>

        <div className="max-w-5xl mx-auto rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-10 lg:p-14">

          {/* Heading */}

          <div className="text-center">

            <p className="uppercase tracking-[4px] text-neutral-900 dark:text-neutral-100 text-sm font-semibold">
              CONTACT
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4">
              Let's Build Something Great Together
            </h2>

            <p className="mt-6 text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed max-w-3xl mx-auto">
              I'm currently available for full-time, remote, freelance,
              and contract opportunities. If you're looking for a
              WordPress Developer who can build scalable websites,
              automate business workflows, and integrate modern web
              technologies, I'd love to hear from you.
            </p>

          </div>

          {/* Status */}

          <div className="flex justify-center mt-10">

            <div className="flex items-center gap-3 rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 px-6 py-3">

              <span className="w-3 h-3 rounded-full bg-neutral-900 dark:bg-white animate-pulse"></span>

              <span className="text-neutral-900 dark:text-neutral-100 font-medium">
                Available for new opportunities
              </span>

            </div>

          </div>

          {/* Contact Cards */}

          <div className="grid md:grid-cols-2 gap-6 mt-14">

            <a
              href="mailto:galerimasiyan@gmail.com"
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 hover:border-neutral-900 dark:hover:border-neutral-100 transition duration-300"
            >

              <Mail
                size={28}
                className="text-neutral-900 dark:text-neutral-100 mb-4"
              />

              <h3 className="text-xl font-semibold">
                Email
              </h3>

              <p className="mt-2 text-neutral-500 dark:text-neutral-400">
                galerimasiyan@gmail.com
              </p>

            </a>

            <a
              href="https://wa.me/6287856437290"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 hover:border-neutral-900 dark:hover:border-neutral-100 transition duration-300"
            >

              <Phone
                size={28}
                className="text-neutral-900 dark:text-neutral-100 mb-4"
              />

              <h3 className="text-xl font-semibold">
                WhatsApp
              </h3>

              <p className="mt-2 text-neutral-500 dark:text-neutral-400">
                Chat with me
              </p>

            </a>

            <a
              href="https://linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 hover:border-neutral-900 dark:hover:border-neutral-100 transition duration-300"
            >

              <FaLinkedin
                size={28}
                className="text-neutral-900 dark:text-neutral-100 mb-4"
              />

              <h3 className="text-xl font-semibold">
                LinkedIn
              </h3>

              <p className="mt-2 text-neutral-500 dark:text-neutral-400">
                View my professional profile
              </p>

            </a>

            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 hover:border-neutral-900 dark:hover:border-neutral-100 transition duration-300"
            >

              <FaGithub
                size={28}
                className="text-neutral-900 dark:text-neutral-100 mb-4"
              />

              <h3 className="text-xl font-semibold">
                GitHub
              </h3>

              <p className="mt-2 text-neutral-500 dark:text-neutral-400">
                Explore my repositories
              </p>

            </a>

          </div>

          {/* CTA Buttons */}

          <div className="flex flex-wrap justify-center gap-5 mt-14">

            <a
              href="/CV_Bryan_YP.pdf"
              download="CV_Bryan_YP.pdf"
              className="flex items-center gap-3 rounded-xl bg-neutral-900 dark:bg-white px-7 py-4 font-semibold text-white dark:text-neutral-900 transition hover:bg-neutral-800 dark:hover:bg-neutral-200"
            >

              <Download size={20} />

              Download CV

            </a>

            <a
              href="mailto:galerimasiyan@gmail.com"
              className="flex items-center gap-3 rounded-xl border border-neutral-300 dark:border-neutral-700 px-7 py-4 transition hover:border-neutral-900 dark:hover:border-neutral-100"
            >

              Contact Me

              <ArrowRight size={18} />

            </a>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default Contact;