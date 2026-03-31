import { motion } from "framer-motion";
import { MdWork } from "react-icons/md";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import SectionTitle from "../About-me/components/section-title/SectionTitle";

const experienceData = [
  {
    company: "InAdvanced",
    role: "Ssr Full Stack Developer",
    period: "2025 – Present",
    delay: 0.1,
    isPresent: true,
  },
  {
    company: "Parque del Recuerdo – Open2000",
    role: "Ssr Full Stack Developer",
    period: "2024 – 2025",
    delay: 0.2,
    isPresent: false,
  },
  {
    company: "Parque del Recuerdo – Open2000",
    role: "Junior Full Stack Developer",
    period: "2023 – 2024",
    delay: 0.3,
    isPresent: false,
  },
  {
    company: "Freelance",
    role: "Freelance Developer",
    period: "2022 – 2023",
    delay: 0.4,
    isPresent: false,
  },
  {
    company: "Sercotec - Osorno",
    role: "Professional Internship",
    period: "2021",
    delay: 0.5,
    isPresent: false,
  },
];

/* ── Card compartida ─────────────────────────────────────── */
const ExperienceCard = ({ item }: { item: (typeof experienceData)[0] }) => (
  <motion.div
    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
    whileHover={{ y: -4, scale: 1.02 }}
  >
    <div className="flex items-start gap-3">
      <div className="text-purple-500 text-xl flex-shrink-0 mt-0.5">
        <MdWork />
      </div>
      <div className="flex-grow min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="text-sm font-bold text-white leading-tight">
            {item.role}
          </h3>
          {item.isPresent && (
            <span className="px-2 py-0.5 text-xs font-semibold bg-purple-500/20 text-purple-300 rounded-full border border-purple-500 whitespace-nowrap">
              Current
            </span>
          )}
        </div>
        <p className="text-purple-400 font-semibold text-sm mb-0.5 truncate">
          {item.company}
        </p>
        <p className="text-gray-400 text-xs font-medium">{item.period}</p>
      </div>
    </div>
  </motion.div>
);

/* ── Punto de la timeline ────────────────────────────────── */
const TimelineDot = ({ delay }: { delay: number }) => (
  <motion.div
    className="relative w-4 h-4 flex-shrink-0"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.3, delay: delay + 0.2 }}
    whileHover={{ scale: 1.5 }}
  >
    <div className="w-4 h-4 bg-purple-500 rounded-full border-[3px] border-gray-900 z-10 relative" />
    <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-60" />
  </motion.div>
);

/* ── Componente principal ────────────────────────────────── */
const Experience = () => {
  const { ref: inViewRef, controls } = useScrollAnimation();

  return (
    <section ref={inViewRef} className="text-white py-4">
      <div className="text-left space-y-4">
        <SectionTitle>Experience</SectionTitle>

        {/* ── MOBILE: timeline lateral izquierda ── */}
        <div className="md:hidden relative mt-2">
          {/* Línea continua absoluta — corre desde el primer al último punto */}
          <div className="absolute left-[7px] top-5 bottom-5 w-0.5 bg-gradient-to-b from-purple-500 via-purple-600/60 to-transparent" />

          <div className="flex flex-col gap-3">
            {experienceData.map((item) => (
              <motion.div
                key={item.company + item.role}
                className="relative flex items-start gap-4"
                initial={{ opacity: 0, x: 20 }}
                animate={controls}
                transition={{ duration: 0.5, delay: item.delay }}
              >
                {/* Punto — z-10 para quedar sobre la línea */}
                <div className="flex-shrink-0 mt-4 z-10">
                  <TimelineDot delay={item.delay} />
                </div>

                {/* Card */}
                <div className="flex-1 min-w-0">
                  <ExperienceCard item={item} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── DESKTOP: timeline central zigzag ── */}
        <div className="hidden md:block relative mt-1">
          {/* Línea vertical central */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-600 to-transparent" />

          <div>
            {experienceData.map((item, index) => (
              <motion.div
                key={item.company + item.role}
                className={`relative flex items-center mb-4 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={controls}
                transition={{ duration: 0.6, delay: item.delay }}
              >
                {/* Card */}
                <div
                  className={`w-[42%] ${
                    index % 2 === 0 ? "pr-6" : "pl-6"
                  }`}
                >
                  <ExperienceCard item={item} />
                </div>

                {/* Punto centrado */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <TimelineDot delay={item.delay} />
                </div>

                {/* Espacio vacío en el otro lado */}
                <div className="w-[42%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
