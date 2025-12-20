import { motion } from "framer-motion";
import { 
  Factory, 
  AlertTriangle, 
  Wrench, 
  Satellite, 
  Calendar, 
  Clock, 
  DollarSign, 
  Users,
  CheckCircle,
  XCircle,
  TrendingUp,
  Eye,
  Shield,
  ArrowDown,
  MapPin
} from "lucide-react";
import { useState } from "react";
import { useDemo } from "@/contexts/DemoContext";

// Timeline event data
const timelineEvents = [
  {
    id: "before",
    period: "Before 2018",
    status: "Operating normally",
    description: "Dam was stable, mining in routine operation.",
    icon: Factory,
    color: "bg-[hsl(210,20%,30%)]",
    dotColor: "bg-alert-green",
    bgColor: "bg-dark-card",
  },
  {
    id: "failure",
    period: "March 2018",
    status: "Section of wall slumps",
    description: "Part of northern tailings dam wall failed. Operations halted.",
    icon: AlertTriangle,
    color: "bg-alert-orange/20",
    dotColor: "bg-alert-orange",
    bgColor: "bg-alert-orange/10",
    cause: "Hidden weak foundation layer + high water levels + ground excavation = failure",
  },
  {
    id: "after",
    period: "After 2018",
    status: "Reinforcement & ongoing monitoring",
    description: "Dam stabilised, technical investigations ongoing, community concerns addressed.",
    icon: Wrench,
    color: "bg-primary/20",
    dotColor: "bg-primary",
    bgColor: "bg-primary/5",
  },
];

// Without vs With MineGuard comparison
const withoutMineGuard = [
  { icon: Calendar, text: "Jan 2018: Annual inspection – looks OK" },
  { icon: Clock, text: "Feb–Mar 2018: No monitoring (2 months)" },
  { icon: XCircle, text: "March 2018: Wall slumps unexpectedly" },
  { icon: TrendingUp, text: "Result: Operations shut down, remediation required" },
  { icon: DollarSign, text: "Cost: Millions in emergency repairs" },
  { icon: Users, text: "Risk: Community impact, regulatory scrutiny" },
];

const withMineGuard = [
  { icon: Satellite, text: "Every 5 days: Satellite check-in" },
  { icon: Eye, text: "Month 2: Yellow alert – 'Ground movement detected'" },
  { icon: AlertTriangle, text: "Month 3: Orange alert – 'Risk escalating'" },
  { icon: Wrench, text: "Month 4: Staged repairs begin (planned, not emergency)" },
  { icon: DollarSign, text: "Cost: Planned repairs, no emergency shutdown" },
  { icon: CheckCircle, text: "Outcome: Dam stabilised, operations continue" },
];

function TimelineCard({ event, index }: { event: typeof timelineEvents[0]; index: number }) {
  const Icon = event.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative"
    >
      {/* Connector line */}
      {index < timelineEvents.length - 1 && (
        <div className="absolute left-5 top-16 bottom-0 w-0.5 bg-gradient-to-b from-dark-border to-transparent h-8" />
      )}
      
      <div className={`${event.bgColor} rounded-xl p-4 border border-dark-border relative`}>
        <div className="flex items-start gap-4">
          {/* Timeline dot */}
          <div className={`w-10 h-10 rounded-full ${event.color} flex items-center justify-center shrink-0`}>
            <Icon className={`w-5 h-5 ${event.dotColor === 'bg-alert-orange' ? 'text-alert-orange' : event.dotColor === 'bg-primary' ? 'text-primary' : 'text-alert-green'}`} />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs font-bold ${
                event.id === 'failure' ? 'text-alert-orange' : 
                event.id === 'after' ? 'text-primary' : 'text-[hsl(210,20%,60%)]'
              }`}>
                {event.period}
              </span>
              <div className={`w-2 h-2 rounded-full ${event.dotColor}`} />
            </div>
            <h4 className="font-semibold text-[hsl(210,20%,95%)] text-sm mb-1">{event.status}</h4>
            <p className="text-xs text-[hsl(210,20%,70%)] leading-relaxed">{event.description}</p>
            
            {event.cause && (
              <div className="mt-3 p-2 rounded-lg bg-alert-orange/10 border border-alert-orange/20">
                <p className="text-[10px] text-alert-orange font-medium">{event.cause}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SatelliteComparison() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-dark-card rounded-xl border border-dark-border overflow-hidden h-full"
    >
      <div className="p-4 border-b border-dark-border">
        <div className="flex items-center gap-2 mb-1">
          <Satellite className="w-4 h-4 text-primary" />
          <h3 className="font-semibold text-[hsl(210,20%,95%)] text-sm">How MineGuard Would Have Detected It</h3>
        </div>
        <p className="text-xs text-[hsl(210,20%,60%)]">Satellite detection timeline</p>
      </div>
      
      <div className="p-4 space-y-4">
        {/* Before detection */}
        <motion.div 
          className="relative rounded-lg overflow-hidden group cursor-pointer"
          onHoverStart={() => setIsHovered(true)}
          whileHover={{ scale: 1.02 }}
        >
          <div className="bg-gradient-to-br from-[hsl(210,20%,15%)] to-[hsl(210,20%,10%)] aspect-video relative">
            {/* Mock satellite imagery */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJhM2E1YSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" />
            </div>
            
            {/* Dam structure representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-1/2 relative">
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-[hsl(25,30%,25%)] rounded-t" />
                <div className="absolute bottom-4 left-1/4 right-1/4 h-3 bg-[hsl(200,30%,30%)]" />
              </div>
            </div>
            
            {/* Detection highlight - Yellow */}
            <motion.div 
              className="absolute top-1/3 left-1/4 w-16 h-12 border-2 border-dashed border-alert-yellow/60 rounded"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Labels */}
            <div className="absolute top-2 left-2 px-2 py-1 bg-dark-bg/80 rounded text-[10px] text-[hsl(210,20%,70%)]">
              3 months before failure
            </div>
            <div className="absolute bottom-2 right-2 px-2 py-1 bg-alert-yellow/20 rounded text-[10px] text-alert-yellow font-medium">
              Risk: 45/100 – MEDIUM
            </div>
          </div>
          <p className="absolute bottom-2 left-2 text-[9px] text-[hsl(210,20%,60%)] bg-dark-bg/80 px-1.5 py-0.5 rounded">
            Subtle ground deformation detected here
          </p>
        </motion.div>

        {/* Arrow */}
        <div className="flex justify-center">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-primary" />
          </motion.div>
        </div>

        {/* After detection - more severe */}
        <motion.div 
          className="relative rounded-lg overflow-hidden group cursor-pointer"
          whileHover={{ scale: 1.02 }}
        >
          <div className="bg-gradient-to-br from-[hsl(210,20%,15%)] to-[hsl(210,20%,10%)] aspect-video relative">
            {/* Mock satellite imagery */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJhM2E1YSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" />
            </div>
            
            {/* Dam structure representation - with damage */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-1/2 relative">
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-[hsl(25,30%,25%)] rounded-t" />
                <div className="absolute bottom-4 left-1/4 right-1/4 h-3 bg-[hsl(200,30%,30%)]" />
                {/* Crack indication */}
                <div className="absolute bottom-2 left-1/3 w-0.5 h-6 bg-alert-orange/60 transform -rotate-12" />
              </div>
            </div>
            
            {/* Detection highlight - Orange, larger */}
            <motion.div 
              className="absolute top-1/4 left-1/5 w-24 h-16 border-2 border-dashed border-alert-orange/80 rounded"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            
            {/* Heat map overlay */}
            <div className="absolute top-1/4 left-1/5 w-24 h-16 bg-gradient-to-br from-alert-orange/30 to-alert-red/20 rounded" />
            
            {/* Labels */}
            <div className="absolute top-2 left-2 px-2 py-1 bg-dark-bg/80 rounded text-[10px] text-[hsl(210,20%,70%)]">
              1 month before failure
            </div>
            <div className="absolute bottom-2 right-2 px-2 py-1 bg-alert-orange/20 rounded text-[10px] text-alert-orange font-medium">
              Risk: 72/100 – HIGH
            </div>
          </div>
          <p className="absolute bottom-2 left-2 text-[9px] text-[hsl(210,20%,60%)] bg-dark-bg/80 px-1.5 py-0.5 rounded">
            Ground movement accelerates, risk rising
          </p>
        </motion.div>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 pt-2 text-[9px] text-[hsl(210,20%,60%)]">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded bg-alert-green" />
            <span>Stable</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded bg-alert-yellow" />
            <span>Monitor</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded bg-alert-orange" />
            <span>Act now</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded bg-alert-red" />
            <span>Critical</span>
          </div>
        </div>
        
        <p className="text-[9px] text-[hsl(210,20%,50%)] pt-1">
          Imagery from Sentinel-2 satellite constellation
        </p>
      </div>
    </motion.div>
  );
}

function ComparisonBox({ 
  title, 
  items, 
  variant 
}: { 
  title: string; 
  items: typeof withoutMineGuard; 
  variant: "without" | "with" 
}) {
  const isWithout = variant === "without";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: isWithout ? 0 : 0.1 }}
      whileHover={{ y: -4, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)" }}
      className={`rounded-xl border overflow-hidden transition-shadow ${
        isWithout 
          ? "bg-gradient-to-br from-alert-red/10 to-alert-orange/5 border-alert-red/20" 
          : "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20"
      }`}
    >
      <div className={`px-4 py-3 border-b ${isWithout ? "border-alert-red/20 bg-alert-red/10" : "border-primary/20 bg-primary/10"}`}>
        <div className="flex items-center gap-2">
          {isWithout ? (
            <XCircle className="w-4 h-4 text-alert-red" />
          ) : (
            <CheckCircle className="w-4 h-4 text-primary" />
          )}
          <h4 className={`font-semibold text-sm ${isWithout ? "text-alert-red" : "text-primary"}`}>
            {title}
          </h4>
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div 
              key={i} 
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <Icon className={`w-4 h-4 shrink-0 mt-0.5 ${
                isWithout ? "text-alert-red/70" : "text-primary/70"
              }`} />
              <p className="text-xs text-[hsl(210,20%,80%)] leading-relaxed">{item.text}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export function CadiaSection() {
  const { openDemo } = useDemo();
  
  return (
    <section className="section-dark py-20 lg:py-32 border-t border-dark-border">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-alert-orange/20 text-alert-orange text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            Australian Case Study
          </span>
          <h2 className="heading-lg text-[hsl(210,20%,98%)] mb-4">
            Australia's warning shot: Cadia tailings dam failure (NSW, 2018)
          </h2>
          <p className="text-[hsl(210,20%,70%)] max-w-2xl mx-auto">
            A near-miss that demonstrates why continuous satellite monitoring is critical for Australian mines.
          </p>
        </motion.div>

        {/* Three Column Layout */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Column 1: Timeline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-[hsl(210,20%,60%)]" />
              <h3 className="font-semibold text-[hsl(210,20%,95%)]">What Happened at Cadia</h3>
            </div>
            <div className="space-y-4">
              {timelineEvents.map((event, index) => (
                <TimelineCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>

          {/* Column 2: Satellite Detection */}
          <SatelliteComparison />

          {/* Column 3: Comparison */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-4 h-4 text-[hsl(210,20%,60%)]" />
              <h3 className="font-semibold text-[hsl(210,20%,95%)]">The Difference MineGuard Makes</h3>
            </div>
            <div className="space-y-4">
              <ComparisonBox 
                title="What Actually Happened" 
                items={withoutMineGuard} 
                variant="without" 
              />
              <ComparisonBox 
                title="What MineGuard Would Enable" 
                items={withMineGuard} 
                variant="with" 
              />
            </div>
          </div>
        </div>

        {/* Bottom Comparison Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border border-dark-border"
        >
          <div className="text-center py-4 px-6 bg-dark-card border-b border-dark-border">
            <h3 className="font-bold text-[hsl(210,20%,95%)] text-lg">
              Brumadinho vs. Cadia: Two Lessons from Tailings Failures
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2">
            {/* Brumadinho */}
            <div className="p-6 bg-gradient-to-br from-alert-red/15 to-alert-orange/10 border-r border-dark-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-alert-red/20 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-alert-red" />
                </div>
                <div>
                  <h4 className="font-bold text-alert-red">Brumadinho (Brazil, 2019)</h4>
                  <p className="text-xs text-[hsl(210,20%,60%)]">Worst-case scenario</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[hsl(210,20%,80%)]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-alert-red shrink-0" />
                  Complete failure, no warning
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-alert-red shrink-0" />
                  272 lives lost
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-alert-red shrink-0" />
                  $7B+ in damage
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-alert-red shrink-0" />
                  Could have been prevented with 6–12 months' warning
                </li>
              </ul>
            </div>
            
            {/* Cadia */}
            <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-alert-orange/20 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-alert-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Cadia (Australia, 2018)</h4>
                  <p className="text-xs text-[hsl(210,20%,60%)]">Near-miss, crisis averted</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[hsl(210,20%,80%)]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Partial failure, operations halted
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  0 lives lost, but millions in response
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Shows why continuous monitoring is critical
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Warning signs were detectable months before
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom message */}
          <div className="p-6 bg-dark-bg text-center border-t border-dark-border">
            <p className="text-[hsl(210,20%,80%)] max-w-3xl mx-auto mb-4">
              <strong className="text-[hsl(210,20%,95%)]">Both failures had detectable warning signs months before collapse.</strong>{" "}
              MineGuard automates the detection so early action becomes standard practice.
            </p>
            <button
              onClick={openDemo}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors"
            >
              Walk through the Cadia scenario in a live demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
