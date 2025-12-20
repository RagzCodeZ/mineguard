import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Droplets, Mountain } from "lucide-react";
import { motion } from "framer-motion";
import { useDemo } from "@/contexts/DemoContext";

const sitePins = [
  { id: 1, x: "18%", y: "35%", color: "green", name: "Oyu Tolgoi" },
  { id: 2, x: "75%", y: "28%", color: "green", name: "Grasberg" },
  { id: 3, x: "45%", y: "55%", color: "yellow", name: "Mount Polley" },
  { id: 4, x: "28%", y: "62%", color: "red", name: "Brumadinho", pulse: true },
  { id: 5, x: "55%", y: "42%", color: "yellow", name: "Samarco" },
  { id: 6, x: "82%", y: "58%", color: "green", name: "Olympic Dam" },
  { id: 7, x: "38%", y: "25%", color: "green", name: "Escondida" },
  { id: 8, x: "62%", y: "68%", color: "red", name: "Site #204", pulse: true },
];

export function HeroSection() {
  const { openDemo } = useDemo();

  return (
    <section className="section-dark min-h-screen pt-20 lg:pt-28 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dark-gradient" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-wide relative z-10 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-xl text-[hsl(210,20%,98%)] mb-6">
              See mining infrastructure risk{" "}
              <span className="text-gradient">before</span> it becomes a $7B claim.
            </h1>

            <p className="body-lg text-[hsl(210,20%,70%)] mb-8">
              MineGuard uses satellite data and AI to monitor tailings dams and mine sites
              every few days, scoring risk and alerting underwriters before catastrophic failure.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Portfolio-wide risk map updating every 5 days.",
                "Detect surface movement, water pooling, cracks, and vegetation stress from space.",
                "Built for mining insurers and brokers, not geologists.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-[hsl(210,20%,80%)]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" onClick={openDemo}>
                Book a 30-minute demo
              </Button>
              <Button variant="hero-outline" size="xl" className="group" asChild>
                <a href="#case-study">
                  Explore the Brumadinho scenario
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
            <p className="text-xs text-[hsl(210,20%,50%)] mt-4">
              30-minute video call: live dashboard + Brumadinho and Cadia scenarios.
            </p>
          </motion.div>

          {/* Right Column - Dynamic Portfolio Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card-gradient rounded-2xl border border-dark-border p-4 glow-teal">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-alert-red" />
                  <div className="w-2.5 h-2.5 rounded-full bg-alert-yellow" />
                  <div className="w-2.5 h-2.5 rounded-full bg-alert-green" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-alert-green animate-pulse" />
                  <span className="text-xs text-[hsl(210,20%,50%)]">Live Portfolio Map</span>
                </div>
              </div>

              {/* World Map with Pins */}
              <div className="relative h-72 lg:h-80 rounded-xl overflow-hidden bg-[hsl(220,25%,8%)]">
                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJhM2E1YSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" />
                
                {/* Simplified world map silhouette */}
                <div className="absolute inset-0 opacity-30">
                  <svg viewBox="0 0 1000 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                    <path 
                      d="M150,100 Q200,80 280,90 L350,85 Q400,95 450,80 L480,85 Q520,70 580,90 L650,95 Q700,85 750,100 L800,105 Q850,90 900,110 L920,150 Q890,200 850,230 L800,260 Q750,290 700,280 L650,270 Q600,290 550,300 L500,320 Q450,350 400,330 L350,310 Q300,340 250,320 L200,290 Q150,260 120,220 L100,180 Q90,140 100,110 Z M450,180 Q500,160 550,170 L600,190 Q650,200 680,230 L700,270 Q680,310 650,320 L600,330 Q550,350 500,340 L450,320 Q400,340 370,310 L350,270 Q360,230 390,200 Z" 
                      fill="hsl(200, 30%, 15%)"
                      stroke="hsl(185, 60%, 25%)"
                      strokeWidth="1"
                    />
                  </svg>
                </div>

                {/* Site Pins */}
                {sitePins.map((pin) => (
                  <div
                    key={pin.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: pin.x, top: pin.y }}
                  >
                    {/* Pulse ring for high-risk sites */}
                    {pin.pulse && (
                      <motion.div
                        className={`absolute inset-0 rounded-full ${
                          pin.color === "red" ? "bg-alert-red" : "bg-alert-orange"
                        }`}
                        animate={{
                          scale: [1, 2.5, 1],
                          opacity: [0.6, 0, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                        style={{ width: 12, height: 12, marginLeft: -2, marginTop: -2 }}
                      />
                    )}
                    <div
                      className={`w-3 h-3 rounded-full border-2 border-[hsl(220,25%,8%)] relative z-10 ${
                        pin.color === "red"
                          ? "bg-alert-red"
                          : pin.color === "yellow"
                          ? "bg-alert-yellow"
                          : "bg-alert-green"
                      }`}
                    />
                  </div>
                ))}

                {/* Brumadinho Tooltip Card */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute bg-dark-card/95 backdrop-blur-sm rounded-lg border border-alert-red/40 p-3 shadow-xl"
                  style={{ left: "32%", top: "48%", minWidth: "220px" }}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <p className="text-xs font-semibold text-[hsl(210,20%,98%)]">Brumadinho Tailings Dam</p>
                      <p className="text-[10px] text-[hsl(210,20%,50%)]">Updated 3 days ago</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-alert-red">85</div>
                      <span className="text-[8px] px-1.5 py-0.5 rounded risk-high">HIGH RISK</span>
                    </div>
                  </div>
                  <div className="space-y-1 pt-2 border-t border-dark-border">
                    <div className="flex items-center gap-2 text-[10px] text-[hsl(210,20%,70%)]">
                      <Mountain className="w-3 h-3 text-alert-red" />
                      <span>Surface movement ↑ 12mm</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-[hsl(210,20%,70%)]">
                      <Droplets className="w-3 h-3 text-alert-orange" />
                      <span>Water pooling ↑ 18%</span>
                    </div>
                  </div>
                </motion.div>

                {/* Legend */}
                <div className="absolute bottom-3 right-3 flex items-center gap-3 bg-dark-card/80 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-alert-green" />
                    <span className="text-[10px] text-[hsl(210,20%,60%)]">Low</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-alert-yellow" />
                    <span className="text-[10px] text-[hsl(210,20%,60%)]">Medium</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-alert-red" />
                    <span className="text-[10px] text-[hsl(210,20%,60%)]">High</span>
                  </div>
                </div>
              </div>

              {/* Risk Summary Bar */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="bg-dark-bg rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-alert-red">2</div>
                  <p className="text-[10px] text-[hsl(210,20%,50%)]">High Risk</p>
                </div>
                <div className="bg-dark-bg rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-alert-yellow">2</div>
                  <p className="text-[10px] text-[hsl(210,20%,50%)]">Medium Risk</p>
                </div>
                <div className="bg-dark-bg rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-alert-green">4</div>
                  <p className="text-[10px] text-[hsl(210,20%,50%)]">Low Risk</p>
                </div>
              </div>

              {/* Microcopy */}
              <p className="text-[10px] text-[hsl(210,20%,45%)] text-center mt-3 italic">
                Example portfolio view: each dot is a monitored mine. Colors update every 5 days based on new satellite passes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
