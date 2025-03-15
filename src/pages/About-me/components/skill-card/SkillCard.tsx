import { SkillCardProps } from "../../../interface/skill-card.interfaces";
import { motion } from "framer-motion";

const SkillCard: React.FC<SkillCardProps> = ({
  refProp,
  controls,
  title,
  description,
  delay,
  logo,
}) => {
  return (
    <motion.div
      ref={refProp}
      className="border rounded-lg p-10 border-gray-800 shadow-xl hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, delay }}
    >
      <div className=" grid mb-5">
        {logo && (
          <div className="text-5xl mb-2 text-purple-500 ">{logo && logo}</div>
        )}
        <h5 className="text-lg font-semibold mb-5">{title}</h5>
      </div>

      <p className="text-base opacity-90 text-gray-400">{description}</p>
    </motion.div>
  );
};

export default SkillCard;
