"use client";

import { Check, X, Sparkles, Building } from "lucide-react";

const comparisonData = [
  {
    metric: "Taxa de recuperação",
    aiValue: "89%",
    traditionalValue: "34%",
    aiWins: true,
  },
  {
    metric: "Custo operacional",
    aiValue: "R$ 2,40/contato",
    traditionalValue: "R$ 8,50/contato",
    aiWins: true,
  },
  {
    metric: "Reclamações de clientes",
    aiValue: "0,3%",
    traditionalValue: "4,7%",
    aiWins: true,
  },
  {
    metric: "Satisfação do lojista",
    aiValue: "94%",
    traditionalValue: "61%",
    aiWins: true,
  },
  {
    metric: "Atendimento 24/7",
    aiValue: "Sim",
    traditionalValue: "Não",
    aiWins: true,
    isBoolean: true,
  },
  {
    metric: "Personalização de abordagem",
    aiValue: "Automática",
    traditionalValue: "Manual",
    aiWins: true,
  },
];

export function ComparisonTable() {
  return (
    <section className="px-6 mb-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          CDL com IA <span className="text-muted-foreground">vs</span> CDL Tradicional
        </h3>
        <p className="text-muted-foreground">
          Compare os resultados e veja a diferença
        </p>
      </div>

      <div className="glass-card overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-3 gap-4 p-4 border-b border-border bg-muted/30">
          <div className="text-sm font-medium text-muted-foreground">
            Métrica
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-primary rounded-lg">
              <Sparkles className="w-4 h-4 text-foreground" />
              <span className="text-sm font-semibold text-foreground">CDL com IA</span>
            </div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted rounded-lg">
              <Building className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Tradicional</span>
            </div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-border">
          {comparisonData.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-4 p-4 hover:bg-muted/20 transition-colors"
            >
              <div className="text-sm text-foreground font-medium flex items-center">
                {row.metric}
              </div>
              <div className="text-center">
                <span className="inline-flex items-center gap-2">
                  {row.isBoolean ? (
                    <Check className="w-5 h-5 text-accent" />
                  ) : null}
                  <span className="text-sm font-semibold text-accent">
                    {row.aiValue}
                  </span>
                </span>
              </div>
              <div className="text-center">
                <span className="inline-flex items-center gap-2">
                  {row.isBoolean ? (
                    <X className="w-5 h-5 text-red-400" />
                  ) : null}
                  <span className="text-sm text-muted-foreground">
                    {row.traditionalValue}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Table Footer */}
        <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-border">
          <div className="flex items-center justify-center gap-2 text-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">
              Em média, CDLs com IA têm 
              <span className="font-bold text-foreground mx-1">2.6x</span>
              mais resultados
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
