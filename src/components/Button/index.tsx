import { PropsWithChildren } from "react";
import { cn } from "@/utils/mergeClass";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

type Props = {
  disabled?: boolean;
  href: Url;
};

export const Button = ({
  href,
  disabled = false,
  children,
}: PropsWithChildren<Props>) => (
  <Link
    href={href}
    className={cn("button", {
      "pointer-events-none cursor-default opacity-10 ": disabled,
    })}
  >
    {children}
  </Link>
);

export default Button;
