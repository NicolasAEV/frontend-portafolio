import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { SkillCardProps } from "../../../interface/skill-card.interfaces";

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  description,
  delay,
  logo,
  technologies,
}) => {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className="border rounded-lg p-10 border-gray-800 shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] bg-gray-900/60 backdrop-blur-sm"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, delay }}
    >
      <div className="grid mb-6">
        {logo && (
          <div className="text-5xl mb-3 text-purple-500">{logo}</div>
        )}
        <h5 className="text-lg font-semibold">{title}</h5>
      </div>

      {description && (
        <p className="text-base opacity-90 text-gray-400 mb-6">{description}</p>
      )}

      {technologies && (
        <div className="flex flex-wrap gap-4">
          {technologies.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="group flex items-center gap-2 text-sm"
            >
              <span className="text-2xl text-gray-500 transition-colors duration-300 group-hover:text-purple-500">
                {tech.icon}
              </span>
              <span className="text-gray-300 group-hover:text-purple-500 transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default SkillCard;

