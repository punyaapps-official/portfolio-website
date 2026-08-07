import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ExternalLink,
  Building2,
  User,
  Calendar,
  Image,
} from "lucide-react";

function ProjectCard({
  title,
  category,
  description,
  image,
  technologies = [],
  impact = [],
  client,
  role,
  year,
  live,
  github,
}) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 shadow-xl hover:border-neutral-900 dark:hover:border-neutral-100 hover:shadow-blue-900/20 transition-all duration-300"
    >
      {/* Banner */}

      <div className="aspect-video bg-gradient-to-br from-neutral-100 dark:from-neutral-800 to-neutral-50 dark:to-neutral-900 overflow-hidden">

        {image ? (

          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />

        ) : (

          <div className="w-full h-full flex flex-col items-center justify-center text-neutral-400 dark:text-neutral-500">

            <Image
              size={42}
              className="mb-4"
            />

            <p className="uppercase tracking-[4px] text-xs">
              Project Preview
            </p>

            <p className="mt-2 text-sm text-neutral-400 dark:text-neutral-600">
              16 : 9 Screenshot
            </p>

          </div>

        )}

      </div>

      {/* Content */}

      <div className="p-8">

        <p className="text-neutral-900 dark:text-neutral-100 uppercase tracking-[3px] text-xs font-semibold">

          {category}

        </p>

        <h3 className="text-2xl font-bold mt-3 text-neutral-900 dark:text-white">

          {title}

        </h3>

        <p className="mt-4 text-neutral-500 dark:text-neutral-400 leading-7">

          {description}

        </p>

        <div className="border-t border-neutral-200 dark:border-neutral-800 my-8"></div>

        {/* Information */}

        <div className="grid md:grid-cols-3 gap-5">

          <div className="flex items-center gap-3">

            <Building2
              size={18}
              className="text-neutral-900 dark:text-neutral-100"
            />

            <div>

              <p className="text-xs text-neutral-400 dark:text-neutral-500">
                Client
              </p>

              <p className="text-neutral-900 dark:text-white">
                {client}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <User
              size={18}
              className="text-neutral-900 dark:text-neutral-100"
            />

            <div>

              <p className="text-xs text-neutral-400 dark:text-neutral-500">
                Role
              </p>

              <p className="text-neutral-900 dark:text-white">
                {role}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <Calendar
              size={18}
              className="text-neutral-900 dark:text-neutral-100"
            />

            <div>

              <p className="text-xs text-neutral-400 dark:text-neutral-500">
                Year
              </p>

              <p className="text-neutral-900 dark:text-white">
                {year}
              </p>

            </div>

          </div>

        </div>

        {/* Technology */}

        <div className="flex flex-wrap gap-2 mt-8">

          {technologies.map((item) => (

            <span
              key={item}
              className="px-3 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-sm text-neutral-600 dark:text-neutral-300"
            >

              {item}

            </span>

          ))}

        </div>

        {/* Impact */}

        <div className="mt-8">

          <h4 className="font-semibold text-lg mb-4 text-neutral-900 dark:text-white">
            Project Impact
          </h4>

          <div className="space-y-3">

            {impact.map((item) => (

              <div
                key={item}
                className="flex items-start gap-3"
              >

                <CheckCircle
                  size={18}
                  className="text-neutral-900 dark:text-neutral-100 mt-1 flex-shrink-0"
                />

                <p className="text-neutral-500 dark:text-neutral-400 leading-7">

                  {item}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-10">

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-neutral-900 transition"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 text-neutral-900 dark:text-white transition"
            >
              <ExternalLink size={18} />
              GitHub
            </a>
          )}

        </div>

      </div>

    </motion.article>
  );
}

export default ProjectCard;