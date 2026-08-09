import React from "react";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white dark:bg-black pt-10 pb-16 lg:pt-[50px] lg:pb-[50px]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left order-2 lg:order-none"
          >

            {/* Badge */}
            <div className="inline-block max-w-full px-4 py-2 rounded-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mb-6">
              WordPress • Automation • API Integration
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight break-words">
              Bryan Yusuf <br />
              <span className="text-neutral-900 dark:text-neutral-100">Pranata</span>
            </h1>

            {/* Title */}
            <h2 className="mt-4 sm:mt-6 text-xl sm:text-2xl text-neutral-800 dark:text-neutral-200 font-medium">
              Web Developer
            </h2>

            {/* Description */}
            <p className="mt-4 sm:mt-6 text-neutral-500 dark:text-neutral-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              I build and maintain modern, high-performing websites — with WordPress
              as my core specialty, alongside hands-on experience in React, Laravel,
              and CodeIgniter. I also automate business workflows, integrate APIs,
              and solve complex technical problems for international clients.
            </p>

            {/* Button */}
            <div className="mt-8 flex gap-4 flex-wrap justify-center lg:justify-start">
              <Button as="a" href="#projects" variant="primary">
                View Projects
              </Button>

              <Button as="a" href="/CV_Bryan_YP.pdf" download="CV_Bryan_YP.pdf" variant="ghost">
                Download CV
              </Button>
            </div>

            {/* Highlight */}
            <div className="mt-12 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">

              <div>
                <div className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">30+</div>
                <div className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                  International Websites
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">4+</div>
                <div className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                  Years of Experience
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">20+</div>
                <div className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                  Workflow Automations
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">100+</div>
                <div className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                  Tasks Completed
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: .95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center order-1 lg:order-none"
          >

            <div className="relative w-full max-w-[240px] sm:max-w-[300px] lg:max-w-[360px]">

              <div className="absolute inset-0 rounded-[40px] bg-neutral-900 dark:bg-white blur-3xl opacity-20"></div>

              <div className="relative w-full aspect-[360/470] rounded-[40px] overflow-hidden border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900">

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
