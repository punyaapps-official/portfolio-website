import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Workflow,
  Cable,
  ArrowRight,
} from "lucide-react";
import Container from "../../components/Container/Container";

const services = [
  {
    icon: <Globe className="w-8 h-8 text-neutral-900 dark:text-neutral-100" />,
    title: "Website Development",
    description:
      "Building fast, responsive, and scalable WordPress websites with a strong focus on user experience, SEO, and long-term maintainability.",
    skills: [
      "WordPress",
      "CodeIgniter",
      "Laravel",
      "React",
      "Shopify",
    ],
  },
  {
    icon: <Workflow className="w-8 h-8 text-neutral-900 dark:text-neutral-100" />,
    title: "Workflow Automation",
    description:
      "Automating repetitive business processes to save time, reduce manual work, and improve operational efficiency.",
    skills: [
      "Make",
      "Zapier",
      "n8n",
      "GoHighLevel",
    ],
  },
  {
    icon: <Cable className="w-8 h-8 text-neutral-900 dark:text-neutral-100" />,
    title: "System Integration",
    description:
      "Connecting websites with third-party services through APIs to create seamless digital ecosystems for modern businesses.",
    skills: [
      "REST API",
      "Firebase",
      "Stripe",
      "Google Cloud",
      "Google Workspace",
    ],
  },
];

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-black"
    >
      <Container>

        <div className="max-w-3xl mx-auto text-center">

          <p className="uppercase tracking-[4px] text-neutral-900 dark:text-neutral-100 text-sm font-semibold">
            What I Do
          </p>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
            Building More Than Websites
          </h2>

          <p className="mt-8 text-neutral-500 dark:text-neutral-400 leading-8 text-lg">
            I help businesses build scalable digital solutions by combining
            WordPress development, workflow automation, and system integration.
            My goal is not only to create beautiful websites, but also to
            simplify business operations through technology.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {services.map((service) => (

            <motion.div
              key={service.title}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-8 hover:border-neutral-900 dark:hover:border-neutral-100 transition-all"
            >

              <div className="w-16 h-16 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">

                {service.icon}

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                {service.title}

              </h3>

              <p className="mt-5 text-neutral-500 dark:text-neutral-400 leading-8">

                {service.description}

              </p>

              <div className="flex flex-wrap gap-2 mt-8">

                {service.skills.map((skill) => (

                  <span
                    key={skill}
                    className="px-3 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-sm text-neutral-600 dark:text-neutral-300"
                  >
                    {skill}
                  </span>

                ))}

              </div>

              <div className="flex items-center gap-2 mt-8 text-neutral-900 dark:text-neutral-100 font-medium">

                Learn More

                <ArrowRight className="w-4 h-4" />

              </div>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default About;