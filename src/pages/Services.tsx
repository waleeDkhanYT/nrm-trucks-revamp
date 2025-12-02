import { motion } from "framer-motion";
import { Truck, Forklift, MapPin, Wrench, Package, Shield, Clock, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/layout/PageHeader";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Truck,
    title: "Logistics Services",
    description: "Comprehensive logistics solutions for all your transportation needs. We handle everything from planning to delivery.",
    features: ["Door-to-door delivery", "Real-time tracking", "Customs clearance support", "Warehousing solutions"],
  },
  {
    icon: Forklift,
    title: "Equipment Rental",
    description: "Access our extensive fleet of construction equipment for short-term or long-term projects.",
    features: ["Excavators & loaders", "Cranes & forklifts", "Compactors & generators", "Flexible rental terms"],
  },
  {
    icon: MapPin,
    title: "Land Transport",
    description: "Reliable land transportation services across the UAE and GCC region with our modern fleet.",
    features: ["Tipper trucks", "Trailer trucks", "Low bed trailers", "Tanker services"],
  },
  {
    icon: Wrench,
    title: "Maintenance Support",
    description: "Keep your equipment running with our professional maintenance and repair services.",
    features: ["Preventive maintenance", "Emergency repairs", "Spare parts supply", "Technical consultancy"],
  },
  {
    icon: Package,
    title: "Project Cargo",
    description: "Specialized handling of oversized and heavy cargo for industrial and construction projects.",
    features: ["Heavy lift operations", "Route planning", "Permit management", "Escort services"],
  },
  {
    icon: Shield,
    title: "Safety Solutions",
    description: "Comprehensive safety programs and equipment to protect your workforce and assets.",
    features: ["Safety audits", "Training programs", "PPE supply", "Incident management"],
  },
];

const whyChooseUs = [
  { icon: Clock, text: "24/7 Service Availability" },
  { icon: Shield, text: "Fully Insured Operations" },
  { icon: CheckCircle, text: "ISO Certified Processes" },
  { icon: Truck, text: "Modern Fleet" },
];

const Services = () => {
  return (
    <Layout>
      <PageHeader
        title="Our Services"
        description="Comprehensive transport and logistics solutions tailored to your needs."
      />

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Complete Range of Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-glow hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
                Why Choose NRM Trucks?
              </h2>
              <p className="text-accent-foreground/80 mb-8">
                With decades of experience and a commitment to excellence, we deliver reliable solutions that keep your projects moving forward.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-background/10 rounded-lg p-4"
                  >
                    <item.icon className="w-6 h-6 text-primary" />
                    <span className="text-accent-foreground text-sm font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <p className="text-accent-foreground/80 text-lg mb-8">
                Ready to experience the NRM difference? Get in touch with our team today for a customized quote.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Request a Quote
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
