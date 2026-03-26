"use client";

import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "O agente de IA revolucionou nossa forma de trabalhar. Recuperamos R$ 2,3 milhões em apenas 6 meses, algo que levaria anos no modelo tradicional.",
    author: "Carlos Eduardo Silva",
    role: "Presidente da CDL Região Oeste",
    rating: 5,
    image: "/testimonial-1.jpg",
  },
  {
    quote: "A redução de custos foi impressionante. Conseguimos cortar 62% dos gastos operacionais mantendo a qualidade do atendimento aos lojistas.",
    author: "Maria Fernanda Santos",
    role: "Diretora Financeira CDL Cidade Alta",
    rating: 5,
    image: "/testimonial-2.jpg",
  },
  {
    quote: "Nossos lojistas nunca estiveram tão satisfeitos. O índice de reclamações caiu drasticamente e a taxa de recuperação aumentou significativamente.",
    author: "Roberto Mendes Junior",
    role: "Gerente de Operações CDL Lagos",
    rating: 5,
    image: "/testimonial-3.jpg",
  },
];

export function Testimonials() {
  return (
    <section className="px-6 mb-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          O que nossos parceiros dizem
        </h3>
        <p className="text-muted-foreground">
          Depoimentos de quem já transformou sua CDL
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="glass-card glass-card-hover p-6 relative group"
          >
            {/* Quote icon */}
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg">
              <Quote className="w-4 h-4 text-foreground" />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-4 pt-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {`"${testimonial.quote}"`}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-foreground font-bold text-sm">
                {testimonial.author.split(' ').map(n => n[0]).slice(0, 2).join('')}
              </div>
              <div>
                <div className="font-semibold text-foreground text-sm">
                  {testimonial.author}
                </div>
                <div className="text-muted-foreground text-xs">
                  {testimonial.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
