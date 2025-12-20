import { motion } from "framer-motion";
import { Download, ArrowRight, Filter } from "lucide-react";
import { MineMap } from "./MineMap";

const siteList = [
  { name: "Brumadinho Dam", score: 85, level: "HIGH", color: "red" },
  { name: "Samarco", score: 74, level: "HIGH", color: "red" },
  { name: "Mount Polley", score: 68, level: "MEDIUM", color: "orange" },
  { name: "Oyu Tolgoi", score: 42, level: "MEDIUM", color: "yellow" },
  { name: "Olympic Dam", score: 28, level: "LOW", color: "green" },
  { name: "Escondida", score: 22, level: "LOW", color: "green" },
];

const trendData = [
  { week: 1, score: 22, annotation: null },
  { week: 2, score: 25, annotation: null },
  { week: 3, score: 28, annotation: null },
  { week: 4, score: 32, annotation: null },
  { week: 5, score: 38, annotation: null },
  { week: 6, score: 45, annotation: "Vegetation stress begins" },
  { week: 7, score: 52, annotation: null },
  { week: 8, score: 58, annotation: null },
  { week: 9, score: 68, annotation: "New water pooling detected" },
  { week: 10, score: 75, annotation: null },
  { week: 11, score: 80, annotation: null },
  { week: 12, score: 85, annotation: "Ground deformation spikes" },
];

const alerts = [
  {
    severity: "HIGH",
    message: "Ground deformation exceeded 10mm in 5 days",
    site: "Brumadinho Dam",
    time: "3 days ago",
    color: "red",
  },
  {
    severity: "MEDIUM",
    message: "New water pooling detected near south wall",
    site: "Site #204",
    time: "5 days ago",
    color: "orange",
  },
  {
    severity: "LOW",
    message: "NDVI drop near perimeter vegetation",
    site: "Mount Polley",
    time: "1 week ago",
    color: "yellow",
  },
  {
    severity: "HIGH",
    message: "Surface crack pattern expansion detected",
    site: "Samarco",
    time: "1 week ago",
    color: "red",
  },
];

const productModules = [
  {
    title: "Site Risk Trend",
    caption: "Understand what's driving risk at a specific tailings dam over time.",
    content: (
      <div className="bg-dark-bg rounded-xl p-4 h-72">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-[10px] text-[hsl(210,20%,50%)]">BRUMADINHO DAM</p>
            <p className="text-sm font-semibold text-[hsl(210,20%,98%)]">12-Week Risk Trend</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-alert-red">85</div>
            <span className="text-[8px] px-1.5 py-0.5 rounded risk-high">HIGH</span>
          </div>
        </div>

        {/* Chart */}
        <div className="relative h-40 mt-4">
          {/* Threshold lines */}
          <div className="absolute left-8 right-0 top-[30%] border-t border-dashed border-alert-red/40" />
          <div className="absolute left-0 top-[30%] text-[8px] text-alert-red/60">70</div>
          <div className="absolute left-8 right-0 top-[60%] border-t border-dashed border-alert-yellow/40" />
          <div className="absolute left-0 top-[60%] text-[8px] text-alert-yellow/60">40</div>
          
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 text-[8px] text-[hsl(210,20%,50%)]">100</div>
          <div className="absolute left-0 bottom-0 text-[8px] text-[hsl(210,20%,50%)]">0</div>

          {/* Line chart */}
          <svg className="absolute left-8 right-0 top-0 bottom-0 h-full w-[calc(100%-2rem)]" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(48, 96%, 53%)" />
                <stop offset="50%" stopColor="hsl(25, 95%, 53%)" />
                <stop offset="100%" stopColor="hsl(0, 84%, 60%)" />
              </linearGradient>
            </defs>
            <polyline
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              points={trendData
                .map((d, i) => `${(i / 11) * 100}%,${100 - d.score}%`)
                .join(" ")}
            />
            {/* Data points */}
            {trendData.map((d, i) => (
              <circle
                key={i}
                cx={`${(i / 11) * 100}%`}
                cy={`${100 - d.score}%`}
                r="3"
                fill={d.score > 70 ? "hsl(0, 84%, 60%)" : d.score > 40 ? "hsl(25, 95%, 53%)" : "hsl(48, 96%, 53%)"}
              />
            ))}
          </svg>

          {/* Annotations */}
          {trendData.filter(d => d.annotation).map((d, i) => (
            <div
              key={i}
              className="absolute text-[7px] text-[hsl(210,20%,60%)] bg-dark-card/90 px-1 py-0.5 rounded whitespace-nowrap"
              style={{
                left: `calc(2rem + ${((d.week - 1) / 11) * (100 - 2)}%)`,
                top: `calc(${100 - d.score - 12}%)`,
                transform: "translateX(-50%)",
              }}
            >
              {d.annotation}
            </div>
          ))}
        </div>

        {/* X-axis labels */}
        <div className="flex justify-between pl-8 mt-1">
          {[1, 4, 8, 12].map((week) => (
            <span key={week} className="text-[8px] text-[hsl(210,20%,50%)]">Week {week}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Alert Feed",
    caption: "Deliver a continuous stream of actionable alerts to underwriting and risk teams.",
    content: (
      <div className="bg-dark-bg rounded-xl p-4 h-72">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-alert-green animate-pulse" />
            <p className="text-[10px] text-[hsl(210,20%,50%)]">LIVE ALERTS</p>
          </div>
          <button className="flex items-center gap-1 text-[10px] text-primary hover:text-primary/80">
            <Download className="w-3 h-3" />
            Export CSV
          </button>
        </div>
        <div className="space-y-2">
          {alerts.map((alert, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-dark-card rounded-lg p-3 border-l-2"
              style={{
                borderLeftColor:
                  alert.color === "red"
                    ? "hsl(0, 84%, 60%)"
                    : alert.color === "orange"
                    ? "hsl(25, 95%, 53%)"
                    : "hsl(48, 96%, 53%)",
              }}
            >
              <span
                className={`text-[8px] px-1.5 py-0.5 rounded font-bold ${
                  alert.color === "red"
                    ? "risk-high"
                    : alert.color === "orange"
                    ? "risk-medium"
                    : "risk-low"
                }`}
              >
                {alert.severity}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-medium text-[hsl(210,20%,98%)] leading-tight">
                  {alert.message}
                </p>
                <p className="text-[9px] text-[hsl(210,20%,50%)] mt-0.5">{alert.site}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-[8px] text-[hsl(210,20%,50%)]">{alert.time}</span>
                <button className="text-[8px] text-primary hover:underline flex items-center gap-0.5">
                  View <ArrowRight className="w-2 h-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export function ProductSection() {
  return (
    <section id="product" className="section-light py-20 lg:py-32">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-lg text-foreground mb-6">
            What MineGuard looks like in your hands
          </h2>
          <p className="body-lg text-muted-foreground">
            A purpose-built interface for mining insurance professionals—designed for
            portfolio visibility, not geological deep-dives.
          </p>
        </motion.div>

        {/* Full-width Portfolio Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-card-gradient rounded-2xl border border-dark-border overflow-hidden">
            <MineMap />
            <div className="p-6 border-t border-dark-border">
              <h3 className="text-lg font-semibold text-[hsl(210,20%,98%)] mb-2">
                Portfolio Map View
              </h3>
              <p className="text-sm text-[hsl(210,20%,70%)]">
                Instantly see which dams in your global portfolio deserve attention today. Click any pin for detailed risk analysis.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Two-column layout for other modules */}
        <div className="grid lg:grid-cols-2 gap-6">
          {productModules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card-gradient rounded-2xl border border-dark-border overflow-hidden"
            >
              {module.content}
              <div className="p-6 border-t border-dark-border">
                <h3 className="text-lg font-semibold text-[hsl(210,20%,98%)] mb-2">
                  {module.title}
                </h3>
                <p className="text-sm text-[hsl(210,20%,70%)]">{module.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
