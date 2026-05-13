import Button from "@/components/Button";
import Section from "@/components/Section";
import { Arrow, Book, Check, Home, Sparkle, Video } from "@/components/icons";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-page pt-16 md:pt-24 pb-20 md:pb-32 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 animate-fade-up">
            <div className="pill mb-6">
              <Sparkle className="w-4 h-4 text-sage-600" />
              Pediatric Mobile PT · Westchester & Putnam, NY
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] tracking-tight text-ink-900">
              Helping babies move better — <em className="not-italic text-sage-600">earlier</em> and with confidence.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink-500 max-w-xl leading-relaxed">
              Evidence-based, gentle pediatric physical therapy focused on tummy time, milestones,
              and parent empowerment — starting in the 4th trimester.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">
                Book a session <Arrow />
              </Button>
              <Button href="/services" variant="secondary">
                Explore services
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-lg text-sm text-ink-500">
              <Stat number="10+" label="years of pediatric PT" />
              <Stat number="1:1" label="in-home & virtual care" />
              <Stat number="DMI" label="Intro Level B certified" />
            </div>
          </div>

          <div className="md:col-span-5 relative animate-fade-up">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-sage-200 via-cream-100 to-rose-100 animate-float" />
              <div className="absolute inset-6 rounded-[2rem] bg-cream-50/80 backdrop-blur-sm ring-1 ring-cream-200 shadow-xl flex flex-col">
                <div className="p-6 border-b border-cream-200">
                  <div className="text-xs uppercase tracking-wider text-ink-400">Today's plan</div>
                  <div className="font-display text-2xl mt-1 text-ink-900">Tummy time, in 5 steps</div>
                </div>
                <ul className="p-6 space-y-4 text-ink-700">
                  {[
                    "Belly-to-belly snuggle",
                    "Side-lying play with a toy",
                    "Prop on a rolled towel",
                    "Floor mirror peek-a-boo",
                    "Carry positions for strength",
                  ].map((s, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="grid place-items-center h-6 w-6 rounded-full bg-sage-100 text-sage-700">
                        <Check className="w-4 h-4" />
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto p-6 border-t border-cream-200 bg-cream-100/50 rounded-b-[2rem]">
                  <div className="text-xs text-ink-400">Personalized in your home or via video</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <Section
        eyebrow="How I help"
        title={<>A clear, calm path through your baby&apos;s milestones.</>}
        intro="No pressure, no fear-based messaging. Just play-based movement, expert guidance, and steady support — wherever you are."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <ValueCard
            icon={<Video className="w-6 h-6" />}
            title="1:1 Virtual Parent Coaching"
            body="Live video sessions tailored to your baby. We assess movement, troubleshoot challenges, and build a clear plan you can run with every day."
            href="/services#virtual"
            cta="Book a virtual session"
          />
          <ValueCard
            icon={<Home className="w-6 h-6" />}
            title="In-Home Pediatric PT"
            body="Hands-on, developmentally focused therapy in the comfort of your home — ideal for babies who need more direct support."
            href="/services#in-home"
            cta="Request in-home PT"
            highlight
          />
          <ValueCard
            icon={<Book className="w-6 h-6" />}
            title="Digital Guides & Programs"
            body="Learn at your own pace with expert-designed resources, including the Ultimate Tummy Time Guide — a parent-friendly roadmap."
            href="/services#guides"
            cta="Download the guide"
          />
        </div>
      </Section>

      {/* PHILOSOPHY */}
      <section className="relative">
        <div className="container-page py-20 md:py-28">
          <div className="rounded-4xl bg-gradient-to-br from-sage-500 to-sage-700 text-cream-50 p-10 md:p-16 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-rose-200/20 blur-2xl" />
            <div className="absolute -left-10 -bottom-20 w-72 h-72 rounded-full bg-cream-200/20 blur-2xl" />
            <div className="relative max-w-3xl">
              <div className="pill bg-cream-50/15 text-cream-50">My philosophy</div>
              <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05]">
                I don&apos;t believe in <em className="not-italic text-rose-200">&ldquo;wait and see.&rdquo;</em>
              </h2>
              <p className="mt-6 text-lg md:text-xl text-cream-100/90 leading-relaxed max-w-2xl">
                I believe in informed parents, early support, and meeting babies exactly where they are.
                With the right guidance, play becomes powerful, progress becomes visible, and parents
                feel calm instead of overwhelmed.
              </p>
              <div className="mt-8">
                <Button href="/about" variant="secondary">
                  Meet Dr. Bregman <Arrow />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <Section
        eyebrow="Who this is for"
        title="If any of these sound familiar, you&rsquo;re in the right place."
      >
        <ul className="grid md:grid-cols-2 gap-4 max-w-4xl">
          {[
            "Parents worried about tummy time or milestones",
            "Babies who dislike floor play",
            "Families told to “just wait” but feel something isn’t right",
            "Parents who want expert reassurance without fear-based messaging",
          ].map((line) => (
            <li
              key={line}
              className="flex items-start gap-4 p-6 rounded-3xl bg-cream-50 ring-1 ring-cream-200 hover:ring-sage-200 transition-all"
            >
              <span className="grid place-items-center h-8 w-8 rounded-full bg-rose-100 text-rose-500 shrink-0">
                <Check className="w-5 h-5" />
              </span>
              <span className="text-ink-700 text-lg">{line}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* CTA */}
      <Section align="center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="pill mx-auto">Start here</div>
          <h2 className="mt-5 text-4xl md:text-5xl text-ink-900">
            Not sure what your baby needs?
          </h2>
          <p className="mt-5 text-lg text-ink-500">
            You don&apos;t need to do everything — just the next right thing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact">
              Reach out <Arrow />
            </Button>
            <Button href="/services" variant="secondary">
              See all services
            </Button>
          </div>
          <p className="mt-10 text-sm text-ink-400">
            Or call us directly at{" "}
            <Link href="tel:9144240398" className="link-underline text-ink-700">
              (914) 424-0398
            </Link>
          </p>
        </div>
      </Section>
    </>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-ink-900">{number}</div>
      <div className="text-ink-400 mt-1">{label}</div>
    </div>
  );
}

function ValueCard({
  icon,
  title,
  body,
  href,
  cta,
  highlight,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  href: string;
  cta: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`group rounded-3xl p-8 ring-1 transition-all duration-300 hover:-translate-y-1 ${
        highlight
          ? "bg-ink-900 text-cream-50 ring-ink-900 hover:shadow-xl"
          : "bg-cream-50 ring-cream-200 hover:ring-sage-200 hover:shadow-md"
      }`}
    >
      <div
        className={`grid place-items-center h-12 w-12 rounded-2xl ${
          highlight ? "bg-cream-50/10 text-rose-200" : "bg-sage-100 text-sage-700"
        }`}
      >
        {icon}
      </div>
      <h3 className="mt-6 font-display text-2xl">{title}</h3>
      <p className={`mt-3 ${highlight ? "text-cream-100/80" : "text-ink-500"} leading-relaxed`}>
        {body}
      </p>
      <Link
        href={href}
        className={`mt-6 inline-flex items-center gap-2 text-sm font-medium ${
          highlight ? "text-rose-200" : "text-sage-700"
        } group-hover:gap-3 transition-all`}
      >
        {cta} <Arrow />
      </Link>
    </div>
  );
}
