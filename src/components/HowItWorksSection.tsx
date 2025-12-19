import { motion } from "framer-motion";
import { Satellite, Scan, BarChart3, Bell, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Satellite,
    title: "Observe",
    description:
      "Sentinel-1 and Sentinel-2 satellites pass over each site every few days, capturing radar and optical imagery.",
  },
  {
    icon: Scan,
    title: "Detect signals",
    description:
      "MineGuard detects surface movement, water pooling, crack patterns, vegetation die-off, and oxidation signatures.",
  },
  {
    icon: BarChart3,
    title: "Score risk",
    description:
      "Signals combine into a 1–100 site risk score with clear green/yellow/orange/red bands for portfolio triage.",
  },
  {
    icon: Bell,
    title: "Alert & act",
    description:
      "Underwriters, risk teams, and operators receive alerts and can act before failure—weeks, not days.",
  },
];

const benefits = [
  { text: "Better pricing and reserves.", icon: TrendingUp },
  { text: "Fewer surprise losses.", icon: BarChart3 },
  { text: "Defensible monitoring story for regulators and boards.", icon: Bell },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-dark py-20 lg:py-32">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-lg text-[hsl(210,20%,98%)] mb-6">
            From raw satellite pixels to a single risk score
          </h2>
          <p className="body-lg text-[hsl(210,20%,70%)]">
            Our AI processes terabytes of satellite imagery to surface what matters most:
            actionable risk insights for your portfolio.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-card-gradient rounded-2xl p-6 border border-dark-border h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[hsl(210,20%,98%)] mb-2">
                  {step.title}
                </h3>
                <p className="text-[hsl(210,20%,70%)] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-primary/30" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Why This Matters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary/5 rounded-2xl p-8 border border-primary/20"
        >
          <h3 className="text-xl font-semibold text-[hsl(210,20%,98%)] mb-6">
            Why this matters for your portfolio
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 mb-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-[hsl(210,20%,80%)]">{benefit.text}</span>
              </div>
            ))}
          </div>
          {/* Investor note */}
          <div className="pt-6 border-t border-primary/20">
            <p className="text-sm text-[hsl(210,20%,60%)] italic text-center">
              All built on low-cost, public satellite data and software margins—a highly scalable infrastructure analytics business.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
