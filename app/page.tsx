import Button from "@/components/Button";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";
import Tilt from "@/components/Tilt";
import Magnetic from "@/components/Magnetic";
import Blob from "@/components/Blob";
import { Arrow, Book, Check, Home, Sparkle, Video } from "@/components/icons";
import Link from "next/link";
import HeroCard from "@/components/HeroCard";
import Spotlight from "@/components/Spotlight";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Animated mesh blobs */}
        <Blob className="absolute -top-40 -right-40 w-[720px] h-[720px] opacity-60" color="#BFCDB1" />
        <Blob className="absolute -bottom-60 -left-40 w-[680px] h-[680px] opacity-50" color="#F5DDD2" delay={0.4} />
        <Blob className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] opacity-30" color="#EBBCA8" delay={0.8} />

        <div className="relative container-page pt-20 md:pt-28 pb-24 md:pb-36 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <Reveal>
              <div className="pill mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-sage-500" />
                </span>
                Now booking · Westchester &amp; Putnam, NY
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-display text-5xl md:text-7xl xl:text-8xl leading-[1.0] tracking-tight text-ink-900">
                Helping babies move better —{" "}
                <span className="text-gradient">earlier</span>{" "}
                and with confidence.
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-7 text-lg md:text-xl text-ink-500 max-w-xl leading-relaxed">
                Evidence-based, gentle pediatric physical therapy focused on tummy time, milestones,
                and parent empowerment — starting in the 4th trimester.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Magnetic>
                  <Button href="/contact">
                    Book a session <Arrow />
                  </Button>
                </Magnetic>
                <Magnetic strength={0.15}>
                  <Button href="/services" variant="secondary">
                    Explore services
                  </Button>
                </Magnetic>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
                <Stat number={<><Counter to={10} suffix="+" /></>} label="years of pediatric PT" />
                <Stat number={<>1:1</>} label="in-home &amp; virtual" />
                <Stat number={<>DMI<span className="text-ink-400 text-base ml-1">B</span></>} label="certified" />
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5 relative">
            <Reveal direction="left" delay={0.3}>
              <Tilt className="max-w-md mx-auto">
                <HeroCard />
              </Tilt>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MARQUEE — credentials */}
      <section className="border-y border-cream-200/60 bg-cream-100/40 backdrop-blur-sm">
        <div className="mask-fade-x">
          <Marquee
            speed={45}
            items={[
              <Cred key="1">Doctor of Physical Therapy</Cred>,
              <Cred key="2">DMI Intro Level B Certified</Cred>,
              <Cred key="3">NY Medical College ’15</Cred>,
              <Cred key="4">PNF Trained</Cred>,
              <Cred key="5">FMI Certified</Cred>,
              <Cred key="6">NY State Direct Access</Cred>,
              <Cred key="7">Adjunct Clinical Instructor</Cred>,
              <Cred key="8">English · Russian · Español</Cred>,
            ]}
          />
        </div>
      </section>

      {/* VALUE PROPS — Bento layout */}
      <Section
        eyebrow="How I help"
        title={
          <>
            A clear, calm path through your baby&apos;s <em className="not-italic text-gradient">milestones</em>.
          </>
        }
        intro="No pressure, no fear-based messaging. Just play-based movement, expert guidance, and steady support — wherever you are."
      >
        <div className="grid md:grid-cols-6 gap-5 auto-rows-[1fr]">
          <Reveal delay={0.05} className="md:col-span-3 md:row-span-2">
            <ValueCard
              big
              icon={<Home className="w-7 h-7" />}
              title="In-Home Pediatric PT"
              body="Hands-on, developmentally focused therapy in the comfort of your home — ideal for babies who need direct support."
              href="/services#in-home"
              cta="Request in-home PT"
              accent="sage"
            />
          </Reveal>
          <Reveal delay={0.10} className="md:col-span-3">
            <ValueCard
              icon={<Video className="w-6 h-6" />}
              title="1:1 Virtual Coaching"
              body="Live video sessions tailored to your baby. Worldwide availability."
              href="/services#virtual"
              cta="Book virtual"
              accent="rose"
            />
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-3">
            <ValueCard
              icon={<Book className="w-6 h-6" />}
              title="Digital Guides"
              body="The Ultimate Tummy Time Guide and more — learn at your own pace."
              href="/services#guides"
              cta="Download the guide"
              accent="cream"
            />
          </Reveal>
        </div>
      </Section>

      {/* PHILOSOPHY */}
      <section className="relative">
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <Spotlight className="rounded-4xl text-cream-50 p-10 md:p-16 relative overflow-hidden bg-gradient-to-br from-ink-900 via-sage-700 to-sage-600 noise">
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-rose-200/20 blur-2xl" />
              <div className="absolute -left-10 -bottom-20 w-72 h-72 rounded-full bg-cream-200/20 blur-2xl" />
              <div className="relative max-w-3xl">
                <div className="pill bg-cream-50/15 text-cream-50 ring-cream-50/10">My philosophy</div>
                <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05]">
                  I don&apos;t believe in{" "}
                  <em className="not-italic text-rose-200">&ldquo;wait and see.&rdquo;</em>
                </h2>
                <p className="mt-6 text-lg md:text-xl text-cream-100/90 leading-relaxed max-w-2xl">
                  I believe in informed parents, early support, and meeting babies exactly where they are.
                  With the right guidance, play becomes powerful, progress becomes visible, and parents
                  feel calm instead of overwhelmed.
                </p>
                <div className="mt-9">
                  <Magnetic>
                    <Button href="/about" variant="secondary">
                      Meet Dr. Bregman <Arrow />
                    </Button>
                  </Magnetic>
                </div>
              </div>
            </Spotlight>
          </Reveal>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <Section
        eyebrow="Who this is for"
        title={<>If any of these sound familiar, you&rsquo;re in the right place.</>}
      >
        <ul className="grid md:grid-cols-2 gap-4 max-w-4xl">
          {[
            "Parents worried about tummy time or milestones",
            "Babies who dislike floor play",
            "Families told to “just wait” but feel something isn’t right",
            "Parents who want expert reassurance without fear",
          ].map((line, i) => (
            <Reveal as="li" delay={i * 0.05} key={line}>
              <div className="flex items-start gap-4 p-6 rounded-3xl bg-cream-50/90 backdrop-blur ring-1 ring-cream-200 hover:ring-sage-300 hover:-translate-y-0.5 transition-all duration-300">
                <span className="grid place-items-center h-9 w-9 rounded-full bg-rose-100 text-rose-500 shrink-0">
                  <Check className="w-5 h-5" />
                </span>
                <span className="text-ink-700 text-lg">{line}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* CTA */}
      <Section align="center" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 grid place-items-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-br from-rose-200/40 via-cream-200/40 to-sage-200/40 blur-3xl animate-pulse" />
        </div>
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <div className="pill mx-auto">Start here</div>
            <h2 className="mt-5 text-4xl md:text-6xl text-ink-900 leading-tight">
              Not sure what your <span className="text-gradient">baby</span> needs?
            </h2>
            <p className="mt-5 text-lg text-ink-500">
              You don&apos;t need to do everything — just the next right thing.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Magnetic>
                <Button href="/contact">Reach out <Arrow /></Button>
              </Magnetic>
              <Magnetic strength={0.15}>
                <Button href="/services" variant="secondary">See all services</Button>
              </Magnetic>
            </div>
            <p className="mt-10 text-sm text-ink-400">
              Or call us directly at{" "}
              <Link href="tel:9144240398" className="link-underline text-ink-700">
                (914) 424-0398
              </Link>
            </p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

function Stat({ number, label }: { number: React.ReactNode; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl md:text-4xl text-ink-900">{number}</div>
      <div className="text-ink-400 mt-1 text-sm">{label}</div>
    </div>
  );
}

function Cred({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-3 text-ink-700 font-display text-xl whitespace-nowrap">
      <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
      {children}
    </span>
  );
}

function ValueCard({
  icon,
  title,
  body,
  href,
  cta,
  big,
  accent = "sage",
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  href: string;
  cta: string;
  big?: boolean;
  accent?: "sage" | "rose" | "cream";
}) {
  const accentMap = {
    sage: "bg-ink-900 text-cream-50 ring-ink-900",
    rose: "bg-cream-50 ring-cream-200 hover:ring-rose-200",
    cream: "bg-cream-50 ring-cream-200 hover:ring-sage-200",
  };
  const iconMap = {
    sage: "bg-cream-50/10 text-rose-200",
    rose: "bg-rose-100 text-rose-500",
    cream: "bg-sage-100 text-sage-700",
  };
  const ctaMap = {
    sage: "text-rose-200",
    rose: "text-rose-500",
    cream: "text-sage-700",
  };

  return (
    <Tilt max={4} className="h-full">
      <Link
        href={href}
        className={`group h-full block shine rounded-3xl p-8 md:p-10 ring-1 transition-all duration-300 hover:shadow-xl ${accentMap[accent]} ${big ? "min-h-[420px] flex flex-col justify-between" : ""}`}
      >
        <div>
          <div className={`grid place-items-center rounded-2xl ${big ? "h-16 w-16" : "h-12 w-12"} ${iconMap[accent]}`}>
            {icon}
          </div>
          <h3 className={`mt-6 font-display ${big ? "text-4xl" : "text-2xl"} leading-tight`}>{title}</h3>
          <p className={`mt-3 ${accent === "sage" ? "text-cream-100/80" : "text-ink-500"} leading-relaxed ${big ? "text-lg" : ""}`}>
            {body}
          </p>
        </div>
        <div className={`mt-6 inline-flex items-center gap-2 text-sm font-medium ${ctaMap[accent]} group-hover:gap-3 transition-all`}>
          {cta} <Arrow />
        </div>
      </Link>
    </Tilt>
  );
}
