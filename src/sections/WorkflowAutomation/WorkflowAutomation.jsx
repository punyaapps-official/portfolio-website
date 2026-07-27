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
    "REST API",
    "Webhooks",
    "OpenAI",
    "Google Sheets",
    "WordPress",
    "HelpScout",
  ];

  return (
    <section
      id="workflow"
      className="py-24 bg-slate-950"
    >
      <Container>

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[4px] text-blue-500 text-sm font-semibold">
            WORKFLOW AUTOMATION
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            Automating Business Processes with Modern Tools
          </h2>

          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            I design automation systems that connect websites, APIs,
            CRMs, payment gateways, and third-party applications,
            helping businesses eliminate repetitive work and improve
            operational efficiency.
          </p>

        </div>

        {/* Workflow */}

        <div className="mt-20 rounded-3xl border border-slate-800 bg-slate-900 p-10">

          <div className="grid lg:grid-cols-5 gap-6 items-center">

            {/* Trigger */}

            <div className="rounded-2xl bg-slate-800 p-6 text-center">

              <Workflow
                size={34}
                className="mx-auto text-blue-500"
              />

              <h4 className="mt-4 font-semibold">
                Trigger
              </h4>

              <p className="text-sm text-slate-400 mt-2">
                Form Submission
              </p>

            </div>

            <div className="flex justify-center">

              <ArrowRight className="text-slate-500" />

            </div>

            {/* Automation */}

            <div className="rounded-2xl bg-blue-600 p-8 text-center">

              <Bot
                size={38}
                className="mx-auto"
              />

              <h4 className="mt-4 font-semibold text-lg">
                Automation Engine
              </h4>

              <p className="text-blue-100 mt-2 text-sm">
                Make • Zapier • n8n
              </p>

            </div>

            <div className="flex justify-center">

              <ArrowRight className="text-slate-500" />

            </div>

            {/* Output */}

            <div className="space-y-4">

              <div className="rounded-xl bg-slate-800 p-4 flex items-center gap-3">

                <Globe className="text-blue-500" />

                <span>WordPress</span>

              </div>

              <div className="rounded-xl bg-slate-800 p-4 flex items-center gap-3">

                <Mail className="text-blue-500" />

                <span>HelpScout / Gmail</span>

              </div>

              <div className="rounded-xl bg-slate-800 p-4 flex items-center gap-3">

                <Database className="text-blue-500" />

                <span>CRM & Database</span>

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
                "API Integration between multiple platforms",
                "WordPress & CRM synchronization",
                "Payment & invoice automation",
                "Customer onboarding workflow",
                "Support ticket automation",
                "Email & notification workflows",
                "AI-powered business processes",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3"
                >

                  <Webhook
                    size={18}
                    className="text-blue-500 mt-1"
                  />

                  <span className="text-slate-300">
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