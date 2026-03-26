"use client";

import { Phone, ArrowRight } from "lucide-react";

interface HeaderProps {
  requestCount: number;
}

export function Header({ requestCount }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 glass-card border-b border-border">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Title */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-foreground">
              Agente de Cobrança da CDL
            </h1>
            <p className="text-sm text-muted-foreground">
              Inteligência Artificial para Recuperação de Crédito
            </p>
          </div>
          <h1 className="sm:hidden text-lg font-bold text-foreground">
            CDL IA
          </h1>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Live counter */}
          <div className="hidden md:flex items-center gap-2 px-4 py-2 glass-card">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground counter-animate">{requestCount}</span> solicitações
            </span>
          </div>

          {/* CTA Button */}
          <a
            href="#contato"
            className="group flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl transition-all duration-200 shadow-lg glow-accent hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Quero isso na MINHA CDL</span>
            <span className="sm:hidden">Quero</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </header>
  );
}
