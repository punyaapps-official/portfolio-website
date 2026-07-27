import React from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays } from "lucide-react";
import Container from "../../components/Container/Container";

const experiences = [
  {
    period: "2025 - Present",
    company: "Sites Guru",
    position: "WordPress Developer",
    location: "Indonesia",
    achievements: [
      "Maintained and optimized 30+ international websites.",
      "Developed custom WordPress plugin for HelpScout Member Portal.",
      "Integrated third-party APIs and automation workflows.",
      "Handled website migrations, performance optimization, and technical support.",
    ],
  },

  {
    period: "2023 - 2025",
    company: "SmartTravelism",
    position: "Full Stack Web Developer",
    location: "Indonesia",
    achievements: [
      "Built multiple business websites using WordPress and React.",
      "Created workflow automation using Make, Zapier, and n8n.",
      "Integrated Firebase, Google Workspace, and external APIs.",
    ],
  },

  {
    period: "2021 - 2023",
    company: "Various Projects",
    position: "Web Developer",
    location: "Indonesia",
    achievements: [
      "Developed internal business systems.",
      "Created GIS applications and HTML5 games.",
      "Worked with CodeIgniter, PHP, JavaScript, and MySQL.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-950">
      <Container>

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[4px] text-blue-400 text-sm font-semibold">
            Experience
          </p>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
            My Professional Journey
          </h2>

          <p className="mt-6 text-slate-400 leading-8">
            Over the past few years, I've worked on international websites,
            business automation, and custom web solutions across multiple industries.
          </p>

        </div>

        <div className="mt-20 relative">

          <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-800"></div>

          <div className="space-y-12">

            {experiences.map((job, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="relative pl-16"
              >

                <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">

                  <BriefcaseBusiness size={18} />

                </div>

                <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 hover:border-blue-500 transition">

                  <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm">

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

                  <p className="text-blue-400 mt-2">

                    {job.company}

                  </p>

                  <ul className="mt-6 space-y-3">

                    {job.achievements.map((item) => (

                      <li
                        key={item}
                        className="text-slate-400 flex gap-3"
                      >

                        <span className="text-blue-400">•</span>

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