import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from 'lucide-react';

import { nrmServices, whyChooseUs } from "@/lib/data/service";
import PageHeader from "@/components/layout/PageHeader";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const Services = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, []);

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

          <div className="flex gap-8">
            {nrmServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="grid grid-cols-1 md:grid-cols-2 bg-card rounded-xl shadow-soft border border-border transition-all duration-300"
              >
                <img src={service.img} alt={service.title} className="object-cover rounded-xl" />
                <div className="p-4 my-auto">
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-md mb-6">{service.content}</p>
                  <Link
                    state={service}
                    className="flex w-fit gap-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg px-6 py-4"
                    to={service.readmore}>Read More <ArrowRightIcon
                      className="hover:transition-all" />
                  </Link>
                </div>
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
