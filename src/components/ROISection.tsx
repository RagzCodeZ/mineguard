import { motion } from "framer-motion";
import { DollarSign, TrendingDown, Shield, Briefcase } from "lucide-react";

export function ROISection() {
  return (
    <section className="section-dark py-20 lg:py-32">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-lg text-[hsl(210,20%,98%)] mb-6">
            A rounding error compared to one avoided loss
          </h2>
          <p className="body-lg text-[hsl(210,20%,70%)]">
            The economics are clear: continuous monitoring costs a fraction of what a single
            tailings failure can cost in claims, cleanup, and reputational damage.
          </p>
        </motion.div>

        {/* Big Numbers */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card-gradient rounded-2xl border border-dark-border p-8 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-7 h-7 text-primary" />
            </div>
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">~$X00K</div>
            <p className="text-[hsl(210,20%,60%)]">Annual monitoring for 100 sites</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card-gradient rounded-2xl border border-destructive/30 p-8 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-destructive/20 flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="w-7 h-7 text-destructive" />
            </div>
            <div className="text-4xl lg:text-5xl font-bold text-destructive mb-2">$7B+</div>
            <p className="text-[hsl(210,20%,60%)]">Single tailings failure cost (Brumadinho)</p>
          </motion.div>
        </div>

        {/* Comparison Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-card-gradient rounded-2xl border border-dark-border overflow-hidden mb-12"
        >
          <div className="grid grid-cols-3 border-b border-dark-border">
            <div className="p-5 text-sm font-semibold text-[hsl(210,20%,98%)]"></div>
            <div className="p-5 text-sm font-semibold text-[hsl(210,20%,60%)] text-center border-l border-dark-border">
              Annual Monitoring
            </div>
            <div className="p-5 text-sm font-semibold text-destructive text-center border-l border-dark-border">
              Tailings Failure
            </div>
          </div>
          {[
            { row: "Direct cost", monitor: "Low six figures", failure: "$7B+ in claims" },
            { row: "Board/regulator status", monitor: "Proactive compliance", failure: "Reactive crisis" },
            { row: "Underwriting defensibility", monitor: "Data-driven decisions", failure: "Post-hoc justifications" },
          ].map((item, i) => (
            <div
              key={item.row}
              className={`grid grid-cols-3 ${
                i < 2 ? "border-b border-dark-border" : ""
              }`}
            >
              <div className="p-5 text-sm font-medium text-[hsl(210,20%,98%)]">
                {item.row}
              </div>
              <div className="p-5 text-sm text-primary text-center border-l border-dark-border">
                {item.monitor}
              </div>
              <div className="p-5 text-sm text-[hsl(210,20%,60%)] text-center border-l border-dark-border">
                {item.failure}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Investor callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-primary/5 rounded-2xl p-8 border border-primary/20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              For Investors
            </span>
          </div>
          <p className="text-lg text-[hsl(210,20%,85%)] max-w-2xl mx-auto">
            This is a software margin business built on publicly available satellite data,
            selling into a concentrated set of high-budget buyers with billion-dollar pain points.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
