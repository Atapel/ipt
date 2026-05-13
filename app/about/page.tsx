import Button from "@/components/Button";
import Section from "@/components/Section";
import { Arrow, Check } from "@/components/icons";

export const metadata = {
  title: "About Dr. Yelena Bregman, PT, DPT",
  description:
    "Doctor of Physical Therapy and pediatric specialist with nearly a decade of experience helping babies and children thrive.",
};

const credentials = [
  "Doctor of Physical Therapy — New York Medical College (2015)",
  "DMI Intro Level B Certified",
  "Institute of Physical Art — PNF: Functional Neuromuscular & Motor Control Training",
  "Institute of Physical Art — FMI: Functional Mobilization 1",
  "Adjunct Clinical Instructor, DPT program at New York Medical College",
  "Fluent in English, Russian, and conversational Spanish",
];

export default function AboutPage() {
  return (
    <>
      <section className="container-page pt-20 pb-12">
        <div className="pill">About</div>
        <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.05] text-ink-900 max-w-4xl">
          Hi, I&apos;m Yelena.
        </h1>
        <p className="mt-6 text-xl text-ink-500 max-w-2xl leading-relaxed">
          Doctor of Physical Therapy. Pediatric specialist. Mom of two sweet boys.
        </p>
      </section>

      <section className="container-page grid md:grid-cols-12 gap-12 pb-20">
        <div className="md:col-span-5">
          <div className="aspect-[4/5] rounded-4xl bg-gradient-to-br from-rose-200 via-cream-100 to-sage-200 relative overflow-hidden ring-1 ring-cream-200">
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center px-8">
                <div className="font-display text-7xl text-ink-900/90">YB</div>
                <div className="mt-3 text-ink-700">Dr. Yelena Bregman</div>
                <div className="text-ink-500 text-sm">PT, DPT · DMI Level B</div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 space-y-6 text-ink-700 text-lg leading-relaxed">
          <p>
            I&apos;ve been passionate about excellence in healthcare since I was a young child myself.
            At nine, I was diagnosed with an autoimmune disorder that would shape my childhood
            and teenage years — physically and emotionally.
          </p>
          <p>
            That experience became the dream: to inspire babies, toddlers, and youth living with a
            wide range of medically complex conditions to meet and exceed their physical goals
            through an intensive yet gentle approach. I understand what my patients are going
            through on a personal and a professional level.
          </p>
          <p>
            I&apos;m a graduate of New York Medical College (DPT, 2015) and earned my B.A. in
            Psychology from Pace University as part of the Pforzheimer Honors College. My doctoral
            project — a teaching practicum on Neurological Examination and Evaluation — let me
            mentor DPT students in techniques for patients with complex neurological involvement.
          </p>
          <p>
            I&apos;ve practiced across many settings: pediatric and orthopedic work at Suki&apos;s
            Place in Manhattan, medically complex pediatrics and aquatic therapy at Elizabeth Seton
            Children&apos;s Rehabilitation Center, plus outpatient orthopedics and acute in-patient
            rehab at Montefiore Hospital.
          </p>
          <p>
            I&apos;m a proud mom of two boys. I know how crucial pediatric development is —
            and how anxious those early months can feel. Early Intervention yields the best
            outcomes, and my passion for helping other parents is second only to my resolve to
            make a difference in the lives of my patients.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Credentials"
        title="Training & certifications"
      >
        <ul className="grid md:grid-cols-2 gap-3 max-w-4xl">
          {credentials.map((c) => (
            <li
              key={c}
              className="flex items-start gap-3 p-5 rounded-2xl bg-cream-50 ring-1 ring-cream-200"
            >
              <span className="mt-1 grid place-items-center h-6 w-6 rounded-full bg-sage-100 text-sage-700 shrink-0">
                <Check className="w-4 h-4" />
              </span>
              <span className="text-ink-700">{c}</span>
            </li>
          ))}
        </ul>
      </Section>

      <section className="container-page pb-24">
        <div className="rounded-4xl bg-ink-900 text-cream-50 p-10 md:p-14 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <h3 className="font-display text-3xl md:text-4xl leading-tight">
              Ready to take the next step?
            </h3>
            <p className="mt-3 text-cream-100/80 max-w-xl">
              Reach out to talk about your baby. I&apos;ll get back to you within 24 hours.
            </p>
          </div>
          <Button href="/contact" variant="secondary">
            Contact Yelena <Arrow />
          </Button>
        </div>
      </section>
    </>
  );
}
