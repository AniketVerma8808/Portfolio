// ✅ Contact.jsx
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-6"
        >
          Contact Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-6"
        >
          Feel free to reach out via email at <a className="text-lime-600" href="mailto:aniket@example.com">aniket@example.com</a>
          or connect with me on LinkedIn and GitHub.
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
