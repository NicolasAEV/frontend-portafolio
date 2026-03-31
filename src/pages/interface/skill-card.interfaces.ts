interface Technology {
  name: string;
  icon: React.ReactNode;
}

export interface SkillCardProps {
  title: string;
  description?: string;
  delay: number;
  logo?: React.ReactNode;
  technologies?: Technology[];
}
