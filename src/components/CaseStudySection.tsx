import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, Leaf, Droplets, Mountain, Clock, Skull, DollarSign, Scale, ShieldAlert } from "lucide-react";
import { useDemo } from "@/contexts/DemoContext";

const timeline = [
  {
    time: "6 months before failure",
    description: "Subtle vegetation stress appears on the downstream slope (NDVI down ~5–7% compared to historical baseline). On its own, this is a yellow flag.",
    status: "warning",
    icon: Leaf,
    riskLevel: "YELLOW",
  },
  {
    time: "4 months before failure",
    description: "Vegetation stress spreads and deepens (NDVI down >10%). Small but growing water pooling signatures appear at the toe of the dam (NDWI up ~15%). MineGuard raises the site to MEDIUM risk.",
    status: "warning",
    icon: Droplets,
    riskLevel: "ORANGE",
  },
  {
    time: "8 weeks before failure",
    description: "Interferometric SAR shows consistent millimeter-scale ground movement on the downstream face. Movement is trending upward each 5-day pass. MineGuard moves the risk score into ORANGE.",
    status: "elevated",
    icon: Mountain,
    riskLevel: "ORANGE",
  },
  {
    time: "4 weeks before failure",
    description: "Combined signals—accelerating movement, expanding water pooling, and persistent vegetation die-off—push the risk score into RED. Critical alerts go to the insurer's risk team and the operator's senior engineer.",
    status: "critical",
    icon: AlertTriangle,
    riskLevel: "RED",
  },
  {
    time: "1–2 weeks before failure",
    description: "If MineGuard is in place, the insurer has a documented trail: RED risk score, specific technical signals, and recommended actions. At this point, cover can be re-evaluated, capacity reduced, or urgent remediation demanded.",
    status: "critical",
    icon: ShieldAlert,
    riskLevel: "RED",
  },
  {
    time: "Day of failure",
    actual: "In reality: the dam fails without formal early warning; 272 people die and more than $7B in compensation and costs follow.",
    alternative: "With MineGuard: the failure risk is known weeks ahead. Insurer can insist on evacuation, emergency engineering intervention, or change in cover. The catastrophe is either prevented or its impact dramatically reduced.",
    status: "failure",
    icon: Clock,
    riskLevel: "FAILURE",
  },
];

const impactPoints = [
  { icon: Skull, text: "272 lives at stake." },
  { icon: DollarSign, text: ">$7B in compensation, cleanup, and legal exposure for operators and insurers combined." },
  { icon: Scale, text: "Regulators and courts now expect that this kind of risk can be seen." },
  { icon: ShieldAlert, text: "MineGuard exists so insurers never have to say 'we didn't see it coming' again." },
];

export function CaseStudySection() {
  const { openDemo } = useDemo();

  return (
    <section id="case-study" className="section-dark py-20 lg:py-32">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/20 text-destructive text-sm font-medium mb-4">
              <AlertTriangle className="w-4 h-4" />
              Case Study
            </span>
            <h2 className="heading-lg text-[hsl(210,20%,98%)] mb-4">
              How MineGuard would have changed Brumadinho
            </h2>
            <p className="body-lg text-[hsl(210,20%,70%)] max-w-3xl mx-auto">
              A 6-month deterioration, a $7B+ loss, and how weeks of warning could have rewritten the story.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Timeline Column */}
            <div className="lg:col-span-2">
              <div className="relative">
                {/* Vertical gradient line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-alert-yellow via-alert-orange to-alert-red" />
                
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.time}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative pl-16"
                    >
                      {/* Icon */}
                      <div
                        className={`absolute left-0 w-12 h-12 rounded-full flex items-center justify-center ${
                          item.status === "warning"
                            ? "bg-alert-yellow/20 text-alert-yellow"
                            : item.status === "elevated"
                            ? "bg-alert-orange/20 text-alert-orange"
                            : item.status === "critical"
                            ? "bg-alert-red/20 text-alert-red"
                            : "bg-destructive/30 text-destructive"
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                      </div>

                      <div
                        className={`bg-card-gradient rounded-xl p-5 border ${
                          item.status === "failure"
                            ? "border-destructive/30"
                            : "border-dark-border"
                        }`}
                      >
                        <div className="flex items-center flex-wrap gap-3 mb-3">
                          <span
                            className={`text-sm font-bold ${
                              item.status === "warning"
                                ? "text-alert-yellow"
                                : item.status === "elevated"
                                ? "text-alert-orange"
                                : item.status === "critical"
                                ? "text-alert-red"
                                : "text-destructive"
                            }`}
                          >
                            {item.time}
                          </span>
                          {item.riskLevel !== "FAILURE" && (
                            <span
                              className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                                item.riskLevel === "YELLOW"
                                  ? "risk-low"
                                  : item.riskLevel === "ORANGE"
                                  ? "risk-medium"
                                  : "risk-high"
                              }`}
                            >
                              {item.riskLevel}
                            </span>
                          )}
                        </div>
                        
                        {item.status === "failure" ? (
                          <div className="space-y-4">
                            <div className="bg-destructive/10 rounded-lg p-4 border border-destructive/20">
                              <p className="text-xs font-semibold text-destructive mb-1">ACTUAL OUTCOME</p>
                              <p className="text-[hsl(210,20%,70%)] text-sm">{item.actual}</p>
                            </div>
                            <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                              <p className="text-xs font-semibold text-primary mb-1">WITH MINEGUARD</p>
                              <p className="text-[hsl(210,20%,80%)] text-sm">{item.alternative}</p>
                            </div>
                          </div>
                        ) : (
                          <p className="text-[hsl(210,20%,80%)] text-sm leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Impact Callout Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:sticky lg:top-24 self-start"
            >
              <div className="bg-gradient-to-br from-destructive/20 to-destructive/5 rounded-2xl p-6 border border-destructive/30">
                <h3 className="text-lg font-bold text-[hsl(210,20%,98%)] mb-6">
                  The Human & Financial Cost
                </h3>
                <div className="space-y-4">
                  {impactPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-destructive/20 flex items-center justify-center shrink-0">
                        <point.icon className="w-4 h-4 text-destructive" />
                      </div>
                      <p className="text-sm text-[hsl(210,20%,80%)] leading-relaxed">{point.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Box */}
              <div className="mt-6 bg-card-gradient rounded-2xl p-6 border border-dark-border">
                <p className="text-sm text-[hsl(210,20%,70%)] mb-4">
                  We'll show you a simulated Brumadinho timeline using the same data sources MineGuard analyzes.
                </p>
                <Button variant="hero" size="lg" className="w-full group" onClick={openDemo}>
                  Walk through this scenario in a live demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
