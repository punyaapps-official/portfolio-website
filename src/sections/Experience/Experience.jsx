import React from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays } from "lucide-react";
import Container from "../../components/Container/Container";

const experiences = [
  {
    period: "2025 - 2026",
    company: "Sites Guru (Freelance)",
    position: "Web Developer (International Clients)",
    location: "Indonesia",
    achievements: [
      "Developed and maintained 30+ international client websites using WordPress, GoHighLevel, Squarespace, GoDaddy, and Systeme.io.",
      "Ensured optimal performance, security, responsiveness, maintenance, hosting migration, and website service integration.",
      "Handled technical support, developed custom WordPress plugins, and built workflow automations using Make, Zapier, n8n, and GoHighLevel to improve operational efficiency.",
    ],
  },

  {
    period: "2022 - 2025",
    company: "SmartTravelism (Contract)",
    position: "WordPress Developer (Staff IT)",
    location: "Indonesia",
    achievements: [
      "Developed and maintained the company's WordPress website.",
      "Ensured optimal performance, security, SEO, and responsiveness of the website.",
      "Evaluated website performance and visitor traffic to support the company's digital strategy.",
    ],
  },

  {
    period: "2021",
    company: "K Radio Jember (Internship)",
    position: "Front-End Developer (Internship)",
    location: "Indonesia",
    achievements: [
      "Developed responsive website interfaces using HTML, CSS, and JavaScript.",
      "Ensured the website's appearance matched the intended design.",
      "Collaborated with UI/UX Designers, Backend Developers, and Project Managers.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-black">
      <Container>

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[4px] text-neutral-900 dark:text-neutral-100 text-sm font-semibold">
            Experience
          </p>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
            My Professional Journey
          </h2>

          <p className="mt-6 text-neutral-500 dark:text-neutral-400 leading-8">
            Over the past few years, I've worked on international websites,
            business automation, and custom web solutions across multiple industries.
          </p>

        </div>

        <div className="mt-20 relative">

          <div className="absolute left-5 top-0 bottom-0 w-px bg-neutral-100 dark:bg-neutral-800"></div>

          <div className="space-y-12">

            {experiences.map((job, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="relative pl-16"
              >

                <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center">

                  <BriefcaseBusiness size={18} />

                </div>

                <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-8 hover:border-neutral-900 dark:hover:border-neutral-100 transition">

                  <div className="flex flex-wrap items-center gap-4 text-neutral-500 dark:text-neutral-400 text-sm">

                    <div className="flex items-center gap-2">

                      <CalendarDays size={16} />

                      {job.period}

                    </div>

                    <span>•</span>

                    <span>{job.location}</span>

                  </div>

                  <h3 className="mt-4 text-2xl font-bold">

                    {job.position}

                  </h3>

                  <p className="text-neutral-900 dark:text-neutral-100 mt-2">

                    {job.company}

                  </p>

                  <ul className="mt-6 space-y-3">

                    {job.achievements.map((item) => (

                      <li
                        key={item}
                        className="text-neutral-500 dark:text-neutral-400 flex gap-3"
                      >

                        <span className="text-neutral-900 dark:text-neutral-100">•</span>

                        <span>{item}</span>

                      </li>

                    ))}

                  </ul>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}

export default Experience;