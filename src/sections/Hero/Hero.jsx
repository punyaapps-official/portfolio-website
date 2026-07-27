import React from "react";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-slate-950">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            {/* Badge */}
            <div className="inline-flex px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-sm text-slate-300 mb-6">
              WordPress • Automation • API Integration
            </div>

            {/* Name */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Bryan Yusuf <br />
              <span className="text-blue-500">Pranata</span>
            </h1>

            {/* Title */}
            <h2 className="mt-6 text-2xl text-slate-200 font-medium">
              WordPress Developer
            </h2>

            {/* Description */}
            <p className="mt-6 text-slate-400 text-lg leading-relaxed max-w-xl">
              I build modern WordPress websites, automate business workflows,
              integrate APIs, and solve complex technical problems for
              international clients.
            </p>

            {/* Button */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <Button as="a" href="#projects" variant="primary">
                View Projects
              </Button>

              <Button as="a" href="/CV_Bryan_YP.pdf" download="CV_Bryan_YP.pdf" variant="ghost">
                Download CV
              </Button>
            </div>

            {/* Highlight */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8">

              <div>
                <div className="text-3xl font-bold text-white">30+</div>
                <div className="text-sm text-slate-400">
                  International Websites
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold text-white">4+</div>
                <div className="text-sm text-slate-400">
                  Years of Experience
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold text-white">20+</div>
                <div className="text-sm text-slate-400">
                  Workflow Automations
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold text-white">100+</div>
                <div className="text-sm text-slate-400">
                  Tasks Completed
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: .95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute inset-0 rounded-[40px] bg-blue-600 blur-3xl opacity-20"></div>

              <div className="relative w-[360px] h-[470px] rounded-[40px] overflow-hidden border border-slate-700 bg-slate-900">

                <img
                  src="/profile2.png"
                  alt="Bryan Yusuf"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;