
"use client";

import { useEffect, useState } from "react";

const statsData = [
  { title: "Projects Completed", endValue: 120, suffix: "+" },
  { title: "Years Experience", endValue: 10, suffix: "+" },
  { title: "Happy Clients", endValue: 85, suffix: "+" },
  { title: "24/7 Support", endValue: 24, suffix: "Hrs" },
];

export default function Stats() {
  return (
    <section className="bg-[#d4a017] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {statsData.map((stat, idx) => (
          <StatCard key={idx} {...stat} index={idx} />
        ))}
      </div>
    </section>
  );
}

function StatCard({
  title,
  endValue,
  suffix,
  index,
}: {
  title: string;
  endValue: number;
  suffix: string;
  index: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * endValue);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [endValue]);

  return (
    <div className="stat-card relative p-4 md:p-6 bg-transparent text-white cursor-pointer">
      <div className="inline-block">
        <h3 className="stat-number text-4xl md:text-5xl font-bold text-white">
          {count}
          {suffix}
        </h3>
        <p className="mt-2 text-lg font-medium text-white">{title}</p>
      </div>
    </div>
  );
}
