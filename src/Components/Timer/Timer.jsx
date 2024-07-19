import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {

    let interval = null;


    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);

    } else {
      clearInterval(interval);
    }
   
    return () => clearInterval(interval);
  }, [isActive]);



  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div>
      <h1>Temporizador</h1>
      <p>Segundos transcurridos: {seconds}</p>
      <div>
        <button onClick={handleStart}>Iniciar</button>
        <button onClick={handlePause}>Pausar</button>
        <button onClick={handleReset}>Resetear</button>
      </div>
    </div>
  );
};

export default Timer;
