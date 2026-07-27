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
      className="py-24 bg-slate-950"
    >
      <Container>

        <div className="max-w-5xl mx-auto rounded-3xl border border-slate-800 bg-slate-900 p-10 lg:p-14">

          {/* Heading */}

          <div className="text-center">

            <p className="uppercase tracking-[4px] text-blue-500 text-sm font-semibold">
              CONTACT
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4">
              Let's Build Something Great Together
            </h2>

            <p className="mt-6 text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto">
              I'm currently available for full-time, remote, freelance,
              and contract opportunities. If you're looking for a
              WordPress Developer who can build scalable websites,
              automate business workflows, and integrate modern web
              technologies, I'd love to hear from you.
            </p>

          </div>

          {/* Status */}

          <div className="flex justify-center mt-10">

            <div className="flex items-center gap-3 rounded-full border border-green-500/30 bg-green-500/10 px-6 py-3">

              <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>

              <span className="text-green-400 font-medium">
                Available for new opportunities
              </span>

            </div>

          </div>

          {/* Contact Cards */}

          <div className="grid md:grid-cols-2 gap-6 mt-14">

            <a
              href="mailto:galerimasiyan@gmail.com"
              className="rounded-2xl border border-slate-800 p-6 hover:border-blue-500 transition duration-300"
            >

              <Mail
                size={28}
                className="text-blue-500 mb-4"
              />

              <h3 className="text-xl font-semibold">
                Email
              </h3>

              <p className="mt-2 text-slate-400">
                galerimasiyan@gmail.com
              </p>

            </a>

            <a
              href="https://wa.me/6287856437290"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-800 p-6 hover:border-blue-500 transition duration-300"
            >

              <Phone
                size={28}
                className="text-blue-500 mb-4"
              />

              <h3 className="text-xl font-semibold">
                WhatsApp
              </h3>

              <p className="mt-2 text-slate-400">
                Chat with me
              </p>

            </a>

            <a
              href="https://linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-800 p-6 hover:border-blue-500 transition duration-300"
            >

              <FaLinkedin
                size={28}
                className="text-blue-500 mb-4"
              />

              <h3 className="text-xl font-semibold">
                LinkedIn
              </h3>

              <p className="mt-2 text-slate-400">
                View my professional profile
              </p>

            </a>

            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-800 p-6 hover:border-blue-500 transition duration-300"
            >

              <FaGithub
                size={28}
                className="text-blue-500 mb-4"
              />

              <h3 className="text-xl font-semibold">
                GitHub
              </h3>

              <p className="mt-2 text-slate-400">
                Explore my repositories
              </p>

            </a>

          </div>

          {/* CTA Buttons */}

          <div className="flex flex-wrap justify-center gap-5 mt-14">

            <a
              href="/CV_Bryan_YP.pdf"
              download="CV_Bryan_YP.pdf"
              className="flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
            >

              <Download size={20} />

              Download CV

            </a>

            <a
              href="mailto:galerimasiyan@gmail.com"
              className="flex items-center gap-3 rounded-xl border border-slate-700 px-7 py-4 transition hover:border-blue-500"
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