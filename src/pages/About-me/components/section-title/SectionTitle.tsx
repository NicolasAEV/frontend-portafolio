import { motion } from "framer-motion";
import { SectionTitleProps } from "../../../interface/section-title.interface";

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  refProp,
  controls,
  logo,
}) => {
  return (
    <motion.h2
      ref={refProp}
      className="text-xl font-semibold mt-4"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6 }}
    >
      {/* Aquí renderizamos el logo si está presente */}
      {logo && <div className="text-5xl mb-2 text-purple-500">{logo && logo}</div>}
      {children}
    </motion.h2>
  );
};

export default SectionTitle;
