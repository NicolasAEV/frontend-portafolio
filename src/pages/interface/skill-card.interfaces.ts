import { AnimationControls } from "framer-motion";

interface Technology {
  name: string;
  icon: React.ReactNode;
}

export interface SkillCardProps {
  refProp: React.Ref<HTMLDivElement> | null;
  controls: AnimationControls;
  title: string;
  description?: string;
  delay: number;
  logo?: React.ReactNode;
  technologies?: Technology[];
}
