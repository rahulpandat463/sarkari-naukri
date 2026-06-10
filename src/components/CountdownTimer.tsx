"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const [day, month, year] = targetDate.split("/");
    const target = new Date(parseInt(year), parseInt(month) - 1, parseInt(day)).getTime();

    const update = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const totalDays = Math.floor(
    (new Date(parseInt(targetDate.split("/")[2]), parseInt(targetDate.split("/")[1]) - 1, parseInt(targetDate.split("/")[0])).getTime() -
      new Date().getTime()) /
      (1000 * 60 * 60 * 24)
  );

  if (totalDays <= 0) {
    return <span className="text-red-600 font-semibold text-sm">समय समाप्त / Expired</span>;
  }

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-1 text-center">
        <div className="bg-red-600 text-white px-2 py-1 rounded min-w-[40px]">
          <span className="font-bold text-lg">{String(timeLeft.days).padStart(2, "0")}</span>
          <span className="block text-[10px]">Days</span>
        </div>
        <span className="font-bold text-xl text-gray-400">:</span>
        <div className="bg-red-600 text-white px-2 py-1 rounded min-w-[40px]">
          <span className="font-bold text-lg">{String(timeLeft.hours).padStart(2, "0")}</span>
          <span className="block text-[10px]">Hrs</span>
        </div>
        <span className="font-bold text-xl text-gray-400">:</span>
        <div className="bg-red-600 text-white px-2 py-1 rounded min-w-[40px]">
          <span className="font-bold text-lg">{String(timeLeft.minutes).padStart(2, "0")}</span>
          <span className="block text-[10px]">Min</span>
        </div>
        <span className="font-bold text-xl text-gray-400">:</span>
        <div className="bg-red-600 text-white px-2 py-1 rounded min-w-[40px]">
          <span className="font-bold text-lg">{String(timeLeft.seconds).padStart(2, "0")}</span>
          <span className="block text-[10px]">Sec</span>
        </div>
      </div>
    </div>
  );
}
