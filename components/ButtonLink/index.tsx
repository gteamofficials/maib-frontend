import styles from "../button/button.module.scss";
import cn from "classnames";
import { forwardRef } from "react";

type AppProps = {
  children: string;
  size: "large" | "medium";
  href: string;
  variant: "primary" | "secondary";
  className?: string;
};

const ButtonLink = forwardRef<HTMLAnchorElement, AppProps>(
  ({ size, children, href, variant, className }, ref) => {
    return (
      <a
        className={cn(styles.btn, {
          [styles.primary]: variant == "primary",
          [styles.secondary]: variant == "secondary",
          [styles.large]: size == "large",
          [styles.medium]: size == "medium",
          [className!]: className,
        })}
        href={href}
        ref={ref}
      >
        {children}
      </a>
    );
  }
);

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
