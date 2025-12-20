import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { useDemo } from "@/contexts/DemoContext";

const footerLinks = {
  product: [
    { name: "Product", href: "#product" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Case Study", href: "#case-study" },
  ],
  audience: [
    { name: "For Insurers", href: "#for-insurers" },
    { name: "For Brokers", href: "#for-brokers" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ],
};

export function Footer() {
  const { openDemo } = useDemo();

  return (
    <footer className="section-light">
      {/* Final CTA */}
      <div className="container-wide py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="heading-lg text-foreground mb-6">
            Ready to see your mining risk in real time?
          </h2>
          <p className="body-lg text-muted-foreground mb-10">
            Join leading insurers who are moving from reactive claims to proactive risk management.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="group" onClick={openDemo}>
              Book a demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" onClick={openDemo}>
              Request an investor overview
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Footer Links */}
      <div id="contact" className="bg-dark-bg border-t border-dark-border">
        <div className="container-wide py-16">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Logo & Tagline */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">M</span>
                </div>
                <span className="text-xl font-bold text-[hsl(210,20%,98%)]">MineGuard</span>
              </div>
              <p className="text-[hsl(210,20%,60%)] mb-6 max-w-sm">
                AI-powered satellite monitoring for mining infrastructure risk.
                Built for insurers and brokers.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="mailto:hello@mineguard.ai"
                  className="flex items-center gap-2 text-sm text-[hsl(210,20%,60%)] hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@mineguard.ai
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-[hsl(210,20%,60%)] hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold text-[hsl(210,20%,98%)] mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-[hsl(210,20%,60%)] hover:text-[hsl(210,20%,90%)] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Audience Links */}
            <div>
              <h4 className="font-semibold text-[hsl(210,20%,98%)] mb-4">Solutions</h4>
              <ul className="space-y-3">
                {footerLinks.audience.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-[hsl(210,20%,60%)] hover:text-[hsl(210,20%,90%)] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-[hsl(210,20%,98%)] mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-[hsl(210,20%,60%)] hover:text-[hsl(210,20%,90%)] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[hsl(210,20%,50%)]">
              © 2024 MineGuard. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-[hsl(210,20%,50%)] hover:text-[hsl(210,20%,70%)] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-[hsl(210,20%,50%)] hover:text-[hsl(210,20%,70%)] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
