import cn from "classnames";
import { useState } from "react";
import SliderItem from "../SliderItem";
import styles from "./Slider.module.scss";

const Slider = ({
  count,
  direction,
}: {
  count: number;
  direction: "horizontal" | "vertical";
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const changeStep = (step: number) => () => setActiveStep(step);

  return (
    <div
      className={cn(styles.slider, {
        [styles.horizontal]: direction === "horizontal",
        [styles.vertical]: direction === "vertical",
      })}
    >
      {[...Array(count)].map((_, i) => (
        <SliderItem key={i} active={activeStep === i} onClick={changeStep(i)} />
      ))}
    </div>
  );
};

export default Slider;
