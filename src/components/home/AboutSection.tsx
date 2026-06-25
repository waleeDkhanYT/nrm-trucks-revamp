import { motion } from "framer-motion";
import { MapPin, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroTruck2 from "@/assets/hero-truck-2.jpg";

const features = [
  {
    icon: MapPin,
    title: "Our Operating Locations",
    description: "Head Office: Karama-Dubai",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be the UAE’s most versatile transport partner—starting with our deep roots in moving the materials that power our infrastructure, and growing to handle the full range of transport needs, from heavy specialized loads to international shipping containers.",
  },
  {
    icon: Heart,
    title: "Our Commitment",
    description: "Straightforward pricing, safe driving, and clear communication. We take the stress out of logistics so you can focus on your business."
  },
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={heroTruck2}
                alt="NRM Trucks Fleet"
                className="w-full h-[580px] xsm:h-[480px] sm:h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent" />
            </div>

            {/* Feature Cards */}
            <div className="absolute right-0 lg:-right-8 -top-12 space-y-4 w-full lg:w-7/12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-4 shadow-soft"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Welcome To
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              NRM Transport Group
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
            Equipped with a specialized fleet of truck & trailers, we provide the heavy-duty capacity as per your projects demand. Our operations are driven by a team with over 10 years of hands-on expertise in construction and container logistics, ensuring every load is managed with veteran precision.            </p>
            {/* <p className="text-muted-foreground leading-relaxed mb-6">
              Our journey started in 1999, and we have grown with our clients over these 45+ years by adding value to their business. Since establishment, we have been diversifying business operations and product portfolios to adapt to the ever-changing market needs.
            </p> */}
            <p className="text-muted-foreground leading-relaxed mb-8">
            We don't just move cargo/materials,  we secure your timeline by combining strict safety standards with a focus on rapid turnaround times, we serve as the most reliable link in your supply chain
            </p>
            <Link to="/about">
              <Button variant="hero" size="lg">
                Learn More About Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
