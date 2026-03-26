"use client";

import { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export function RecoveryChart() {
  const barData = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [
      {
        label: "Com IA",
        data: [65, 78, 82, 89, 91, 94],
        backgroundColor: "rgba(124, 58, 237, 0.8)",
        borderColor: "rgba(124, 58, 237, 1)",
        borderWidth: 1,
        borderRadius: 6,
      },
      {
        label: "Tradicional",
        data: [30, 32, 35, 33, 34, 36],
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 1,
        borderRadius: 6,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "rgba(255, 255, 255, 0.7)",
          font: { size: 12 },
          padding: 20,
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.05)",
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.5)",
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.05)",
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.5)",
          callback: function(value: number | string) {
            return value + "%";
          },
        },
        max: 100,
      },
    },
  };

  return (
    <div className="glass-card p-6">
      <h4 className="text-lg font-bold text-foreground mb-4">
        Taxa de Recuperação Mensal
      </h4>
      <div className="h-64">
        <Bar data={barData} options={barOptions} />
      </div>
    </div>
  );
}

export function SatisfactionChart() {
  const doughnutData = {
    labels: ["Muito Satisfeito", "Satisfeito", "Neutro", "Insatisfeito"],
    datasets: [
      {
        data: [67, 27, 4, 2],
        backgroundColor: [
          "rgba(124, 58, 237, 0.9)",
          "rgba(37, 99, 235, 0.9)",
          "rgba(255, 255, 255, 0.2)",
          "rgba(239, 68, 68, 0.7)",
        ],
        borderColor: [
          "rgba(124, 58, 237, 1)",
          "rgba(37, 99, 235, 1)",
          "rgba(255, 255, 255, 0.3)",
          "rgba(239, 68, 68, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          color: "rgba(255, 255, 255, 0.7)",
          font: { size: 11 },
          padding: 15,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    cutout: "65%",
  };

  return (
    <div className="glass-card p-6">
      <h4 className="text-lg font-bold text-foreground mb-4">
        Satisfação dos Lojistas
      </h4>
      <div className="h-64 flex items-center justify-center">
        <Doughnut data={doughnutData} options={doughnutOptions} />
      </div>
    </div>
  );
}

export function ChartsSection() {
  return (
    <section className="px-6 mb-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Métricas em tempo real
        </h3>
        <p className="text-muted-foreground">
          Acompanhe os resultados das CDLs parceiras
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecoveryChart />
        <SatisfactionChart />
      </div>
    </section>
  );
}
