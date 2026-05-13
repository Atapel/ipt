import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-ink-900 text-cream-50 hover:bg-sage-700 shadow-sm hover:shadow-md",
  secondary:
    "bg-cream-100 text-ink-900 ring-1 ring-cream-200 hover:bg-cream-200",
  ghost:
    "text-ink-900 hover:bg-cream-100",
};

type Props = {
  href?: string;
  variant?: Variant;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href">;

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  ...rest
}: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all ${styles[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a className={cls} {...rest}>
      {children}
    </a>
  );
}
