"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "5500000000000"; // Placeholder - substituir pelo número real
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o Agente de Cobrança com IA para minha CDL.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Falar pelo WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-25" />
      
      {/* Button */}
      <div className="relative flex items-center gap-3 px-5 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-2xl glow-accent transition-all duration-300 hover:scale-105">
        <MessageCircle className="w-6 h-6" />
        <span className="font-semibold pr-1 hidden sm:inline">
          Falar com especialista
        </span>
      </div>

      {/* Tooltip on mobile */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-background border border-border rounded-lg text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg sm:hidden">
        Falar pelo WhatsApp
      </div>
    </a>
  );
}
