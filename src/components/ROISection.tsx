import { motion } from "framer-motion";
import { Coins, Bomb, TrendingDown, Shield, FileCheck, Briefcase, BarChart } from "lucide-react";

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

        {/* Big Numbers - Visual Contrast */}
        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border border-primary/30 p-8 text-center relative overflow-hidden"
          >
            {/* Background icon */}
            <Coins className="absolute right-4 bottom-4 w-24 h-24 text-primary/10" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Coins className="w-8 h-8 text-primary" />
              </div>
              <div className="text-5xl lg:text-6xl font-bold text-primary mb-3">~$X00K</div>
              <p className="text-lg text-[hsl(210,20%,70%)] font-medium">Annual monitoring cost</p>
              <p className="text-sm text-[hsl(210,20%,55%)] mt-2">For 100 tailings sites globally</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-destructive/30 to-destructive/10 rounded-2xl border border-destructive/40 p-8 text-center relative overflow-hidden"
          >
            {/* Background icon */}
            <Bomb className="absolute right-4 bottom-4 w-24 h-24 text-destructive/10" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-destructive/20 flex items-center justify-center mx-auto mb-4">
                <Bomb className="w-8 h-8 text-destructive" />
              </div>
              <div className="text-5xl lg:text-6xl font-bold text-destructive mb-3">$7B+</div>
              <p className="text-lg text-[hsl(210,20%,70%)] font-medium">Single tailings failure</p>
              <p className="text-sm text-[hsl(210,20%,55%)] mt-2">Brumadinho: claims, cleanup, legal</p>
            </div>
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
            <div className="p-5 text-center border-l border-dark-border">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">With MineGuard</span>
              </div>
            </div>
            <div className="p-5 text-center border-l border-dark-border">
              <div className="flex items-center justify-center gap-2 mb-1">
                <TrendingDown className="w-4 h-4 text-destructive" />
                <span className="text-sm font-semibold text-destructive">Tailings Failure</span>
              </div>
            </div>
          </div>
          {[
            {
              row: "Direct cost impact",
              icon: Coins,
              monitor: "Low six figures/year",
              failure: "$7B+ in claims",
            },
            {
              row: "Board/regulator status",
              icon: FileCheck,
              monitor: "Proactive compliance",
              failure: "Reactive crisis mode",
            },
            {
              row: "Underwriting defensibility",
              icon: BarChart,
              monitor: "Data-driven decisions",
              failure: "Post-hoc justifications",
            },
            {
              row: "Loss ratio impact",
              icon: TrendingDown,
              monitor: "Potential improvement",
              failure: "Catastrophic spike",
            },
          ].map((item, i) => (
            <div
              key={item.row}
              className={`grid grid-cols-3 ${
                i < 3 ? "border-b border-dark-border" : ""
              }`}
            >
              <div className="p-5 flex items-center gap-3">
                <item.icon className="w-4 h-4 text-[hsl(210,20%,50%)]" />
                <span className="text-sm font-medium text-[hsl(210,20%,98%)]">
                  {item.row}
                </span>
              </div>
              <div className="p-5 text-sm text-primary text-center border-l border-dark-border bg-primary/5">
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
          className="bg-primary/5 rounded-2xl p-8 border border-primary/20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              For Investors
            </span>
          </div>
          <p className="text-lg text-[hsl(210,20%,85%)] max-w-3xl mx-auto text-center leading-relaxed">
            This is a <span className="text-primary font-semibold">software-margin business</span> built on 
            publicly available satellite data, selling into a concentrated set of high-budget buyers with 
            billion-dollar pain points. <span className="text-[hsl(210,20%,60%)]">High gross margins. Deep moats. Clear TAM.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
