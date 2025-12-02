import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/layout/PageHeader";
import heroTruck2 from "@/assets/hero-truck-2.jpg";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide superior heavy transport and logistics solutions that exceed client expectations while maintaining the highest standards of safety and reliability.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be the leading provider of construction equipment and transport services in the Middle East, recognized for innovation, quality, and customer satisfaction.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Integrity, Excellence, Safety, and Customer Focus guide every decision we make and every service we deliver.",
  },
];

const features = [
  { icon: Users, value: "450+", label: "Team Members" },
  { icon: Award, value: "45+", label: "Years Experience" },
  { icon: Clock, value: "24/7", label: "Support Available" },
];

const About = () => {
  return (
    <Layout>
      <PageHeader
        title="About Us"
        description="Learn about our journey, mission, and commitment to excellence in transport services."
      />

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={heroTruck2}
                alt="NRM Trucks Fleet"
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Leading Transport Solutions Since 1979
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                NRM Trucks has been a cornerstone of the Middle East's transport and logistics industry for over four decades. Starting as a small operation with just a few vehicles, we have grown into one of the region's most trusted names in heavy transport.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our commitment to quality, safety, and customer satisfaction has earned us the trust of major construction companies, government agencies, and industrial giants across the UAE and beyond.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, with a fleet of over 1,500 vehicles and equipment pieces, we continue to set the standard for excellence in transport services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values and vision guide everything we do, from daily operations to long-term strategy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-soft text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-4xl font-bold text-accent-foreground mb-2">{item.value}</p>
                <p className="text-accent-foreground/70">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
