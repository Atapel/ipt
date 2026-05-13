import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-cream-200/60 bg-cream-100/40">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl text-ink-900">Inspiration Physical Therapy</div>
          <p className="mt-3 text-ink-500 max-w-md">
            In-home and virtual pediatric physical therapy. Helping babies move better — earlier and with confidence.
          </p>
          <p className="mt-4 text-sm text-ink-400">
            Westchester &amp; Putnam County, NY · Virtual worldwide
          </p>
        </div>

        <div>
          <div className="text-sm uppercase tracking-wider text-ink-400 mb-3">Visit</div>
          <ul className="space-y-2 text-ink-700">
            <li><Link href="/services" className="link-underline">Services</Link></li>
            <li><Link href="/about" className="link-underline">About Dr. Bregman</Link></li>
            <li><Link href="/faqs" className="link-underline">FAQs</Link></li>
            <li><Link href="/contact" className="link-underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm uppercase tracking-wider text-ink-400 mb-3">Contact</div>
          <ul className="space-y-2 text-ink-700">
            <li><a href="tel:9144240398" className="link-underline">(914) 424-0398</a></li>
            <li>
              <a href="mailto:yelena.bregman@inspiration-pt.com" className="link-underline break-all">
                yelena.bregman@inspiration-pt.com
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/pt.baby.toddler"
                target="_blank"
                rel="noreferrer"
                className="link-underline"
              >
                @pt.baby.toddler
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-200/60">
        <div className="container-page py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-ink-400">
          <div>© {new Date().getFullYear()} Inspiration Physical Therapy, PLLC. All rights reserved.</div>
          <div>
            Website content is informational only and not a substitute for medical care. In an emergency, call 911.
          </div>
        </div>
      </div>
    </footer>
  );
}
