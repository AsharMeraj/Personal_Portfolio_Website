import type { Metadata } from "next";
import { SEO } from "@/app/_utils/seo";

export const metadata: Metadata = SEO.contact;

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}