import { AnimationControls } from "framer-motion";

export interface SectionTitleProps {
  children: React.ReactNode;
  refProp: React.RefObject<HTMLHeadingElement | null>;
  controls: AnimationControls;
  logo?: React.ReactNode;
}
