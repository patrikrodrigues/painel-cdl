"use client";

import { ArrowRight, Sparkles, Shield, Clock } from "lucide-react";

const benefits = [
  { icon: Sparkles, text: "Implementação em 7 dias" },
  { icon: Shield, text: "Suporte dedicado" },
  { icon: Clock, text: "ROI em 30 dias" },
];

export function CTASection() {
  return (
    <section className="px-6 mb-24" id="contato">
      <div className="glass-card relative overflow-hidden p-8 lg:p-12">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 pointer-events-none" />
        
        {/* Glow effects */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/30 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm text-muted-foreground">
              Vagas limitadas para novas CDLs
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">
            Transforme sua CDL com{" "}
            <span className="gradient-text">Inteligência Artificial</span>
          </h3>

          {/* Description */}
          <p className="text-muted-foreground mb-8 text-lg">
            Junte-se a mais de 50 CDLs que já revolucionaram sua forma de fazer cobrança. 
            Resultados comprovados, implementação simples.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 glass-card"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">{benefit.text}</span>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary hover:opacity-90 text-foreground font-bold rounded-xl transition-all duration-300 shadow-2xl glow-primary hover:scale-105"
          >
            <span>Quero transformar minha CDL</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Trust text */}
          <p className="mt-6 text-sm text-muted-foreground">
            Sem compromisso. Análise gratuita para sua CDL.
          </p>
        </div>
      </div>
    </section>
  );
}
