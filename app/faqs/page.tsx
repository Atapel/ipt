import FAQItem from "@/components/FAQItem";
import Section from "@/components/Section";

export const metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about insurance, pricing, referrals, and what to expect at your first visit.",
};

export default function FAQsPage() {
  return (
    <>
      <section className="container-page pt-20 pb-8">
        <div className="pill">FAQs</div>
        <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.05] text-ink-900 max-w-4xl">
          Let&apos;s answer your questions.
        </h1>
        <p className="mt-6 text-xl text-ink-500 max-w-2xl leading-relaxed">
          Have something specific? <a className="link-underline text-ink-700" href="/contact">Reach out</a> any time.
        </p>
      </section>

      <Section className="!pt-8">
        <div className="max-w-3xl">
          <FAQItem question="What types of health insurance do you accept?">
            <p>
              We work with all PPO plans with out-of-network benefits. We are an out-of-network,
              privately-owned clinic. We&apos;ll provide a Superbill medical claim form with diagnosis
              codes, treatment codes, units billed, PT information, and any supporting documentation
              needed for you to submit to your insurance if you have out-of-network benefits.
            </p>
            <p className="mt-3">
              The cost of the session may first be applied to your deductible. It is your
              responsibility to call your insurance company and obtain reimbursement information.
              Payment is due at the time of your scheduled visit.
            </p>
          </FAQItem>

          <FAQItem question="What is the cost of each session?">
            <p>
              Per the No Secrets Act of 2022, here is our transparent pricing:
            </p>
            <ul className="mt-3 space-y-1">
              <li>• 90-minute initial evaluation: <strong>$300</strong></li>
              <li>• 60-minute follow-up session: <strong>$175</strong></li>
            </ul>
            <p className="mt-3">
              Please contact Yelena Bregman, PT, DPT with any questions about billing. You will
              never be billed more than the stated amount unless agreed upon in advance.
            </p>
          </FAQItem>

          <FAQItem question="What is your new-patient procedure?">
            <p>
              All new patients receive a call back within 24 hours. We&apos;ll send detailed
              paperwork via email to complete before your appointment. New patients should bring
              their doctor&apos;s referral (if applicable) and any imaging.
            </p>
            <p className="mt-3">
              Please wear comfortable gym-type clothing for easy movement. New patients receive a
              full PT evaluation and, if appropriate, treatment the same day. The PT will discuss
              findings and the Plan of Care when PT is medically necessary — or refer to a more
              appropriate provider if not.
            </p>
          </FAQItem>

          <FAQItem question="Do I need a doctor's referral?">
            <p>
              NY State Direct Access allows a patient to be seen without a referral for the
              initial evaluation, then up to either 10 visits or up to 30 days — whichever comes
              first. The initial evaluation counts toward the 10 visits if treatment is rendered
              the same day. After that, a referral is required to continue.
            </p>
            <p className="mt-3">
              Insurance companies and third-party payers may not reimburse for PT services without
              a direct referral. Although we are a cash-based clinic, you may submit an
              out-of-network form to your insurance for possible reimbursement; we&apos;ll provide
              the form. A referral is required for possible insurance reimbursement.
            </p>
            <p className="mt-3">
              Direct Access lets patients get in faster without waiting to see a physician first.
              The PT will screen each patient for red flags and immediately refer to the nearest
              appropriate medical center or emergency room if needed.
            </p>
          </FAQItem>

          <FAQItem question="What is your cancellation policy?">
            <p>
              Appointments must be cancelled or rescheduled at least 24 hours in advance. Any
              appointment not cancelled within that window incurs a $100 fee. If the provider is
              already on the way to the patient&apos;s home, the full session cost applies. No-shows
              and last-minute cancellations — unless due to a medical emergency or unforeseen
              medical circumstance — incur the full session cost.
            </p>
          </FAQItem>

          <FAQItem question="Where do you provide in-home visits?">
            <p>
              Westchester and Putnam County, NY. For families outside that area, virtual 1:1
              coaching is available worldwide.
            </p>
          </FAQItem>
        </div>
      </Section>
    </>
  );
}
