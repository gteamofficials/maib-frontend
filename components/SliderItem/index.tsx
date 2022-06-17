import cn from "classnames";
import styles from "./SliderItem.module.scss";

const SliderItem = ({
  active,
  onClick,
}: {
  active?: boolean;
  onClick: any;
}) => {
  return (
    <button
      type="button"
      className={cn(styles.sliderItem, {
        [styles.active]: active,
      })}
      onClick={() => onClick()}
    />
  );
};

export default SliderItem;
