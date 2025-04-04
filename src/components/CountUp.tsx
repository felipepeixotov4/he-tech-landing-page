
import React, { useState, useEffect } from 'react';

interface CountUpProps {
  start?: number;
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  start = 0,
  end,
  duration = 2000,
  prefix = '',
  suffix = ''
}) => {
  const [count, setCount] = useState(start);
  
  useEffect(() => {
    if (start === end) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * (end - start) + start);
      
      setCount(currentCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [start, end, duration]);
  
  return (
    <span className="font-bold">
      {prefix}{count}{suffix}
    </span>
  );
};
