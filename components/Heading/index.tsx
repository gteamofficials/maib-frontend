import cn from "classnames";
import { ReactNode } from "react";
import styles from "./Heading.module.scss";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const Heading = ({
  variant,
  as,
  children,
}: {
  variant: keyof JSX.IntrinsicElements & HeadingTag;
  as: keyof JSX.IntrinsicElements & HeadingTag;
  children: ReactNode;
}) => {
  const Element = as;
  return (
    <Element
      className={cn(styles.typography, {
        [styles.h1]: variant === "h1",
        [styles.h2]: variant === "h2",
        [styles.h3]: variant === "h3",
        [styles.h4]: variant === "h4",
        [styles.h5]: variant === "h5",
        [styles.h6]: variant === "h6",
      })}
    >
      {children}
    </Element>
  );
};

export default Heading;
