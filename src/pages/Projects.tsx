import { motion } from "framer-motion";
import { MapPin, Calendar, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/layout/PageHeader";
import heroTruck1 from "@/assets/hero-truck-1.jpg";
import heroTruck2 from "@/assets/hero-truck-2.jpg";
import heroTruck3 from "@/assets/hero-truck-3.jpg";

const projects = [
  {
    image: heroTruck1,
    title: "Dubai Metro Extension Project",
    location: "Dubai, UAE",
    year: "2023",
    description: "Provided comprehensive logistics support for the Dubai Metro Red Line extension, including material transport and equipment rental.",
    status: "Completed",
  },
  {
    image: heroTruck2,
    title: "Expo 2020 Infrastructure",
    location: "Dubai, UAE",
    year: "2020",
    description: "Major transport operations for the Expo 2020 site construction, handling thousands of equipment movements.",
    status: "Completed",
  },
  {
    image: heroTruck3,
    title: "Abu Dhabi Industrial Zone",
    location: "Abu Dhabi, UAE",
    year: "2024",
    description: "Ongoing support for industrial zone development with dedicated fleet and 24/7 operations.",
    status: "In Progress",
  },
  {
    image: heroTruck1,
    title: "Sharjah Port Expansion",
    location: "Sharjah, UAE",
    year: "2023",
    description: "Heavy equipment transport and logistics coordination for the port expansion project.",
    status: "Completed",
  },
  {
    image: heroTruck2,
    title: "Oil Field Operations",
    location: "Al Ain, UAE",
    year: "2024",
    description: "Specialized equipment rental and transport services for oil field development operations.",
    status: "In Progress",
  },
  {
    image: heroTruck3,
    title: "Highway Construction Project",
    location: "Fujairah, UAE",
    year: "2022",
    description: "Complete fleet deployment for major highway construction connecting Fujairah to Dubai.",
    status: "Completed",
  },
];

const Projects = () => {
  return (
    <Layout>
      <PageHeader
        title="Our Projects"
        description="Explore our portfolio of successful projects across the UAE and beyond."
      />

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Featured Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-card rounded-xl overflow-hidden shadow-soft border border-border hover:shadow-glow transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent" />
                  <span
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-primary/20 text-primary"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "150+", label: "Active Clients" },
              { value: "7", label: "UAE Emirates Covered" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
