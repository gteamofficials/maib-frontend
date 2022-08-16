import styles from "./button.module.scss";
import cn from "classnames";
import classNames from "classnames";

type AppProps = {
  children: string;
  size: "large" | "medium";
  disabled?: boolean;
  variant: "primary" | "secondary";
  className?: string;
};

const Button = ({ size, children, disabled, variant, className }: AppProps) => {
  return (
    <button
      className={cn(styles.btn, {
        [styles.primary]: variant == "primary",
        [styles.secondary]: variant == "secondary",
        [styles.large]: size == "large",
        [styles.medium]: size == "medium",
        [className!]: className,
      })}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
