
import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface SolutionItemProps {
  text: string;
  className?: string;
  delay?: string;
}

const SolutionItem: React.FC<SolutionItemProps> = ({
  text,
  className,
  delay = 'delay-100'
}) => {
  return (
    <div className={cn(
      "flex items-start space-x-3 animate-slide-in-left opacity-0",
      delay,
      className
    )}>
      <div className="flex-shrink-0 mt-1 text-[#0d45a6]">
        <Check size={20} className="stroke-[2.5]" />
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
};

export default SolutionItem;
