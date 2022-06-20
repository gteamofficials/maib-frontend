import styles from "./ContentTitle.module.scss";
import cn from "classnames";

type AppProps = {
  children: string;
  active: boolean;
};

const ContentTitle = ({ children, active }: AppProps) => {
  const Heading = active ? "h2" : "h4";
  return (
    <div className={styles.contentTitle}>
      <Heading
        className={cn(styles.heading, {
          [styles.h2]: active,
          [styles.h4]: !active,
        })}
      >
        {children}
      </Heading>
      <hr
        className={cn(styles.hr, {
          [styles.on]: active,
          [styles.off]: !active,
        })}
      />
    </div>
  );
};
export default ContentTitle;
