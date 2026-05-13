import type { ReactNode } from "react";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
};

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
  align = "left",
}: Props) {
  return (
    <section id={id} className={`container-page py-20 md:py-28 ${className}`}>
      {(eyebrow || title || intro) && (
        <div
          className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
        >
          {eyebrow && <div className="pill mb-5">{eyebrow}</div>}
          {title && (
            <h2 className="text-3xl md:text-5xl text-ink-900 leading-[1.05]">
              {title}
            </h2>
          )}
          {intro && (
            <p className="mt-5 text-lg text-ink-500 leading-relaxed">{intro}</p>
          )}
        </div>
      )}
      {children && <div className={`${eyebrow || title || intro ? "mt-14" : ""}`}>{children}</div>}
    </section>
  );
}
