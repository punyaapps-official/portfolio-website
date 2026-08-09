import Container from "../../components/Container/Container";
import {
  FaWordpress,
  FaReact,
  FaPhp,
  FaStripe,
  FaGithub,
} from "react-icons/fa";

import {
  SiElementor,
  SiCloudflare,
  SiFirebase,
  SiGooglesheets,
  SiN8N,
  SiZapier,
  SiMake,
  SiCodeigniter,
  SiLaravel,
  SiNodedotjs,
  SiShopify,
  SiSquarespace,
  SiMysql,
  SiGoogleanalytics,
  SiGoogletagmanager,
} from "react-icons/si";

// Baris 1: bahasa/framework -> CMS/platform website
const row1 = [
  { icon: <SiCodeigniter />, name: "CodeIgniter" },
  { icon: <SiLaravel />, name: "Laravel" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <FaPhp />, name: "PHP" },
  { icon: <FaWordpress />, name: "WordPress" },
  { icon: <SiElementor />, name: "Elementor" },
  { icon: null, name: "GoHighLevel" },
  { icon: null, name: "Systeme.io" },
  { icon: <SiShopify />, name: "Shopify" },
  { icon: null, name: "GoDaddy" },
  { icon: <SiSquarespace />, name: "Squarespace" },
];

// Baris 2: hosting/server -> automation -> Google & tools lain
const row2 = [
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: null, name: "Hostinger" },
  { icon: null, name: "Cloudways" },
  { icon: <SiCloudflare />, name: "Cloudflare" },
  { icon: null, name: "Dreamhost" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <SiN8N />, name: "n8n" },
  { icon: <SiZapier />, name: "Zapier" },
  { icon: <SiMake />, name: "Make" },
  { icon: null, name: "Google Workspace" },
  { icon: <SiGoogleanalytics />, name: "Google Analytics" },
  { icon: <SiGoogletagmanager />, name: "Tag Manager" },
  { icon: <SiGooglesheets />, name: "Google Sheets" },
  { icon: <FaStripe />, name: "Stripe" },
];

function TechTile({ item }) {
  return (
    <div className="flex-shrink-0 w-[130px] sm:w-[150px] min-h-[110px] mx-2.5 flex flex-col items-center justify-center rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-5 hover:border-neutral-900 dark:hover:border-neutral-100 transition">
      {item.icon ? (
        <>
          <div className="text-3xl sm:text-4xl text-neutral-900 dark:text-neutral-100">
            {item.icon}
          </div>
          <p className="mt-3 text-center text-xs sm:text-sm">{item.name}</p>
        </>
      ) : (
        <p className="text-center text-sm sm:text-base font-semibold">
          {item.name}
        </p>
      )}
    </div>
  );
}

function MarqueeRow({ items, direction = "left" }) {
  const doubled = [...items, ...items];
  const animClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  const duration = items.length * 2.5;

  return (
    <div className="marquee-row overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex w-max ${animClass}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((item, i) => (
          <TechTile key={`${item.name}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

function TrustedTechnologies() {
  return (
    <section className="py-14 bg-white dark:bg-black overflow-hidden">
      <Container>
        <p className="text-center uppercase tracking-[4px] text-neutral-400 dark:text-neutral-500 text-sm">
          Technologies I Work With
        </p>
      </Container>

      <div className="mt-10 flex flex-col gap-5">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>
    </section>
  );
}

export default TrustedTechnologies;
