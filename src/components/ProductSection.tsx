import { motion } from "framer-motion";
import { MapPin, TrendingUp, AlertTriangle, Download, FileText, Activity } from "lucide-react";

const productModules = [
  {
    title: "Portfolio Map View",
    caption: "Instantly see which dams in your global portfolio deserve attention today.",
    content: (
      <div className="bg-dark-bg rounded-xl p-4 h-64 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMzAgMCBMIDAgMCAwIDMwIiBmaWxsPSJub25lIiBzdHJva2U9IiMzYTRhNWEiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />
        <div className="relative z-10">
          {/* Site pins */}
          <div className="absolute top-4 left-8"><MapPin className="w-5 h-5 text-alert-green" /></div>
          <div className="absolute top-12 left-1/4"><MapPin className="w-5 h-5 text-alert-green" /></div>
          <div className="absolute top-6 right-1/3"><MapPin className="w-5 h-5 text-alert-yellow" /></div>
          <div className="absolute top-20 right-1/4"><MapPin className="w-5 h-5 text-alert-red animate-pulse" /></div>
          <div className="absolute bottom-16 left-1/3"><MapPin className="w-5 h-5 text-alert-orange" /></div>
          <div className="absolute bottom-8 right-1/3"><MapPin className="w-5 h-5 text-alert-green" /></div>
        </div>
        {/* Side panel */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-dark-card/90 border-l border-dark-border p-3">
          <p className="text-[10px] text-[hsl(210,20%,50%)] mb-2">SITES BY RISK</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-alert-red" />
              <span className="text-[10px] text-[hsl(210,20%,70%)]">Brumadinho</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-alert-orange" />
              <span className="text-[10px] text-[hsl(210,20%,70%)]">Mt Polley</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-alert-yellow" />
              <span className="text-[10px] text-[hsl(210,20%,70%)]">Samarco</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-alert-green" />
              <span className="text-[10px] text-[hsl(210,20%,70%)]">Others (12)</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Site Detail View",
    caption: "Understand what's driving risk at a specific tailings dam, not just a single number.",
    content: (
      <div className="bg-dark-bg rounded-xl p-4 h-64">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-[hsl(210,20%,50%)]">SITE DETAIL</p>
            <p className="font-semibold text-[hsl(210,20%,98%)]">Brumadinho Dam</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-alert-red">85</div>
            <span className="text-[10px] px-2 py-0.5 rounded-full risk-high">HIGH</span>
          </div>
        </div>
        {/* Trend chart mock */}
        <div className="bg-dark-card rounded-lg p-3 mb-4 h-20">
          <p className="text-[10px] text-[hsl(210,20%,50%)] mb-2">12-WEEK TREND</p>
          <div className="flex items-end gap-1 h-10">
            {[45, 48, 52, 55, 60, 65, 68, 72, 78, 82, 84, 85].map((val, i) => (
              <div
                key={i}
                className={`flex-1 rounded-sm ${val > 70 ? 'bg-alert-red' : val > 50 ? 'bg-alert-orange' : 'bg-alert-yellow'}`}
                style={{ height: `${val}%` }}
              />
            ))}
          </div>
        </div>
        {/* Contributing factors */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { name: "Movement", value: 92, icon: Activity },
            { name: "Water", value: 78, icon: TrendingUp },
            { name: "Cracks", value: 65, icon: AlertTriangle },
          ].map((factor) => (
            <div key={factor.name} className="bg-dark-card rounded-lg p-2 text-center">
              <factor.icon className="w-3 h-3 mx-auto mb-1 text-[hsl(210,20%,50%)]" />
              <p className="text-[10px] text-[hsl(210,20%,50%)]">{factor.name}</p>
              <p className="text-sm font-semibold text-[hsl(210,20%,98%)]">{factor.value}%</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Alert Feed & Export",
    caption: "Deliver a continuous stream of actionable alerts to underwriting and risk teams, exportable to existing systems.",
    content: (
      <div className="bg-dark-bg rounded-xl p-4 h-64">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs text-[hsl(210,20%,50%)]">RECENT ALERTS</p>
          <button className="flex items-center gap-1 text-xs text-primary hover:text-primary/80">
            <Download className="w-3 h-3" />
            Export
          </button>
        </div>
        <div className="space-y-2">
          {[
            { site: "Brumadinho", alert: "Critical ground deformation", level: "red", time: "2h ago" },
            { site: "Mt Polley", alert: "Water level increase", level: "orange", time: "4h ago" },
            { site: "Samarco", alert: "Vegetation anomaly detected", level: "yellow", time: "1d ago" },
            { site: "Site 4", alert: "Routine scan complete", level: "green", time: "1d ago" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-dark-card rounded-lg p-3">
              <div className={`w-2 h-2 rounded-full ${
                item.level === 'red' ? 'bg-alert-red' :
                item.level === 'orange' ? 'bg-alert-orange' :
                item.level === 'yellow' ? 'bg-alert-yellow' : 'bg-alert-green'
              }`} />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-[hsl(210,20%,98%)] truncate">{item.site}</p>
                <p className="text-[10px] text-[hsl(210,20%,60%)] truncate">{item.alert}</p>
              </div>
              <span className="text-[10px] text-[hsl(210,20%,50%)]">{item.time}</span>
            </div>
          ))}
        </div>
        <button className="w-full mt-3 flex items-center justify-center gap-2 text-xs text-[hsl(210,20%,60%)] hover:text-[hsl(210,20%,80%)]">
          <FileText className="w-3 h-3" />
          View full history
        </button>
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
            A purpose-built interface for mining insurance professionals, not another
            generic analytics dashboard.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
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
