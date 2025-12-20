import { motion } from "framer-motion";
import { MapPin, AlertTriangle, TrendingUp, Shield, Eye, Clock, ArrowRight } from "lucide-react";

const whatHappened = [
  "In March 2018, part of the northern tailings dam wall at the Cadia gold and copper mine in New South Wales slumped and failed.",
  "Newcrest was forced to suspend mining and processing while the dam was stabilised and investigated.",
  "An independent technical review board later concluded that a hidden weak, low-density foundation layer beneath the dam, the height of the structure, groundwater conditions, and excavation at the toe all contributed to the failure.",
  "Most of the tailings stayed in place, so there was no Brumadinho-style mudflow, but the incident was serious enough to shut down operations, trigger remediation, and raise long-running concerns among nearby residents about dust and tailings safety.",
];

const timeline = [
  { time: "Before 2018", text: "Dam operating normally." },
  { time: "March 2018", text: "Section of wall slumps, operations halted." },
  { time: "After 2018", text: "Investigations, reinforcement, and ongoing monitoring obligations." },
];

const mineGuardBenefits = [
  {
    icon: Eye,
    text: "Regular satellite passes over Cadia's tailings dam would have tracked subtle ground deformation as the weak foundation layer began to move, instead of waiting for a visible slump.",
  },
  {
    icon: TrendingUp,
    text: "MineGuard's risk score for the dam would have moved gradually from green to yellow to orange as deformation trends emerged, prompting targeted inspections earlier.",
  },
  {
    icon: Clock,
    text: "Rather than discovering the problem only when the wall slumped and production had to stop, the operator and its insurers could have seen the warning pattern weeks or months before and planned staged reinforcement.",
  },
  {
    icon: Shield,
    text: "Outcome: reduced risk of sudden wall failure, shorter or avoided shutdown, lower remediation costs, and a stronger safety story for regulators and nearby residents.",
  },
];

export function CadiaSection() {
  return (
    <section className="section-dark py-20 lg:py-32 border-t border-[hsl(var(--dark-border))]">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(var(--alert-orange))]/20 text-[hsl(var(--alert-orange))] text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" />
              Australian Case Study
            </span>
            <h2 className="heading-lg text-[hsl(210,20%,98%)] mb-4">
              Australia's warning shot: Cadia tailings dam failure (NSW, 2018)
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - What Happened */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card-gradient rounded-2xl p-6 lg:p-8 border border-[hsl(var(--dark-border))]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[hsl(var(--alert-orange))]/20 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-[hsl(var(--alert-orange))]" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(210,20%,98%)]">What happened at Cadia</h3>
              </div>

              <div className="space-y-4 mb-8">
                {whatHappened.map((item, index) => (
                  <p key={index} className="text-sm text-[hsl(210,20%,75%)] leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>

              {/* Mini Timeline */}
              <div className="border-t border-[hsl(var(--dark-border))] pt-6">
                <p className="text-xs font-semibold text-[hsl(210,20%,50%)] uppercase tracking-wide mb-4">
                  Timeline
                </p>
                <div className="space-y-3">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[hsl(var(--alert-orange))] mt-1.5 shrink-0" />
                      <div>
                        <span className="text-xs font-semibold text-[hsl(var(--alert-orange))]">
                          {item.time}:
                        </span>
                        <span className="text-xs text-[hsl(210,20%,70%)] ml-1">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - MineGuard Would Have */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 lg:p-8 border border-primary/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(210,20%,98%)]">
                  What MineGuard would have done
                </h3>
              </div>

              <div className="space-y-5">
                {mineGuardBenefits.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-sm text-[hsl(210,20%,80%)] leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Comparison Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 bg-[hsl(var(--dark-bg))] rounded-2xl p-6 lg:p-8 border border-[hsl(var(--dark-border))]"
          >
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[hsl(var(--alert-red))] mt-1.5 shrink-0" />
                <p className="text-sm text-[hsl(210,20%,80%)]">
                  <span className="font-semibold text-[hsl(var(--alert-red))]">Brumadinho</span> shows
                  what happens when a tailings failure runs to completion – hundreds of lives lost and
                  more than $7B in damage.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[hsl(var(--alert-orange))] mt-1.5 shrink-0" />
                <p className="text-sm text-[hsl(210,20%,80%)]">
                  <span className="font-semibold text-[hsl(var(--alert-orange))]">Cadia</span> shows how
                  close Australian mines already are to similar failures, and why continuous,
                  satellite-based monitoring is critical here at home.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
