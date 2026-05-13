import Section from "@/components/Section";
import { Mail, Phone, Sparkle } from "@/components/icons";
import Link from "next/link";

export const metadata = {
  title: "Contact",
  description:
    "Reach out to Inspiration Physical Therapy. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <section className="container-page pt-20 pb-12">
        <div className="pill">Contact</div>
        <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.05] text-ink-900 max-w-4xl">
          Let&apos;s talk about your baby.
        </h1>
        <p className="mt-6 text-xl text-ink-500 max-w-2xl leading-relaxed">
          Reach out and we&apos;ll get back to you within 24 hours.
        </p>
      </section>

      <Section className="!pt-8">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-4">
            <a
              href="tel:9144240398"
              className="flex items-center gap-4 p-6 rounded-3xl bg-cream-50 ring-1 ring-cream-200 hover:ring-sage-200 transition-all group"
            >
              <span className="grid place-items-center h-12 w-12 rounded-2xl bg-sage-100 text-sage-700 group-hover:scale-105 transition-transform">
                <Phone />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-ink-400">Phone</div>
                <div className="font-display text-2xl text-ink-900">(914) 424-0398</div>
              </div>
            </a>

            <a
              href="mailto:yelena.bregman@inspiration-pt.com"
              className="flex items-center gap-4 p-6 rounded-3xl bg-cream-50 ring-1 ring-cream-200 hover:ring-sage-200 transition-all group"
            >
              <span className="grid place-items-center h-12 w-12 rounded-2xl bg-rose-100 text-rose-500 group-hover:scale-105 transition-transform">
                <Mail />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-ink-400">Email</div>
                <div className="font-display text-lg text-ink-900 break-all">
                  yelena.bregman@inspiration-pt.com
                </div>
              </div>
            </a>

            <div className="p-6 rounded-3xl bg-ink-900 text-cream-50">
              <div className="flex items-center gap-2 text-rose-200">
                <Sparkle className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider">Coverage</span>
              </div>
              <div className="mt-2 font-display text-2xl">Westchester &amp; Putnam County</div>
              <div className="mt-1 text-cream-100/80 text-sm">
                Plus virtual 1:1 coaching worldwide.
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-cream-50 ring-1 ring-cream-200">
              <div className="text-xs uppercase tracking-wider text-ink-400">Follow along</div>
              <a
                href="https://instagram.com/pt.baby.toddler"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block font-display text-xl text-ink-900 link-underline"
              >
                @pt.baby.toddler
              </a>
              <p className="mt-2 text-ink-500 text-sm">
                Daily tips and real-life baby movement.
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <form
              action="mailto:yelena.bregman@inspiration-pt.com"
              method="post"
              encType="text/plain"
              className="rounded-4xl bg-cream-50 ring-1 ring-cream-200 p-8 md:p-10 space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Parent name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Phone" name="phone" type="tel" />
                <Field label="Baby's age" name="baby_age" placeholder="e.g. 4 months" />
              </div>
              <Field
                label="What's on your mind?"
                name="message"
                textarea
                placeholder="Tell me about your baby — what you're noticing, what you're hoping to work on, and how I can help."
                required
              />
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="rounded-full bg-ink-900 text-cream-50 px-6 py-3 text-sm font-medium hover:bg-sage-700 transition-colors"
                >
                  Send message
                </button>
                <p className="text-xs text-ink-400">
                  Your default email app will open with the message prefilled.
                </p>
              </div>
            </form>

            <p className="mt-6 text-sm text-ink-400 leading-relaxed">
              In a medical emergency please call <Link href="tel:911" className="link-underline">911</Link>.
              This website is informational only and does not substitute for medical care.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  placeholder?: string;
}) {
  const base =
    "mt-2 w-full rounded-2xl bg-cream-100/50 ring-1 ring-cream-200 focus:ring-2 focus:ring-sage-400 px-4 py-3 outline-none text-ink-900 placeholder:text-ink-400 transition-all";
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink-700">
        {label} {required && <span className="text-rose-500">*</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={5}
          className={base}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className={base}
        />
      )}
    </label>
  );
}
