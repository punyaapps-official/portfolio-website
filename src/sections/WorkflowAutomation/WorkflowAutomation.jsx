import React from "react";
import {
  ArrowRight,
  Workflow,
  Bot,
  Webhook,
  Mail,
  Database,
  Globe,
} from "lucide-react";

import Container from "../../components/Container/Container";
import TechBadge from "../../components/TechBadge/TechBadge";

function WorkflowAutomation() {
  const tools = [
    "Make",
    "Zapier",
    "n8n",
    "GoHighLevel",
    "Google Sheets",
    "Google Workspace",
    "Calendly",
    "Cloudways",
    "Cloudflare",
    "REST API",
  ];

  return (
    <section
      id="workflow"
      className="py-24 bg-white dark:bg-black"
    >
      <Container>

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[4px] text-neutral-900 dark:text-neutral-100 text-sm font-semibold">
            WORKFLOW AUTOMATION
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            Automating Business Processes with Modern Tools
          </h2>

          <p className="mt-6 text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed">
            I design automation systems that connect websites, APIs,
            CRMs, payment gateways, and third-party applications,
            helping businesses eliminate repetitive work and improve
            operational efficiency.
          </p>

        </div>

        {/* Workflow */}

        <div className="mt-20 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-10">

          <div className="grid lg:grid-cols-5 gap-6 items-center">

            {/* Trigger */}

            <div className="rounded-2xl bg-neutral-100 dark:bg-neutral-800 p-6 text-center">

              <Workflow
                size={34}
                className="mx-auto text-neutral-900 dark:text-neutral-100"
              />

              <h4 className="mt-4 font-semibold">
                Trigger
              </h4>

              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                Form, Booking, or Payment
              </p>

            </div>

            <div className="flex justify-center">

              <ArrowRight className="text-neutral-400 dark:text-neutral-500" />

            </div>

            {/* Automation */}

            <div className="rounded-2xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 p-8 text-center">

              <Bot
                size={38}
                className="mx-auto"
              />

              <h4 className="mt-4 font-semibold text-lg">
                Automation Engine
              </h4>

              <p className="text-white/70 dark:text-neutral-900/70 mt-2 text-sm">
                Make • Zapier • n8n
              </p>

            </div>

            <div className="flex justify-center">

              <ArrowRight className="text-neutral-400 dark:text-neutral-500" />

            </div>

            {/* Output */}

            <div className="space-y-4">

              <div className="rounded-xl bg-neutral-100 dark:bg-neutral-800 p-4 flex items-center gap-3">

                <Globe className="text-neutral-900 dark:text-neutral-100" />

                <span>WordPress / GoHighLevel</span>

              </div>

              <div className="rounded-xl bg-neutral-100 dark:bg-neutral-800 p-4 flex items-center gap-3">

                <Mail className="text-neutral-900 dark:text-neutral-100" />

                <span>Email & Client Notifications</span>

              </div>

              <div className="rounded-xl bg-neutral-100 dark:bg-neutral-800 p-4 flex items-center gap-3">

                <Database className="text-neutral-900 dark:text-neutral-100" />

                <span>Google Sheets / Drive</span>

              </div>

            </div>

          </div>

        </div>

        {/* Skills */}

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          <div>

            <h3 className="text-2xl font-bold">
              What I Automate
            </h3>

            <div className="mt-8 space-y-5">

              {[
                "Client intake & consultation forms synced to CRM/Sheets",
                "Booking & scheduling automation with Calendly",
                "Monthly automated client reporting via email",
                "Payment-triggered document generation",
                "WordPress & GoHighLevel integration",
                "Email, notification & reminder workflows",
                "Team workspace & access management automation",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3"
                >

                  <Webhook
                    size={18}
                    className="text-neutral-900 dark:text-neutral-100 mt-1"
                  />

                  <span className="text-neutral-600 dark:text-neutral-300">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

          <div>

            <h3 className="text-2xl font-bold">
              Platforms & Technologies
            </h3>

            <div className="flex flex-wrap gap-3 mt-8">

              {tools.map((tool) => (

                <TechBadge key={tool}>
                  {tool}
                </TechBadge>

              ))}

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default WorkflowAutomation;