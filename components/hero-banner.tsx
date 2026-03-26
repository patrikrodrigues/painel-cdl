"use client";

import { TrendingUp, Users, DollarSign } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "94%",
    label: "lojistas satisfeitos",
    color: "text-primary",
  },
  {
    icon: DollarSign,
    value: "-62%",
    label: "redução de custos",
    color: "text-accent",
  },
  {
    icon: TrendingUp,
    value: "+147%",
    label: "taxa de recuperação",
    color: "text-secondary",
  },
];

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden py-12 px-6 mb-8">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-sm text-muted-foreground">
            Tecnologia exclusiva para CDLs
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
          <span className="text-foreground">CDLs que já </span>
          <span className="gradient-text">saíram na frente</span>
          <span className="text-foreground"> com IA</span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          Descubra como câmaras de dirigentes lojistas de todo o Brasil estão revolucionando 
          a recuperação de crédito com inteligência artificial
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in-up animation-delay-300">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass-card glass-card-hover p-6 group"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-muted mb-4 group-hover:scale-110 transition-transform ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className={`text-3xl font-bold mb-1 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
