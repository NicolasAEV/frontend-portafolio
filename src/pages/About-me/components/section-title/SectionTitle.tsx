import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { SectionTitleProps } from "../../../interface/section-title.interface";

const SectionTitle: React.FC<SectionTitleProps> = ({ children, logo }) => {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.h2
      ref={ref}
      className="text-xl font-semibold mt-4"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6 }}
    >
      {logo && <div className="text-5xl mb-2 text-purple-500">{logo}</div>}
      {children}
    </motion.h2>
  );
};

export default SectionTitle;

