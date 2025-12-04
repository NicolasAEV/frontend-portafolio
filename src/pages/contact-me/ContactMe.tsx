import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ContactForm from "./components/contact-form.tsx/ContactForm";
import ContactInfo from "./components/contact-info.tsx/ContactInfo";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const slideIn = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

const slideInRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

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
    <section ref={inViewRef} className="text-white py-4">
      <div className="text-left space-y-4">
        <motion.h1
          className="text-xl font-semibold mt-4"
          {...fadeInUp}
        >
          Contact me
        </motion.h1>

        <motion.p
          className="text-base opacity-90 text-gray-400"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          Do you have a project in mind or want to collaborate? Send me a message, and I will get back to you as soon as possible.
        </motion.p>

        <motion.div
          className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="col-span-1 lg:col-span-3 border border-gray-800 py-6 px-6 rounded-lg bg-gray-900 shadow-xl"
            {...slideIn}
            transition={{ ...slideIn.transition, delay: 0.5 }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            className="col-span-1 lg:col-span-2 border border-gray-800 py-6 px-6 rounded-lg bg-gray-900 shadow-xl"
            {...slideInRight}
            transition={{ ...slideInRight.transition, delay: 0.7 }}
          >
            <ContactInfo />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
