
import React, { ReactNode } from 'react';

interface StatItemProps {
  value: ReactNode;
  label: string;
  delay?: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, delay = 'delay-100' }) => {
  return (
    <div className={`stat-item animate-fade-in opacity-0 ${delay} transition-transform duration-300 hover:scale-105`}>
      <div className="stat-number">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default StatItem;
