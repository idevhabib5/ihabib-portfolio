import { personalInfo } from "@/data/portfolio";
import { getSiteUrl } from "@/lib/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    email: personalInfo.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    url: getSiteUrl(),
    sameAs: [personalInfo.github, personalInfo.linkedin],
    knowsAbout: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Full Stack Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
