import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerSections = [
    {
      title: "Shop",
      links: ["All Products", "New Arrivals", "Sale", "Categories", "Brands"]
    },
    {
      title: "Customer Service",
      links: ["Contact Us", "FAQ", "Shipping Info", "Returns", "Size Guide"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Blog", "Sustainability"]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">LuxeStore</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Your destination for premium products and exceptional shopping experiences. 
              Quality, style, and service in every purchase.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-accent" />
                <span>hello@luxestore.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-accent" />
                <span>123 Shopping St, City, State 12345</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <p className="text-primary-foreground/80 text-sm">
                Subscribe to get special offers, free giveaways, and exclusive deals.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-accent"
              />
              <Button variant="accent">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-primary-foreground/80 text-sm">
              © 2024 LuxeStore. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-primary-foreground/80">Follow us:</span>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/10"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;