import Container from "../../components/Container/Container";
import {
  FaWordpress,
  FaReact,
  FaPhp,
  FaStripe,
} from "react-icons/fa";

import {
  SiElementor,
  SiCloudflare,
  SiFirebase,
  SiGooglesheets,
  SiN8N,
  SiZapier,
  SiMake,
} from "react-icons/si";

const tech = [
  { icon: <FaWordpress />, name: "WordPress" },
  { icon: <SiElementor />, name: "Elementor" },
  { icon: <FaPhp />, name: "PHP" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiCloudflare />, name: "Cloudflare" },
  { icon: <FaStripe />, name: "Stripe" },
  { icon: <SiZapier />, name: "Zapier" },
  { icon: <SiN8N />, name: "n8n" },
  { icon: <SiGooglesheets />, name: "Google Sheets" },
];

function TrustedTechnologies() {
  return (
    <section className="py-14 bg-white dark:bg-black">
      <Container>

        <p className="text-center uppercase tracking-[4px] text-neutral-400 dark:text-neutral-500 text-sm">
          Technologies I Work With
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mt-10">

          {tech.map((item) => (

            <div
              key={item.name}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-6 hover:border-neutral-900 dark:hover:border-neutral-100 transition"
            >

              <div className="text-4xl text-neutral-900 dark:text-neutral-100 flex justify-center">

                {item.icon}

              </div>

              <p className="mt-4 text-center text-sm">

                {item.name}

              </p>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default TrustedTechnologies;