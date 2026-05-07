import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Truck, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import NRM from "@/assets/Logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-9">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center">
            
              <div className="flex items-center justify-center gap-[5px]">
                {/* <Truck className="w-6 h-6 text-primary-foreground" /> */}
                <img src={NRM} alt="Logo" className="w-[80px] mb-[1px]" />
                 <span className="text-white text-[24px] font-bold text-foreground">Trucks</span>
              </div>
            
          </Link>
            <p className="text-accent-foreground/80 text-sm leading-relaxed mt-3">
              Leading provider of heavy transport and logistics solutions. Delivering excellence in construction equipment rental and transport services.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-accent-foreground/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                "Tipper Trailer Service",
                "Flatbed Truck Service",
                "Container Truck Service",
              ].map((service) => (
                <li key={service}>
                  <span className="text-accent-foreground/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-accent-foreground/80 text-sm">
                  Karama-Dubai
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:+97143474781"
                  className="text-accent-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  +971 55 692 6211
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:info@nrmtrucks.com"
                  className="text-accent-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  info@nrmtrucks.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-accent-foreground/60 text-sm">
              © {currentYear} NRM Trucks. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-accent-foreground/60 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-accent-foreground/60 hover:text-primary text-sm transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
