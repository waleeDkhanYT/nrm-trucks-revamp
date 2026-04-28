"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const promises = [
  "Satisfaction",
  "On-time Delivery",
  "24/7 Delivery Support",
  "Immediate Availability",
];

const PromiseSection = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-accent/40 via-accent/60 to-accent/90">
      {/* Ambient lights */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-primary/30 blur-[120px] rounded-full opacity-30"></div>
      <div className="absolute bottom-10 right-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full opacity-30"></div>

      {/* Diagonal accent shape */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-[50%] h-full bg-gradient-to-br from-primary/10 to-transparent transform rotate-12"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-primary text-2xl md:text-3xl font-semibold tracking-wide mb-8"
        >
          We Promise You
        </motion.h2>

        {/* Promise cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {promises.map((promise, i) => (
            <motion.div
              key={promise}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.2)] transition-all duration-300"
            >
              {/* animated border glow */}
              <div className="absolute inset-0 rounded-2xl border border-primary/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <p className="text-2xl md:text-3xl font-bold text-white drop-shadow-sm">
                {promise}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Play button section */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <button className="group w-24 h-24 relative flex items-center justify-center mx-auto">
            <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 group-hover:bg-primary group-hover:border-primary shadow-lg"></div>

            <Play className="w-9 h-9 text-white/90 group-hover:text-primary-foreground z-10 ml-1 transition-all" />
          </button>

          <p className="mt-5 text-white/70 tracking-widest text-sm uppercase">
            How It Works
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default PromiseSection;