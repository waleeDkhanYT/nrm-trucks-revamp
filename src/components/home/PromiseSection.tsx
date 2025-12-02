import { motion } from "framer-motion";
import { Play } from "lucide-react";

const promises = [
  "Satisfaction",
  "On time delivery",
  "24X7 Service",
  "Immediate availability",
];

const PromiseSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-accent" />
      
      {/* Decorative Pattern */}
      <div className="absolute left-0 top-0 bottom-0 w-32 opacity-20">
        <div className="grid grid-cols-4 gap-2 p-4">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary" />
          ))}
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary text-xl md:text-2xl font-semibold mb-6"
          >
            We promise you ...
          </motion.h2>

          <div className="space-y-2">
            {promises.map((promise, index) => (
              <motion.p
                key={promise}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent-foreground"
              >
                ...{promise}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12"
          >
            <button className="group w-20 h-20 rounded-full bg-background/10 backdrop-blur-sm border border-accent-foreground/20 flex items-center justify-center mx-auto hover:bg-primary hover:border-primary transition-all duration-300">
              <Play className="w-8 h-8 text-accent-foreground group-hover:text-primary-foreground fill-current ml-1" />
            </button>
            <p className="text-accent-foreground/60 mt-4 text-sm uppercase tracking-wider">
              How It Works
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
