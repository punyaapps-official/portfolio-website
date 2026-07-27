import React from "react";
import Container from "../../components/Container/Container";
import TechBadge from "../../components/TechBadge/TechBadge";

function TechStack() {
  const categories = [
    {
      title: "Frontend",
      description:
        "Building responsive and interactive user interfaces with modern JavaScript frameworks.",
      tools: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Vite",
      ],
    },

    {
      title: "WordPress",
      description:
        "Developing scalable websites, custom plugins, themes, and business solutions.",
      tools: [
        "WordPress",
        "Elementor",
        "PHP",
        "Custom Plugin",
        "REST API",
      ],
    },

    {
      title: "Automation",
      description:
        "Connecting platforms and automating business processes to eliminate repetitive tasks.",
      tools: [
        "Make",
        "Zapier",
        "n8n",
        "GoHighLevel",
        "Webhooks",
        "HelpScout API",
      ],
    },

    {
      title: "Cloud & Tools",
      description:
        "Daily development tools and cloud platforms used for deployment, collaboration, and maintenance.",
      tools: [
        "Git",
        "GitHub",
        "Cloudflare",
        "Cloudways",
        "Firebase",
        "VS Code",
        "Hostinger",
      ],
    },
  ];

  return (
    <section id="tech" className="py-24 bg-slate-950">
      <Container>

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[4px] text-blue-500 text-sm font-semibold">
            TECH STACK
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            Technologies I Use Every Day
          </h2>

          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            My toolkit combines modern web development, WordPress expertise,
            automation platforms, and cloud technologies to build scalable,
            maintainable, and business-focused digital solutions.
          </p>

        </div>

        {/* Categories */}

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {categories.map((category) => (

            <div
              key={category.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 hover:border-blue-500 transition duration-300"
            >

              <h3 className="text-2xl font-semibold">
                {category.title}
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-8">

                {category.tools.map((tool) => (

                  <TechBadge key={tool}>
                    {tool}
                  </TechBadge>

                ))}

              </div>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default TechStack;