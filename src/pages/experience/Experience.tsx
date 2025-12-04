import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { MdWork } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../About-me/components/section-title/SectionTitle";

const experienceData = [
  {
    company: "InAdvanced",
    role: "Ssr Full Stack Developer",
    period: "2025 – Present",
    delay: 0.1,
    isPresent: true
  },
  {
    company: "Parque del Recuerdo – Open2000",
    role: "Ssr Full Stack Developer",
    period: "2024 – 2025",
    delay: 0.2,
    isPresent: false
  },
  {
    company: "Parque del Recuerdo – Open2000",
    role: "Junior Full Stack Developer",
    period: "2023 – 2024",
    delay: 0.3,
    isPresent: false
  },
  {
    company: "Freelance",
    role: "Freelance Developer",
    period: "2022 – 2023",
    delay: 0.4,
    isPresent: false
  },
  {
    company: "Sercotec - Osorno",
    role: "Professional Internship",
    period: "2021",
    delay: 0.5,
    isPresent: false
  }
];

const Experience = () => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLHeadingElement>(null);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <section ref={inViewRef} className="text-white py-4">
      <div className="text-left space-y-2">
        <SectionTitle refProp={sectionRef} controls={controls}>
          Experience
        </SectionTitle>

        <div className="relative mt-1">
          {/* Línea vertical central */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-600 to-transparent"></div>

          {/* Timeline items */}
          <div className="">
            {experienceData.map((item, index) => (
              <motion.div
                key={item.company}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={controls}
                transition={{ duration: 0.6, delay: item.delay }}
              >
                {/* Contenido de la tarjeta */}
                <div className={`w-full md:w-[42%] ${index % 2 === 0 ? "md:pr-2" : "md:pl-2"} pl-8 pr-2`}>
                  <motion.div
                    className="bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-lg p-3 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-purple-500 text-xl flex-shrink-0 mt-1">
                        <MdWork />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-base font-bold text-white">
                            {item.role}
                          </h3>
                          {item.isPresent && (
                            <span className="px-2 py-1 text-xs font-semibold bg-purple-500 bg-opacity-20 text-white rounded-full border border-purple-500">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-purple-400 font-semibold mb-1 text-sm">
                          {item.company}
                        </p>
                        <p className="text-gray-400 text-xs font-medium">
                          {item.period}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Punto en la línea de tiempo */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                  <motion.div
                    className="w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900 z-10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: item.delay + 0.2 }}
                    whileHover={{ scale: 1.5 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-75"></div>
                  </motion.div>
                </div>

                {/* Espacio vacío en el otro lado (solo visible en desktop) */}
                <div className="hidden md:block w-[42%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
