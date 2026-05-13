import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Inspiration Physical Therapy — Pediatric Mobile PT in Westchester & Putnam, NY",
    template: "%s · Inspiration Physical Therapy",
  },
  description:
    "In-home and virtual pediatric physical therapy with Dr. Yelena Bregman, PT, DPT. Tummy time, milestones, and parent empowerment — evidence-based, gentle, and play-driven.",
  metadataBase: new URL("https://inspiration-pt.com"),
  openGraph: {
    title: "Inspiration Physical Therapy",
    description:
      "Pediatric mobile PT serving Westchester & Putnam County, NY — plus virtual coaching worldwide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
