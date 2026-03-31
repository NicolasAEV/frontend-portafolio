import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface UseScrollAnimationOptions {
  triggerOnce?: boolean;
  threshold?: number;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { triggerOnce = false, threshold = 0 } = options;
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce, threshold });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return { ref, controls, inView };
};
