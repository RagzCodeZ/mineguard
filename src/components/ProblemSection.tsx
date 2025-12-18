import { motion } from "framer-motion";
import { Eye, AlertOctagon, ShieldOff } from "lucide-react";

const problemCards = [
  {
    icon: Eye,
    title: "300+ days of invisibility",
    description:
      "Between annual inspections, slow structural changes go unseen. By the time you know a dam is failing, it often already has.",
  },
  {
    icon: AlertOctagon,
    title: "Surprise billion-dollar claims",
    description:
      "Tailings dam failures can instantly trigger multi-billion dollar claims, reputational damage, and regulatory scrutiny.",
  },
  {
    icon: ShieldOff,
    title: "No continuous accountability",
    description:
      "Boards and regulators now expect continuous oversight. Annual PDFs are not enough.",
  },
];

export function ProblemSection() {
  return (
    <section className="section-light py-20 lg:py-32">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-lg text-foreground mb-6">
            Why insurers are flying blind
          </h2>
          <p className="body-lg text-muted-foreground">
            Insurance portfolios are priced on 300-day-old data. Insurers hold{" "}
            <span className="font-semibold text-foreground">$200B+ in mining liability</span>{" "}
            while relying on annual reports that are outdated when a dam fails. The Brumadinho
            collapse led to{" "}
            <span className="font-semibold text-destructive">$7B+ in losses</span> and 272 deaths.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problemCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="heading-sm text-foreground mb-3">{card.title}</h3>
              <p className="body-md text-muted-foreground">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
