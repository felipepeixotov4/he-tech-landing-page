
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className,
  delay = 'delay-100'
}) => {
  return (
    <div className={cn(
      "feature-card animate-scale-in opacity-0",
      delay,
      className
    )}>
      <div className="text-[#0d45a6] mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
