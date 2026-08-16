import { SITE_URL } from "@/lib/site-config";

const UPWORK_URL = "https://www.upwork.com/freelancers/~01cbe720b774ffd4c6";
const GITHUB_URL = "https://github.com/Davidhr3104";
const LINKEDIN_URL = "https://www.linkedin.com/in/david-herrera-tech-ea/";

const data = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "David Herrera",
  jobTitle: "AI Systems Architect",
  url: SITE_URL,
  email: "mailto:andreshr4578@gmail.com",
  sameAs: [LINKEDIN_URL, GITHUB_URL, UPWORK_URL],
  description:
    "I build AI agents you can actually audit: evidence-backed extraction, automated systems, and full-stack products engineered for trust, not demos.",
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
