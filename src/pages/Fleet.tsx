import { useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/layout/PageHeader";

// Import images
import fleet1 from "@/assets/fleet-1.png";
import fleet2 from "@/assets/fleet-2.png";
import fleet3 from "@/assets/fleet-3.png";
import fleet4 from "@/assets/fleet-4.png";

const fleetItems = [
  { id: 1, img: fleet1, title: "Heavy Duty Tipper", category: "Transport" },
  { id: 2, img: fleet2, title: "Logistics Trailer", category: "Logistics" },
  { id: 3, img: fleet3, title: "Industrial Excavator", category: "Machinery" },
  { id: 4, img: fleet4, title: "Flatbed Carrier", category: "Transport" },
  { id: 5, img: fleet1, title: "Tipping Trailer", category: "Transport" },
  { id: 6, img: fleet2, title: "Freight Trailer", category: "Logistics" },
  { id: 7, img: fleet3, title: "Backhoe Loader", category: "Machinery" },
  { id: 8, img: fleet4, title: "Cargo Flatbed", category: "Transport" },
  { id: 9, img: fleet1, title: "Construction Tipper", category: "Transport" },
  { id: 10, img: fleet2, title: "Long-haul Trailer", category: "Logistics" },
  { id: 11, img: fleet3, title: "Power Shovel", category: "Machinery" },
  { id: 12, img: fleet4, title: "Utility Flatbed", category: "Transport" },
];

const Fleet = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Layout>
      <PageHeader
        title="Our Fleet"
        description="Explore our extensive range of modern heavy-duty vehicles and construction machinery."
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Operational Excellence
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Modern Fleet for Every Need
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
              Our fleet is equipped with the latest technology and maintained to the highest standards 
              to ensure reliability and efficiency for all your transport and construction projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {fleetItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-soft border border-border bg-card transition-all duration-500 hover:shadow-glow hover:-translate-y-2">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-primary-foreground/70 text-xs font-medium uppercase tracking-widest mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground text-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Transport Solution?
            </h2>
            <p className="text-accent-foreground/80 mb-10 text-lg">
              Contact us today for a free consultation and quote for your next project.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Fleet;
