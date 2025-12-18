import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building2, Users, Check, ArrowRight } from "lucide-react";

const insurerBenefits = [
  "Price tailings risk with data, not assumptions.",
  "Justify decisions to committees and regulators with continuous monitoring evidence.",
  "Focus engineering inspections on the 5–10% of assets where risk is actually rising.",
  "Improve reserve accuracy with real-time portfolio visibility.",
];

const brokerBenefits = [
  "Help clients document proactive risk management.",
  "Unlock potential for more favorable terms with better risk data.",
  "Differentiate your brokerage with a tangible, tech-driven value add.",
  "Build deeper client relationships through ongoing risk insights.",
];

const comparisonTable = [
  {
    aspect: "Data freshness",
    without: "Annual reports (300+ days old)",
    with: "Every 5 days",
  },
  {
    aspect: "Portfolio visibility",
    without: "Spreadsheets & PDFs",
    with: "Real-time dashboard",
  },
  {
    aspect: "Surprise events",
    without: "Reactive claims handling",
    with: "Early warning alerts",
  },
  {
    aspect: "Regulatory story",
    without: "Point-in-time compliance",
    with: "Continuous monitoring proof",
  },
];

export function AudienceSection() {
  return (
    <section className="section-light py-20 lg:py-32">
      {/* For Insurers */}
      <div id="for-insurers" className="container-wide mb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                For Insurers
              </span>
            </div>
            <h2 className="heading-lg text-foreground mb-6">
              Designed for mining underwriters and CROs
            </h2>
            <ul className="space-y-4 mb-8">
              {insurerBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
            <Button variant="hero" size="lg" className="group">
              Learn more for insurers
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Comparison Table */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 border-b border-border">
                <div className="p-4 text-sm font-semibold text-foreground">Aspect</div>
                <div className="p-4 text-sm font-semibold text-destructive bg-destructive/5 border-l border-border">
                  Without MineGuard
                </div>
                <div className="p-4 text-sm font-semibold text-primary bg-primary/5 border-l border-border">
                  With MineGuard
                </div>
              </div>
              {comparisonTable.map((row, i) => (
                <div
                  key={row.aspect}
                  className={`grid grid-cols-3 ${
                    i < comparisonTable.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="p-4 text-sm font-medium text-foreground">
                    {row.aspect}
                  </div>
                  <div className="p-4 text-sm text-muted-foreground bg-destructive/5 border-l border-border">
                    {row.without}
                  </div>
                  <div className="p-4 text-sm text-foreground bg-primary/5 border-l border-border font-medium">
                    {row.with}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* For Brokers */}
      <div id="for-brokers" className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:order-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                For Brokers
              </span>
            </div>
            <h2 className="heading-lg text-foreground mb-6">
              Give your mining clients a story underwriters want to hear
            </h2>
            <ul className="space-y-4 mb-8">
              {brokerBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
            <Button variant="hero" size="lg" className="group">
              Learn more for brokers
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:order-1"
          >
            <div className="bg-card-gradient rounded-2xl border border-dark-border p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(210,20%,98%)]">
                  Broker Dashboard
                </h3>
                <p className="text-sm text-[hsl(210,20%,60%)]">Client portfolio overview</p>
              </div>
              <div className="space-y-3">
                {[
                  { client: "Mining Corp A", sites: 12, risk: "Low" },
                  { client: "Resource Ltd", sites: 8, risk: "Medium" },
                  { client: "Global Mining", sites: 23, risk: "Low" },
                ].map((client) => (
                  <div
                    key={client.client}
                    className="flex items-center justify-between bg-dark-bg rounded-lg p-4"
                  >
                    <div>
                      <p className="text-sm font-medium text-[hsl(210,20%,98%)]">
                        {client.client}
                      </p>
                      <p className="text-xs text-[hsl(210,20%,50%)]">
                        {client.sites} monitored sites
                      </p>
                    </div>
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        client.risk === "Low"
                          ? "risk-safe"
                          : client.risk === "Medium"
                          ? "risk-low"
                          : "risk-high"
                      }`}
                    >
                      {client.risk}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
