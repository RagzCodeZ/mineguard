import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, Clock, CheckCircle2, XCircle } from "lucide-react";

const timeline = [
  {
    time: "T-6 months",
    event: "Vegetation stress and subtle movement start.",
    status: "detected",
  },
  {
    time: "T-3 months",
    event: "Surface movement crosses alert threshold.",
    status: "warning",
  },
  {
    time: "T-4 weeks",
    event: "Combined risk score hits RED, triggering critical alerts.",
    status: "critical",
  },
  {
    time: "T-0",
    event: "In reality, the dam failed, 272 people died, and more than $7B was paid.",
    status: "failure",
  },
];

export function CaseStudySection() {
  return (
    <section id="case-study" className="section-dark py-20 lg:py-32">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/20 text-destructive text-sm font-medium mb-4">
              <AlertTriangle className="w-4 h-4" />
              Case Study
            </span>
            <h2 className="heading-lg text-[hsl(210,20%,98%)] mb-6">
              If MineGuard had been watching Brumadinho
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative mb-12">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-alert-orange to-alert-red" />
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative pl-16"
                >
                  {/* Icon */}
                  <div
                    className={`absolute left-0 w-12 h-12 rounded-full flex items-center justify-center ${
                      item.status === "detected"
                        ? "bg-primary/20 text-primary"
                        : item.status === "warning"
                        ? "bg-alert-orange/20 text-alert-orange"
                        : item.status === "critical"
                        ? "bg-alert-red/20 text-alert-red"
                        : "bg-destructive/30 text-destructive"
                    }`}
                  >
                    {item.status === "failure" ? (
                      <XCircle className="w-6 h-6" />
                    ) : item.status === "critical" ? (
                      <AlertTriangle className="w-6 h-6" />
                    ) : (
                      <Clock className="w-6 h-6" />
                    )}
                  </div>

                  <div
                    className={`bg-card-gradient rounded-xl p-5 border ${
                      item.status === "failure"
                        ? "border-destructive/30"
                        : "border-dark-border"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`text-sm font-bold ${
                          item.status === "detected"
                            ? "text-primary"
                            : item.status === "warning"
                            ? "text-alert-orange"
                            : item.status === "critical"
                            ? "text-alert-red"
                            : "text-destructive"
                        }`}
                      >
                        {item.time}
                      </span>
                      {item.status !== "failure" && (
                        <span className="flex items-center gap-1 text-xs text-primary">
                          <CheckCircle2 className="w-3 h-3" />
                          MineGuard detected
                        </span>
                      )}
                    </div>
                    <p
                      className={`${
                        item.status === "failure"
                          ? "text-[hsl(210,20%,70%)]"
                          : "text-[hsl(210,20%,85%)]"
                      }`}
                    >
                      {item.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="body-lg text-[hsl(210,20%,70%)] mb-8 max-w-2xl mx-auto">
              MineGuard exists to make this kind of surprise unacceptable. It's about
              weeks of warning, not days of regret.
            </p>
            <Button variant="hero" size="lg" className="group">
              Walk through the full case study
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
