import type { Metadata } from "next";

export const SEO: Record<string, Metadata> = {
  services: {
    title: "Services",
    description:
      "Backend development, custom systems, and web applications by Muhammad Ashar.",
    alternates: { canonical: "/services" },
  },
  work: {
    title: "Work",
    description:
      "Projects by Muhammad Ashar: backend systems, clinic management, and custom software built for real clients.",
    alternates: { canonical: "/work" },
  },
  contact: {
    title: "Contact",
    description:
      "Get in touch with Muhammad Ashar for backend and software projects.",
    alternates: { canonical: "/contact" },
  },
};