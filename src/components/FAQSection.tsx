import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Does this replace on-site engineering inspections?",
    answer:
      "No. MineGuard complements on-site inspections by providing continuous monitoring between visits. Our satellite-based system identifies where to focus inspection resources and catches changes that emerge between scheduled visits. Think of it as always-on visibility that makes your engineering reviews more targeted and effective.",
  },
  {
    question: "How accurate is the system and how are false positives handled?",
    answer:
      "Our models are trained on historical data from known failures and extensive geotechnical research. We calibrate thresholds to minimize false positives while catching real risk signals early. When the system flags an alert, it provides supporting evidence (imagery, trends, contributing factors) so your team can quickly assess significance. We continuously refine our models based on feedback.",
  },
  {
    question: "What data do we need to provide to start?",
    answer:
      "Just the geographic coordinates of your tailings facilities. MineGuard handles the rest—we source satellite imagery, process it through our AI, and deliver risk scores. No proprietary engineering data or internal reports required. Onboarding is designed to be as frictionless as possible.",
  },
  {
    question: "How quickly can we onboard a portfolio?",
    answer:
      "A typical portfolio can be onboarded within 2-4 weeks, depending on the number of sites and data quality of site coordinates. Once onboarded, you'll begin receiving risk scores and alerts within the first satellite pass cycle (typically 5-10 days).",
  },
  {
    question: "Can this integrate with existing underwriting platforms?",
    answer:
      "Yes. MineGuard provides API access and standard data exports (CSV, JSON) that integrate with common underwriting and risk management systems. We can also discuss custom integrations for enterprise deployments.",
  },
  {
    question: "What geographies and mine types can you monitor?",
    answer:
      "MineGuard can monitor tailings facilities anywhere on Earth where Sentinel satellites provide coverage—which includes virtually all global mining regions. We support monitoring of conventional tailings dams, dry stack facilities, and other mine infrastructure. Coverage includes active and inactive sites.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Pricing is based on the number of sites monitored and the level of service (standard monitoring vs. enhanced monitoring with more frequent passes and deeper analysis). Contact us for a custom quote based on your portfolio size and requirements.",
  },
  {
    question: "Who built MineGuard and what's the technical foundation?",
    answer:
      "MineGuard was built by a team with deep expertise in satellite remote sensing, machine learning, and mining industry risk. Our platform leverages Sentinel-1 (radar) and Sentinel-2 (optical) satellite data from the European Space Agency, processed through proprietary AI models trained on geotechnical research and historical failure patterns.",
  },
];

export function FAQSection() {
  return (
    <section className="section-dark py-20 lg:py-32">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="heading-lg text-[hsl(210,20%,98%)] mb-4">
            Frequently asked questions
          </h2>
          <p className="body-md text-[hsl(210,20%,70%)]">
            Everything you need to know about MineGuard
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card-gradient rounded-xl border border-dark-border px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-[hsl(210,20%,98%)] hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(210,20%,70%)] pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
