import { motion } from "framer-motion";
import { Shield, Lock, Globe } from "lucide-react";

const logos = [
  "Global Insurer A",
  "Lloyd's Syndicate",
  "Mining Broker Co",
  "Risk Partners",
  "Continental Re",
  "Asset Protection Group",
];

const testimonials = [
  {
    quote:
      "MineGuard has transformed how we assess tailings risk. We now have confidence in our portfolio visibility.",
    author: "Head of Mining Risk",
    company: "Major Global Insurer",
    note: "Illustrative",
  },
  {
    quote:
      "Our clients appreciate the proactive monitoring story. It's a competitive advantage when placing mining risks.",
    author: "Senior Broker",
    company: "Global Insurance Broker",
    note: "Illustrative",
  },
];

export function TrustSection() {
  return (
    <section id="about" className="section-light py-20 lg:py-32">
      <div className="container-wide">
        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Trusted by leading insurers and brokers
          </p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {logos.map((logo) => (
              <div
                key={logo}
                className="px-6 py-3 bg-muted rounded-lg text-muted-foreground font-medium text-sm"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <p className="text-lg text-foreground mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  {testimonial.note}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security & Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-muted rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Security & Privacy</h4>
                <p className="text-sm text-muted-foreground">
                  No proprietary site data needed beyond locations. Uses publicly available
                  satellite imagery.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Data Protection</h4>
                <p className="text-sm text-muted-foreground">
                  Enterprise-grade security with SOC 2 Type II compliance and encrypted data
                  at rest and in transit.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Regulatory Alignment</h4>
                <p className="text-sm text-muted-foreground">
                  Aligned with emerging regulatory expectations for continuous monitoring and
                  ESG reporting.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
