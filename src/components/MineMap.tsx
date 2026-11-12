import { useEffect, useState } from "react";
import { MapContainer, CircleMarker, Popup, useMap } from "react-leaflet";
import { maplibreGL } from "@maplibre/maplibre-gl-leaflet";
import "maplibre-gl/dist/maplibre-gl.css";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, AlertTriangle, ArrowRight, X, Filter, Search, MapPin } from "lucide-react";
import "leaflet/dist/leaflet.css";

interface MineSite {
  id: string;
  name: string;
  country: string;
  continent: string;
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
  // Australia - Oceania
  {
    id: "cadia",
    name: "Cadia Valley Operations",
    country: "Australia",
    continent: "Oceania",
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
    continent: "Oceania",
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
    name: "Super Pit (KCGM)",
    country: "Australia",
    continent: "Oceania",
    operator: "Northern Star Resources",
    lat: -30.78,
    lng: 121.50,
    riskScore: 35,
    riskLevel: "low",
    lastUpdated: "3 days ago",
    status: "Minor vegetation stress, monitoring",
    trendData: [30, 31, 32, 33, 34, 34, 35, 35, 35],
  },
  // Brazil - South America
  {
    id: "brumadinho",
    name: "Brumadinho Dam (Historical)",
    country: "Brazil",
    continent: "South America",
    operator: "Vale S.A.",
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
    continent: "South America",
    operator: "Vale/BHP Joint Venture",
    lat: -20.22,
    lng: -43.41,
    riskScore: 74,
    riskLevel: "high",
    lastUpdated: "4 days ago",
    status: "Elevated risk, remediation ongoing",
    alerts: ["Structural concerns identified"],
    trendData: [55, 58, 62, 65, 68, 70, 72, 73, 74],
  },
  // Canada - North America
  {
    id: "mountpolley",
    name: "Mount Polley Mine",
    country: "Canada",
    continent: "North America",
    operator: "Imperial Metals Corporation",
    lat: 52.51,
    lng: -121.60,
    riskScore: 52,
    riskLevel: "medium",
    lastUpdated: "2 days ago",
    status: "Post-incident monitoring, stable",
    trendData: [48, 49, 50, 51, 51, 52, 52, 52, 52],
  },
  {
    id: "highland",
    name: "Highland Valley Copper",
    country: "Canada",
    continent: "North America",
    operator: "Teck Resources Limited",
    lat: 50.48,
    lng: -121.03,
    riskScore: 31,
    riskLevel: "low",
    lastUpdated: "1 day ago",
    status: "Stable, normal operations",
    trendData: [30, 30, 31, 31, 31, 31, 31, 31, 31],
  },
  // South Africa - Africa
  {
    id: "mogalakwena",
    name: "Mogalakwena Platinum Mine",
    country: "South Africa",
    continent: "Africa",
    operator: "Anglo American Platinum",
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
    continent: "Africa",
    operator: "Kumba Iron Ore Limited",
    lat: -27.74,
    lng: 22.98,
    riskScore: 24,
    riskLevel: "low",
    lastUpdated: "2 days ago",
    status: "Stable, no concerns",
    trendData: [24, 24, 24, 24, 24, 24, 24, 24, 24],
  },
  // Peru - South America
  {
    id: "antamina",
    name: "Antamina Mine",
    country: "Peru",
    continent: "South America",
    operator: "BHP/Glencore/Teck/Mitsubishi",
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
    name: "Las Bambas Mine",
    country: "Peru",
    continent: "South America",
    operator: "MMG Limited",
    lat: -14.06,
    lng: -72.32,
    riskScore: 45,
    riskLevel: "medium",
    lastUpdated: "2 days ago",
    status: "Moderate vegetation stress detected",
    trendData: [40, 41, 42, 43, 44, 44, 45, 45, 45],
  },
  // Chile - South America
  {
    id: "escondida",
    name: "Escondida Mine",
    country: "Chile",
    continent: "South America",
    operator: "BHP",
    lat: -24.27,
    lng: -69.07,
    riskScore: 22,
    riskLevel: "low",
    lastUpdated: "1 day ago",
    status: "Stable, world-class monitoring",
    trendData: [22, 22, 22, 22, 22, 22, 22, 22, 22],
  },
  // Mongolia - Asia
  {
    id: "oyutolgoi",
    name: "Oyu Tolgoi Mine",
    country: "Mongolia",
    continent: "Asia",
    operator: "Rio Tinto/Turquoise Hill",
    lat: 43.00,
    lng: 106.85,
    riskScore: 48,
    riskLevel: "medium",
    lastUpdated: "2 days ago",
    status: "Seasonal frost monitoring active",
    trendData: [44, 45, 46, 46, 47, 47, 48, 48, 48],
  },
  // Indonesia - Asia
  {
    id: "grasberg",
    name: "Grasberg Mine",
    country: "Indonesia",
    continent: "Asia",
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
  // USA - North America
  {
    id: "bingham",
    name: "Bingham Canyon Mine",
    country: "USA",
    continent: "North America",
    operator: "Rio Tinto Kennecott",
    lat: 40.52,
    lng: -112.15,
    riskScore: 29,
    riskLevel: "low",
    lastUpdated: "1 day ago",
    status: "Stable, continuous monitoring",
    trendData: [28, 28, 29, 29, 29, 29, 29, 29, 29],
  },
  // Philippines - Asia
  {
    id: "tampakan",
    name: "Tampakan Copper-Gold",
    country: "Philippines",
    continent: "Asia",
    operator: "Sagittarius Mines Inc.",
    lat: 6.42,
    lng: 125.05,
    riskScore: 41,
    riskLevel: "medium",
    lastUpdated: "4 days ago",
    status: "Seasonal monitoring, wet season protocols",
    trendData: [38, 39, 40, 40, 41, 41, 41, 41, 41],
  },
];

const continents = ["All", "Oceania", "South America", "North America", "Africa", "Asia"];
const riskLevels = ["All", "critical", "high", "medium", "low"];

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

function DarkBasemap() {
  const map = useMap();

  useEffect(() => {
    const layer = maplibreGL({
      style: "https://tiles.openfreemap.org/styles/dark",
    });
    layer.addTo(map);
    return () => {
      map.removeLayer(layer);
    };
  }, [map]);

  return null;
}

function MapController({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, { duration: 1.5 });
  }, [map, center, zoom]);
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
            <h4 className="font-semibold text-foreground">{site.name}</h4>
            <p className="text-xs text-muted-foreground">{site.operator} • {site.country}</p>
            <p className="text-[10px] text-muted-foreground/70 mt-0.5">{site.continent}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-dark-border rounded transition-colors"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>
      
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground/70">RISK SCORE</p>
            <div className="flex items-baseline gap-2">
              <span 
                className="text-3xl font-bold"
                style={{ color: riskColors.fill }}
              >
                {site.riskScore}
              </span>
              <span className="text-sm text-muted-foreground">/ 100</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium uppercase ${getRiskBadgeClass(site.riskLevel)}`}>
                {site.riskLevel}
              </span>
            </div>
          </div>
        </div>
        
        {site.trendData && (
          <div>
            <p className="text-xs text-muted-foreground/70 mb-1">12-WEEK TREND</p>
            <MiniTrendChart data={site.trendData} />
          </div>
        )}
        
        {site.alerts && site.alerts.length > 0 && (
          <div>
            <p className="text-xs text-muted-foreground/70 mb-2">KEY ALERTS</p>
            <div className="space-y-1.5">
              {site.alerts.map((alert, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <AlertTriangle className="w-3 h-3 text-alert-orange shrink-0" />
                  <span className="text-foreground/80">{alert}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="pt-2 border-t border-dark-border">
          <p className="text-xs text-muted-foreground">{site.status}</p>
          <p className="text-[10px] text-muted-foreground/60 mt-1">Updated {site.lastUpdated}</p>
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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [selectedRiskLevel, setSelectedRiskLevel] = useState("All");
  const [mapCenter, setMapCenter] = useState<[number, number]>([20, 30]);
  const [mapZoom, setMapZoom] = useState(2);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Filter sites based on search and filters
  const filteredSites = mineSites.filter(site => {
    const matchesSearch = searchQuery === "" || 
      site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      site.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      site.operator.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesContinent = selectedContinent === "All" || site.continent === selectedContinent;
    const matchesRisk = selectedRiskLevel === "All" || site.riskLevel === selectedRiskLevel;
    
    return matchesSearch && matchesContinent && matchesRisk;
  });

  // Calculate stats from filtered sites
  const stats = {
    total: filteredSites.length,
    critical: filteredSites.filter(s => s.riskLevel === "critical").length,
    high: filteredSites.filter(s => s.riskLevel === "high").length,
    medium: filteredSites.filter(s => s.riskLevel === "medium").length,
    low: filteredSites.filter(s => s.riskLevel === "low").length,
  };

  // Zoom to continent when selected
  const handleContinentChange = (continent: string) => {
    setSelectedContinent(continent);
    
    const continentCenters: Record<string, { center: [number, number]; zoom: number }> = {
      "All": { center: [20, 30], zoom: 2 },
      "Oceania": { center: [-25, 135], zoom: 4 },
      "South America": { center: [-15, -60], zoom: 3 },
      "North America": { center: 45, zoom: 3 } as any,
      "Africa": { center: [-5, 25], zoom: 3 },
      "Asia": { center: 30, zoom: 3 } as any,
    };
    
    // Fix the type issues
    if (continent === "North America") {
      setMapCenter([45, -100]);
      setMapZoom(3);
    } else if (continent === "Asia") {
      setMapCenter([30, 100]);
      setMapZoom(3);
    } else {
      const config = continentCenters[continent];
      if (config) {
        setMapCenter(config.center);
        setMapZoom(config.zoom);
      }
    }
  };

  // Focus on a specific site
  const handleSiteFocus = (site: MineSite) => {
    setMapCenter([site.lat, site.lng]);
    setMapZoom(6);
    setSelectedSite(site);
  };

  return (
    <div className="bg-dark-bg rounded-xl overflow-hidden relative">
      {/* Search and Filter bar */}
      <div className="bg-dark-card/80 backdrop-blur-sm border-b border-dark-border px-4 py-3">
        <div className="flex flex-col gap-3">
          {/* Top row: Live indicator + Search */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-alert-green animate-pulse" />
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Live Portfolio</span>
            </div>
            
            <div className="flex items-center gap-2">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search mines..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 text-xs bg-dark-bg border border-dark-border rounded-lg w-40 md:w-52 focus:outline-none focus:border-primary/50 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              
              {/* Filter toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`p-1.5 rounded-lg border transition-colors ${
                  showFilters ? 'bg-primary/10 border-primary/50 text-primary' : 'border-dark-border text-muted-foreground hover:border-primary/30'
                }`}
              >
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Filter row (collapsible) */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-dark-border">
                  {/* Continent filter */}
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-muted-foreground uppercase">Region:</span>
                    <div className="flex flex-wrap gap-1">
                      {continents.map(continent => (
                        <button
                          key={continent}
                          onClick={() => handleContinentChange(continent)}
                          className={`px-2 py-1 text-[10px] rounded-md transition-colors ${
                            selectedContinent === continent
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-dark-bg text-muted-foreground hover:bg-dark-border'
                          }`}
                        >
                          {continent}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Risk level filter */}
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-muted-foreground uppercase">Risk:</span>
                    <div className="flex gap-1">
                      {riskLevels.map(level => (
                        <button
                          key={level}
                          onClick={() => setSelectedRiskLevel(level)}
                          className={`px-2 py-1 text-[10px] rounded-md transition-colors capitalize ${
                            selectedRiskLevel === level
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-dark-bg text-muted-foreground hover:bg-dark-border'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stats row */}
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-muted-foreground" />
              <span className="text-muted-foreground">Showing:</span>
              <span className="font-semibold text-foreground">{filteredSites.length} sites</span>
              {filteredSites.length !== mineSites.length && (
                <span className="text-muted-foreground/60">of {mineSites.length}</span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {stats.critical > 0 && (
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-alert-red animate-pulse" />
                  <span className="text-alert-red font-medium">{stats.critical} Critical</span>
                </div>
              )}
              {stats.high > 0 && (
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[hsl(25,95%,53%)]" />
                  <span className="text-[hsl(25,95%,53%)] font-medium">{stats.high} High</span>
                </div>
              )}
              {stats.medium > 0 && (
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-alert-orange" />
                  <span className="text-alert-orange font-medium">{stats.medium} Medium</span>
                </div>
              )}
              {stats.low > 0 && (
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-alert-green" />
                  <span className="text-alert-green font-medium">{stats.low} Low</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map container */}
      <div className="h-[450px] relative">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-dark-bg">
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">Loading {mineSites.length} mining sites...</p>
            </div>
          </div>
        ) : (
          <MapContainer
            center={mapCenter}
            zoom={mapZoom}
            scrollWheelZoom={true}
            className="h-full w-full"
            style={{ background: "hsl(222, 47%, 11%)" }}
          >
            <MapController center={mapCenter} zoom={mapZoom} />
            <DarkBasemap />
            {filteredSites.map((site) => {
              const colors = getRiskColor(site.riskLevel);
              const isHovered = hoveredSite === site.id;
              const isSelected = selectedSite?.id === site.id;
              const isPulsing = site.riskLevel === "critical" || site.riskLevel === "high";
              
              return (
                <CircleMarker
                  key={site.id}
                  center={[site.lat, site.lng]}
                  radius={isHovered || isSelected ? 14 : isPulsing ? 10 : 8}
                  pathOptions={{
                    fillColor: colors.fill,
                    fillOpacity: isHovered || isSelected ? 1 : 0.85,
                    color: isSelected ? "hsl(var(--primary))" : colors.stroke,
                    weight: isSelected ? 3 : 2,
                  }}
                  eventHandlers={{
                    click: () => handleSiteFocus(site),
                    mouseover: () => setHoveredSite(site.id),
                    mouseout: () => setHoveredSite(null),
                  }}
                >
                  <Popup className="mine-popup">
                    <div className="text-xs p-1">
                      <p className="font-semibold text-foreground">{site.name}</p>
                      <p className="text-muted-foreground">{site.country} • {site.continent}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span 
                          className="font-bold"
                          style={{ color: colors.fill }}
                        >
                          Risk: {site.riskScore}/100
                        </span>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium uppercase ${getRiskBadgeClass(site.riskLevel)}`}>
                          {site.riskLevel}
                        </span>
                      </div>
                      <p className="text-muted-foreground/70 mt-1">Updated {site.lastUpdated}</p>
                      <p className="text-foreground/80 mt-1 leading-snug">{site.status}</p>
                      <button 
                        className="mt-2 text-primary text-[10px] font-medium hover:underline"
                        onClick={() => handleSiteFocus(site)}
                      >
                        View details →
                      </button>
                    </div>
                  </Popup>
                </CircleMarker>
              );
            })}
          </MapContainer>
        )}

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-dark-card/95 backdrop-blur-sm border border-dark-border rounded-lg p-3 z-[500]">
          <p className="text-[10px] font-semibold text-muted-foreground uppercase mb-2 tracking-wider">Risk Level</p>
          <div className="space-y-1.5">
            {[
              { level: "Critical", color: "bg-alert-red", desc: "Immediate action" },
              { level: "High", color: "bg-[hsl(25,95%,53%)]", desc: "Act within 14 days" },
              { level: "Medium", color: "bg-alert-yellow", desc: "Monitor closely" },
              { level: "Low", color: "bg-alert-green", desc: "Routine monitoring" },
            ].map((item) => (
              <div key={item.level} className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full ${item.color} ${item.level === "Critical" ? "animate-pulse" : ""}`} />
                <span className="text-[10px] text-foreground/80">{item.level}</span>
                <span className="text-[9px] text-muted-foreground hidden md:inline">– {item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick site list (right side) */}
        <div className="absolute top-4 right-4 w-48 max-h-[200px] overflow-y-auto bg-dark-card/95 backdrop-blur-sm border border-dark-border rounded-lg z-[500] hidden lg:block">
          <p className="text-[10px] font-semibold text-muted-foreground uppercase p-2 border-b border-dark-border sticky top-0 bg-dark-card/95">
            Quick Access
          </p>
          <div className="p-1">
            {filteredSites.slice(0, 8).map((site) => {
              const colors = getRiskColor(site.riskLevel);
              return (
                <button
                  key={site.id}
                  onClick={() => handleSiteFocus(site)}
                  className="w-full flex items-center gap-2 px-2 py-1.5 text-left hover:bg-dark-border/50 rounded transition-colors"
                >
                  <div 
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: colors.fill }}
                  />
                  <span className="text-[10px] text-foreground/80 truncate">{site.name}</span>
                </button>
              );
            })}
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
