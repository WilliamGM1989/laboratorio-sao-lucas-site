"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 45, prefix: "+", suffix: "", label: "Anos de atuação" },
  { value: 100, prefix: "", suffix: "%", label: "Qualidade PNCQ" },
  { value: 2, prefix: "", suffix: "", label: "Pontos de coleta", extra: "+ domiciliar" },
  { value: 1, prefix: "+", suffix: "M", label: "Exames realizados" },
];

type Stat = (typeof stats)[number] & { extra?: string };

function StatItem({ value, prefix, suffix, label, extra, visible }: Stat & { visible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(value / (2000 / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value, visible]);

  return (
    <div className="text-center">
      <p className="text-5xl font-bold text-[#0B1B35] lg:text-6xl">
        {prefix}{count}{suffix}
        {extra && <span className="ml-2 align-middle text-base font-medium text-primary-600 lg:text-lg">{extra}</span>}
      </p>
      <p className="mt-2 text-sm text-neutral-500">{label}</p>
    </div>
  );
}

export function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-8 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatItem key={stat.label} {...stat} visible={visible} />
      ))}
    </div>
  );
}
