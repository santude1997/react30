import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  return (
    <>
      <h1>Timer Example</h1>

      <p>Time left {time} seconds.</p>
    </>
  );
};

export default Timer;
