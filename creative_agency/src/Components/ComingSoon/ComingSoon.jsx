import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date().getTime() + 15 * 24 * 60 * 60 * 1000;
    const difference = targetDate - new Date().getTime();

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
        days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 7),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      if (
        updatedTimeLeft.weeks === 0 &&
        updatedTimeLeft.days === 0 &&
        updatedTimeLeft.hours === 0 &&
        updatedTimeLeft.minutes === 0 &&
        updatedTimeLeft.seconds === 0
      ) {
        clearInterval(timer); 
      }
      setTimeLeft(updatedTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center text-white p-8">
      <div className="text-center w-full">
        <div className="bg-gray-300 w-full h-[400px] mx-auto rounded-lg flex items-center justify-center">
          <div className="flex gap-10 text-4xl font-bold">
            <div>
              <span>{String(timeLeft.weeks).padStart(2, '0')}</span>
              <p className="text-sm text-gray-500">WEEKS</p>
            </div>
            <div>
              <span>{String(timeLeft.days).padStart(2, '0')}</span>
              <p className="text-sm text-gray-500">DAYS</p>
            </div>
            <div>
              <span>{String(timeLeft.hours).padStart(2, '0')}</span>
              <p className="text-sm text-gray-500">HOURS</p>
            </div>
            <div>
              <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
              <p className="text-sm text-gray-500">MINUTES</p>
            </div>
            <div>
              <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
              <p className="text-sm text-gray-500">SECOND</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
