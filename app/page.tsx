"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { HeroBanner } from "@/components/hero-banner";
import { CDLResultsCards } from "@/components/cdl-results-cards";
import { ComparisonTable } from "@/components/comparison-table";
import { Testimonials } from "@/components/testimonials";
import { ChartsSection } from "@/components/stats-chart";
import { CTASection } from "@/components/cta-section";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Dashboard() {
  const [requestCount, setRequestCount] = useState(347);

  // Simulated live counter
  useEffect(() => {
    const interval = setInterval(() => {
      setRequestCount((prev) => {
        // Random increment between 0-2 every few seconds to simulate live activity
        const increment = Math.random() > 0.7 ? Math.floor(Math.random() * 3) : 0;
        return prev + increment;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="lg:pl-64 transition-all duration-300">
        {/* Header */}
        <Header requestCount={requestCount} />

        {/* Content */}
        <div className="max-w-6xl mx-auto py-8">
          {/* Hero Banner */}
          <HeroBanner />

          {/* CDL Results Cards */}
          <CDLResultsCards />

          {/* Charts Section */}
          <ChartsSection />

          {/* Comparison Table */}
          <ComparisonTable />

          {/* Testimonials */}
          <Testimonials />

          {/* CTA Section */}
          <CTASection />

          {/* Footer */}
          <footer className="px-6 py-8 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              2025 Agente de Cobrança CDL. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground/50 text-xs mt-2">
              Desenvolvido com tecnologia de ponta em Inteligência Artificial
            </p>
          </footer>
        </div>
      </main>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
