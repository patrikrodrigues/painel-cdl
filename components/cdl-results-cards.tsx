"use client";

import { TrendingUp, Users, DollarSign, MapPin, ArrowUpRight } from "lucide-react";

const cdlResults = [
  {
    name: "CDL Região Oeste",
    location: "Santa Catarina",
    metric: "R$ 4,2M",
    metricLabel: "recuperados em 2024",
    icon: DollarSign,
    change: "+234%",
    changeLabel: "vs ano anterior",
    color: "from-primary to-secondary",
    glowColor: "rgba(124, 58, 237, 0.3)",
  },
  {
    name: "CDL Cidade Alta",
    location: "Rio de Janeiro",
    metric: "84%",
    metricLabel: "satisfação dos lojistas",
    icon: Users,
    change: "+12%",
    changeLabel: "vs média nacional",
    color: "from-secondary to-cyan-500",
    glowColor: "rgba(37, 99, 235, 0.3)",
  },
  {
    name: "CDL Região dos Lagos",
    location: "Minas Gerais",
    metric: "-62%",
    metricLabel: "custos operacionais",
    icon: TrendingUp,
    change: "R$ 380k",
    changeLabel: "economia anual",
    color: "from-accent to-emerald-400",
    glowColor: "rgba(34, 197, 94, 0.3)",
  },
];

export function CDLResultsCards() {
  return (
    <section className="px-6 mb-12" id="cdls">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1">
            Resultados reais de CDLs
          </h3>
          <p className="text-sm text-muted-foreground">
            Dados atualizados em tempo real
          </p>
        </div>
        <a 
          href="#todos"
          className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
        >
          Ver todos
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cdlResults.map((cdl, index) => {
          const Icon = cdl.icon;
          return (
            <div
              key={index}
              className="glass-card glass-card-hover p-6 group relative overflow-hidden"
              style={{ 
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Gradient background on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${cdl.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
              
              {/* Header */}
              <div className="flex items-start justify-between mb-6 relative">
                <div>
                  <h4 className="font-bold text-foreground mb-1">{cdl.name}</h4>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <MapPin className="w-3 h-3" />
                    {cdl.location}
                  </div>
                </div>
                <div 
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cdl.color} flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}
                  style={{ boxShadow: `0 8px 32px ${cdl.glowColor}` }}
                >
                  <Icon className="w-5 h-5 text-foreground" />
                </div>
              </div>

              {/* Metric */}
              <div className="mb-4 relative">
                <div className={`text-3xl font-bold bg-gradient-to-r ${cdl.color} bg-clip-text text-transparent`}>
                  {cdl.metric}
                </div>
                <div className="text-sm text-muted-foreground">
                  {cdl.metricLabel}
                </div>
              </div>

              {/* Change indicator */}
              <div className="flex items-center gap-2 pt-4 border-t border-border relative">
                <div className="flex items-center gap-1 text-accent text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  {cdl.change}
                </div>
                <span className="text-muted-foreground text-sm">
                  {cdl.changeLabel}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
