import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, TrendingUp, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
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
                "Portfolio-level risk map, updated every 5 days.",
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
              <Button variant="hero" size="xl">
                Book a 30-minute demo
              </Button>
              <Button variant="hero-outline" size="xl" className="group">
                Explore the Brumadinho scenario
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Dashboard Mock */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card-gradient rounded-2xl border border-dark-border p-6 glow-teal">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-alert-red" />
                  <div className="w-3 h-3 rounded-full bg-alert-yellow" />
                  <div className="w-3 h-3 rounded-full bg-alert-green" />
                </div>
                <span className="text-xs text-[hsl(210,20%,50%)]">MineGuard Dashboard</span>
              </div>

              {/* World Map Placeholder */}
              <div className="bg-dark-bg rounded-xl p-4 mb-4 relative h-48 overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiMyYTNhNGEiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />
                <div className="relative z-10 h-full flex items-center justify-center">
                  {/* Site Pins */}
                  <div className="absolute top-8 left-1/4">
                    <MapPin className="w-6 h-6 text-alert-green" />
                  </div>
                  <div className="absolute top-12 right-1/3">
                    <MapPin className="w-6 h-6 text-alert-yellow" />
                  </div>
                  <div className="absolute bottom-12 left-1/3">
                    <MapPin className="w-6 h-6 text-alert-red animate-pulse" />
                  </div>
                  <div className="absolute bottom-8 right-1/4">
                    <MapPin className="w-6 h-6 text-alert-green" />
                  </div>
                  <span className="text-xs text-[hsl(210,20%,40%)]">Global Portfolio View</span>
                </div>
              </div>

              {/* Risk Score Card */}
              <div className="bg-dark-bg rounded-xl p-4 mb-4 border border-alert-red/30">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-xs text-[hsl(210,20%,50%)] mb-1">HIGHEST RISK SITE</p>
                    <p className="font-semibold text-[hsl(210,20%,98%)]">Brumadinho Tailings Dam</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-alert-red">85</div>
                    <span className="text-xs px-2 py-0.5 rounded-full risk-high">HIGH RISK</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-[hsl(210,20%,50%)]">
                  <TrendingUp className="w-3 h-3 text-alert-red" />
                  <span>+12 points in last 30 days</span>
                </div>
              </div>

              {/* Alert List */}
              <div className="space-y-2">
                <p className="text-xs text-[hsl(210,20%,50%)] mb-2">RECENT ALERTS</p>
                {[
                  { text: "Ground deformation detected", level: "high" },
                  { text: "Water pooling increased", level: "medium" },
                  { text: "Vegetation stress anomaly", level: "low" },
                ].map((alert, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-dark-bg rounded-lg p-3"
                  >
                    <AlertTriangle
                      className={`w-4 h-4 ${
                        alert.level === "high"
                          ? "text-alert-red"
                          : alert.level === "medium"
                          ? "text-alert-orange"
                          : "text-alert-yellow"
                      }`}
                    />
                    <span className="text-sm text-[hsl(210,20%,80%)]">{alert.text}</span>
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
