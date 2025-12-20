import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useDemo } from "@/contexts/DemoContext";

const navLinks = [
  { name: "Product", href: "#product" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Case Study", href: "#case-study" },
  { name: "For Insurers", href: "#for-insurers" },
  { name: "For Brokers", href: "#for-brokers" },
  { name: "About", href: "#about" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openDemo } = useDemo();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/90 backdrop-blur-xl border-b border-dark-border">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold text-[hsl(210,20%,98%)]">MineGuard</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[hsl(210,20%,75%)] hover:text-[hsl(210,20%,98%)] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="nav" size="default" onClick={openDemo}>
              Book a demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[hsl(210,20%,75%)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-bg border-t border-dark-border"
          >
            <div className="container-wide py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-base font-medium text-[hsl(210,20%,75%)] hover:text-[hsl(210,20%,98%)] transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="hero" size="lg" className="w-full mt-4" onClick={() => { setMobileMenuOpen(false); openDemo(); }}>
                Book a demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
