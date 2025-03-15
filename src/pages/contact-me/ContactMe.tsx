import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ContactForm from "./components/contact-form.tsx/ContactForm";
import ContactInfo from "./components/contact-info.tsx/ContactInfo";

const ContactMe = () => {
  const controls = useAnimation();
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
    <section ref={inViewRef} className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-left space-y-8">
        {/* Título con animación */}
        <motion.h1
          className="text-xl font-semibold mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6 }}
        >
         Contact me
        </motion.h1>

        {/* Descripción con animación */}
        <motion.p
          className="text-base opacity-90 text-gray-400"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Do you have a project in mind or want to collaborate? Send me a message, and I will get back to you as soon as possible.
        </motion.p>

        {/* Contenedor principal con animación */}
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Formulario de contacto con animación */}
          <motion.div
            className="col-span-1 lg:col-span-3 border border-gray-800 py-12 px-12 rounded-lg bg-gray-900 shadow-xl"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <ContactForm />
          </motion.div>

          {/* Información de contacto con animación */}
          <motion.div
            className="col-span-1 lg:col-span-2 border border-gray-800 py-12 px-12 rounded-lg bg-gray-900 shadow-xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <ContactInfo />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
