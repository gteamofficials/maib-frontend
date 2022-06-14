import styles from "./button.module.scss"
import cn from "classnames";

type AppProps = {
  children: string;
  size: string;
  disabled: boolean;
  variant: string;
};

const Button = ({ size, children, disabled, variant }: AppProps) => {
  return (
    <button
      className={cn(styles.btn,{
        [styles.primary]: variant == "primary",
        [styles.secondary]: variant == "secondary",
        [styles.large]: size == "large",
        [styles.medium]: size == "medium",
      })}
        disabled={disabled}>
      {children}
    </button>
  )
}

export default Button;
