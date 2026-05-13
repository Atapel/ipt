import Button from "@/components/Button";
import Section from "@/components/Section";
import { Arrow, Book, Check, Home, Video } from "@/components/icons";

export const metadata = {
  title: "Services & Pricing",
  description:
    "In-home and virtual pediatric physical therapy services across Westchester & Putnam County, NY. Transparent pricing.",
};

const services = [
  {
    id: "in-home",
    icon: <Home className="w-7 h-7" />,
    title: "In-Home Pediatric PT",
    blurb:
      "Hands-on, developmentally focused therapy in the comfort of your home — ideal for babies and toddlers who benefit from direct, in-person care.",
    bullets: [
      "Full pediatric evaluation",
      "Personalized treatment plan",
      "Parent coaching at every session",
      "Westchester & Putnam County, NY",
    ],
    cta: "Request in-home PT",
  },
  {
    id: "virtual",
    icon: <Video className="w-7 h-7" />,
    title: "1:1 Virtual Parent Coaching",
    blurb:
      "Live video sessions personalized to your baby&apos;s needs. We assess movement, troubleshoot challenges, and create a clear plan you can confidently use every day.",
    bullets: [
      "Live, secure video sessions",
      "Individualized play-based exercises",
      "Ongoing support and education",
      "Available worldwide",
    ],
    cta: "Book a virtual session",
  },
  {
    id: "guides",
    icon: <Book className="w-7 h-7" />,
    title: "Digital Guides & Programs",
    blurb:
      "Learn at your own pace with expert-designed resources, including the Ultimate Tummy Time Guide — a parent-friendly roadmap to strength, confidence, and joy on the floor.",
    bullets: [
      "Easy-to-follow steps",
      "Real-life setup ideas",
      "Milestone checklists",
      "Lifetime access",
    ],
    cta: "Download the guide",
  },
];

const pricing = [
  {
    name: "Initial Evaluation",
    price: "$300",
    duration: "90 minutes",
    desc: "Full evaluation with personalized plan of care and parent coaching.",
    featured: true,
  },
  {
    name: "Follow-up Session",
    price: "$175",
    duration: "60 minutes",
    desc: "Hands-on treatment, parent coaching, and updated home program.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="container-page pt-20 pb-8">
        <div className="pill">Services</div>
        <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.05] text-ink-900 max-w-4xl">
          One-on-one pediatric PT, where it fits your family.
        </h1>
        <p className="mt-6 text-xl text-ink-500 max-w-2xl leading-relaxed">
          In your home, on a video call, or at your own pace with digital guides — every option is
          play-based, evidence-led, and built around your baby.
        </p>
      </section>

      <Section className="!pt-12">
        <div className="space-y-6">
          {services.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className="grid md:grid-cols-12 gap-8 items-center rounded-4xl bg-cream-50 ring-1 ring-cream-200 p-8 md:p-12 hover:ring-sage-200 transition-all"
            >
              <div className="md:col-span-4">
                <div className="grid place-items-center h-16 w-16 rounded-3xl bg-sage-100 text-sage-700 mb-5">
                  {s.icon}
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-ink-900 leading-tight">
                  {s.title}
                </h2>
              </div>
              <div className="md:col-span-5 text-ink-500 text-lg leading-relaxed">
                <p>{s.blurb.replace(/&apos;/g, "’")}</p>
                <ul className="mt-6 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-ink-700">
                      <span className="grid place-items-center h-5 w-5 rounded-full bg-sage-100 text-sage-700">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-3 md:text-right">
                <Button href="/contact">
                  {s.cta} <Arrow />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Transparent pricing"
        title="No surprises. Ever."
        intro="Per the No Secrets Act of 2022 we publish all rates up front. You'll never be billed more than the stated amount unless agreed in advance."
      >
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {pricing.map((p) => (
            <div
              key={p.name}
              className={`rounded-3xl p-8 ring-1 transition-all ${
                p.featured
                  ? "bg-ink-900 text-cream-50 ring-ink-900"
                  : "bg-cream-50 ring-cream-200"
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl">{p.name}</h3>
                <span className={`text-xs uppercase tracking-wider ${p.featured ? "text-cream-100/60" : "text-ink-400"}`}>
                  {p.duration}
                </span>
              </div>
              <div className="mt-4 font-display text-5xl">{p.price}</div>
              <p className={`mt-4 ${p.featured ? "text-cream-100/80" : "text-ink-500"}`}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-3xl text-sm text-ink-500 leading-relaxed">
          <p>
            <strong className="text-ink-700">Insurance:</strong> We work with all PPO plans with
            out-of-network benefits. We&apos;ll provide a Superbill with diagnosis codes, treatment
            codes, units billed, and supporting documentation for you to submit. Payment is due at
            the time of your scheduled visit.
          </p>
          <p className="mt-3">
            <strong className="text-ink-700">Cancellations:</strong> Please cancel or reschedule at
            least 24 hours in advance. Late cancellations and no-shows incur a $100 fee; if the
            provider is already en route, the full session cost applies.
          </p>
        </div>
      </Section>
    </>
  );
}
