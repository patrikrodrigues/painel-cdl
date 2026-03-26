"use client";

import { useState } from "react";
import { 
  Building2, 
  LayoutDashboard, 
  UserCircle, 
  ChevronLeft,
  Sparkles,
  Menu
} from "lucide-react";

const navItems = [
  { icon: Building2, label: "CDLs que aderiram", href: "#cdls" },
  { icon: LayoutDashboard, label: "Meu Painel", href: "#painel" },
  { icon: UserCircle, label: "Perfil do Cliente", href: "#perfil" },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("CDLs que aderiram");

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 glass-card lg:hidden"
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-label="Toggle menu"
      >
        <Menu className="w-5 h-5 text-foreground" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full z-40 glass-card transition-all duration-300 ease-out flex flex-col
          ${isCollapsed ? "-translate-x-full lg:translate-x-0 lg:w-20" : "translate-x-0 w-64"}
        `}
      >
        {/* Logo */}
        <div className={`flex items-center gap-3 p-6 border-b border-border ${isCollapsed ? "lg:justify-center" : ""}`}>
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-foreground" />
          </div>
          {!isCollapsed && (
            <div className="overflow-hidden">
              <h1 className="font-bold text-foreground text-lg leading-tight">CDL</h1>
              <p className="text-muted-foreground text-xs">Agente IA</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.label;
            
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                  ${isActive 
                    ? "bg-gradient-primary text-foreground shadow-lg glow-primary" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }
                  ${isCollapsed ? "lg:justify-center lg:px-3" : ""}
                `}
              >
                <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "" : "group-hover:text-primary"}`} />
                {!isCollapsed && (
                  <span className="font-medium text-sm truncate">{item.label}</span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Collapse button - desktop only */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:flex items-center justify-center p-4 border-t border-border text-muted-foreground hover:text-foreground transition-colors"
          aria-label={isCollapsed ? "Expandir menu" : "Recolher menu"}
        >
          <ChevronLeft className={`w-5 h-5 transition-transform duration-300 ${isCollapsed ? "rotate-180" : ""}`} />
        </button>
      </aside>

      {/* Mobile overlay */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsCollapsed(true)}
        />
      )}
    </>
  );
}
