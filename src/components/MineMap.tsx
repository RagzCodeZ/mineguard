import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, AlertTriangle, ArrowRight, X } from "lucide-react";
import "leaflet/dist/leaflet.css";

interface MineSite {
  id: string;
  name: string;
  country: string;
  operator: string;
  lat: number;
  lng: number;
  riskScore: number;
  riskLevel: "critical" | "high" | "medium" | "low";
  lastUpdated: string;
  status: string;
  alerts?: string[];
  trendData?: number[];
}

const mineSites: MineSite[] = [
  // Australia
  {
    id: "cadia",
    name: "Cadia Valley Operations",
    country: "Australia",
    operator: "Newcrest Mining",
    lat: -33.47,
    lng: 148.99,
    riskScore: 65,
    riskLevel: "high",
    lastUpdated: "2 days ago",
    status: "Ground deformation detected, monitoring intensified",
    alerts: ["Ground movement +4mm", "Water seepage +2%"],
    trendData: [25, 28, 32, 38, 45, 52, 58, 62, 65],
  },
  {
    id: "olympic",
    name: "Olympic Dam",
    country: "Australia",
    operator: "BHP",
    lat: -30.45,
    lng: 136.88,
    riskScore: 28,
    riskLevel: "low",
    lastUpdated: "1 day ago",
    status: "Stable, routine monitoring",
    trendData: [26, 27, 28, 27, 28, 28, 27, 28, 28],
  },
  {
    id: "superpit",
    name: "Super Pit",
    country: "Australia",
    operator: "Northern Star",
    lat: -30.78,
    lng: 121.50,
    riskScore: 35,
    riskLevel: "low",
    lastUpdated: "3 days ago",
    status: "Minor vegetation stress, watching",
    trendData: [30, 31, 32, 33, 34, 34, 35, 35, 35],
  },
  // Brazil
  {
    id: "brumadinho",
    name: "Brumadinho Dam (Historical)",
    country: "Brazil",
    operator: "Vale",
    lat: -20.12,
    lng: -44.12,
    riskScore: 98,
    riskLevel: "critical",
    lastUpdated: "Historical data",
    status: "Critical: Would have triggered emergency alert",
    alerts: ["Ground deformation +12mm", "Water pooling +18%", "Vegetation die-off"],
    trendData: [22, 28, 35, 45, 58, 68, 78, 88, 98],
  },
  {
    id: "samarco",
    name: "Samarco Mineração",
    country: "Brazil",
    operator: "Vale/BHP",
    lat: -20.22,
    lng: -43.41,
    riskScore: 74,
    riskLevel: "high",
    lastUpdated: "4 days ago",
    status: "Elevated risk, remediation ongoing",
    alerts: ["Structural concerns identified"],
    trendData: [55, 58, 62, 65, 68, 70, 72, 73, 74],
  },
  // Canada
  {
    id: "mountpolley",
    name: "Mount Polley Mine",
    country: "Canada",
    operator: "Imperial Metals",
    lat: 52.51,
    lng: -121.60,
    riskScore: 52,
    riskLevel: "medium",
    lastUpdated: "2 days ago",
    status: "Post-failure monitoring, stable",
    trendData: [48, 49, 50, 51, 51, 52, 52, 52, 52],
  },
  {
    id: "highland",
    name: "Highland Valley Copper",
    country: "Canada",
    operator: "Teck Resources",
    lat: 50.48,
    lng: -121.03,
    riskScore: 31,
    riskLevel: "low",
    lastUpdated: "1 day ago",
    status: "Stable, normal operations",
    trendData: [30, 30, 31, 31, 31, 31, 31, 31, 31],
  },
  // South Africa
  {
    id: "mogalakwena",
    name: "Mogalakwena Platinum",
    country: "South Africa",
    operator: "Anglo American",
    lat: -23.97,
    lng: 28.70,
    riskScore: 42,
    riskLevel: "medium",
    lastUpdated: "3 days ago",
    status: "Routine monitoring, minor seepage",
    trendData: [38, 39, 40, 41, 41, 42, 42, 42, 42],
  },
  {
    id: "sishen",
    name: "Sishen Iron Ore Mine",
    country: "South Africa",
    operator: "Kumba Iron Ore",
    lat: -27.74,
    lng: 22.98,
    riskScore: 24,
    riskLevel: "low",
    lastUpdated: "2 days ago",
    status: "Stable, no concerns",
    trendData: [24, 24, 24, 24, 24, 24, 24, 24, 24],
  },
  // Peru
  {
    id: "antamina",
    name: "Antamina Mine",
    country: "Peru",
    operator: "BHP/Glencore",
    lat: -9.54,
    lng: -77.05,
    riskScore: 38,
    riskLevel: "low",
    lastUpdated: "1 day ago",
    status: "Stable, enhanced seasonal monitoring",
    trendData: [35, 36, 36, 37, 37, 38, 38, 38, 38],
  },
  {
    id: "lasbambas",
    name: "Las Bambas",
    country: "Peru",
    operator: "MMG Limited",
    lat: -14.06,
    lng: -72.32,
    riskScore: 45,
    riskLevel: "medium",
    lastUpdated: "2 days ago",
    status: "Moderate vegetation stress detected",
    trendData: [40, 41, 42, 43, 44, 44, 45, 45, 45],
  },
  // Chile
  {
    id: "escondida",
    name: "Escondida Mine",
    country: "Chile",
    operator: "BHP",
    lat: -24.27,
    lng: -69.07,
    riskScore: 22,
    riskLevel: "low",
    lastUpdated: "1 day ago",
    status: "Stable, world-class monitoring",
    trendData: [22, 22, 22, 22, 22, 22, 22, 22, 22],
  },
  // Mongolia
  {
    id: "oyutolgoi",
    name: "Oyu Tolgoi",
    country: "Mongolia",
    operator: "Rio Tinto",
    lat: 43.00,
    lng: 106.85,
    riskScore: 48,
    riskLevel: "medium",
    lastUpdated: "2 days ago",
    status: "Seasonal frost monitoring active",
    trendData: [44, 45, 46, 46, 47, 47, 48, 48, 48],
  },
  // Indonesia
  {
    id: "grasberg",
    name: "Grasberg Mine",
    country: "Indonesia",
    operator: "Freeport-McMoRan",
    lat: -4.06,
    lng: 137.12,
    riskScore: 55,
    riskLevel: "medium",
    lastUpdated: "3 days ago",
    status: "Heavy rainfall season, enhanced monitoring",
    alerts: ["Increased runoff detected"],
    trendData: [48, 50, 52, 53, 54, 54, 55, 55, 55],
  },
];

const getRiskColor = (level: MineSite["riskLevel"]) => {
  switch (level) {
    case "critical":
      return { fill: "hsl(0, 84%, 60%)", stroke: "hsl(0, 84%, 50%)" };
    case "high":
      return { fill: "hsl(25, 95%, 53%)", stroke: "hsl(25, 95%, 43%)" };
    case "medium":
      return { fill: "hsl(48, 96%, 53%)", stroke: "hsl(48, 96%, 43%)" };
    case "low":
      return { fill: "hsl(142, 76%, 45%)", stroke: "hsl(142, 76%, 35%)" };
  }
};

const getRiskBadgeClass = (level: MineSite["riskLevel"]) => {
  switch (level) {
    case "critical":
    case "high":
      return "bg-alert-red/20 text-alert-red";
    case "medium":
      return "bg-alert-orange/20 text-alert-orange";
    case "low":
      return "bg-alert-green/20 text-alert-green";
  }
};

function MiniTrendChart({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  
  const points = data
    .map((v, i) => `${(i / (data.length - 1)) * 100},${100 - ((v - min) / range) * 80 - 10}`)
    .join(" ");

  return (
    <svg className="w-full h-12" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="miniTrendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(var(--primary))" />
        </linearGradient>
      </defs>
      <polyline
        fill="none"
        stroke="url(#miniTrendGradient)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        points={points}
      />
    </svg>
  );
}

function MapController() {
  const map = useMap();
  useEffect(() => {
    map.setView([20, 30], 2);
  }, [map]);
  return null;
}

interface SiteDetailCardProps {
  site: MineSite;
  onClose: () => void;
}

function SiteDetailCard({ site, onClose }: SiteDetailCardProps) {
  const riskColors = getRiskColor(site.riskLevel);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-dark-card border border-dark-border rounded-xl shadow-2xl overflow-hidden z-[1000]"
    >
      <div className="p-4 border-b border-dark-border">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="font-semibold text-[hsl(210,20%,98%)]">{site.name}</h4>
            <p className="text-xs text-[hsl(210,20%,60%)]">{site.operator} • {site.country}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-dark-border rounded transition-colors"
          >
            <X className="w-4 h-4 text-[hsl(210,20%,60%)]" />
          </button>
        </div>
      </div>
      
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-[hsl(210,20%,50%)]">RISK SCORE</p>
            <div className="flex items-baseline gap-2">
              <span 
                className="text-3xl font-bold"
                style={{ color: riskColors.fill }}
              >
                {site.riskScore}
              </span>
              <span className="text-sm text-[hsl(210,20%,60%)]">/ 100</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium uppercase ${getRiskBadgeClass(site.riskLevel)}`}>
                {site.riskLevel}
              </span>
            </div>
          </div>
        </div>
        
        {site.trendData && (
          <div>
            <p className="text-xs text-[hsl(210,20%,50%)] mb-1">12-WEEK TREND</p>
            <MiniTrendChart data={site.trendData} />
          </div>
        )}
        
        {site.alerts && site.alerts.length > 0 && (
          <div>
            <p className="text-xs text-[hsl(210,20%,50%)] mb-2">KEY ALERTS</p>
            <div className="space-y-1.5">
              {site.alerts.map((alert, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <AlertTriangle className="w-3 h-3 text-alert-orange shrink-0" />
                  <span className="text-[hsl(210,20%,80%)]">{alert}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="pt-2 border-t border-dark-border">
          <p className="text-xs text-[hsl(210,20%,60%)]">{site.status}</p>
          <p className="text-[10px] text-[hsl(210,20%,40%)] mt-1">Updated {site.lastUpdated}</p>
        </div>
        
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-medium transition-colors">
          View full analysis
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

export function MineMap() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSite, setSelectedSite] = useState<MineSite | null>(null);
  const [hoveredSite, setHoveredSite] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const stats = {
    total: mineSites.length,
    critical: mineSites.filter(s => s.riskLevel === "critical").length,
    high: mineSites.filter(s => s.riskLevel === "high").length,
    medium: mineSites.filter(s => s.riskLevel === "medium").length,
    low: mineSites.filter(s => s.riskLevel === "low").length,
  };

  return (
    <div className="bg-dark-bg rounded-xl overflow-hidden relative">
      {/* Stats bar */}
      <div className="bg-dark-card/80 backdrop-blur-sm border-b border-dark-border px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-alert-green animate-pulse" />
          <span className="text-xs text-[hsl(210,20%,60%)]">LIVE PORTFOLIO</span>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="text-[hsl(210,20%,50%)]">Total:</span>
            <span className="font-semibold text-[hsl(210,20%,98%)]">{stats.total * 17} dams</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-alert-red" />
            <span className="text-alert-red font-medium">{stats.critical + stats.high} High</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-alert-orange" />
            <span className="text-alert-orange font-medium">{stats.medium * 2} Medium</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-alert-green" />
            <span className="text-alert-green font-medium">{stats.low * 30} Low</span>
          </div>
        </div>
      </div>

      {/* Map container */}
      <div className="h-[400px] relative">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-dark-bg">
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-sm text-[hsl(210,20%,60%)]">Loading {stats.total * 17} mining sites...</p>
            </div>
          </div>
        ) : (
          <MapContainer
            center={[20, 30]}
            zoom={2}
            scrollWheelZoom={false}
            className="h-full w-full"
            style={{ background: "hsl(222, 47%, 11%)" }}
          >
            <MapController />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            {mineSites.map((site) => {
              const colors = getRiskColor(site.riskLevel);
              const isHovered = hoveredSite === site.id;
              const isPulsing = site.riskLevel === "critical" || site.riskLevel === "high";
              
              return (
                <CircleMarker
                  key={site.id}
                  center={[site.lat, site.lng]}
                  radius={isHovered ? 12 : 8}
                  pathOptions={{
                    fillColor: colors.fill,
                    fillOpacity: isHovered ? 1 : 0.8,
                    color: colors.stroke,
                    weight: 2,
                  }}
                  eventHandlers={{
                    click: () => setSelectedSite(site),
                    mouseover: () => setHoveredSite(site.id),
                    mouseout: () => setHoveredSite(null),
                  }}
                >
                  <Popup className="mine-popup">
                    <div className="text-xs">
                      <p className="font-semibold">{site.name}</p>
                      <p className="text-[hsl(210,20%,60%)]">
                        Risk: {site.riskScore}/100 – {site.riskLevel.toUpperCase()}
                      </p>
                      <p className="text-[hsl(210,20%,50%)]">Updated {site.lastUpdated}</p>
                      <p className="text-[hsl(210,20%,70%)] mt-1">{site.status}</p>
                    </div>
                  </Popup>
                </CircleMarker>
              );
            })}
          </MapContainer>
        )}

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-dark-card/90 backdrop-blur-sm border border-dark-border rounded-lg p-3 z-[500]">
          <p className="text-[10px] font-semibold text-[hsl(210,20%,50%)] uppercase mb-2">Risk Level</p>
          <div className="space-y-1.5">
            {[
              { level: "Critical", color: "bg-alert-red" },
              { level: "High", color: "bg-[hsl(25,95%,53%)]" },
              { level: "Medium", color: "bg-alert-yellow" },
              { level: "Low", color: "bg-alert-green" },
            ].map((item) => (
              <div key={item.level} className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                <span className="text-[10px] text-[hsl(210,20%,70%)]">{item.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Selected site detail card */}
        <AnimatePresence>
          {selectedSite && (
            <SiteDetailCard 
              site={selectedSite} 
              onClose={() => setSelectedSite(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
