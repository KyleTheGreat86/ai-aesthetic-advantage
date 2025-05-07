
import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

export const CountdownTimer = ({ targetDate, className = '' }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        return {
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
      
      // Calculate time units
      const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 30);
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      
      return { months, days, hours, minutes, seconds };
    };
    
    // Update the count down every 1 second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    // Initial calculation
    setTimeLeft(calculateTimeLeft());
    
    // Clear timeout if the component is unmounted
    return () => clearInterval(timer);
  }, [targetDate]);
  
  return (
    <div className={`flex gap-2 ${className}`}>
      {timeLeft.months > 0 && (
        <span className="countdown-unit">
          <span className="font-bold">{timeLeft.months}</span> {timeLeft.months === 1 ? 'month' : 'months'}
        </span>
      )}
      <span className="countdown-unit">
        <span className="font-bold">{timeLeft.days}</span> {timeLeft.days === 1 ? 'day' : 'days'}
      </span>
      <span className="countdown-unit">
        <span className="font-bold">{timeLeft.hours}</span> {timeLeft.hours === 1 ? 'hr' : 'hrs'}
      </span>
      <span className="countdown-unit">
        <span className="font-bold">{timeLeft.minutes}</span> {timeLeft.minutes === 1 ? 'min' : 'mins'}
      </span>
    </div>
  );
};
