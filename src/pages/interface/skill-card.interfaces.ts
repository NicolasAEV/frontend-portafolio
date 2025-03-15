import { AnimationControls } from "framer-motion";

export interface SkillCardProps {
  refProp: React.Ref<HTMLDivElement> | null;
  controls: AnimationControls;
  title: string;
  description: string;
  delay: number;
  logo?: React.ReactNode;
}
