import React, { useState, useEffect } from "react";
const StopWatch = () => {
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1); 
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const start = () => setRunning(true);

  const stop = () => {
    setRunning(false);
    setTimer(0);
  };

  return (
    <div>
      <h2>StopWatch</h2>
      <h2>{timer}s</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
};

export default StopWatch;